/* eslint-disable react/prop-types */
import { I18nContext } from "../../../context/I18nProvider";
import { PokemonContext } from "../../contexts/PokemonContext";
import styles from "./FavoritePokemon.module.css";
import { useContext, useEffect } from "react";

function FavoritePokemon({ data }) {
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
  //console.log(data);
  function getTypeColor(type) {
    let typeInfo = typesPokemon.find(
      (t) => t.type.toUpperCase() === type.toUpperCase()
    );
    return typeInfo ? typeInfo.color : "#000000";
  }
  const { setSearchTerm, dataFetch, handleFavorite, searchTerm ,handleSearchTerm ,setIsFavorite} =
    useContext(PokemonContext);
    const {t} = useContext(I18nContext);

  function handleSelect() {
    console.log(data.name);
      dataFetch(data.name);
      handleFavorite("favorite");
  }

  useEffect(() => {

  }, []);
 
  return (
    <>
      <div className={styles.targetContainer} onClick={handleSelect}>
        <h1>{data.name}</h1>
        <h2>{`#${String(data.id).padStart(3, '0')}` }</h2>
        <img className={styles.img} src={data.avatarUrl} alt="" />
        <div className={styles.typeContainer}>
          {data.types &&
            data.types.map((type, index) => (
              <div
                className={styles.typeTarget}
                key={index}
                style={{ background: getTypeColor(type) }}
              >
                {t(type)}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default FavoritePokemon;
