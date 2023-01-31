import {
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  List,
  ListItem,
  Menu,
  Link,
  Collapse,
  Accordion,
  AccordionItem,
  Box,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import React from 'react';
import NavbarLink from './NavbarLink';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Simulation</DrawerHeader>
        <DrawerBody>
          <Accordion allowToggle mb={5} border={0}>
            <AccordionItem border={0}>
              <h2>
                <AccordionButton _hover={{}} _active={{}} _focus={{}} p={0}>
                  <Box as={'span'} flex={1} textAlign="left">
                    Shop Now
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel mt={4} p={0}>
                <List>
                  <ListItem>
                    <NavbarLink to="/products">Hoodies</NavbarLink>
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <List>
            <ListItem h="2rem" w="5.2rem">
              <NavbarLink to="/aboutus">About Us</NavbarLink>
            </ListItem>
            <ListItem h="2rem" w="5.2rem">
              Contact Us
            </ListItem>
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;