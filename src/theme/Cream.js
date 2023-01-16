import { extendTheme } from '@chakra-ui/react';

export const creamTheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: '#FFFEF2',
        color: '#212427',
      },
    }),
  },
  colors: {
    cream: '#FFFEF2',
    floral: '#fffaf0',
    caramel: '#C68E17',
    white: '#fff',
    black: '#212427',
  },
  shadows: {
    botBase: '0 4px 2px -2px rgba(50, 50, 50, 0.55)',
    topBase: '0px -2px 4px rgba(50, 50, 50, 0.55)',
  },
});
