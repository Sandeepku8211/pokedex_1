
import './App.css'
import Navbar from './assets/components/nav/Navbar'
import Pokedex from './assets/components/poekdex/Pokedex'
import PokemonList from './assets/components/pokemonList/PokemonList'
import CoustomRouter from './router/CoustomRouter'

function App() {

  return (
    <>
    <Navbar />

    <CoustomRouter />
    
    </>
  )
}

export default App
