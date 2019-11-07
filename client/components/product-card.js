import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = ({product}) => {
  const linkTo = `/potions/${product.id}`

  return (
    <div className="product-card">
      <Link to={linkTo}>
        <img src={product.picture} />
        <h3 className="potion">{product.name}</h3>
      </Link>
      <h4 className="price">{product.price}</h4>
      <input
        type="number"
        name="product-quantity"
        placeholder=" Quantity"
        min="0"
      />
      <br />
      <button>Add To Cart</button>
    </div>
  )
}

export default ProductCard
