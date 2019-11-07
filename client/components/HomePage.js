import React from 'react'
import {Link} from 'react-router-dom'
import {Routes} from '../../client/routes'
import {Potions} from '../components/all-product-view'

const HomePage = () => {
  return (
    <div>
      <h1>Pattie's Potions Mwahahaha</h1>
      <Link to="/potions" key="potions">
        <img src="https://media.giphy.com/media/SY8xqBKwUiVtgrnQwJ/giphy.gif" />
      </Link>
    </div>
  )
}

export default HomePage
