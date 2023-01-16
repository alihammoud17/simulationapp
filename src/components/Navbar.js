import {
  Flex,
  Image,
  List,
  ListItem,
  Box,
  Link,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RRDLink } from 'react-router-dom';
import { CHiMenu, CHiOutlineShoppingBag } from './Icons';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  return (
    <Flex
      bgColor="white"
      align="center"
      justify="center"
      h="6.25rem"
      w="100%"
      boxShadow="botBase"
    >
      <Box w="33%" display={{ base: 'block', lg: 'none' }}>
        <CHiMenu fontSize="1.7rem" />
      </Box>
      <Flex
        h="100%"
        w="20%"
        justify={{ base: 'center', lg: 'start' }}
        align={{ base: 'center', lg: 'start' }}
      >
        <Link as={RRDLink} to="/" w="100px" h="100%">
          <Image
            justifySelf="center"
            h="100%"
            w="100px"
            src="/images/main_logo_transparent.png"
          ></Image>
        </Link>
        <Spacer w="80%" />
      </Flex>
      <Flex display={{ base: 'none', lg: 'block' }} w="50%" justify="end">
        <List>
          <Flex
            align="center"
            justify="space-evenly"
            gap={70}
            textAlign="center"
          >
            <ListItem w="8.2rem">
              <NavbarLink to="/">Home</NavbarLink>
            </ListItem>
            <ListItem w="8.2rem">
              <NavbarLink to="/aboutus">About Us</NavbarLink>
            </ListItem>
            <ListItem w="8.2rem">Products</ListItem>
            <ListItem w="8.2rem">Contact Us</ListItem>
          </Flex>
        </List>
      </Flex>
      <Flex justify="end" w="25%">
        <List>
          <ListItem padding={10}>
            <CHiOutlineShoppingBag fontSize="1.7rem" />
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
};

export default Navbar;
