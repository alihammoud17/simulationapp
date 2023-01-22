import {
  Flex,
  Image,
  List,
  ListItem,
  Box,
  Link,
  Spacer,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RRDLink } from 'react-router-dom';
import { CHiMenu, CHiOutlineShoppingBag } from './Icons';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  return (
    <Flex
      // bgColor="white"
      align="center"
      justify="center"
      h="6.25rem"
      w="100%"
      // boxShadow="botBase"
      paddingX={{ base: 5, lg: 0 }}
    >
      <Box w="33%" display={{ base: 'block', lg: 'none' }}>
        <CHiMenu fontSize="1.7rem" />
      </Box>
      <Flex
        h="100%"
        w={{ base: 'auto', lg: '10%' }}
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
      <Flex
        display={{ base: 'none', lg: 'block' }}
        align="center"
        w="60%"
        justify="center"
      >
        <List alignSelf="end">
          <Flex align="center" justify="end" gap={20} textAlign="center">
            <ListItem textAlign="center">
              <Button
                w="8rem"
                h="2rem"
                _hover={{
                  bgColor: '#fffaf0',
                  color: '#212427',
                }}
                bgColor="black"
                color="cream"
              >
                SHOP NOW
              </Button>
            </ListItem>
          </Flex>
        </List>
      </Flex>
      <Flex justify="end" w="30%">
        <List>
          <Flex gap={2} align="center">
            <ListItem display={{ base: 'none', lg: 'block' }} w="5.2rem">
              <NavbarLink to="/aboutus">About Us</NavbarLink>
            </ListItem>
            <ListItem display={{ base: 'none', lg: 'block' }} w="5.2rem">
              Contact Us
            </ListItem>
            <ListItem padding={{ base: 0, lg: 10 }}>
              <Box position="relative">
                <CHiOutlineShoppingBag fontSize="1.7rem" />
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  bgColor="red"
                  w="15px"
                  h="15px"
                  borderRadius="50%"
                  fontSize="10px"
                  color="cream"
                  textAlign="center"
                >
                  0
                </Box>
              </Box>
            </ListItem>
          </Flex>
        </List>
      </Flex>
    </Flex>
  );
};

export default Navbar;
