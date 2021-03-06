import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavDash from "./../components/NavDash";
//import ContDash from "./../components/ContDash";
import API from "../utils/API";
import Store from "../utils/Store";
import ProductRow from "../components/ProductRow";

//product dashboard for client
class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productos: []
    };
  }

  componentDidMount() {
    const { user } = Store.get("userData");
    if (user.role === "supplier")
      this.loadProductsByCompany();
    else
      this.loadAllProducts();
  }

  loadAllProducts = () => {
    API.getProducts()
      .then(this.processProductsResponse)
      .catch(err => {
        console.log(err);
      })
  }

  loadProductsByCompany = () => {
    const { user } = Store.get("userData");
    API.getCompanyProducts(user.companyId)
      .then(this.processProductsResponse)
      .catch(err => {
        console.log(err);
      });
  };

  processProductsResponse = (res) => {
    const products = res.data.map(product => {
      return {
        ...product,
        selected: false,
        quantity: 0
      };
    });
    this.setState({ productos: products });
  };

  getProductRows = () => {
    const productos = this.state.productos;
    const rows = productos.map((product, index) => {
      return (
        <ProductRow
          key={index}
          product={product}
          updateProductById={this.updateProductById}
        />
      );
    });

    if (rows.length === 0)
      return (
        <tr>
          <td>No Results to Display</td>
        </tr>
      );

    return rows;
  };

  updateProductById = (id, key, value) => {
    this.setState({
      productos: this.state.productos.map(producto => {
        if (producto._id === id) {
          return {
            ...producto,
            [key]: value
          };
        }

        return producto;
      })
    });
  };

  getSupplierPanel = () => {
    return (
      <Link type="button" id="agregarProducto" className="btn btn-dark" to="/newproduct">
        Add New Product
        </Link>
    );
  };

  getClientPanel = () => {
    return (
      <button type="button" id="solicitud" onClick={this.processRequest} className="btn btn-dark">
        {" "}
        Process purchase request{" "}
      </button>
    );
  };

  processRequest = () => {
    const selectedProducts = this.state.productos.filter(product => {
      return product.selected;
    });

    const { user } = Store.get("userData");

    //Mandar al API los productos seleccionados
    API.generateOrder({
      items: selectedProducts.map(product => {
        return { productId: product._id, quantity: product.quantity };
      }),
      clientId: user._id
    }).then(() => {
      console.log("Order placed successfuly")
    });
  };

  render() {
    const rows = this.getProductRows();
    const { user } = Store.get("userData");
    return (
      <>
        <NavDash />
        <div className="container-fluid ">
          <div className="row">
            <main className="p-5 mr-5 col-md-9 col-lg-10 ">
              <h1>Productos</h1>
              {user.role === "supplier" ? this.getSupplierPanel() : this.getClientPanel()}
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Size</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Added Date</th>
                    <th scope="col">Freight</th>
                    <th scope="col">Date of Delivery</th>
                    <th scope="col">Quantity Available</th>
                    {user.role === "supplier" ? (
                      <>
                        <th scope="col">Erase</th>
                        <th scope="col">Edit</th>
                      </>
                    ) : (
                        <>
                          <th scope="col">Select</th>
                          <th scope="col">Quantity</th>
                        </>
                      )}
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </table>
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default Products;
