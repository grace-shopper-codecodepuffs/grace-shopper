import React from 'react'

const ProductCard = ({product}) => {
  // const product = {product}
  console.log(product)
  return (
    <div className="product-card">
      {console.log('in product card props', product.name)}
      <img src={product.picture} />
      <h3 className="potion">{product.name}</h3>
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
