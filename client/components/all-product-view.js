import React, {Component} from 'react'
import ProductCard from './product-card'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'

class Potions extends Component {
  constructor() {
    super()
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.getProducts()
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addToCart(this.props.aProduct, this.state.quantity)
    this.setState({})
  }

  render() {
    const {products} = this.props.products
    return (
      <div>
        <h1>Our Potions</h1>
        <div className="potion-list">
          {/* {products.length &&
            products.map(product => {
              return <ProductCard key={product.id} product={product} onClick={() => this.props.addToCart(product, quantity)}
            })} */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Potions)
