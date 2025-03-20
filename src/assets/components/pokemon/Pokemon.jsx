import React from 'react'

const Pokemon = ({name,image}) => {
  return (
    <div>
      
      <div><img src={image} alt='imageload' /> </div>
      <div>{name}</div>
    </div>
  )
}

export default Pokemon
