import React from "react";
import GameCard from "./GameCard";
import { useStyles } from "./Roulette/Roulette.styles";

//A geracao das Gamecards na mão é apenas mockup
const GameBoard = ({ pokemons, selected }) => {
  const classes = useStyles();

  return (
    <div className={classes.board}>
      { pokemons ? pokemons.map((pokemon, index) => ( <GameCard pokemon={pokemon} selected={selected[index]}/> )) : <></> }
    </div>
  );
};

export default GameBoard;
