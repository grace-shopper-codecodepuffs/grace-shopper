import React from 'react'

const ProductInCart = ({
  itemFromCart,
  potion,
  handleRemoveClick,
  handlePlusClick,
  handleMinusClick
}) => (
  <div className="cartitempreview">
    <img src={potion.picture} className="cartitemthumbnail" />
    <div>
      <h1 className="cartitemtitle">{potion.name}</h1>
      <br />
    </div>
    <button type="button" onClick={() => handleMinusClick()}>
      -
    </button>
    <p className="cartitemquantity">{itemFromCart.quantity}</p>
    <button type="button" onClick={() => handlePlusClick()}>
      +
    </button>
    <div>
      <span className="cartitemprice">
        ${itemFromCart.price * itemFromCart.quantity}
      </span>
      <br />
    </div>

    <button type="button" onClick={() => handleRemoveClick()}>
      Remove
    </button>
  </div>
)

export default ProductInCart
