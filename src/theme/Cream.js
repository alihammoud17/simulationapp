import { extendTheme } from '@chakra-ui/react';

export const creamTheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: '#FFFDD0',
        color: 'default',
      },
    }),
  },
});
