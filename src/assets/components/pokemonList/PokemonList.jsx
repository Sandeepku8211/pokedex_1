import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pokemon from '../pokemon/Pokemon';
import './PokemonList.css'


const Pokedex_Url ='https://pokeapi.co/api/v2/pokemon'
const PokemonList =() => {
  const [pokemonDb,setPokemonDb]= useState([]);
  const [pokedexurl,setPokedexurl] = useState(Pokedex_Url)
  const [isLoading,setLoading]=useState(true)
  const [nexturl,setNexturl]= useState('')
  const [preurl,setpreurl]= useState('')
async function  downLoadData(){
  const response  = await axios.get(Pokedex_Url);
 
    const pokemondata = response.data.results;
    const pokemonresult = pokemondata.map((pokemon)=>axios.get(pokemon.url))
    const pokemonPromise = await axios.all(pokemonresult)
    
    const res = pokemonPromise.map((pokemonte)=>{
      const pokemon=pokemonte.data;
      return{
        id:pokemon.id,
        name:pokemon.name,
        image:pokemon.sprites.front_default,
        types: pokemon.keys
      }
      
    })
  
   
  
    setPokedexurl(pokedexurl)
    setPokemonDb(res)
    setLoading(false)
 }


    useEffect(()=>{
      
      downLoadData();
       
    },[pokedexurl])
  return (
    <div>
      <div>
        <br />
      <h1 className=' heading_c'>PokemonList</h1>
      {
        (isLoading)? "loading ...":
        <div className='poklist'>
          {
            pokemonDb.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />)
          }
        </div>
        
      }
    </div>
    <div>
      <button disabled={nexturl ==null} onClick={()=>setNexturl(nexturl)} >next</button>
    </div>
    </div>
  )
}

export default PokemonList
