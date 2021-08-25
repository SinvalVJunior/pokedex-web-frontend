import React, { useEffect, useState } from 'react';
import { getInventory } from '../../../clients/backend';
import { useHomeState } from '../Home/home.context';
import { Container, Grid, useMediaQuery, useTheme } from '@material-ui/core';
import PokemonCard from './PokemonCard';
import { useStyles } from './Inventory.styles';

export default function Inventory() {

    const state = useHomeState();
    const classes = useStyles();
    const [inventory, setInventory] = useState([]);

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const SIZE_OF_CARD_IN_TABLE = isSmall ? 6 : 3;

    useEffect(() => {
        const updateInventory = async () => {
            setInventory(await getInventory(state?.user?.id));
        };
        updateInventory();
    }, [state?.user?.id]);


    return (

        <Container className={classes.root}>
            <Grid container spacing={1}>
                {
                inventory.length > 0 ? 
                inventory.map((pokemon, index) => (
                    <Grid xs={SIZE_OF_CARD_IN_TABLE} key={index} item={true}>
                        <PokemonCard pokemon={pokemon}  />
                    </Grid>
                )) 
                : <></>}
            </Grid>
        </Container>
    );

}