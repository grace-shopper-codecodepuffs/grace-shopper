import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCart, removeFromCart} from '../store/cart'
import ProductInCart from './ProductInCart'
import {Link} from 'react-router-dom'

import {getProducts} from '../store/products'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.handleRemoveClick = this.handleRemoveClick.bind(this)
    this.handleMinusClick = this.handleMinusClick.bind(this)
    this.handlePlusClick = this.handlePlusClick.bind(this)
  }
  componentDidMount() {
    this.props.getCart()
    this.props.getProducts()
  }

  handleRemoveClick(event) {
    this.props.removeFromCart(event)
  }

  handleMinusClick(id) {}

  handlePlusClick(id) {}

  render() {
    return (
      <div className="cartbody">
        <h1 className="carttitle">Shopping Cart</h1>
        <ul className="cartitems">
          {this.props.cart &&
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
                  handleMinusClick={() => this.handleMinusClick()}
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
          <Link to="/checkout">
            <button type="button">Continue to Checkout</button>
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
  getCart: () => dispatch(getCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
