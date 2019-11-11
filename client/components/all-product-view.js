import React, {Component} from 'react'
import ProductCard from './product-card'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'
import {addToCart} from '../store/user'

class Potions extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  // handleClick(event) {
  //   event.preventDefault()
  //   this.props.addToCart(this.props.aProduct, this.state.quantity)
  //   this.setState({
  //     quantity:1
  //   })
  // }

  render() {
    const {products} = this.props.products
    return (
      <div>
        <h1>Our Potions</h1>
        <div className="potion-list">
          {products.length &&
            products.map(product => {
              return (
                // console.log('??????')
                <ProductCard key={product.id} product={product} />
              )
            })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  addToCart: (product, quantity) => dispatch(addToCart(product, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(Potions)
