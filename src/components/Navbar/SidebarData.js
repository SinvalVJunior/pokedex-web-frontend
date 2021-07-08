import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import { useStyles } from './Navbar.styles.js';

const SidebarData = () => {
  const classes = useStyles();
  const className = `${classes.nav_text} ${classes.nav_text_a} ${classes.nav_text_a_hover}`
  return [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: className
    },
    {
      title: 'Inventory',
      path: '/inventory',
      icon: <IoIcons.IoIosPaper />,
      cName: className
    },
    {
      title: 'Play',
      path: '/play',
      icon: <FiIcons.FiPlay />,
      cName: className
    }
  ];
}

export { SidebarData }