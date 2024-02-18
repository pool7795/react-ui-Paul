/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AppStateContext } from "../../context/AppStateProvider";
import TicTacToe from "../TicTacToe";
import MainView from "../MainView/";
import styles from "./MainApp.module.css";
// import VideoFeed from "./VideoFeed";
// import AppPokemon from "./AppPokemon/AppPokemon";


import { useState } from 'react'



import VideoFeed from "/src/videoFeed/VideoFeed.jsx";
import PokemonMain from "../../pokemon/PokemonMain";




function MainApp() {
  const { currentApp } = useContext(AppStateContext); // pokemonAPI, TicTacToe

  return (
    <>
      <main className={styles.main_general}>
        {currentApp === "" && <MainView />}
        {currentApp === "tictac" && <TicTacToe />}
         {currentApp === "wordle" && <h1>Wordle</h1>}
        {currentApp === "video" && <VideoFeed />}
        {currentApp === "pokemon" && <PokemonMain />} 
      </main>
    </>
  );
}

export default MainApp;
