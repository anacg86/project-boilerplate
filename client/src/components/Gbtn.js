import React, { Component } from "react";
import { Link } from "react-router-dom";

class GroupButton extends Component {
  render() {
    return (
      <div className="btn-group my-4" role="group">
          <Link className="text-dark" to="/login" className="btn btn-outline-dark">
            Login{" "}
          </Link>

          <Link className="text-dark" to="/register" className="btn btn-outline-dark">
            Register
          </Link>
      </div>
    );
  }
}

export default GroupButton;
