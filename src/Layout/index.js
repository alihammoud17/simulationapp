import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import { Box, Portal, useDisclosure } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bgColor="cream">
      <Navbar onOpen={onOpen} />
      <Outlet />
      <Footer />
      <Portal>
        <Sidebar isOpen={isOpen} onClose={onClose} />
      </Portal>
    </Box>
  );
};

export default Layout;
