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

const FeaturedCard = ({ name, image, price, flex }) => {
  const [overlayVisibility, setOverlayVisibility] = useState('hidden');

  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion ? undefined : `${fade} 0.5s`;

  return (
    <Card height="100%" maxW="sm" bgColor="floral" fontWeight="light">
      <CardBody p={0} display="flex" flexDir="column">
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
            _active={{
              animation: animation,
            }}
            _focus={{
              animation: animation,
            }}
            // opacity={0.5}
            _hover={{
              // visibility: overlayVisibility,
              animation: animation,
            }}
            _focusWithin={{
              animation: animation,
            }}
            padding={15}
          >
            <Button opacity={1}>Buy Now</Button>
          </Center>
        </Box>
        <Flex gap="2" direction="column" mt="auto" p={3}>
          <Heading textAlign="left" size="sm" fontWeight="light">
            {name}
          </Heading>
          <Text alignSelf="end" fontSize="0.8em" fontWeight="medium">
            ${price}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default FeaturedCard;
