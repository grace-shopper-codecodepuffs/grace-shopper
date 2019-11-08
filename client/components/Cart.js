import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCart} from '../store/user'

class Cart extends Component {
  constructor(props) {
    console.log('props', props)
    super(props)
  }
  componentDidMount() {
    this.props.getCart(this.props.match.params.userId)
  }
  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  currentCart: state.currentCart
})

const mapDispatchToProps = dispatch => ({
  getCart: userId => dispatch(getCart(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
