import { useContext } from "react";
import styles from "./MenuPokemon.module.css";
import BoxSearch from "../boxSearch/BoxSearch";
import { PokemonContext } from "../../contexts/PokemonContext";
import BoxFavorites from "../BoxFavorites/BoxFavorites";
import { I18nContext } from "../../../context/I18nProvider";

const MenuPokemon = () => {
  const { loggedIn, handleLogin,handleState} = useContext(PokemonContext);
  const {t} = useContext(I18nContext);
  function exitSession() {
    handleState();
    console.log(loggedIn);
    handleLogin(null);
    localStorage.removeItem("username");

  }

  return (
    <>
      {/* agregar header */}
      <div className={styles.content}>
        <BoxSearch></BoxSearch>

        <main className={styles.favorites}>
          <div className={styles.headerFavorites}>
            <h1 className={styles.titleFavorites}>{t("Favorites")}</h1>
            <button className={styles.exit} onClick={exitSession}>
              {t("Exit")}
            </button>
          </div>
      <BoxFavorites></BoxFavorites>
        </main>
      </div>
    </>
  );
};
export default MenuPokemon;
