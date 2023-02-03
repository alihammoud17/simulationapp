import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsPerson,
  BsTwitter,
} from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { MdEmail, MdOutlineEmail, MdPhone } from 'react-icons/md';

//   const confetti = {
//     light: {
//       primary: '4299E1', // blue.400
//       secondary: 'BEE3F8', // blue.100
//     },

//     dark: {
//       primary: '1A365D', // blue.900
//       secondary: '2A4365', // blue.800
//     },
//   };

const ContactUs = () => {
  const { hasCopied, onCopy } = useClipboard('simulationconcept@hotmail.com');

  return (
    <Flex
      bg="transparent"
      align="center"
      justify="space-around"
      css={{
        backgroundAttachment: 'fixed',
      }}
      id="contact"
      w="100%"
    >
      <Box
        borderRadius="lg"
        m={{ base: 1, md: 5, lg: 8 }}
        p={{ base: 1, lg: 8 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 5, lg: 6 }}>
            <Center gap="3" flexDir="column">
              <Heading
                fontSize={{
                  base: '4xl',
                  md: '5xl',
                }}
              >
                Get in Touch
              </Heading>
              <Flex
                gap={{ base: 2, lg: '10' }}
                direction={{ base: 'column', lg: 'row' }}
              >
                <Center gap="3">
                  <Box>
                    <MdPhone />
                  </Box>
                  <Box>+96170866845 | +96171322771</Box>
                </Center>
                <Center gap="3">
                  <Box>
                    <MdEmail />
                  </Box>
                  <Box>simulationconcept@hotmail.com</Box>
                </Center>
              </Flex>
            </Center>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}
              >
                <Tooltip
                  label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="https://www.facebook.com/profile.php?id=100089393255867&mibextid=LQQJ4d">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<FaFacebook />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://www.instagram.com/simulation.lb/">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    icon={<FaInstagram size="28px" />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link href="#">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<FaTiktok size="28px" />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base"
                width={{ base: 'unset', lg: '500px' }}
              >
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<BsPerson />} />
                      <Input type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<MdOutlineEmail />} />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>

                  <Button
                    colorScheme="blue"
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: 'blue.500',
                    }}
                    isFullWidth
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactUs;
