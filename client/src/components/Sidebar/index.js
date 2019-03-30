import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Sidebar extends Component {
  render() {
    return (
      <>
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="nav-link active text-dark">
                  <Link
                    className=" nav-link font-weight-bolder"
                    to="/dashboard"
                  >
                    &nbsp; Dashboard &nbsp;
                    <i className=" ml-3 fas fa-lg  fa-tachometer-alt" />
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link text-dark">
                  <Link className=" nav-link font-weight-bolder" to="/productdashboard">
                    &nbsp; Orders &nbsp;
                    <i className=" ml-5 far fa-lg fa-clipboard" />
                  </Link>
                </span>
              </li>

              <li className="nav-item">
                <span
                  className="nav-link  font-weight-bolder text-dark"
                  data-toggle="collapse"
                  href="#collapse0"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <Link
                    className=" nav-link font-weight-bolder"
                    to="/productdashboard"
                  />
                  &nbsp; Products &nbsp;
                  <i className=" ml-4 fas fa-lg fa-caret-down" />
                </span>

                <div className="collapse" id="collapse0">
                  <span className="nav-item">
                    <Link className="nav-link " to="/productdashboard">
                      <span className="nav-link text-secondary">See All</span>
                    </Link>
                  </span>

                  <span className="nav-item">
                    <Link to="/newproduct">
                      <span className="nav-link text-secondary">Add New Product</span>
                    </Link>
                  </span>
                </div>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-dark font-weight-bolder"
                  data-toggle="collapse"
                  href="#collapse1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  &nbsp; Customers &nbsp;
                  <i className=" ml-4 fas fa-lg fa-caret-down" />
                </a>

                <div className="collapse" id="collapse1">
                  <span className="nav-item">
                    <Link
                      className=" nav-link font-weight-bolder"
                      to="/clientdashboard"
                    >
                      <span className="nav-link text-secondary">See All</span>
                    </Link>
                  </span>

                  <span className="nav-item">
                    <Link className=" nav-link font-weight-bolder" to="/search">
                      <span className="nav-link text-secondary">Search</span>
                    </Link>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Sidebar;
