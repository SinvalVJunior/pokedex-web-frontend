import React from "react";
import GameCard from "./GameCard";
import { useStyles } from "./Roulette/Roulette.styles";

//A geracao das Gamecards na mão é apenas mockup
const GameBoard = ({ pokes, selected }) => {
  const classes = useStyles();

  return (
    <div className={classes.board}>
      <GameCard poke={pokes[0]} selected={selected[0]}/>
      <GameCard poke={pokes[1]} selected={selected[1]}/>
      <GameCard poke={pokes[2]} selected={selected[2]}/>
      <GameCard poke={pokes[3]} selected={selected[3]}/>
      <GameCard poke={pokes[4]} selected={selected[4]}/>
      <GameCard poke={pokes[5]} selected={selected[5]}/>
    </div>
  );
};

export default GameBoard;
