import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { CFaFacebook, CFaInstagram, CFaTikTok } from '../components/Icons';

const Footer = () => {
  return (
    <Flex
      height="5.5rem"
      bgColor="white"
      width="100%"
      bottom={0}
      paddingX={5}
      paddingY={2}
      align="center"
      boxShadow="topBase"
      justify="space-between"
    >
      <Box display="flex" fontSize="1rem">
        <Text>Copyrights &copy; {new Date().getFullYear()}</Text>{' '}
        <Spacer width="0.8rem" />
        <Text as="span" fontWeight="bold">
          Simulation
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        w="7rem"
        fontSize="1.4rem"
      >
        <Link>
          <CFaInstagram></CFaInstagram>
        </Link>
        <Link>
          <CFaFacebook></CFaFacebook>
        </Link>
        <Link>
          <CFaTikTok></CFaTikTok>
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;
