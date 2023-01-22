import React from 'react';
import { Center, Image, Box, Flex, Heading } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { data } from '../data/dummy';
import { CFaPlayCircle } from '../components/Icons';

const Home = () => {
  return (
    <Box padding="2rem 1rem">
      <Center pb={10}>
        <Image w="auto" h="250px" src="/images/simulation_logo_2.png" />
      </Center>
      <Center flexDir={{ base: 'column', lg: 'row' }} gap={15}>
        <Heading w={{ base: '100%', lg: '60%' }} textAlign="center">
          Enlighting the slaves of this generation
        </Heading>
        <Center
          my={10}
          w={{ base: '100%', lg: '60%' }}
          h="20rem"
          border="1px solid #212427"
          borderRadius="0.2rem"
        >
          <CFaPlayCircle fontSize="5xl" />
        </Center>
      </Center>
      <Center
        // alignItems={{ base: 'center', lg: 'start' }}
        // justifyContent={{ base: 'center', lg: 'start' }}
        py={5}
      >
        <Heading>FEATURED</Heading>
      </Center>
      <Flex flexDir={{ base: 'column', lg: 'row' }} gap={5} justify="center">
        {data.map(
          (d) =>
            d.isFeatured && (
              <ProductCard name={d.name} image={d.image} price={d.price} />
            )
        )}
      </Flex>
      <Center pb={10}>
        <Image w="30rem" h="auto" src="/images/human_icon.png" />
      </Center>
    </Box>
  );
};

export default Home;
