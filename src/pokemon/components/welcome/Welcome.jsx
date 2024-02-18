import { useState, useContext, useEffect} from "react";
import styles from "./Welcome.module.css";
import { PokemonContext } from "../../contexts/PokemonContext";
import { I18nContext } from "../../../context/I18nProvider";


function Welcome() {
  const [username, setUsername] = useState("");
  const { handleState } = useContext(PokemonContext);
  const {t} = useContext(I18nContext);

  function handleSubmit(event) {
    //event.preventDefault();

    localStorage.setItem("username", username);
    handleState();
  }
  useEffect(() => {

  }, [handleState]);
  
  return (
    <>
      <header></header>
        <div className={styles.container}>

      <form className={styles.form} onSubmit={handleSubmit}>  

        <img  className={styles.img} src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="" />

      
        <input
          className={styles.input}
          placeholder={t("username")}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required={true}
        />

        <button type="submit" className={styles.button}>
          {t("Enter")}
        </button>

      </form>
        </div>
    </>
  );
}

export default Welcome;
