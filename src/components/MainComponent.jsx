import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
} from "../redux/ActionCreators";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DishDetail from "./DishDetail";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

const Main = (props) => {
  const dispatch = useDispatch();
  const { dishes, comments, leaders, promotions } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(fetchDishes());
    dispatch(fetchComments());
    dispatch(fetchPromos());
  }, [dispatch]);
  const HomePage = () => (
    <Home
      dish={dishes.dishes.filter((dish) => dish.featured)[0]}
      dishesLoading={dishes.isLoading}
      dishesErrMess={dishes.errMess}
      promotion={promotions.promotions.filter((promo) => promo.featured)[0]}
      promoLoading={promotions.isLoading}
      promoErrMess={promotions.errMess}
      leader={leaders.filter((leader) => leader.featured)[0]}
    />
  );

  const AboutUsPage = () => <About leaders={leaders} />;

  const DishWithId = ({ match }) => (
    <DishDetail
      isLoading={dishes.isLoading}
      errMess={dishes.errMess}
      dish={
        dishes.dishes.filter(
          (dish) => dish.id === parseInt(match.params.dishId, 10)
        )[0]
      }
      comments={comments.comments.filter(
        (comment) => comment.dishId === parseInt(match.params.dishId, 10)
      )}
      commentsErrMess={comments.errMess}
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
