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
  }

  handleChange(event) {
    console.log([event.target.name], event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {}

  handleSubmit(event) {
    event.preventDefault()
    this.componentDidMount()
    this.setState({
      firstName: '',
      lastName: '',
      shipping: {
        name: '',
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: ''
      },
      billing: {
        name: '',
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: ''
      },
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
            name="zip"
            placeholder="Zip"
            value={this.state.shipping.zip}
            onChange={this.handleChange}
          />
          <br />
          <br />
        </div>

        <div className="form-billing-address">
          <h3>Billing Address</h3>
          <input
            type="text"
            name="billingAddressLine1"
            placeholder="Name"
            value={this.state.billing.name}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="billingAddressLine1"
            placeholder="Address Line 1"
            value={this.state.billing.line1}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="billingAddressLine2"
            placeholder="Address Line 2"
            value={this.state.billing.line2}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="billingCity"
            placeholder="City"
            value={this.state.billing.city}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="billingState"
            placeholder="State"
            value={this.state.billing.state}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="billingZip"
            placeholder="Zip"
            value={this.state.billing.zip}
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
            value={this.state.billingFirstname}
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
        <br />

        <button type="submit" key="submit" onClick={this.handleClick}>
          Checkout Now
        </button>
      </form>
    )
  }
}

export default Address
