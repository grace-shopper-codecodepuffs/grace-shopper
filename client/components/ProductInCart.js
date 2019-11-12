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
      <button>+</button>
      <p className="cartitemquantity">{itemFromCart.quantity}</p>
      <button>-</button>
      <span className="cartitemprice">{itemFromCart.price}</span>
      <button type="button" onClick={() => handleRemoveClick()}>
        x Remove
      </button>
      <br />
    </div>
  </div>
)

export default ProductInCart
