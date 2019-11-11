import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCart, removeFromCart} from '../store/user'
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
          this.props.currentCart.map(item => (
            <div key={item.id}>
              <button type="button" onClick={() => this.handleClick(item)}>
                x Remove
              </button>
              <ProductCard key={item.id} product={item} />
            </div>
          ))}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  currentCart: state.user.currentCart
})

const mapDispatchToProps = dispatch => ({
  removeFromCart: product => dispatch(removeFromCart(product)),
  getCart: () => dispatch(getCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
