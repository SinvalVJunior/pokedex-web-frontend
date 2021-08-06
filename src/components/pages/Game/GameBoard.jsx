import React from "react";
import GameCard from "./GameCard";
import { useStyles } from "./Roulette/Roulette.styles";

//A geracao das Gamecards na mão é apenas mockup
const GameBoard = ({ pokemons, selected }) => {
  const classes = useStyles();

  return (
    <div className={classes.board}>
      <GameCard pokemon={pokemons[0]} selected={selected[0]}/>
      <GameCard pokemon={pokemons[1]} selected={selected[1]}/>
      <GameCard pokemon={pokemons[2]} selected={selected[2]}/>
      <GameCard pokemon={pokemons[3]} selected={selected[3]}/>
      <GameCard pokemon={pokemons[4]} selected={selected[4]}/>
      <GameCard pokemon={pokemons[5]} selected={selected[5]}/>
    </div>
  );
};

export default GameBoard;
