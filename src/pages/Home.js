import React from 'react';
import { Center, Image, Box, Flex, Heading } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <Box padding="2rem 4rem">
      <Center>
        <Image w="30rem" h="30rem" src="/images/eye_logo_transparent.png" />
      </Center>
      <Center py={5}>
        <Heading>FEATURED</Heading>
      </Center>
      <Flex gap={5} justify="center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Flex>
    </Box>
  );
};

export default Home;
