import { Flex, Image, List, ListItem } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  return (
    <Flex align="center" justify="center" h="6.25rem" w="100%">
      <Image h="100%" src="/images/main_logo_transparent.png"></Image>
      <Flex w="50%" justify="end">
        <List>
          <Flex align="center" justify="space-evenly" gap={70}>
            <ListItem>Home</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Products</ListItem>
            <ListItem>Contact Us</ListItem>
          </Flex>
        </List>
      </Flex>
      <Flex justify="end" w="25%">
        <List>
          <ListItem>Cart</ListItem>
        </List>
      </Flex>
    </Flex>
  );
};

export default Navbar;
