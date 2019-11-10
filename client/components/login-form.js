import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */

// AuthForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// }

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // const {name, displayName, handleSubmit, error} = props
  componentDidMount() {
    this.props.auth()
  }

  handleChange(evt) {
    console.log(evt)
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.auth(this.state)
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} name={name}>
          <div>
            <label htmlFor="firstName">
              <small>First Name</small>
            </label>
            <input
              name="firstName"
              type="text"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName">
              <small>Last Name</small>
            </label>
            <input
              name="lastName"
              type="text"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
          </div>
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input
              name="email"
              type="text"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div>
            <button type="submit">{this.props.displayName}</button>
          </div>
          {this.props.error &&
            this.props.error.response && (
              <div> {this.props.error.response.data} </div>
            )}
        </form>
        <a href="/auth/google">{this.props.displayName} with Google</a>
      </div>
    )
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapDispatch = dispatch => ({
  // const formName = evt.target.name
  // const firstName = evt.target.firstName.value
  // const lastName = evt.target.lastName.value
  // const email = evt.target.email.value
  // const password = evt.target.password.value
  auth: user => dispatch(auth(user))
  // dispatch(createdUser(firstName, lastName, email, password, formName))
})

export const Login = connect(mapLogin, mapDispatch)(LoginForm)
