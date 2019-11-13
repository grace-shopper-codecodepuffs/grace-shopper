import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, firstName, lastName} = props

  return (
    <div>
      {firstName !== null && lastName !== null ? (
        <div>
          <h2>
            Welcome back, {firstName} {lastName}!
          </h2>
          {/* <h4>
            Here is Your Past Order History:
          </h4>

          <br />
          <h4>
            Here is Your Current Cart:
          </h4>
           */}
        </div>
      ) : (
        <div>
          <h3>Welcome back, {email}!</h3>
        </div>
      )}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
