import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth, createdUser} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google">{displayName} with Google</a>
    </div>
  )
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

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}

// /**
//  * COMPONENT
//  */

// // AuthForm.propTypes = {
// //   name: PropTypes.string.isRequired,
// //   displayName: PropTypes.string.isRequired,
// //   handleSubmit: PropTypes.func.isRequired,
// //   error: PropTypes.object
// // }

// class AuthForm extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: ''
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   // const {name, displayName, handleSubmit, error} = props
//   componentDidMount() {}

//   handleChange(evt) {
//     console.log(evt)
//     this.setState({[evt.target.name]: evt.target.value})
//   }

//   handleSubmit(evt) {
//     evt.preventDefault()
//     this.props.createdUser(this.state)
//     this.setState({
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: ''
//     })
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit} name={name}>
//           <div>
//             <label htmlFor="firstName">
//               <small>First Name</small>
//             </label>
//             <input
//               name="firstName"
//               type="text"
//               onChange={this.handleChange}
//               value={this.state.firstName}
//             />
//           </div>
//           <div>
//             <label htmlFor="lastName">
//               <small>Last Name</small>
//             </label>
//             <input
//               name="lastName"
//               type="text"
//               onChange={this.handleChange}
//               value={this.state.lastName}
//             />
//           </div>
//           <div>
//             <label htmlFor="email">
//               <small>Email</small>
//             </label>
//             <input
//               name="email"
//               type="text"
//               onChange={this.handleChange}
//               value={this.state.email}
//             />
//           </div>
//           <div>
//             <label htmlFor="password">
//               <small>Password</small>
//             </label>
//             <input
//               name="password"
//               type="password"
//               onChange={this.handleChange}
//               value={this.state.password}
//             />
//           </div>
//           <div>
//             <button type="submit">{this.props.displayName}</button>
//           </div>
//           {this.props.error &&
//             this.props.error.response && (
//               <div> {this.props.error.response.data} </div>
//             )}
//         </form>
//         <a href="/auth/google">{this.props.displayName} with Google</a>
//       </div>
//     )
//   }
// }

// /**
//  * CONTAINER
//  *   Note that we have two different sets of 'mapStateToProps' functions -
//  *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
//  *   function, and share the same Component. This is a good example of how we
//  *   can stay DRY with interfaces that are very similar to each other!
//  */
// const mapLogin = state => {
//   return {
//     name: 'login',
//     displayName: 'Login',
//     error: state.user.error
//   }
// }

// const mapSignup = state => {
//   return {
//     name: 'signup',
//     displayName: 'Sign Up',
//     error: state.user.error
//   }
// }

// const mapDispatch = dispatch => ({
//   // const formName = evt.target.name
//   // const firstName = evt.target.firstName.value
//   // const lastName = evt.target.lastName.value
//   // const email = evt.target.email.value
//   // const password = evt.target.password.value
//   // dispatch(auth(firstName, lastName, email, password, formName))
//   createdUser: user => dispatch(createdUser(user))
//   // dispatch(createdUser(firstName, lastName, email, password, formName))
// })

// export const Login = connect(mapLogin, mapDispatch)(AuthForm)
// export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

// /**
//  * PROP TYPES
//  */
