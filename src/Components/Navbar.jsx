import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='nav-container'>
      <h1 className='nav-item-title'><span>D</span>H Odonto</h1>
      <nav>
          <div id="menu">
            <Link to={"/"} >Home</Link>
            <Link to={"/contact"} >Contacto</Link>
            <Link to={"/favs"} >Favoritos</Link>
          </div>
          <button>Change theme</button>
      </nav>
    </div>
  )
}

export default Navbar