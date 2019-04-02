import React, { Component } from "react";
import Form from "./Form";
import Nav from "./../../components/Nav";
import "./style.css";

class Register extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="col-12 mt-5">
          <div className="col-12 ">
            <h5 className=" text-dark text-center display-4 font-weight-bold">
              Register
            </h5>
            <p className="lead text-center">Fill out the following information.</p>

          </div>
        </div>

        <div className="tab-content " id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-buyers"
            role="tabpanel"
            aria-labelledby="pills-buyers-tab"
          >
            <Form />
          </div>
        </div>
      </>
    );
  }
}

export default Register;
