import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCart, removeFromCart} from '../store/cart'
import ProductCard from './product-card'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.getCart()
  }

  handleClick(event) {
    this.props.removeFromCart(event)
  }

  render() {
    return (
      <div>
        <h1>This is Your Cart!</h1>
        {this.props.currentCart &&
          this.props.currentCart.map(product => (
            <div key={product.id}>
              <ProductCard key={product.id} product={product} />
              <button type="button" onClick={() => this.handleClick(product)}>
                x Remove
              </button>
            </div>
          ))}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  currentCart: state.cart
})

const mapDispatchToProps = dispatch => ({
  removeFromCart: product => dispatch(removeFromCart(product)),
  getCart: () => dispatch(getCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
