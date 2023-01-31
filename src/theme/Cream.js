import { extendTheme } from '@chakra-ui/react';

export const creamTheme = extendTheme({
  fonts: {
    heading: 'Canterbury Regular',
    body: 'Canterbury Regular',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: '#F6F0BC',
        color: '#212427',
      },
    }),
  },
  colors: {
    cream: '#F6F0BC',
    floral: '#fffaf0',
    caramel: '#C68E17',
    'caramel-half': 'rgba(198, 142, 23, 0.5)',
    white: '#fff',
    black: '#212427',
  },
  shadows: {
    botBase: '0 4px 2px -2px rgba(50, 50, 50, 0.55)',
    topBase: '0px -2px 4px rgba(50, 50, 50, 0.55)',
  },
});
