import React from "react";
import { useStyles } from "../pages/Roulette/Roulette.styles";

const GameCard = ({ poke, selected }) => {
  const classes = useStyles();

  return (
    <div className={selected ? `${classes.gameCard} ${classes.selectedGameCard}` : classes.gameCard}>
      <img className={classes.gameCardImage} src={poke.src} alt=""/>
      <h2 className={classes.gameCardText}>{poke.name}</h2>
    </div>
  );
};

export default GameCard;
