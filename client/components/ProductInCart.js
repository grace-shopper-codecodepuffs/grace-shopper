import React from 'react'

const ProductInCart = ({itemFromCart, potion}) => (
  <div className="cart-view">
    <div className="product-view-left">
      <label className="cart-image">{potion.picture}</label>
      <img src={potion.picture} />
      <h1>{potion.name}</h1>
      <p>{potion.description}</p>
      <p>{itemFromCart.quantity}</p>
      <p>{itemFromCart.price}</p>
      {/* <button type="button" onClick={() => this.handleClick(item)}>
                x Remove
      </button> */}
    </div>
    <br />
  </div>
)

export default ProductInCart
