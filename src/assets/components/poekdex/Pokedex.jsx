import React from 'react'
import Search from '../search/Search'
import './Pokedex.css'
import PokemonList from '../pokemonList/PokemonList'
import { Link } from 'react-router-dom'
import Navbar from '../nav/Navbar'

const Pokedex = () => {
  return (
    <div>
      
        <div>
          
           
       
         
            <br />
            <Search />

            <PokemonList />
            
        </div>
    </div>
  )
}

export default Pokedex
