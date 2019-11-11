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
    this.props.getCart(this.props.match.params.userId)
  }

  handleClick(event) {
    this.props.removeFromCart(event)
    // this.props.getCart(this.props.match.params.userId)
  }

  render() {
    return (
      <div>
        <h1>This is Your Cart!</h1>
        {this.props.currentCart.map(item => (
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
  getCart: userId => dispatch(getCart(userId)),
  removeFromCart: product => dispatch(removeFromCart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
