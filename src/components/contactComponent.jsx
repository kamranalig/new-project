import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            223, New Mulism Town Lahore
            <br />
            Muslim Town Mor Wahdat Road Lahore <br />
            Lahore, Pakistan
            <i className="fa fa-phone fa-lg"></i>:03095543952 <br />
            <i className="fa fa-fax fa-lg"></i>:03107842912 <br />
            <i className="fa fa-envelope fa-lg"></i>:
            <a href="mailto:km775.ali@gmail.com">km775.ali@gmail.com</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of Our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href="tel:+923095543952"
            >
              <i className="fa fa-phone"></i>Cell
            </a>
            <a role="button" className="btn btn-info">
              <i className="fa fa-skype"></i>Skype
            </a>
            <a
              role="button"
              className="btn btn-success"
              href="mailto:km775.ali@gmail.com"
            >
              <i className="fa fa-envelope-o"></i>Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
