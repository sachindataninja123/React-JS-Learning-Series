import React from 'react'

const Card2 = (props) => {
  return (
    <div className='p-5 px-8 m-6 bg-white inline-block text-black rounded-md '>
      <img className='h-36 w-36 rounded-full bg-red-100 ml-9 mb-7' src={props.image} alt="" />
      <h1 className='text-xl font-medium mb-1'>Name: {props.name}</h1> 
       <h2 className='text-1xl  mb-1 '>Age: {props.age}</h2>
       <h2 className='text-1xl mb-1'>City: {props.city}</h2>
       <h2 className='text-1xl text-blue-400'><b>Profession</b>: {props.profession}</h2>
       <button className='px-5 py-2 bg-emerald-700 mt-4 rounded-md text-white'>Add Friend</button>
    </div>
  )
}

export default Card2
