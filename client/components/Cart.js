import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCart} from '../store/user'
import ProductCard from './product-card'

class Cart extends Component {
  constructor(props) {
    console.log('props', props)
    super(props)
  }
  componentDidMount() {
    this.props.getCart()
  }
  render() {
    return (
      <div>
        <h1>This is Your Cart!</h1>
        {this.props.currentCart.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  currentCart: state.user.currentCart
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
