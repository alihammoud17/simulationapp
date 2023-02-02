import { Box, Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import FeaturedCard from '../components/FeaturedCard';
import { data } from '../data/dummy';

const Products = () => {
  return (
    <Box
      display="flex"
      align="center"
      justifyContent="center"
      padding="2rem 1rem"
    >
      <Flex flexWrap="wrap" ml="-1rem" mb="-1rem">
        {data.map((d) => (
          <GridItem
            mb="1rem"
            pl="1rem"
            width={{
              base: 'calc(100% * 1/2)',
              md: 'calc(100% * 1/3)',
              lg: 'calc(100% * 1/4)',
            }}
          >
            <FeaturedCard name={d.name} image={d.image} price={d.price} />
          </GridItem>
        ))}
      </Flex>
    </Box>
  );
};

export default Products;
