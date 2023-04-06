
import React from "react";
import { Link } from 'react-router-dom';
import { setFavoritosStorage, eliminarDeFavorito, esFavorito} from "../Components/utils/metodosLocalStorage";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if (esFavorito(id)) {
      eliminarDeFavorito(id, name);
    } else {
      const odontologoFav = { name, username, id };
      setFavoritosStorage(odontologoFav);
    }
  }

  return (
    <Link to = {`detail/${id}`}>
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src="images/doctor.jpg" alt='DH-logo' width="100%" />
        <h2>
          {name}
        </h2>
        <h5>
          {username}
        </h5>
        <button onClick={addFav} className="favButton" >{esFavorito(id) ? "⭐️" : "✩"}</button>

    </div>
    </Link>
  );
};

export default Card;

