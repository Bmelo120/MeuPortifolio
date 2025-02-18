import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#FF00FF',
    },
  },
  typography: {
    fontFamily: "Avignon Pro"
  }
});

theme = responsiveFontSizes(theme);

export default theme