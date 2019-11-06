import React from 'react'

const ProductCard = ({name, image, description, price}) => {
  return (
    <div className="product-card">
      {console.log('in product card props', name)}
      <img src={image} />
      <h3 className="potion">{name}</h3>
      <p className="description">{description}</p>
      <h4 className="price">{price}</h4>
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
