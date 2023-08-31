import React from "react";

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
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  const renderComments = (comments) => {
    if (comments == null) {
      return <div></div>;
    }
    const cmnts = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author}, &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(comment.date))}
          </p>
        </li>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h2>Comments</h2>
        <ul className="list-unstyles">{cmnts}</ul>
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