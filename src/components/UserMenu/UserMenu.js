import React, { useEffect, useState, useRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import { Link, useHistory } from 'react-router-dom';
import { Typography, Popper, Button, Grow, ClickAwayListener, MenuList, MenuItem, Paper, Container, TextField,Modal,InputLabel  } from '@material-ui/core';
import { useStyles } from './UserMenu.styles.js';
import { useHome } from '../pages/Home/home.context';
import * as HomeActions from '../pages/Home/home.actions';
import Pokeball from '../../assets/images/pokeball.png';
import {editUser} from '../../clients/backend';

export default function UserMenu() {
    const [state, dispatch] = useHome();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});
    const anchorRef = useRef(null);
    const history = useHistory();
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const [name, setName] = useState('');

    useEffect(() => {
        setUser(state?.user);
    }, [state?.user]);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current?.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const handleEdit = () => {
        setOpenModal(true)
    }
    const closeEdit = () => {
        setOpenModal(false)
    }
    const submitForm = () => {
        closeEdit();
        editUser(state?.user?.id, name).then((response) => {
            if(response.error === false){
                const newUser = {"email":response.email,"name":response.name,"id":response._id};
                const userData = JSON.stringify(newUser)
                localStorage.setItem('user', userData);
                dispatch(HomeActions.setUser(newUser));
                setOpenEditModal(true);
            }                
        });
        setName('');
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        history.push('/login');
        handleToggle();
        setUser({});
        dispatch(HomeActions.setUser({}));
    
    }

    return (
        <>
        <div>
            {!user?.email ?
                <Link to='/login' className={classes.userLogo}>
                    <FaIcons.FaUser />
                    <Typography variant='caption' className={classes.menuUserNotLogged} >
                        Login
                    </Typography>
                </Link>
                :
                <div>
                    <Button
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup='true'
                        onClick={handleToggle}
                        classes={{
                            root: classes.button,
                            label: classes.buttonLabel
                        }}
                        disableRipple
                    >
                        {!open ? <AiIcons.AiOutlineArrowDown /> : <AiIcons.AiOutlineArrowUp />} Welcome, {user?.name}!
                    </Button>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.menuUserContainer}>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <Container>
                                        <Typography variant='caption' className={classes.menuUserData} >
                                            <ul className={classes.listData}>
                                                <li>name: {user?.name}</li>
                                                <li>email: {user?.email}</li>
                                            </ul>
                                        </Typography>
                                    </Container>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList variant='menu' autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown}>
                                            <MenuItem className={classes.userEditButton} onClick={handleEdit} disableRipple><AiIcons.AiOutlineEdit className={classes.userLogo} /> Edit</MenuItem>
                                            <MenuItem className={classes.userLoggoutButton} onClick={handleLogout}><AiIcons.AiOutlineLogout className={classes.userLogo} color='red' />Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            }

        </div>
        <Modal open={openModal} onClose={() => {setOpenModal(false)}} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" > 
                <Paper className={classes.modalPaper}>
                   <img src={Pokeball} alt="Pokeball" className={classes.Icon}></img>
                    <h1 className={classes.perfilTitle}>
                        Profile
                    </h1>
                    <InputLabel className={classes.closeSpace}>Name:</InputLabel>  
                    <TextField
                        className={classes.closeSpace}
                        fullWidth
                        defaultValue={`${user?.name}`}
                        size="small"
                        required
                        type='string'
                        name='nome'
                        variant='outlined'
                        margin='normal'
                        onChange={(value) => { setName(value.target.value) }}
                    />  
                    <Button variant='contained' onClick={submitForm} classes={{
                            root: classes.saveButton,
                            label: classes.buttonLabel,
                        }} type="submit">
                            Save
                        </Button>
                </Paper>        
            </Modal>
        <ConfirmationModal
          title="Success"
          message=''
          open={openEditModal} confirmButtonLabel="Gotcha!" 
          handleConfirm={() => {setOpenEditModal(false)}} 
        />
        </>
    );

}