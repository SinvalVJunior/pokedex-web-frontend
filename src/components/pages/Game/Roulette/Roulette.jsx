import React from "react";
import GameBoard from "../../Game/GameBoard";
import ConfiramationModal from "../../../ConfirmationModal/ConfirmationModal";
import { useStyles } from "./Roulette.styles";
import { useState, useEffect, useRef } from "react";
import { getPokemons, addPokemonToInventory } from '../../../../clients/backend';
import { useHomeState, useHomeDispatch } from '../../Home/home.context';
import * as HomeActions from '../../Home/home.actions';

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
  const [pokemons, setPokemons] = useState([]);
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
  const [showButton, setShowButton] = useState(true);
  const [addPokemon, setAddPokemon] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [openModal, setOpenModal] = useState(false);

  const state = useHomeState();
  const dispach = useHomeDispatch();
  const classes = useStyles();
  const numberOfPokemons = 6;
  
  const playGame = () => {
    const variation =  Math.floor(Math.random()*12);
    setStop(false);   
    setTimeout(() => {
      setStop(true);
      setTime(50);
      setAddPokemon(true);
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

  const capitalize = (string) => {
    if(!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1); 
  }

  useInterval(add, stop?null:time);
  
  useEffect(() => {
    const updatePokemons = async () => {

      dispach(HomeActions.setLoading(true));
      const pokemonsData = await getPokemons(numberOfPokemons)
      dispach(HomeActions.setLoading(false));

      setPokemons(pokemonsData);
    }
    updatePokemons();
  }, [dispach]);

  useEffect(() => {
    const callAddPokemon = async () => {
      const userId = state?.user?.id;
      const selectedIndex = selected.indexOf(true);
      setSelectedPokemon(pokemons[selectedIndex]);


      dispach(HomeActions.setLoading(true));
      await addPokemonToInventory(userId, pokemons[selectedIndex].id);
      dispach(HomeActions.setLoading(false));

      setAddPokemon(false);
      setOpenModal(true);

    }
    if(stop && addPokemon) {
      callAddPokemon();
    }
  },[ stop, addPokemon, state?.user, pokemons, selected, dispach, selectedPokemon, setSelectedPokemon ]);

  return (
    <>
        <main>
          <GameBoard selected={selected} pokemons={pokemons} /> 
          {showButton && !state.loading &&
            <button
              className={classes.playButton}
              onClick={() => {
                setShowButton(false);
                playGame();
              }}
            >
              Play
            </button>
          }
        </main>
        <ConfiramationModal 
          title="Congratulations!" 
          message={`"${capitalize(selectedPokemon?.name)}" was added to your inventory!\nCheck your inventory to see more about this Pokémon.`} 
          open={openModal} confirmButtonLabel="Gotcha!" 
          handleConfirm={() => {setOpenModal(false)}} 
        />
    </>
  );
};

export default Roulette;
