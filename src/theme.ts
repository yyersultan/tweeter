import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

//@ts-ignore
export const theme = createTheme({

  typography: {
    //@ts-ignore
    fontFamily: [
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Ubuntu',
      'Helvetica Neue',
      'sans-serif'
    ]
  },
  palette: {
    primary: {
      main: 'rgb(29,161,242)',
      dark: 'rgb(26,145,218)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgb(26,145,218)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff'
    },

  },
  //@ts-ignore

  // shadows: [],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          // textTransform: 'none',
          height: 40,
        },
        textPrimary: {
          paddingLeft: 20,
          paddingRight: 20
        },
        outlinedPrimary: {
          borderColor: 'rgb(29,161,243)'
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        underline: {
          '&:after': {
            borderBottomWidth: '2px',
          },
          '&:before': {
            borderColor: 'rgb(29,161,242)',
            borderBottomWidth: '2px',
          }
        },
        input: {
          backgroundColor: 'rgb(245,248,250)'
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 15,
          width: "500px"
        },

      }
    }
  }
}) 