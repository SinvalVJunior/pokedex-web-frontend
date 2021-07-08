import React, { useState } from 'react';
import { Box, CardContent, Card, Button, CardActions, CardHeader, TextField, CardMedia } from '@material-ui/core';
import { useStyles } from './Login.styles';
import pokeball from '../../../assets/images/pokeball.png'
import { postLogin } from '../../../clients/backend';
import { useHistory } from 'react-router-dom';

export default function LoginPage() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const login = async () => {
        const { token } = await postLogin(email, password);
        if (token) {
            localStorage.setItem('token', token);
            history.push('/home');
        }
    }

    return (
        <form onSubmit={async (e) => { e.preventDefault(); login(); }} >
            <Box className={classes.root}>
                <Card className={classes.card}>
                    <CardHeader className={classes.header} title='Welcome to Pokédex' />
                    <CardContent>
                        <TextField
                            required
                            fullWidth
                            type='email'
                            name='email'
                            variant='outlined'
                            placeholder='Email'
                            margin='normal'
                            onChange={(value) => { setEmail(value.target.value) }}
                        />
                        <TextField
                            fullWidth
                            required
                            type='password'
                            name='password'
                            variant='outlined'
                            placeholder='Senha'
                            margin='normal'
                            onChange={(value) => { setPassword(value.target.value) }}
                            
                        />
                    </CardContent>
                    <CardActions className={classes.buttonWrapper}>
                        <Button variant='contained' classes={{
                            root: classes.button,
                            label: classes.buttonLabel
                        }} type="submit">
                            login
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </form>
    );
}