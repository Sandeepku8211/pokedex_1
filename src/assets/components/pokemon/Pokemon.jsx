import React from 'react'
import './Pokemon.css';
import { Link } from 'react-router-dom';

const Pokemon = ({id,name,image}) => {
  
  return (
    <Link to={`/pokemon/${id}`}>
      <div className='px' >
      
      <div className=' '><img className='img'  src={image} alt='imageload' /> </div>
  
      <div className=' '>{name}</div>
    </div>
    </Link>
  )
}

export default Pokemon
