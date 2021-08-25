import React, { useEffect, useState } from 'react';
import { useStyles } from './home.styles';
import { useTheme } from '@material-ui/core';
import { CgPokemon } from 'react-icons/cg';
import { GoMarkGithub } from 'react-icons/go';
import { ImArrowRight } from 'react-icons/im';

import AllPokemons from '../../../assets/images/all-pokemons.png';
import transition from '../../../assets/images/transition.svg';
import transitionEnd from '../../../assets/images/transition-end.svg';

import { useHomeState } from '../../pages/Home/home.context';

export default function Home() {

    const classes = useStyles();
    const theme = useTheme();
    const state = useHomeState();

    const [user, setUser] = useState({ name: "" });

    useEffect(() => {
        setUser(state?.user);
    }, [state?.user]);


    return <>
        <div className={classes.root}>
            <img src={AllPokemons} className={classes.imageBackground} alt="all pokemons" />
            <div className={classes.content}>
                <div className={classes.titleContainer}>
                    <h1 className={classes.titleText}>Welcome to <p className={classes.pokedexWebText}>PokedéxWeb</p></h1>
                </div>
                <p>Glad to see you here! Let's not waste time 'cause we <p className={classes.pokemonText}>Got catch 'em all</p> !</p>
                <p><p className={classes.pokemonText}>I choose you</p> {user?.name} to complete this task.</p>
                <p>Before we start, let's take a tour in what you can do here.</p>
                <table className={classes.table}>
                    <tr className={classes.tableLine}>
                        <td className={classes.tableCell}><p className={classes.pokemonText}>Play</p></td>
                        <td className={classes.tableCell}><p className={classes.pokemonText}><ImArrowRight size={25} /></p></td>
                        <td className={classes.secondColumn}>Here you can count with your luck to get the best Pokémons. Play the roulette and good luck catching them!</td>
                    </tr>
                    <tr className={classes.tableLine}>
                        <td className={classes.tableCell}><p className={classes.pokemonText}>Inventory</p></td>
                        <td className={classes.tableCell}><p className={classes.pokemonText}><ImArrowRight size={25} /></p></td>
                        <td className={classes.secondColumn}>Where you can find the Pokémons you catch, see their stats and learn more about their species!</td>
                    </tr>
                </table>
                <img className={classes.transition} src={transition} alt="transition" />
                <div className={classes.backgroundRed}>
                    <h1 className={classes.pokemonSubtitleText}> 600 POKÉMONS</h1>
                    <p className={classes.textWhite}>All for you to catch. Credits to <a className={classes.pokeAPILink} href="https://pokeapi.co/" target="_blank" rel="noreferrer">PokéAPI</a> </p>
                </div>
                <img className={classes.transition} src={transitionEnd} alt="transition" />
                <div className={classes.foot}>
                    <div className={classes.footElement}>
                        <CgPokemon size={50} color={theme.palette.info.light} />
                        <p><p className={classes.pokemonText}>Release Notes: </p> v0.1-alpha</p>
                        <ul className={`${classes.ul} ${classes.releaseNotesList}`}>
                            <li className={classes.li}><p className={classes.pokemonText}>1 </p>Now you can play in your phone with a much more smooth experience. Check it out now!</li>
                            <li className={classes.li}><p className={classes.pokemonText}>2 </p>New rule for the "Play" game: Now you have only one chance with each composition. Make sure you are lucky today and try it!</li>
                        </ul>

                    </div>
                    <div className={classes.footElement}>
                        <h2 className={classes.pokemonText}>Credits </h2>
                        <p>This project was originally created during studies for a subject at <a className={classes.normalLink} href="https://www.cefetmg.br/" target="_blank" rel="noreferrer">CEFET-MG</a></p>
                        <div className={classes.authors}>
                        <h4 className={classes.pokemonText}>Authors</h4>
                        <ul className={classes.ul}>
                            <li><a className={classes.normalLink} href="https://github.com/MarceloRicoy" target="_blank" rel="noreferrer">@MarceloRicoy</a></li>
                            <li><a className={classes.normalLink} href="https://github.com/SinvalVJunior" target="_blank" rel="noreferrer">@SinvalVJunior</a></li>
                            <li><a className={classes.normalLink} href="https://github.com/Tuwtuw" target="_blank" rel="noreferrer">@Tuwtuw</a></li>
                        </ul>
                        <a className={classes.normalLink} href="https://github.com/SinvalVJunior/pokedex-web" target="_blank" rel="noreferrer">
                            <GoMarkGithub size={50} />
                        </a>
                        </ div>
                    </div>
                </div>
            </div>
        </div>
    </>
}