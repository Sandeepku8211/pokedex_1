import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokeomnDetails = () => {
  const {id}= useParams();
  const [pokemon,setPokemon]=useState({})
  async function downloadPokemon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  
    setPokemon({
      name:response.data.name,
      image:response.data.sprites.other.dream_world.front_default
      ,
      height:response.data.height,
      width:response.data.weight,
      type:response.data.types.map((t)=>t.type.name)

    })
    
  }
 
  useEffect(()=>{
    downloadPokemon()
  },[])
  
  return (
    <div>
      <div>name : {pokemon.name}</div>
      <div><img src={pokemon.image} alt='image is loding' /> </div>
      <div>{pokemon.height}</div>
      <div>{pokemon.width}</div> 
      <div>{pokemon.type}</div>   

    </div>
  )
}

export default PokeomnDetails
