import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToCart} from '../store/cart'

class ProductCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(event) {
    event.preventDefault()
    this.props.addToCart(this.props.product, Number(this.state.quantity))
    this.setState({
      quantity: 1
    })
  }

  render() {
    const linkTo = `/potions/${this.props.product.id}`
    console.log('this.porps', this.props.product)
    return (
      <div className="product-card">
        <Link to={linkTo}>
          <img src={this.props.product.picture} />
          <h3 className="potion">{this.props.product.name}</h3>
        </Link>
        <h4 className="price">{this.props.product.price}</h4>
        <form name={name}>
          <input
            type="text"
            name="quantity"
            onChange={this.handleChange}
            min="0"
          />
          <br />
          <button type="submit" onClick={this.handleClick}>
            Add To Cart
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.products
})

const mapDispatchToProps = dispatch => ({
  addToCart: (product, quantity) => dispatch(addToCart(product, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
