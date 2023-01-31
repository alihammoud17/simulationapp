import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  Flex,
  Box,
  keyframes,
  usePrefersReducedMotion,
  Center,
  Button,
} from '@chakra-ui/react';

const fade = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const FeaturedCard = ({ name, image, price }) => {
  const [overlayVisibility, setOverlayVisibility] = useState('hidden');

  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion ? undefined : `${fade} 0.5s`;

  return (
    <Card maxW="sm" bgColor="floral">
      <CardBody p={0}>
        <Box
          position="relative"
          onMouseLeave={() => setOverlayVisibility('hidden')}
          onMouseOver={() => setOverlayVisibility('visible')}
        >
          <Image src={image} alt={name} />
          <Center
            visibility={overlayVisibility}
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
            w="100%"
            h="100%"
            bgColor="caramel-half"
            // opacity={0.5}
            _hover={{
              // visibility: overlayVisibility,
              animation: animation,
            }}
            padding={15}
          >
            <Button opacity={1}>Buy Now</Button>
          </Center>
        </Box>
        <Flex justify="space-between" mt="2" spacing="1" p={3}>
          <Heading size="md">{name}</Heading>
          <Text fontSize="1.2rem">${price}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default FeaturedCard;
