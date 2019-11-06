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
    const {products} = this.props
    console.log('products', products)
    return (
      <div>
        <h1>Our Potions</h1>

        {products.length &&
          products.map(product => {
            return (
              //   <div className="product-card" key={product.id}>
              //     <img src={product.image} />
              //     <h3 className="potion">{product.name}</h3>
              //     <p className="description">{product.description}</p>
              //     <h4 className="price">{product.price}</h4>
              //     <input
              //       type="number"
              //       name="product-quantity"
              //       placeholder=" Quantity"
              //       min="0"
              //     />
              //     <br />
              //     <button>Add To Cart</button>
              //   </div>
              // )
              <ProductCard key={product.id} product={product} />
            )
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
