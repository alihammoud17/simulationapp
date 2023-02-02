import React from 'react';
import { Center, Image, Box, Flex, Heading } from '@chakra-ui/react';
import FeaturedCard from '../components/FeaturedCard';
import { data } from '../data/dummy';
import { CFaPlayCircle } from '../components/Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

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
      <Swiper
        // pagination={{
        //   enabled: true,
        //   clickable: true,
        //   dynamicBullets: true,
        // }}
        // keyboard={true}
        className="simulation-swiper"
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1680: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
      >
        {data.map(
          (d) =>
            d.isFeatured && (
              <SwiperSlide className="swiper-slide">
                <FeaturedCard name={d.name} image={d.image} price={d.price} />
              </SwiperSlide>
            )
        )}
      </Swiper>
      <Center>
        <div className="swiper-pagination-custom"></div>
      </Center>
      {/* <Flex flexDir={{ base: 'column', lg: 'row' }} gap={5} justify="center">
        {data.map(
          (d) =>
            d.isFeatured && (
              <ProductCard name={d.name} image={d.image} price={d.price} />
            )
        )}
      </Flex> */}
      <Center pb={10}>
        <Image w="10rem" h="auto" src="/images/human_icon.png" />
      </Center>
    </Box>
  );
};

export default Home;
