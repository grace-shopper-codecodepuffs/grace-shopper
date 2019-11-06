import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import ProductCard from './components/product-card'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <ProductCard />
    </div>
  )
}

export default App
