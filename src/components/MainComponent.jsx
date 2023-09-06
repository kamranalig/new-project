import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetail";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";
function Main() {
  const [dishes, setDishes] = useState(DISHES);
  // const [selectedDish, setSelectedDish] = useState(null);

  // const onDishSelect = (dishId) => {
  //   setSelectedDish(dishId);
  // };

  return (
    <div>
      <HeaderComponent />
      {/* <Menu dishes={dishes} onClick={onDishSelect} /> */}
      {/* <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} /> */}
      <Switch>
        <Route path="/home" component={HomeComponent} />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Redirect to="/home" />
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default Main;
