import React from "react";
import { useStyles } from "./Roulette/Roulette.styles";

const GameCard = ({ pokemon, selected }) => {
  const classes = useStyles();

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1); 
  }

  return (
    <div className={selected ? `${classes.gameCard} ${classes.selectedGameCard}` : classes.gameCard}>
      <img className={classes.gameCardImage} src={pokemon?.gif} alt=""/>
      <h2 className={classes.gameCardText}>{capitalize(pokemon?.name)}</h2>
    </div>
  );
};

export default GameCard;
