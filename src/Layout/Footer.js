import { Box, Flex, Spacer, Text, Link } from '@chakra-ui/react';
import React from 'react';

import { CFaFacebook, CFaInstagram, CFaTikTok } from '../components/Icons';

const Footer = () => {
  return (
    <Flex
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
        <Link href="https://www.instagram.com/simulation.lb/" target="_blank">
          <CFaInstagram></CFaInstagram>
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=100089393255867&mibextid=LQQJ4d"
          target="_blank"
        >
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
