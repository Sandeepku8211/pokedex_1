import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pokemon from '../pokemon/Pokemon';


const Pokedex_Url ='https://pokeapi.co/api/v2/pokemon'
const PokemonList =() => {
  const [pokemonDb,setPokemonDb]= useState([]);
  const [isLoading,setLoading]=useState(true)
async function  downLoadData(){
  const response  = await axios.get(Pokedex_Url);
 
    const pokemondata = response.data.results;
    const pokemonresult = pokemondata.map((pokemon)=>axios.get(pokemon.url))
    const pokemonPromise = await axios.all(pokemonresult)
    console.log(pokemonPromise)
    const res = pokemonPromise.map((pokemonte)=>{
      const pokemon=pokemonte.data;
      return{
        id:pokemon.id,
        name:pokemon.name,
        image:pokemon.sprites.front_default
      }
      
    })
  
    console.log(res)
    setPokemonDb(res)
    setLoading(false)
 }

    useEffect(()=>{
      
      downLoadData();
       
    },[])
  return (
    <div>
      <div>
      <h1>pokemonLIst</h1>
      {
        (isLoading)? "loading ...":
        pokemonDb.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} />)
        
      }
    </div>
    <div>
      {name}
    </div>
    </div>
  )
}

export default PokemonList
