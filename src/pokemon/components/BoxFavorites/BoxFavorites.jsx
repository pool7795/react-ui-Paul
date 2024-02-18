import { useEffect, useState, useContext } from "react";
import styles from "./BoxFavorites.module.css";
import { PokemonContext } from "../../contexts/PokemonContext";
import FavoritePokemon from "../favoritePokemon/FavoritePokemon";

function BoxFavorites() {
  const { loggedIn } = useContext(PokemonContext);
  const { isActive } = useContext(PokemonContext);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    //console.log("Efecto ejecutado. loggedIn:", loggedIn, "isActive:", isActive);
    const options = {
      method: "GET",
      headers: { "User-Agent": "insomnia/2023.5.8" },
    };

    fetch(
      `https://poke-collection-lite-production.up.railway.app/api/${loggedIn}/favorites?username=${loggedIn}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.ok) {
          //console.log("Data from server:", response.data);
          setFavorites(response.data); 
        } else {
          console.error("Error en la respuesta del servidor:", response.error);
        }
      })
      .catch((err) => console.error(err));
  }, [loggedIn, isActive]);
  return (
    <>
      <div className={styles.containerFavorites}>
        {favorites &&
          favorites.map((favorite, index) => (
            <FavoritePokemon key={index} data={favorite} />
          ))}
      </div>
    </>
  );
}

export default BoxFavorites;
