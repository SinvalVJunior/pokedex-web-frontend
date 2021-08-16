import React, { useState } from 'react';
import { Paper, Container, Typography, Grid, Divider, Button, Collapse, Modal } from '@material-ui/core';
import { useStyles } from './PokemonCard.styles';
import * as Gicons from 'react-icons/gi';
import * as Bscons from 'react-icons/bs';
import * as Iocons from 'react-icons/io';
import * as Hicons from 'react-icons/hi';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

export default function PokemonCard({ pokemon }) {

    const classes = useStyles();
    const [elevation, setElevation] = useState(5);
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);


    const toolip = (text) => <div className={classes.toolipContainer}> <span className={classes.toolipText}>{text}</span> </div>

    const handleMouseEnter = () => {
        setElevation(24);
        setShow(true);
    };

    const handleMouseLeave = () => {
        setElevation(3);
        setShow(false);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const basicStats = () => (
        <Grid container spacing={1}>
            <Grid item={true} xs={6} >
                <ul className={classes.pokemonStat}>
                    <li className={classes.list} key={0}>
                        {toolip("Attack")}
                        <Gicons.GiBroadsword color="red" className={classes.statLogo} />
                        {pokemon?.attack}
                    </li>
                    <li className={classes.list} key={1}>
                        {toolip("Special Attack")}
                        <Bscons.BsLightningFill color="orange" className={classes.statLogo} />
                        {pokemon?.specialAttack}
                    </li>
                    <li className={classes.list} key={2}>
                        {toolip("Speed")}
                        <Gicons.GiWalkingBoot color="green" className={classes.statLogo} />
                        {pokemon?.speed}
                    </li>
                </ul>
            </Grid>
            <Grid item={true} xs={6} >
                <ul className={classes.pokemonStat}>
                    <li className={classes.list} key={3}>
                        {toolip("HP")}
                        <Gicons.GiHeartPlus color="pink" className={classes.statLogo} />
                        {pokemon?.hp}
                    </li>
                    <li className={classes.list} key={4}>
                        {toolip("Defense")}
                        <Bscons.BsShieldShaded color="blue" className={classes.statLogo} />
                        {pokemon?.defense}
                    </li>
                    <li className={classes.list} key={5}>
                        {toolip("Special Defense")}
                        <Gicons.GiRosaShield color="purple" className={classes.statLogo} />
                        {pokemon?.specialDefense}
                    </li>
                </ul>
            </Grid>
        </Grid>
    );

    const speciesStats = () => (
        <Grid container spacing={1}>
            <Grid item={true} xs={6} >
                <ul className={classes.pokemonStat}>
                    <li className={classes.list} key={0}>
                        <div className={classes.speciesList}>
                            {toolip("Habitat")}
                            <Gicons.GiPineTree color="green" className={classes.statLogo} />
                            {pokemon?.habitat}
                        </div>
                    </li>
                    <li className={classes.speciesList} key={1}>
                        {toolip("Color")}
                        <Iocons.IoIosColorPalette color={pokemon?.color} className={classes.statLogo} />
                        {pokemon?.color}
                    </li>
                    <li className={classes.speciesList} key={2}>
                        {toolip("Base Happiness")}
                        <Hicons.HiEmojiHappy color="#FFDC41" className={classes.statLogo} />
                        {pokemon?.baseHappiness}
                    </li>
                    <li className={classes.speciesList} key={3}>
                        {toolip("Shape")}
                        <Iocons.IoIosBody color="black" className={classes.statLogo} />
                        {pokemon?.shape}
                    </li>

                </ul>
            </Grid>
            <Grid item={true} xs={6} >
                <ul className={classes.pokemonStat}>
                    <li className={classes.speciesList} key={4}>
                        {toolip("Evolves To")}
                        <AiIcons.AiOutlineArrowUp color="red" className={classes.statLogo} />
                        {pokemon?.evolvesTo !== "" ? pokemon?.evolvesTo : "None"}
                    </li>
                    <li className={classes.speciesList} key={5}>
                        {toolip("Evolves From")}
                        <AiIcons.AiOutlineArrowDown color="red" className={classes.statLogo} />
                        {pokemon?.evolvesFrom !== "" ? pokemon?.evolvesFrom : "None"}
                    </li>
                    <li className={classes.speciesList} key={6}>
                        {toolip("Mythical")}
                        <FaIcons.FaDragon color="blue" className={classes.statLogo} />
                        {pokemon?.isMythical ? "Yes" : "No"}
                    </li>
                    <li className={classes.speciesList} key={7}>
                        {toolip("Legendary")}
                        <Gicons.GiDragonBreath color="orange" className={classes.statLogo} />
                        {pokemon?.isLegendary ? "Yes" : "No"}
                    </li>
                </ul>
            </Grid>
        </Grid>
    );

    return (
        <>
            <Paper className={classes.root} elevation={elevation} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                <img src={pokemon?.gif} className={classes.image} alt="Pokemon" />
                <Container className={classes.container}>
                    <Typography className={classes.pokemonName} >{pokemon?.name}</Typography>
                    <Divider />
                    {basicStats()}
                    <Collapse in={show}>
                        <Button classes={{
                            root: classes.buttonLearn,
                            label: classes.buttonLearnLabel
                        }} onClick={() => { setOpen(true) }} >Learn More</Button>
                    </Collapse>
                </Container>
            </Paper>
            <Modal open={open} onClose={handleClose} >
                <Paper className={classes.modalPaper}>
                    <Container className={classes.pokemonImageWrapper}>
                        <img src={pokemon?.image} className={classes.pokemonImage} alt=""/>
                    </Container>
                    <h2 className={classes.pokemonName}>{pokemon?.name}</h2>
                    <table>
                        <tr>
                            <td className={classes.firstColumn}>Basic Stats</td>
                            <td>{basicStats()}</td>

                        </tr>
                    </table>
                    <Divider />
                    <table>
                        <tr>
                            <td className={classes.firstColumn}>Species Stats</td>
                            <td>{speciesStats()}</td>
                        </tr>
                    </table>
                    <Divider />
                    <table className={classes.curiosityTable}>
                        <tr>
                            <td className={classes.firstColumn}>Curiosity</td>
                            <td className={classes.curiosityText}>{pokemon?.curiosity}</td>
                        </tr>
                    </table>

                </Paper>
            </Modal>
        </>
    );
};