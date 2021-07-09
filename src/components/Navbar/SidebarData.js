import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import { useStyles } from './Navbar.styles.js';

const SidebarData = () => {
  const classes = useStyles();

  return [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: classes.navText
    },
    {
      title: 'Inventory',
      path: '/inventory',
      icon: <IoIcons.IoIosPaper />,
      cName: classes.navText
    },
    {
      title: 'Play',
      path: '/play',
      icon: <FiIcons.FiPlay />,
      cName: classes.navText
    }
  ];
}

export { SidebarData }