import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="fullPage">
        <h1>Pattie's Potions Mwahaha</h1>
        <Link to="/potions" key="potions">
          <img src="https://media.giphy.com/media/SY8xqBKwUiVtgrnQwJ/giphy.gif" />
        </Link>
        <p>
          <h3>
            <Link to="/potions" key="potions">
              Enter at Your Own Risk!
            </Link>
          </h3>
        </p>
      </div>
    </div>
  )
}

export default HomePage
