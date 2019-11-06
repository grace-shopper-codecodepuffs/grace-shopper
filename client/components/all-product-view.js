import React, {Component} from 'react'
import ProductCard from './product-card'
import store from '../store'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'

class Potions extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    console.log('hey')
    const {potions} = this.props
    return (
      <div>
        <h1>HELLO!</h1>
        {potions.map(potion => <ProductCard props={potion} key={potion.id} />)}
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
