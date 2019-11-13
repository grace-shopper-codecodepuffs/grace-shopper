import React from 'react'
import {Link} from 'react-router-dom'
import Address from './address'

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <Address />
    </div>
  )
}

export default CheckoutPage
