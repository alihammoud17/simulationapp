import { Box } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavLink.module.css';

const NavbarLink = ({ children }) => {
  return (
    <Box
      style={({ isActive }) =>
        isActive ? styles.active_navlink : styles.navlink
      }
      as={NavLink}
    >
      {children}
    </Box>
  );
};

export default NavbarLink;
