import { useContext, useEffect } from "react";
import Welcome from "../welcome/Welcome";
import MenuPokemon from "../menuPokemon/MenuPokemon";
import { PokemonContext } from "../../contexts/PokemonContext";

function Control() {

  const  {loggedIn} = useContext(PokemonContext);
  useEffect(() => {
  }, [loggedIn]);


  return (
    <div>
    {loggedIn === null ? <Welcome /> : <MenuPokemon />}
    </div>

  );
}

export default Control;