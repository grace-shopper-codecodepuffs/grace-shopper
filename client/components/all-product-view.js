import React, {Component} from 'react'
import ProductCard from './product-card'

class Potions extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const {potions} = this.props
    return (
      <div>
        {potions.map(potion => <ProductCard props={potion} key={potion.id} />)}
      </div>
    )
  }
}
