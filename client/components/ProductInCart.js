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
    <div>
      <span className="cartitemprice">{itemFromCart.price}</span>
      <br />
    </div>
    <button type="button" onClick={() => handlePlusClick()}>
      +
    </button>
    <p className="cartitemquantity">{itemFromCart.quantity}</p>
    <button type="button" onClick={() => handleMinusClick()}>
      -
    </button>
    <div>
      <button type="button" onClick={() => handleRemoveClick()}>
        x Remove
      </button>
      <button type="button" />
    </div>
    <br />
  </div>
)

export default ProductInCart
