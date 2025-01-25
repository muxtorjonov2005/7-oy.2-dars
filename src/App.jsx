import React from 'react'
import Counter from './components/Counter'
import Cart from './components/Cart'

function App() {
  return (
    <div className='flex flex-col gap-15 mt-5'>
      <Counter/>
      <Cart/>
    </div>
  )
}

export default App