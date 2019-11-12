import React from 'react'
import {Link} from 'react-router-dom'
import Address from './address'

const CheckoutPage = () => {
  return (
    <div className="checkoutPage">
      <div className="fullPage">
        <h3>Checkout</h3>
        <Address />
      </div>
    </div>
  )
}

export default CheckoutPage
