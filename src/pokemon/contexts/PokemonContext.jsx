/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {

  const [searchTerm, setSearchTerm] = useState("");


  function handleSearchTerm(params) {
    console.log(params);
    setSearchTerm(params);
    console.log(searchTerm);

  }
  

  const [searchResults, setSearchResults] = useState([]);

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("username"));

  // console.log(loggedIn);

  const [isActive, setIsActive] = useState(false);
  const [showBoxResutl, setShowBoxResutl] = useState(false);
  function handleShowBox(stateBox) {
    setShowBoxResutl(stateBox);
  }

  const [isFavorite, setIsFavorite] = useState("");

  const handleFavorite = (valor) => {
    setIsFavorite(valor);
  };

  const handleState = (event) => {

    setIsActive(!isActive);
  };
  const handleLogin = (username) => {
    setLoggedIn(username);
  };




  function dataFetch(search) {
    //console.log(showBoxResutl);
    console.log(search);

    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((response) => response.json())
      .then((data) => {
        handleShowBox(true);

        console.log(data);
        setSearchResults({
          name: data.name,
          id: data.id,
          img: data.sprites.other["official-artwork"].front_default,
          types: data.types.map((e) => {
            return e.type.name;
          }),
          height: data.height / 10,
          weight: data.weight / 10,
        });
      })
      .catch((err) => {
        console.log(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
        console.log(err);
      });
  }


  function handleSubmit(event) {
    event.preventDefault();
    dataFetch(searchTerm);
    handleFavorite("search");

  }

  return (
    <PokemonContext.Provider
      value={{
        searchResults,
        setSearchResults,
        handleLogin,
        handleState,
        loggedIn,
        isActive,
        handleSubmit,
        searchTerm,
        setSearchTerm,
        dataFetch,
        isFavorite,
        handleFavorite,
        showBoxResutl,
        handleShowBox,
        handleSearchTerm,
        
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
