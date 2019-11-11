import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getCart, removeFromCart} from '../store/user'
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
        {this.props.currentCart &&
          this.props.currentCart.map((item, ind) => (
            // <ProductCard key={item.id} product={item} quantity={item.quantity}/>
            // <div className="shopping-cart" key={item.id}>
            // <div className="column-labels">
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
  currentCart: state.user.currentCart,
  products: state.products.products
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  removeFromCart: product => dispatch(removeFromCart(product)),
  getCart: () => dispatch(getCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
