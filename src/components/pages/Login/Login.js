import React, { useState } from 'react';
import { Box, CardContent, Card, Button, CardActions, CardHeader, TextField, Paper, Modal, InputLabel, Container } from '@material-ui/core';
import { useStyles } from './Login.styles';
import { postLogin, postLoginFacebook } from '../../../clients/backend';
import { useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

import { useHomeDispatch } from '../Home/home.context';
import * as HomeActions from '../Home/home.actions';
import Pokeball from '../../../assets/images/pokeball.png';
import { createUser } from '../../../clients/backend';
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal';

export default function LoginPage() {
    const dispatch = useHomeDispatch();
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [openModal, setOpenModal] = useState(false);
    const [openCreateAccModal, setOpenCreateAccModal] = useState(false);
    const [name, setName] = useState('');

    const login = async () => {
        const { token, user, error } = await postLogin(email, password);

        if (!error) {
            completeLogin(token, user)
        }
    }

    const loginFacebook = async (response) => {
        const { email, name, picture } = response;
        const { token, user, error } = await postLoginFacebook(email, name, picture);

        if (!error) {
            completeLogin(token, user)
        }
    }

    const completeLogin = (token, user) => {
        const userData = JSON.stringify(user);
        localStorage.setItem('token', token);
        localStorage.setItem('user', userData);
        dispatch(HomeActions.setUser(user));
        history.push('/');
    }

    const handleEdit = () => {
        setOpenModal(true)
    }
    const submitForm = () => {
        closeEdit();
        createUser(email, name, password);
        setOpenCreateAccModal(true);
    }
    const closeEdit = () => {
        setOpenModal(false)
    }


    return (
        <form onSubmit={async (e) => { e.preventDefault(); login(); }} >
            <Box className={classes.root}>
                <Card className={classes.card}>
                    <CardHeader className={classes.header} title='Welcome to PokédexWeb' classes={{
                        title: classes.title
                    }} />
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
                        <Button onClick={handleEdit} className={classes.link}>Create your account</Button>
                    </CardContent>
                    <CardActions className={classes.buttonWrapper}>
                        <div>
                        <Button variant='contained' classes={{
                            root: classes.button,
                            label: classes.buttonLabel
                        }} type="submit">
                            login
                        </Button>
                        </div>
                        <FacebookLogin
                            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                            fields="name,email,picture"
                            callback={loginFacebook}
                            textButton="Continue with Facebook"
                            size="medium"
                            disableMobileRedirect={true} />
                    </CardActions>
                </Card>
            </Box>
            <Modal open={openModal} onClose={() => { setOpenModal(false) }} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" >
                <Paper className={classes.modalPaper}>
                    <img src={Pokeball} alt="Pokeball" className={classes.Icon} />
                    <h1 className={classes.perfilTitle}>
                        Create Account
                    </h1>
                    <Container>
                        <InputLabel className={classes.closeSpace}>Name:</InputLabel>
                        <TextField
                            className={classes.closeSpace}
                            fullWidth
                            size="small"
                            required
                            type='string'
                            name='nome'
                            variant='outlined'
                            margin='normal'
                            onChange={(value) => { setName(value.target.value) }}
                        />
                        <InputLabel className={classes.closeSpace}>Email:</InputLabel>
                        <TextField
                            className={classes.closeSpace}
                            required
                            size="small"
                            fullWidth
                            type='email'
                            name='email'
                            variant='outlined'
                            margin='normal'
                            onChange={(value) => { setEmail(value.target.value) }}
                        />
                        <InputLabel className={classes.closeSpace}>Password:</InputLabel>
                        <TextField
                            className={classes.closeSpace}
                            fullWidth
                            required
                            size="small"
                            type='password'
                            name='password'
                            variant='outlined'
                            margin='normal'
                            onChange={(value) => { setPassword(value.target.value) }}
                        />                
                        <Button variant='contained' onClick={submitForm} classes={{
                            root: classes.saveButton,
                            label: classes.buttonLabel,
                        }} type="submit">
                            Save
                        </Button>
                    </Container>
                </Paper>
            </Modal>
            <ConfirmationModal 
                title="Success"
                message=''
                open={openCreateAccModal} confirmButtonLabel="Gotcha!" 
                handleConfirm={() => {setOpenCreateAccModal(false)}} 
            />
        </form>

    );
}