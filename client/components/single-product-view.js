import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAProduct} from '../store/products'
import {addToCart} from '../store/cart'

class SingleProduct extends Component {
  constructor() {
    super()
    this.state = {
      quantity: 1
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.getAProduct(this.props.match.params.potionId)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.addToCart(this.props.aProduct, this.state.quantity)
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
    const product = this.props.aProduct
    return (
      <div className="product-view">
        <div className="product-view-left">
          <img src={product.picture} />
        </div>

        <div className="product-view-right">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3>$ {product.price}</h3>
          <input
            onChange={this.handleChange}
            type="number"
            name="quantity"
            defaultValue="1"
            min="0"
          />
          <br />
          <button type="submit" onClick={this.handleClick}>
            Add To Cart
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  aProduct: state.products.aProduct
})

const mapDispatchToProps = dispatch => ({
  getAProduct: potionId => dispatch(getAProduct(potionId)),
  addToCart: (potion, quantity) => dispatch(addToCart(potion, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
