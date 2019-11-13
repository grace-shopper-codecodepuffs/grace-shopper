/* eslint-disable react/jsx-key */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCart, removeFromCart, editQuantityInCart} from '../store/cart'
import ProductInCart from './ProductInCart'
import {Link} from 'react-router-dom'

import {getProducts} from '../store/products'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.handleRemoveClick = this.handleRemoveClick.bind(this)
    this.handleMinusClick = this.handleMinusClick.bind(this)
    this.handlePlusClick = this.handlePlusClick.bind(this)
    this.findTotal = this.findTotal.bind(this)
  }
  componentDidMount() {
    this.props.getCart()
    this.props.getProducts()
  }

  handleRemoveClick(id) {
    this.props.removeFromCart(id)
  }

  handleMinusClick(id, newQ) {
    this.props.editQtInCart(id, newQ)
  }

  handlePlusClick(id, newQ) {
    this.props.editQtInCart(id, newQ)
  }

  findTotal(cart) {
    const total = cart.reduce((accum, potion) => {
      const currPotion = potion.quantity * potion.price
      return accum + currPotion
    }, 0)
    return Math.round(total * 100) / 100
  }

  render() {
    return (
      <div className="cartbody">
        <h1 className="carttitle">Shopping Cart</h1>
        <ul className="cartitems">
          {this.props.cart.length > 0 &&
            this.props.products.length > 0 &&
            this.props.cart.map(item => (
              <li className="cartitem">
                <ProductInCart
                  key={item.potionId}
                  itemFromCart={item}
                  potion={
                    this.props.products.filter(
                      potion => potion.id === item.potionId
                    )[0]
                  }
                  handleMinusClick={() =>
                    this.handleMinusClick(item.potionId, item.quantity - 1)
                  }
                  handlePlusClick={() =>
                    this.handlePlusClick(item.potionId, item.quantity + 1)
                  }
                  handleRemoveClick={() =>
                    this.handleRemoveClick(item.potionId)
                  }
                />
              </li>
            ))}
        </ul>
        <div>
          <h3 className="cartline">
            TOTAL:{' '}
            <span className="cartpricetwo">
              ${this.props.cart.length > 0 && this.findTotal(this.props.cart)}
            </span>
          </h3>
          <Link to="/checkout">
            <div className="cartline">
              <button type="button" className="cartremovebutton">
                CONTINUE TO CHECKOUT
              </button>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  products: state.products.products,
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  removeFromCart: productId => dispatch(removeFromCart(productId)),
  getCart: () => dispatch(getCart()),
  editQtInCart: (productId, quantity) =>
    dispatch(editQuantityInCart(productId, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
