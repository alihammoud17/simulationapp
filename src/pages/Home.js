import React from 'react';
import { Center, Image, Box, Flex, Heading, Link } from '@chakra-ui/react';
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
    <Box padding="2rem 1rem" zIndex={10}>
      <Center pb={10}>
        <Image
          zIndex={10}
          w="auto"
          h="250px"
          src="/images/simulation_logo_2_white.png"
        />
      </Center>
      <Center flexDir={{ base: 'column', lg: 'row' }} gap={15}>
        <Heading
          zIndex="9999"
          color="#fff"
          w={{ base: '100%', lg: '60%' }}
          textAlign="center"
        >
          Enlighting the slaves of this generation
        </Heading>
        <Center
          zIndex={10}
          my={10}
          w={{ base: '100%', lg: '60%' }}
          h="20rem"
          border="1px solid #fff"
          borderRadius="0.2rem"
          bgColor="#fff"
        >
          <CFaPlayCircle fontSize="5xl" />
        </Center>
      </Center>
      <Center
        // alignItems={{ base: 'center', lg: 'start' }}
        // justifyContent={{ base: 'center', lg: 'start' }}
        py={5}
        zIndex={10}
      >
        <Heading zIndex={10} color="#fff">
          FEATURED
        </Heading>
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
      <Center zIndex={10}>
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

      <Center zIndex={10} mt={35}>
        <Image
          zIndex={10}
          w="35rem"
          src="/images/simulation_choose_wisely_white.png"
        />
      </Center>

      <Center zIndex={10} pb={10} pt={5} gap={2}>
        <Link zIndex={10} href="#">
          <Image
            zIndex={10}
            w="15rem"
            h="auto"
            src="/images/simulation_lefthand.png"
          />
        </Link>
        <Link zIndex={10} href="https://www.linkedin.com/signup/cold-join">
          <Image
            zIndex={10}
            w="15rem"
            h="auto"
            src="/images/simulation_righthand.png"
          />
        </Link>
      </Center>
    </Box>
  );
};

export default Home;
