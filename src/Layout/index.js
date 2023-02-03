import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import { Box, Portal, useDisclosure } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bgColor="cream" display="flex" flexDir="column" minH="100vh">
        <Box flexGrow="1">
          <Navbar onOpen={onOpen} />
          <Outlet />
        </Box>
        <Footer />
      </Box>
      <Portal>
        <Sidebar isOpen={isOpen} onClose={onClose} />
      </Portal>
    </>
  );
};

export default Layout;
