import { Box, Flex, Spacer, Text, Link } from '@chakra-ui/react';
import React from 'react';

import { CFaFacebook, CFaInstagram, CFaTikTok } from '../components/Icons';

const Footer = () => {
  return (
    <Flex
      zIndex={10}
      flexBasis="100px"
      height="5.5rem"
      // bgColor="white"
      width="100%"
      bottom={0}
      paddingX={5}
      paddingY={2}
      align="center"
      // boxShadow="topBase"
      justify="space-between"
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <Box zIndex={10} display="flex" fontSize="1rem">
        <Text color="#fff" zIndex={10}>
          Copyrights &copy; {new Date().getFullYear()}
        </Text>{' '}
        <Spacer width="0.8rem" />
        <Text zIndex={10} as="span" fontWeight="bold" color="#fff">
          Simulation
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        w="7rem"
        fontSize="1.4rem"
        zIndex={10}
      >
        <Link
          zIndex={10}
          href="https://www.instagram.com/simulation.lb/"
          target="_blank"
        >
          <CFaInstagram color="#fff" zIndex={10}></CFaInstagram>
        </Link>
        <Link
          zIndex={10}
          href="https://www.facebook.com/profile.php?id=100089393255867&mibextid=LQQJ4d"
          target="_blank"
        >
          <CFaFacebook zIndex={10} color="#fff"></CFaFacebook>
        </Link>
        <Link
          zIndex={10}
          href="https://www.tiktok.com/@simulation.lb?_t=8ZZtubWS9K5&_r=1"
          target="_blank"
        >
          <CFaTikTok zIndex={10} color="#fff"></CFaTikTok>
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;
