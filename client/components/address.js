import React from 'react'
import Axios from 'axios'

class Address extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      shippingName: '',
      shippingLine1: '',
      shippingLine2: '',
      shippingCity: '',
      shippingState: '',
      shippingZip: '',
      billingName: '',
      billingLine1: '',
      billingLine2: '',
      billingCity: '',
      billingState: '',
      billingZip: '',
      billingFirstname: '',
      billingLastName: '',
      creditCardNum: '',
      csv: '',
      expirationDate: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.createOrder = this.createOrder.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick() {
    this.createOrder({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      shipping: {
        name: this.state.shippingName,
        line1: this.state.shippingLine1,
        line2: this.state.shippingLine2,
        city: this.state.shippingCity,
        state: this.state.shippingState,
        zip: this.state.shippingZip
      },
      billing: {
        name: this.state.billingName,
        line1: this.state.billingLine1,
        line2: this.state.billingLine2,
        city: this.state.billingCity,
        state: this.state.billingState,
        zip: this.state.billingZip
      },
      billingFirstname: this.state.billingFirstname,
      billingLastName: this.state.billingLastName,
      creditCardNum: this.state.creditCardNum,
      csv: this.state.csv,
      expirationDate: this.state.expirationDate
    })
  }

  async createOrder(newOrder) {
    try {
      await Axios.post('/api/user/checkout', newOrder)
    } catch (error) {
      console.log(error)
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      firstName: '',
      lastName: '',
      shippingName: '',
      shippingLine1: '',
      shippingLine2: '',
      shippingCity: '',
      shippingState: '',
      shippingZip: '',
      billingName: '',
      billingLine1: '',
      billingLine2: '',
      billingCity: '',
      billingState: '',
      billingZip: '',
      billingFirstname: '',
      billingLastName: '',
      creditCardNum: '',
      csv: '',
      expirationDate: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-contact-info">
          <h3>Contact Information</h3>

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <br />
        </div>

        <div className="form-shipping-address">
          <h3>Shipping Address</h3>
          <input
            type="text"
            name="shippingName"
            placeholder="Name"
            value={this.state.shippingName}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="shippingLine1"
            placeholder="Address Line 1"
            value={this.state.shippingLine1}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="shippingLine2"
            placeholder="Address Line 2"
            value={this.state.shippingLine2}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="shippingCity"
            placeholder="City"
            value={this.state.shippingCity}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="shippingState"
            placeholder="State"
            value={this.state.shippingState}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="shippingZip"
            placeholder="Zip"
            value={this.state.shippingZip}
            onChange={this.handleChange}
          />
          <br />
          <br />
        </div>

        <div className="form-billing-address">
          <h3>Billing Address</h3>
          <input
            type="text"
            name="billingName"
            placeholder="Name"
            value={this.state.billingName}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="billingLine1"
            placeholder="Address Line 1"
            value={this.state.billingLine1}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="billingLine2"
            placeholder="Address Line 2"
            value={this.state.billingLine2}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="billingCity"
            placeholder="City"
            value={this.state.billingCity}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="billingState"
            placeholder="State"
            value={this.state.billingState}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="billingZip"
            placeholder="Zip"
            value={this.state.billingZip}
            onChange={this.handleChange}
          />
          <br />
          <br />
        </div>

        <div className="form-payment-info">
          <h3>Payment Information</h3>

          <input
            type="text"
            name="billingFirstName"
            placeholder="First Name"
            value={this.state.billingFirstName}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="billingLastName"
            placeholder="Last Name"
            value={this.state.billingLastName}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="creditCardNum"
            placeholder="Credit Card Number"
            value={this.state.creditCardNum}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="csv"
            placeholder="CSV"
            value={this.state.csv}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="expirationDate"
            placeholder="Expiration Date"
            value={this.state.expirationDate}
            onChange={this.handleChange}
          />
        </div>

        <div className="checkout-button">
          <button type="submit" key="submit" onClick={this.handleClick}>
            Checkout Now
          </button>
        </div>
      </form>
    )
  }
}

export default Address
