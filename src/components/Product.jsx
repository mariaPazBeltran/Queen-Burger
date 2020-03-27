/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './Product.css';

/* aqui se muestra la informacion de la data de product sobre la imagen,
el nombre del producto y precio. */
class Product extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.infoproduct);
  }

  render() {
    return (
      <div className="button-container">
        <button
          type="button"
          onClick={this.handleClick}
        >
          <img className="img-product" src={this.props.infoproduct.img} alt="icon" />
          <div>
            <h6>{this.props.infoproduct.product}</h6>
            <h6>{this.props.infoproduct.price}</h6>
          </div>
        </button>
      </div>
    );
  }
}


export default Product;
