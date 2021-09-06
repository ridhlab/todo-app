import { createBreakpoints } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
});

const theme = extendTheme({
  colors: {
    brand: {
      900: '#ffd700',
      100: '#eebc1d',
    },
  },
  breakpoints,
  components: {
    Container: {
      sizes: {
        sm: {
          width: '576px',
        },
      },
    },
  },
});

export default theme;
