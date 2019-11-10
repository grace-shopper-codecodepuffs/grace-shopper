import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAProduct} from '../store/products'
import {addToCart} from '../store/user'

class SingleProduct extends Component {
  componentDidMount() {
    this.props.getAProduct(this.props.match.params.potionId)
  }
  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  handleSubmit(event) {
    console.log(event.defaultValue)
    event.preventDefault()
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
            type="number"
            name="product-quantity"
            defaultValue="1"
            min="0"
          />
          <br />
          <button>Add To Cart</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  aProduct: state.products.aProduct
})

const mapDispathToProps = dispatch => ({
  getAProduct: potionId => dispatch(getAProduct(potionId)),
  addToCart: potionId => dispatch(addToCart(potionId))
})

export default connect(mapStateToProps, mapDispathToProps)(SingleProduct)
