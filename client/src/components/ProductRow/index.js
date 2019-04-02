import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Store from "../../utils/Store";
import API from "../../utils/API";

class ProductRow extends React.Component {
  static propTypes = {
    product: PropTypes.object,
    updateProductById: PropTypes.func
  };

  static defaultProps = {
    product: {},
    updateProductById: () =>
      console.warn("No updateProductById function defined")
  };

  getQuantityField = () => {
    const product = this.props.product;
    return (
      <input
        type="number"
        placeholder="cantidad"
        value={product.quantity}
        min="0"
        max={product.cantidad_disponible}
        onChange={event => {
          if (
            product.cantidad_disponible >= event.target.value &&
            event.target.value >= 0
          )
            this.props.updateProductById(
              product._id,
              "quantity",
              event.target.value
            );
        }}
      />
    );
  };

  getCheckBoxField = () => {
    const product = this.props.product;
    return (
      <input
        type="checkbox"
        id="seleccion"
        checked={product.selected}
        onChange={() => {
          this.props.updateProductById(
            product._id,
           "selected",
            !product.selected
          );
        }}
      />
    )
  }

  deleteProduct = () => {
    const product = this.props.product;
    API.deleteProduct(product._id).then((response) => {
      window.location.reload();
    });
  }

  getEditButton = () => {
    const product = this.props.product;
    return <Link className="btn btn-dark" to={`/editproduct/${product._id}`}>Editar</Link>;
  };

  getDeleteButton = () => {
    return <button className="btn btn-dark" onClick={this.deleteProduct}>Borrar</button>
  }

  render() {
    const { user } = Store.get("userData");
    const product = this.props.product;
    return (
      <tr key={product._id}>
        <td>{product.nombre}</td>
        <td>{product.medida}</td>
        <td>{product.precio_unitario}</td>
        <td>{product.fecha_agregado}</td>
        <td>{product.flete}</td>
        <td>{product.fecha_entrega}</td>
        <td>{product.cantidad_disponible}</td>
        <td>
          {
            user.role === "supplier"
            ? this.getDeleteButton()
            : this.getCheckBoxField()
          }
          
        </td>
        <td>
          {user.role === "supplier"
            ? this.getEditButton()
            : this.getQuantityField()}
        </td>
      </tr>
    );
  }
}

export default ProductRow;
