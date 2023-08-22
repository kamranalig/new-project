import React, { useState } from "react";
import { render } from "react-dom";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const DishDetail = ({ dish }) => {
  const renderDish = (dish) => {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  };

  const renderComments = (comments) => {
    if (comments == null) {
      return <div></div>;
    }
    const comnt = comments.map((comment) => {
      <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>
          --{comment.auther}, &nbsp;
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(comment.date))}
        </p>
      </li>;
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h2>Comments</h2>
        <ul className="list-unstyles"></ul>
      </div>
    );
  };
  if (dish == null) {
    return <div></div>;
  }
  const dishItem = renderDish(dish);
  const dishComment = renderComments(dish.comments);
  return (
    <div className="row">
      {dishItem}
      {dishComment}
    </div>
  );
};

export default DishDetail;
