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
      <form name={name}>
        <input type="text" name="product-quantity" />
        <br />
        <button type="submit">Add To Cart</button>
      </form>
    </div>
  )
}

export default ProductCard
