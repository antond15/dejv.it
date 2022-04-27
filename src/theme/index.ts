import { createTheme } from '@mui/material';

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#eeeeee',
      secondary: '#cccccc',
    },
    background: {
      default: '#060808',
    },
  },
});

export default customTheme;
