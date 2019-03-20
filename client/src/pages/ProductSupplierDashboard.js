import React, { Component } from "react";
import API from "../utils/API";

//product dashboard for client
class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productos: [],
      nombre: "",
      medida: "",
      precio_unitario: "",
      fecha_agregado: "",
      flete: "",
      fecha_entrega: "",
      cantidad_disponible: ""
    };
  }

  componentDidMount() {
    this.loadExamples();
  }

  loadExamples = () => {
    API.getProducts()
      .then(res => {
        debugger;
        this.setState({ productos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getExamplesAsList = () => {
    const productos = this.state.productos;
    const listElements = productos.map(element => {
      return (
        <tr key={element._id}>
          <td>{element.nombre}</td>
          <td>{element.medida}</td>
          <td>{element.precio_unitario}</td>
          <td>{element.fecha_agregado}</td>
          <td>{element.flete}</td>
          <td>{element.fecha_entrega}</td>
          <td>{element.cantidad_disponible}</td>
          <td><input type="checkbox" id="seleccion" /></td>
          <td id="poner el update de productController.js">Editar</td>
        </tr>
      );
    });

    if (listElements.length === 0) return <h3>No Results to Display</h3>;

    return listElements;
  };

  render() {
    const productosList = this.getExamplesAsList();
    return (
      <div className="container">
        <h1>Productos</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Medida</th>
              <th scope="col">Precio Unitario</th>
              <th scope="col">Fecha agregado</th>
              <th scope="col">Flete</th>
              <th scope="col">Fecha de entrega</th>
              <th scope="col">Cantidad disponible</th>
              <th scope="col">Seleccion de producto</th>
              <th scope="col">Editar</th>
            </tr>
          </thead>
          <tbody>{productosList}</tbody> 
          <a type="button" id="agregarProducto" href="/addproduct">Agregar un producto</a>
        </table>
      </div>
    );
  }
}

export default Products;