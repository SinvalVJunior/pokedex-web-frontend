import React, { useEffect, useState, useRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { Typography, Popper, Button, Grow, ClickAwayListener, MenuList, MenuItem, Paper, Container } from '@material-ui/core';
import { useStyles } from './UserMenu.styles.js';
import { useHome } from '../pages/Home/home.context';
import * as HomeActions from '../pages/Home/home.actions';


export default function UserMenu() {
    const [state, dispatch] = useHome();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});
    const anchorRef = useRef(null);
    const history = useHistory();

    useEffect(() => {
        setUser(state?.user);
        console.log(state?.user);
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
        history.push('/edit');
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
        <div>
            {!user?.userId ?
                <Link to='/login' className={classes.userLogo}>
                    <FaIcons.FaUser />
                    <Typography variant='caption' className={classes.menuUserNotLogged} >
                        Olá, bem-vindo! Faça login
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
                        {!open ? <AiIcons.AiOutlineArrowDown /> : <AiIcons.AiOutlineArrowUp />} Olá, {user?.name}!
                    </Button>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <Container>
                                        <Typography variant='caption' className={classes.menuUserData} >
                                            <ul className={classes.listData}>
                                                <li>username: {user?.username}</li>
                                                <li>email: {user?.email}</li>
                                            </ul>
                                        </Typography>
                                    </Container>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList variant='menu' autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown}>
                                            <MenuItem className={classes.userEditButton} onClick={handleEdit} disableRipple><AiIcons.AiOutlineEdit className={classes.userLogo} /> Editar</MenuItem>
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
    );

}