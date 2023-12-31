import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../redux/ActionCreators";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DishDetail from "./DishDetail";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comments);
  const dishes = useSelector((state) => state.dishes);
  const leaders = useSelector((state) => state.leaders);
  const promotions = useSelector((state) => state.promotions);

  const HomePage = () => (
    <Home
      dish={dishes.filter((dish) => dish.featured)[0]}
      promotion={promotions.filter((promotion) => promotion.featured)[0]}
      leader={leaders.filter((leader) => leader.featured)[0]}
    />
  );

  const AboutUsPage = () => <About leaders={leaders} />;

  const DishWithId = ({ match }) => (
    <DishDetail
      dish={
        dishes.filter(
          (dish) => dish.id === parseInt(match.params.dishId, 10)
        )[0]
      }
      comments={comments.filter(
        (comment) => comment.dishId === parseInt(match.params.dishId, 10)
      )}
      addComment={(dishId, rating, author, comment) =>
        dispatch(addComment(dishId, rating, author, comment))
      }
    />
  );

  return (
    <div>
      <Header />

      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" render={() => <Menu dishes={dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/aboutus" component={AboutUsPage} />
        <Redirect to="/home" />
      </Switch>

      <Footer />
    </div>
  );
};

export default withRouter(Main);
