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
import { Link as RRDLink, useNavigate } from 'react-router-dom';
import { CHiMenu, CHiOutlineShoppingBag } from './Icons';
import NavbarLink from './NavbarLink';

const Navbar = ({ onOpen }) => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/products');
  };

  return (
    <Flex
      // bgColor="white"
      zIndex={9999}
      align="center"
      justify="center"
      h="6.25rem"
      w="100%"
      // boxShadow="botBase"
      paddingX={{ base: 5, lg: 0 }}
    >
      <Box
        zIndex={9999}
        onClick={onOpen}
        w="33%"
        display={{ base: 'block', lg: 'none' }}
      >
        <CHiMenu color="#fff" fontSize="1.7rem" />
      </Box>
      <Flex
        zIndex={9999}
        h="100%"
        w={{ base: 'auto', lg: '10%' }}
        justify={{ base: 'center', lg: 'start' }}
        align={{ base: 'center', lg: 'start' }}
      >
        <Link zIndex={9999} as={RRDLink} to="/" w="100px" h="100%">
          <Image
            zIndex={9999}
            justifySelf="center"
            h="100%"
            w="100px"
            src="/images/main_logo_transparent_white.png"
            // lg: '/images/Full_logo.png',

            alt="Simulation store"
          ></Image>
        </Link>
        <Spacer w="80%" />
      </Flex>
      <Flex
        zIndex={9999}
        display={{ base: 'none', lg: 'block' }}
        align="center"
        w="60%"
        justify="center"
      >
        <List alignSelf="start">
          <Flex align="center" justify="start" gap={20} textAlign="center">
            <ListItem textAlign="center">
              <Button
                zIndex={9999}
                w="8rem"
                h="2rem"
                _hover={{
                  bgColor: '#fffaf0',
                  color: '#212427',
                }}
                color="black"
                bgColor="cream"
                fontWeight="bold"
                fontFamily="sans-serif"
                onClick={goToProducts}
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
            <ListItem
              zIndex={9999}
              display={{ base: 'none', lg: 'block' }}
              w="5.2rem"
              color="#fff"
            >
              <NavbarLink zIndex={9999} to="/aboutus">
                About Us
              </NavbarLink>
            </ListItem>
            <ListItem
              zIndex={9999}
              display={{ base: 'none', lg: 'block' }}
              w="5.2rem"
              color="#fff"
            >
              <NavbarLink zIndex={9999} to="/contactus">
                Contact Us
              </NavbarLink>
            </ListItem>
            <ListItem padding={{ base: 0, lg: 10 }}>
              <Box zIndex={9999} position="relative">
                <CHiOutlineShoppingBag
                  zIndex={9999}
                  fontSize="1.7rem"
                  color="#fff"
                />
                <Box
                  zIndex={9999}
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
