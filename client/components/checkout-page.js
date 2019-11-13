import React from 'react'
import {Link} from 'react-router-dom'
import Address from './address'

const CheckoutPage = () => {
  return (
    <div className="checkoutPage">
      <div className="fullPage">
        <h2>Checkout</h2>
        <Address />
      </div>
    </div>
  )
}

export default CheckoutPage
