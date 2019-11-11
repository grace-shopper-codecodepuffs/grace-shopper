import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="navbar">
    <Link to="/potions" key="potions">
      {/* <img src="../public/PattiesPotionsLogo.png" /> */}
      <h1 className="title">Pattie's Potions</h1>
    </Link>
    <nav>
      {isLoggedIn ? (
        <div className="navbar">
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>

          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/cart">
            <img src="data:image/png;base64,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" />
          </Link>
        </div>
      ) : (
        <div className="navbar">
          {/* The navbar will show these links before you log in */}
          <Link to="/homepage">Home Page</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/cart">
            <img src="data:image/png;base64,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" />
          </Link>
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
