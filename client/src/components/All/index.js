import React, { Component } from "react";
import "./style.css";
import GroupButton from "../Gbtn";
import Nav from "./../Nav";
import Footer from "./../Footer";
import { Link } from "react-router-dom";

class All extends Component {
  render() {
    return (
      <>
        <Nav />
        <main>
          <div className="grid">

            <div id="about" className="grid__item bg-dark">
              <div className="grid__item-content text-warning">
                <h1 className="display-1 font-weight-bolder ">Collaboration is the key</h1>

              </div>
            </div>

            <div className="grid__item bg-dark">
              <div className="grid__item-content text-light">
                <small>Anyday, Anywhere</small>
                <br />
                <p className="lead font-weight-normal text-justify">
                  {" "}
                  Get ready with Houdini and start with simplicity and agility your bussiness, reach the audience you want, make the contacts you need.
                </p>

                <Link to="/contact" className="btn w-80 btn-outline-warning">
                  Contact
                </Link>
              </div>
            </div>

            <div className="grid__item bg-light ">
              <div className="grid__item-content">
                <small>First Steps</small>

                <h1 className="display-4 font-weight-bold">
                  {" "}
                  Bussiness to bussiness
                </h1>
                <p className="lead font-weight-normal text-justify">
                  {" "}
               Have communication with suppliers and receive the price can help you make the best
               decision of who to buy.
                
                </p>
                <GroupButton />
              </div>
            </div>

            <div id="buyers" className="grid__item bg-warning">
              <div className="grid__item-content text-dark">
                <span className="grid__item-meta">
                  You wanna buy products to start your bussiness?
                </span>
                <h1 className="display-1 font-weight-bolder text-dark ">
                  {" "}
                  Buyers
                </h1>
              </div>
            </div>

            <div id="suppliers" className="grid__item bg-dark">
              <div className="grid__item-content ">
                <small className="text-light">
                  {" "}
                  Are you interested in reach a global audience?
                </small>
                <h1 className="display-1 font-weight-bolder text-warning ">
                  {" "}
                  Suppliers
                </h1>
              </div>
            </div>

            <div className="grid__item bg-light">
              <div className="grid__item-content">
                <small>All your bussiness in one place</small>

                <h1 className="display-4 font-weight-bold"> Bussiness to bussiness
</h1>
                <p className="lead font-weight-normal text-justify">
                  {" "}
                  Reach the global audience you always wanted, let them know your products and
                  improve the direct communication with the buyers. All in one place can help your
                  orders to be easier to manage.
                                  </p>
                <GroupButton />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default All;
