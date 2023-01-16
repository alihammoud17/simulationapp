import { Box } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { active_navlink, navlink } from './Navbarlink.js';

const NavbarLink = ({ to, children }) => {
  return (
    <Box
      style={({ isActive }) => (isActive ? active_navlink : navlink)}
      as={NavLink}
      to={to}
    >
      {children}
    </Box>
  );
};

export default NavbarLink;
