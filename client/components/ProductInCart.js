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
    <div className="cartpotiondisplay">
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
    <div className="cartlinetwo">
      <button
        type="button"
        className="cartremovebutton"
        onClick={() => handleRemoveClick()}
      >
        REMOVE
      </button>
      <div className="cartitempreviewtwo">
        <span className="cartprice">
          ${Math.round(itemFromCart.price * itemFromCart.quantity * 100) / 100}
        </span>
        <br />
      </div>
    </div>
  </div>
)

export default ProductInCart
