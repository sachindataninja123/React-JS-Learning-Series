import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-gray-800 border-2 inline-block  p-10 rounded-md m-5' >
        <h1 className='text-2xl'>Name: {props.name}</h1>
        <h1 className='text-2xl'>City: {props.city} </h1>
        <h1 className='text-2xl'>Age: {props.age} </h1>
        <button className='mt-5 p-3 bg-black  rounded-md text-white '>Add Friend</button>
    </div>
  )
}

export default Card
