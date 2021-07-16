import React, { useState } from 'react';
import { Box, CardContent, Card, Button, CardActions, CardHeader, TextField, Paper, Modal, InputLabel, Container } from '@material-ui/core';
import { useStyles } from './Login.styles';
import { postLogin } from '../../../clients/backend';
import { useHistory } from 'react-router-dom';
import { useHomeDispatch } from '../Home/home.context';
import * as HomeActions from '../Home/home.actions';
import Pokeball from '../../../assets/images/pokeball.png';
import { editUser } from '../../../clients/backend';

export default function LoginPage() {
    const dispatch = useHomeDispatch();
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [openModal, setOpenModal] = useState(false);
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');

    const login = async () => {
        const { token, user } = await postLogin(email, password);
        if (token) {
            const userData = JSON.stringify(user);
            localStorage.setItem('token', token);
            localStorage.setItem('user', userData);
            dispatch(HomeActions.setUser(user));
            history.push('/home');
        }
    }
    const handleEdit = () => {
        setOpenModal(true)
    }
    const submitForm = () => {
        closeEdit();
        editUser(email, name, username, password);
    }
    const closeEdit = () => {
        setOpenModal(false)
    }

    return (
        <form onSubmit={async (e) => { e.preventDefault(); login(); }} >
            <Box className={classes.root}>
                <Card className={classes.card}>
                    <CardHeader className={classes.header} title='Welcome to Pokédex' classes={{
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
                        <a onClick={handleEdit} className={classes.link}>Create your account</a>
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
                        <InputLabel >UserName:</InputLabel>
                        <TextField
                            className={classes.closeSpace}
                            fullWidth
                            required
                            type='string'
                            name='Nome de usuario'
                            size="small"
                            variant='outlined'
                            margin='normal'
                            onChange={(value) => { setUserName(value.target.value) }}
                        />
                        <InputLabel className={classes.closeSpace}>City:</InputLabel>
                        <TextField
                            className={classes.closeSpace}
                            fullWidth
                            required
                            type='string'
                            size="small"
                            name='Cidade'
                            variant='outlined'
                            margin='normal'
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
                        <InputLabel className={classes.closeSpace}>Birth date:</InputLabel>
                        <TextField
                            className={classes.closeSpace}
                            fullWidth
                            required
                            type='date'
                            name='data'
                            size="small"
                            variant='outlined'
                            margin='normal'
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
        </form>

    );
}