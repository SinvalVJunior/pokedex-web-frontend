import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { useStyles } from './Navbar.styles.js';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const classes = useStyles();
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className={classes.navbar}>
                    <Link to='#' className={classes.menuBars}>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? `${classes.navMenu} ${classes.navMenuActive}` : classes.navMenu}>
                    <ul className={classes.navMenuItems} onClick={showSidebar}>
                        <li className={classes.navbarToggle}>
                            <Link to='#' className={classes.menuBars}>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData().map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span className={classes.span}>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
