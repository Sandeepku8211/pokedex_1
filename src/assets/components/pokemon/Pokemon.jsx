import React from 'react'
import './Pokemon.css';

const Pokemon = ({name,image}) => {
  return (
    <div className=' w-2/3 bg-red-50 border-4 border-b-emerald-300' >
      
      <div className=' '><img className=''  src={image} alt='imageload' /> </div>
  
      <div className=' '>{name}</div>
    </div>
  )
}

export default Pokemon
