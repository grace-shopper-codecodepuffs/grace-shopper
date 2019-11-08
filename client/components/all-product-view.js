import React, {Component} from 'react'
import ProductCard from './product-card'
import store from '../store'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'

class Potions extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    const {products} = this.props.products
    return (
      <div>
        <h1>Our Potions</h1>

        {products.length &&
          products.map(product => {
            return <ProductCard key={product.id} product={product} />
          })}
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
