import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetail";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";
import Contact from "./contactComponent";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotion";
import { LEADERS } from "../shared/leader";
import About from "./AboutComponent";

function Main() {
  const [dishes, setDishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [leaders, setLeaders] = useState(LEADERS);

  const HomePage = () => {
    return (
      <HomeComponent
        dish={dishes.filter((dish) => dish.featured)[0]}
        promotion={promotions.filter((promo) => promo.featured)[0]}
        leader={leaders.filter((leader) => leader.featured)[0]}
      />
    );
  };

  const AboutUsPage = () => {
    return <About leaders={leaders} />;
  };

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={
          dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comments={comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
      />
    );
  };

  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route path="/aboutus" component={AboutUsPage}></Route>
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <FooterComponent />
    </div>
  );
}
export default Main;
