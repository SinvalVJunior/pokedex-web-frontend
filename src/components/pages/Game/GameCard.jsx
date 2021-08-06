import React from "react";
import { useStyles } from "./Roulette/Roulette.styles";

const GameCard = ({ pokemon, selected }) => {
  const classes = useStyles();

  return (
    <div className={selected ? `${classes.gameCard} ${classes.selectedGameCard}` : classes.gameCard}>
      <img className={classes.gameCardImage} src={pokemon?.gif} alt=""/>
      <h2 className={classes.gameCardText}>{pokemon?.name}</h2>
    </div>
  );
};

export default GameCard;
