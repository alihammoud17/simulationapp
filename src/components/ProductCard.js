import React from 'react';
import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  CardFooter,
} from '@chakra-ui/react';

const ProductCard = ({ name, image, price, isFeatured }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={image}
          alt="Simulation Escape the matrix"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="1">
          <Heading size="md">{name}</Heading>
          {/* <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text> */}
          <Text fontSize="0.8rem">${price}</Text>
        </Stack>
      </CardBody>
      {/* <Divider /> */}
      {/* <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter> */}
    </Card>
  );
};

export default ProductCard;
