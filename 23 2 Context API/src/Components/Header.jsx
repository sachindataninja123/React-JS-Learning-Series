import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/Usercontext'

const Header = () => {

const data = useContext(DataContext);

  return (
    <div>
      <h1>This is Header:  {data}</h1>
    </div>
  )
}

export default Header
