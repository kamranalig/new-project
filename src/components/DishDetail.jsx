import React, { useState } from "react";
import { Loading } from "./LoadingComponent";
import {
  Card,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  CardText,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Label,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";

const CommentForm = ({ dishId, postComment }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    rating: "",
    author: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCommentFormSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    postComment(dishId, formData.rating, formData.author, formData.comment);
    console.log("Current State is: ", formData);
  };

  const toggleCommentFormModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Button outline onClick={toggleCommentFormModal}>
        <span className="fa fa-comments fa-lg"></span> Submit Comment
      </Button>

      <Modal isOpen={isModalOpen} toggle={toggleCommentFormModal}>
        <ModalHeader toggle={toggleCommentFormModal}>
          Submit Comment
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleCommentFormSubmit}>
            <FormGroup>
              <Label htmlFor="rating">Rating</Label>
              <Input
                type="select"
                name="rating"
                id="rating"
                value={formData.rating}
                onChange={handleInputChange}
                required
              >
                <option>Please Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="author">Your Name</Label>
              <Input
                type="text"
                name="author"
                id="author"
                placeholder="First Name"
                value={formData.author}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="comment">Comment</Label>
              <Input
                type="textarea"
                name="comment"
                id="comment"
                rows="6"
                value={formData.comment}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <Button type="submit" color="primary">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

const RenderDish = ({ dish }) => {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle> {dish.name}</CardTitle>
            <CardText> {dish.description} </CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const RenderComments = ({ comments, postComment, dishId }) => {
  if (comments == null) {
    return <div></div>;
  }

  const cmnts = comments.map((comment) => (
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
  ));

  return (
    <div className="col-12 col-md-5 m-1">
      <h4> Comments </h4>
      <ul className="list-unstyled">{cmnts}</ul>
      <CommentForm dishId={dishId} postComment={postComment} />
    </div>
  );
};

const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>

          <div className="col-12">
            <h3> {props.dish.menu}</h3>
            <hr />
          </div>
        </div>

        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments
            comments={props.comments}
            postComment={props.postComment}
            dishId={props.dish.id}
          />
        </div>
      </div>
    );
  else return <div></div>;
};

export default DishDetail;
