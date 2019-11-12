import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getCart, removeFromCart} from '../store/cart'
import ProductInCart from './ProductInCart'
import {getProducts} from '../store/products'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.getCart()
    this.props.getProducts()
  }

  handleClick(event) {
    this.props.removeFromCart(event)
  }

  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        {this.props.cart &&
          this.props.cart.map((item, ind) => (
            <div>
              <ul>
                <ProductInCart
                  key={ind}
                  itemFromCart={item}
                  potion={
                    this.props.products.filter(
                      potion => potion.id === item.potionId
                    )[0]
                  }
                />
              </ul>
            </div>
            // </div>
          ))}
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
  removeFromCart: product => dispatch(removeFromCart(product)),
  getCart: () => dispatch(getCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
