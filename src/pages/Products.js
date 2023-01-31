import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import FeaturedCard from '../components/FeaturedCard';
import { data } from '../data/dummy';

const Products = () => {
  return (
    <Box padding="2rem 1rem">
      <SimpleGrid
        placeItems="center"
        columns={{ base: 2, lg: 3 }}
        columnGap={{ base: 3, lg: 0 }}
        rowGap={8}
      >
        {data.map((d) => (
          <GridItem>
            <FeaturedCard name={d.name} image={d.image} price={d.price} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;
