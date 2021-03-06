import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class SupplierDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suppliers: [],
      nombre_compania: "",
      direccion: "",
      estado: "",
      telefono: "",
      correo: ""
    };
  }

  componentDidMount() {
    this.loadExamples();
  }

  loadExamples = () => {
    API.getSuppliers()
      .then(res => {
        this.setState({ suppliers: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getExamplesAsList = () => {
    const suppliers = this.state.suppliers;
    const listElements = suppliers.map(element => {
      return (
        <tr className="table" key={element._id}>
          <td>{element.nombre_compania}</td>
          <td>{element.direccion}</td>
          <td>{element.estado}</td>
          <td>{element.telefono}</td>
          <td>{element.correo}</td>
          <td><input type="checkbox"></input></td>
          <td><a>Add to my list</a></td>
        </tr>
      );
    });

    if (listElements.length === 0) return <h3>No Results to Display</h3>;

    return listElements;
  };

  render() {
    const supplierList = this.getExamplesAsList();
    return (
      <div className="container">
        <h1>Supplier</h1>
        <table>
          <thead>
            <tr>
              <th scope="col">Company Name</th>
              <th scope="col">Address</th>
              <th scope="col">State</th>
              <th scope="col">Telephone</th>
              <th scope="col">Email</th>
              <th scope="col">Select</th>
              <th scope="col">Add</th>
            </tr>
          </thead>
          <tbody>{supplierList}</tbody>
        </table>
      </div>
    );
  }
}

export default SupplierDashboard;
