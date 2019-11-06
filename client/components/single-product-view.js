import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAProduct} from '../store/products'

class SingleProduct extends Component {
  componentDidMount() {
    this.props.getAProduct(this.props.match.params.potionId)
    console.log('in didMount>> this.props', this.props)
  }

  render() {
    console.log('in componenet render >>> this.props', this.props.aProduct)
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  aProduct: state.products.aProduct
})

const mapDispathToProps = dispatch => ({
  getAProduct: potionId => dispatch(getAProduct(potionId))
})

export default connect(mapStateToProps, mapDispathToProps)(SingleProduct)
