import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from "../Components/utils/global.context";


const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const handleThemeChange = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "THEME", payload: newTheme });
  };
  return (
    <div className='nav-container'>
      <h1 className='nav-item-title'><span>D</span>H Odonto</h1>
      <nav>
          <div class= "menu" id="menu">
            <Link to={"/"} >Home</Link>
            <Link to={"/contact"} >Contacto</Link>
            <Link to={"/favs"} >Favoritos</Link>
          </div>
          <button class="toggle" onClick={handleThemeChange}>{state.theme === "light" ? "🌙" : "🌞"}</button>
      </nav>
    </div>
  )
}

export default Navbar