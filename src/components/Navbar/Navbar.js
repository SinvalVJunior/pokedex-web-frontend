import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData, SidebarNotLoggedData } from './SidebarData';
import { useStyles } from './Navbar.styles.js';
import { IconContext } from 'react-icons';
import UserMenu from '../UserMenu/UserMenu';
import { useHomeState } from '../pages/Home/home.context';

function Navbar() {
    const state = useHomeState();
    const [sidebar, setSidebar] = useState(false);
    const [user, setUser] = useState({});
    const classes = useStyles();
    const showSidebar = () => setSidebar(!sidebar);

    useEffect(() => {
        setUser(state?.user);
    }, [state?.user]);

    const userLoggedMenu = SidebarData().map((item, index) => {
        return (
            <li key={index} className={item.cName}>
                <Link to={item.path} onClick={showSidebar}>
                    {item.icon}
                    <span className={classes.span}>{item.title}</span>
                </Link>
            </li>
        );
    }
    );

    const userNotLoggedMenu = SidebarNotLoggedData().map((item, index) => {
        return (
            <li key={index} className={item.cName}>
                <Link to={item.path} onClick={showSidebar}>
                    {item.icon}
                    <span className={classes.span}>{item.title}</span>
                </Link>
            </li>
        );
    }
    );


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className={classes.navbar}>
                    <Link to='#' className={classes.menuBars}>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <UserMenu />
                </div>
                <nav className={sidebar ? `${classes.navMenu} ${classes.navMenuActive}` : classes.navMenu}>
                    <ul className={classes.navMenuItems} >
                        <li className={classes.navbarToggle}>
                            <Link to='#' className={classes.menuBars} onClick={showSidebar}>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {user?.userId ? userLoggedMenu : userNotLoggedMenu}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
