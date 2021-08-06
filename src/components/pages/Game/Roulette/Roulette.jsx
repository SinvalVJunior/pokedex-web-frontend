import React from "react";
import GameBoard from "../../Game/GameBoard";
import { useStyles } from "./Roulette.styles";
import { useState, useEffect, useRef } from "react";
import { getPokemons } from '../../../../clients/backend';


function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

const Roulette = () => {
  const [pokemons, setPokemons] = useState({ error: true });
  const [selected, setSelected] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [counter, setCounter] = useState(0);
  const [stop, setStop] = useState(true);
  const [time, setTime] = useState(50);
  const classes = useStyles();
  const numberOfPokemons = 6;
  
  const playGame = () => {
    const variation =  Math.floor(Math.random()*12);
    setStop(false);   
    setTimeout(() => {
      setStop(true);
      setTime(50);
    }, (5000 + variation * 400));
  };

  const add = () => {
    let newSelected = selected.slice(0);
    newSelected[counter] = false;
    newSelected[(counter+1)%6] = true;
    setCounter((counter + 1) % 6);   
    setSelected(newSelected);
    setTime(time + 25);
  };

  useInterval(add, stop?null:time);
  
  useEffect(() => {
    const updatePokemons = async () => {
      setPokemons(await getPokemons(numberOfPokemons));
    }
    updatePokemons();
  }, []);

  return (
    <>
      <header></header>
      <main>
        { !pokemons.error ? <GameBoard selected={selected} pokemons={pokemons} /> : <></> }
        <button
          className={classes.playButton}
          onClick={() => {
            playGame();
          }}
        >
          Play
        </button>
      </main>
    </>
  );
};

export default Roulette;
