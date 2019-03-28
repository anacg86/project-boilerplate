import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../../utils/API";
import Store from "../../../utils/Store";
import "./buyers.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const email = this.state.email.trim();
    const password = this.state.password;

    if (this.areInputsValid(email, password)) {
      API.register({
        email,
        password
      }).then(response => {
        Store.set("userData", response.data);
        this.props.history.push("/");
      });
    }
  };

  areInputsValid = (email, password) => {
    if (!email) {
      alert("Please fill out the email");
      return false;
    }

    if (!password) {
      alert("Please fill out the password");
      return false;
    }

    return true;
  };

  render() {
    const { email, password } = this.state;
    return (
      <div
        className="container  w-100 my-md-5 pl-md-5 my-5"
        onSubmit={this.handleSubmit}
      >
        <form className="form-signin" id="formSignUp" method="POST">
          <h4 className="mb-3">Create account</h4>
          <br />
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="First Name"
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Last Name"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12 mb-3">
              <input
                name="email"
                type="email"
                value={email}
                onChange={this.handleInputChange}
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12 mb-3">
              <input
                name="password"
                type="password"
                className="form-control"
                value={password}
                onChange={this.handleInputChange}
                id="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn  btn-outline-warning my-4 py-3 h-100 btn-lg"
            >
              Submit
            </button>
          </div>

          <div className="text-center">
            <a className="small text-secondary">
              {" "}
              Already have an account?{" "}
              <Link className="text-secondary" to="/login">
                {" "}
                Log In
              </Link>{" "}
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
