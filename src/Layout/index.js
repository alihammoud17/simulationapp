import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <Box bgColor="#FFFDD0">
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Layout;
