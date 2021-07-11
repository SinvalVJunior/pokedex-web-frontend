import React, { useEffect, useState } from 'react';
import { getInventory } from '../../../clients/backend';
import { useHomeState } from '../Home/home.context';
import { Container, Grid } from '@material-ui/core';
import PokemonCard from './PokemonCard';
import { useStyles } from './Inventory.styles';

export default function Inventory() {

    const state = useHomeState();
    const classes = useStyles();
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const updateInventory = async () => {
            setInventory(await getInventory(state?.user?.userId));
        };
        updateInventory();
    }, [state?.user?.userId]);


    return (

        <Container className={classes.root}>
            <Grid container spacing={1}>
                {
                inventory.length > 0 ? 
                inventory.map((pokemon, index) => (
                    <Grid xs={3} key={index} item={true}>
                        <PokemonCard pokemon={pokemon}  />
                    </Grid>
                )) 
                : <></>}
            </Grid>
        </Container>
    );

}