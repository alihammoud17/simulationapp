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
      <DrawerOverlay zIndex={9999} />
      <DrawerContent zIndex={9999999}>
        <DrawerHeader zIndex={9999999} borderBottomWidth="1px">
          Simulation
        </DrawerHeader>
        <DrawerBody zIndex={99999}>
          <Accordion zIndex={99999} allowToggle mb={5} border={0}>
            <AccordionItem zIndex={99999} border={0}>
              <h2>
                <AccordionButton
                  zIndex={99999}
                  _hover={{}}
                  _active={{}}
                  _focus={{}}
                  p={0}
                >
                  <Box zIndex={99999} as={'span'} flex={1} textAlign="left">
                    Shop Now
                  </Box>
                  <AccordionIcon zIndex={99999} />
                </AccordionButton>
              </h2>
              <AccordionPanel zIndex={99999} mt={4} p={0}>
                <List>
                  <ListItem onClick={onClose}>
                    <NavbarLink to="/products">Hoodies</NavbarLink>
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <List zIndex={99999}>
            <ListItem zIndex={99999} onClick={onClose} h="2rem" w="5.2rem">
              <NavbarLink to="/">Home</NavbarLink>
            </ListItem>
            <ListItem zIndex={99999} onClick={onClose} h="2rem" w="5.2rem">
              <NavbarLink to="/aboutus">About Us</NavbarLink>
            </ListItem>
            <ListItem zIndex={99999} onClick={onClose} h="2rem" w="5.2rem">
              <NavbarLink to="/contactus">Contact Us</NavbarLink>
            </ListItem>
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
