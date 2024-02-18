import { useEffect, useState, useContext } from "react";
import styles from "./BoxSearch.module.css";
import SearchPokemon from "../searchPokemon/SearchPokemon";
import { PokemonContext } from "../../contexts/PokemonContext";
import { I18nContext } from "../../../context/I18nProvider";

function BoxSearch() {
  const { handleSubmit,setSearchTerm ,searchTerm ,showBoxResutl } = useContext(PokemonContext);

  const [pokemonData] = useState(null);

  const {t} = useContext(I18nContext);

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    //console.log(pokemonData);
  }, [pokemonData,showBoxResutl, searchTerm]);

  return (
    <>
      <form className={styles.buscador} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className={styles.button}>{t("Search")}</button>
        <div className={styles.containerSearch}>
          {showBoxResutl && <SearchPokemon />}
        </div>
      </form>
    </>
  );
}
export default BoxSearch;
