import {Routes,  Route } from 'react-router-dom'
import React from 'react'

import Pokedex from '../assets/components/poekdex/Pokedex.jsx'
import PokeomnDetails from '../assets/components/pokemonDetails/PokeomnDetails.jsx'

const CoustomRouter = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path='/pokemon/:id' element={<PokeomnDetails />} />
    </Routes>
    </div>
  )
}

export default CoustomRouter;
