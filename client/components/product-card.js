import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {addToCart} from '../store/user'
import {connect} from 'react-redux'

class ProductCard extends Component {
  constructor() {
    super()
    this.state = {
      quantity: 1
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {}

  handleClick(event) {
    event.preventDefault()
    this.props.addToCart(this.props.product, this.state.quantity)
    this.setState({
      quantity: 1
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const linkTo = `/potions/${this.props.product.id}`
    console.log('THIS PROPS', this.props)
    return (
      <div className="product-card">
        <Link to={linkTo}>
          <img src={this.props.product.picture} />
          <h3 className="potion">{this.props.product.name}</h3>
        </Link>
        <h4 className="price">{this.props.product.price}</h4>
        <input type="number" name="product-quantity" defaultValue="1" min="0" />
        <br />
        <button type="submit" onClick={this.handleClick}>
          Add To Cart
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  // gotAProduct: aProduct => dispatch(gotAProduct(aProduct)),
  addToCart: (potion, quantity) => dispatch(addToCart(potion, quantity))
})

export default connect(null, mapDispatchToProps)(ProductCard)
