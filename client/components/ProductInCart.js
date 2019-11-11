import React from 'react'

const ProductInCart = ({itemFromCart, potion}) => (
  <div className="product-view">
    <div className="product-view-left">
      <label className="product-image">{potion.picture}</label>
      <img src={potion.picture} />
      <h1>{potion.name}</h1>
      <p>{potion.description}</p>
      <p>{itemFromCart.quantity}</p>
      <p>{itemFromCart.price}</p>
    </div>
    <br />
  </div>
)

export default ProductInCart
