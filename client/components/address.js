import React from 'react'
import Axios from 'axios'

class Address extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      billingFirstname: '',
      billingLastName: '',
      creditCardNum: '',
      csv: '',
      expirationDate: ''
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.componentDidMount()
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
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
        <label>First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <label>Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <label>Email</label>
        <br />
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <label>Address Line 1</label>
        <br />
        <input
          type="text"
          name="addressLine1"
          value={this.state.addressLine1}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <label>Address Line 2</label>
        <br />
        <input
          type="text"
          name="addressLine2"
          value={this.state.addressLine2}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <label>City</label>
        <br />
        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <label>State</label>
        <br />
        <input
          type="text"
          name="state"
          value={this.state.state}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <label>Zip</label>
        <br />
        <input
          type="text"
          name="zip"
          value={this.state.zip}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <label>First Name</label>
        <br />
        <input
          type="text"
          name="billingLastName"
          value={this.state.billingLastName}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <label>Last Name</label>
        <br />
        <input
          type="text"
          name="billingFirstName"
          value={this.state.billingFirstname}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <label>Credit Card Number</label>
        <br />
        <input
          type="text"
          name="creditCardNum"
          value={this.state.creditCardNum}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <label>CSV</label>
        <br />
        <input
          type="text"
          name="csv"
          value={this.state.csv}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <label>Expiration Date</label>
        <br />
        <input
          type="text"
          name="expirationDate"
          value={this.state.expirationDate}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <button type="submit" key="submit" onClick={this.handleClick}>
          Checkout Now
        </button>
      </form>
    )
  }
}

export default Address
