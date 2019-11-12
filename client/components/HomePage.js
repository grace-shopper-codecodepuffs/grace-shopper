import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="fullPage">
        <Link to="/potions" key="potions">
          <img src="https://media.giphy.com/media/SY8xqBKwUiVtgrnQwJ/giphy.gif" />
        </Link>
        <h3>
          <Link to="/potions" key="potions">
            Enter at Your Own Risk!
          </Link>
        </h3>
      </div>
    </div>
  )
}

export default HomePage
