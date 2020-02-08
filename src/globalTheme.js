import { createMuiTheme } from '@material-ui/core/styles'

const globalTheme = createMuiTheme({
  common: {
    black: '#000',
    white: '#fff',
  },
  shape: {
    borderRadius: '8px',
  },
  background: {
    paper: '#fff',
    headers: '#CECECE',
    default: 'rgba(229, 229, 229, 1)',
  },
  palette: {
    primary: {
      light: 'rgb(254, 124, 0)',
      main: 'rgb(254, 124, 0)',
      dark: '#212121',
    },
    secondary: {
      main: 'rgb(254, 124, 0)',
    },
    error: {
      main: '#ff0000',
      dark: '#212121',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Montserrat',
    h1: {
      fontSize: 33,
      fontFamily: 'Montserrat',
      fontWeight: 300,
      color: 'rgb(254, 124, 0)',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
      alignItems: 'center',
    },
    subtitle1: {
      fontSize: 14,
      fontFamily: 'Montserrat',
      color: 'black',
      letterSpacing: '0.0075em',
      fontWeight: 'bold',
      verticalAlign: 'middle',
      alignItems: 'center',
    },
    subtitle2: {
      fontSize: 16,
      fontFamily: 'Montserrat',
      color: 'black',
      letterSpacing: '0.0075em',
      fontWeight: 'bold',
      verticalAlign: 'middle',
      alignItems: 'center',
    },
    h4: {
      fontSize: 14,
      fontWeight: 300,
      fontFamily: 'Montserrat',
      color: 'black',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
      alignItems: 'center',
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: 'Montserrat',
      color: 'black',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
      alignItems: 'center',
    },
    h3: {
      fontSize: 14,
      fontWeight: 600,
      fontFamily: 'Montserrat',
      color: 'black',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
      alignItems: 'center',
    },
  },
})

globalTheme.overrides = {
  MuiDialog: {
    paper: {
      backgroundColor: globalTheme.background.default,
    },
  },
  MuiDialogTitle: {
    root: {
      textAlign: 'center',
    },
  },
  MuiTextField: {
    root: {
      background: globalTheme.background.paper,
      marginTop: globalTheme.spacing(2),
      marginBottom: globalTheme.spacing(3),
      borderRadius: globalTheme.shape.borderRadius,
    },
  },
  MuiInputBase: {
    root: {
      padding: globalTheme.spacing(1),
    },
  },
  MuiFormHelperText: {
    root: {
      backgroundColor: globalTheme.background.default,
      marginTop: '0px',
      padding: globalTheme.spacing(1),
    },
  },
  MuiFormLabel: {
    root: {
      padding: globalTheme.spacing(1),
    },
  },
  WAMuiChipInput: {
    root: {
      background: globalTheme.background.paper,
      marginTop: globalTheme.spacing(2),
      marginBottom: globalTheme.spacing(3),
      borderRadius: globalTheme.shape.borderRadius,
    },
    chipContainer: {
      paddingTop: globalTheme.spacing(1),
      paddingLeft: globalTheme.spacing(1),
      paddingRight: globalTheme.spacing(1),
    },
    helperText: {
      // Only way to avoid space between line and white input are on error
      marginBottom: '-28px',
      paddingTop: globalTheme.spacing(1),
      marginTop: '0px',
    },
  },
  MuiTableCell: {
    // Hacking a bit to get the rounded corners, doesn't look easy to get it without targeting cell
    stickyHeader: {
      borderTopLeftRadius: globalTheme.shape.borderRadius,
      borderTopRightRadius: globalTheme.shape.borderRadius,
    },
  },
  MuiFormControl: {
    root: {
      minWidth: 450,
      width: '100%',
      backgroundColor: 'white',
    },
  },
  MuiButton: {
    root: {
      fontSize: 14,
      fontWeight: 600,
      fontFamily: 'Montserrat',
      letterSpacing: '0.0075em',
    },
  },
}

export default globalTheme