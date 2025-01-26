import React from 'react'
import Counter from './components/Counter'
import Cart from './components/Cart'
import OpenModal from './components/OpenModal'
import ToDo from './components/ToDo'
import Players from './components/Players'

function App() {
  return (
    <div className='flex flex-col gap-15 mt-5 items-center'>
      <Counter/>
      <Cart/>
      <OpenModal/>
      <ToDo/>
      <Players/>
    </div>
  )
}

export default App