import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import axios from 'axios'

class ProductCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Jello Legs',
      description:
        'This hex of a potion will hobble your enemies! Do you need to run away? Throw it at them. Do you want to prank your neighbor who lives at the top floor of a 4-story-walkup? They will hate you forever!',
      image:
        'https://storage.needpix.com/rsynced_images/potion-575711_1280.png',
      price: '$49.99'
    }
  }
  // async componentDidMount() {
  //   try {
  //     let {data} = await axios.get('/api/potions')
  //     this.setState({data})
  //   }
  //   catch {
  //     console.log('error')
  //   }
  // }

  render() {
    return (
      <div className="product-card">
        <img src={this.state.image} />
        <h3 className="potion">{this.state.name}</h3>
        <p className="description">{this.state.description}</p>
        <h4 className="price">{this.state.price}</h4>
        <input type="number" name="product-quantity" placeholder=" Quantity" />
        <br />
        <button>Add To Cart</button>
      </div>
    )
  }
}

export default ProductCard
