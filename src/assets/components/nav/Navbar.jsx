import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <Link to='/'><h1 className='pok-heading'>Pokedex</h1></Link>
    </div>
  )
}

export default Navbar;
