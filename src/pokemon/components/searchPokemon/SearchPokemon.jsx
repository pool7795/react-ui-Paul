import { I18nContext } from "../../../context/I18nProvider";
import { PokemonContext } from "../../contexts/PokemonContext";
import styles from "./SearchPokemon.module.css";
import { useContext, useEffect } from "react";

function SearchPokemon() {
  const { searchResults, loggedIn, handleState, isFavorite, handleShowBox, capitalizeName } =
    useContext(PokemonContext);
    const {t} = useContext(I18nContext);

  let typesPokemon = [
    {
      type: "Normal",
      color: "#AAA67F",
    },
    {
      type: "Fighting",
      color: "#C12239",
    },
    {
      type: "Flying",
      color: "#A891EC",
    },
    {
      type: "Ground",
      color: "#DEC16B",
    },
    {
      type: "Poison",
      color: "#A43E9E",
    },
    {
      type: "Rock",
      color: "#B69E31",
    },
    {
      type: "Bug",
      color: "#A7B723",
    },
    {
      type: "Ghost",
      color: "#70559B",
    },
    {
      type: "Steel",
      color: "#B7B9D0",
    },
    {
      type: "Fire",
      color: "#F57D31",
    },
    {
      type: "Water",
      color: "#6493EB",
    },
    {
      type: "Grass",
      color: "#74CB48",
    },
    {
      type: "Electric",
      color: "#F9CF30",
    },
    {
      type: "Psychic",
      color: "#FB5584",
    },
    {
      type: "Ice",
      color: "#9AD6DF",
    },
    {
      type: "Dragon",
      color: "#7037FF",
    },
    {
      type: "Dark",
      color: "#75574C",
    },
    {
      type: "Fairy",
      color: "#E69EAC",
    },
  ];

  function addFavorite() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "insomnia/2023.5.8",
      },
      body: JSON.stringify({
        id: searchResults.id,
        name: searchResults.name,
        types: searchResults.types,
        avatarUrl: searchResults.img,
      }),
    };

    fetch(
      `https://poke-collection-lite-production.up.railway.app/api/${loggedIn}/favorites`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        //console.log("aqui");
        handleState();
        handleShowBox(false);
      })
      .catch((err) => console.error(err));
  }

  function removeFavorite() {
    //console.log(searchResults.id);
    const options = {
      method: "DELETE",
      headers: { "User-Agent": "insomnia/2023.5.8" },
    };

    fetch(
      `https://poke-collection-lite-production.up.railway.app/api/${loggedIn}/favorites/${`${searchResults.id}`}`,
      options
    ).then(() => {
      handleState();
      handleShowBox(false);
    });
  }

  function getTypeColor(type) {
    //console.log(searchResults.types);

    let typeInfo = typesPokemon.find(
      (t) => t.type.toUpperCase() === type.toUpperCase()
    );
    return typeInfo ? typeInfo.color : "#000000";
  }
  useEffect(() => {

  }, [isFavorite]);
  return (
    <>
      <div className={styles.targetContainer}>
        <h1>{searchResults.name}</h1>
        <h2>{`#${String(searchResults.id).padStart(3, '0')}`}</h2>
        <img src={searchResults.img} alt="" />
        <div className={styles.typeContainer}>
          {searchResults.types &&
            searchResults.types.map((type, index) => (
              <div
                className={styles.typeTarget}
                key={index}
                style={{ background: getTypeColor(type) }}
              >
                {t(type)}
              </div>
            ))}
        </div>

        <div className={styles.valuePokemon}>
          <div className={styles.valueTarget}>
            <div className={styles.valueContent}>
              <img src="src/assets/Pokemons/weight.png" alt="" />
              <h3>{searchResults.weight}kg</h3>
            </div>
            <h4>{t("Weight")}</h4>
          </div>
          <div className={styles.valueTarget}>
            <div className={styles.valueContent}>
              <img src="src/assets/Pokemons/height.png" alt="" />
              <h3>{searchResults.height}m</h3>
            </div>
            <h4>{t("Height")}</h4>
          </div>
        </div>
      </div>
      <button
        className={styles.buttonFavorite}
        onClick={isFavorite === "favorite" ? removeFavorite : addFavorite}
      >
        <img className={styles.img} src={isFavorite === "favorite" ? "src/assets/Pokemons/StartAll.png":"src/assets/Pokemons/Vector.png"} alt="" />
        <p className={styles.textFavorite}>
          {isFavorite === "favorite"
            ? (t("Remove"))
            : (t("Add"))}
        </p>
      </button>
    </>
  );
}

export default SearchPokemon;
