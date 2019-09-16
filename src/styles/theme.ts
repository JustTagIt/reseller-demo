import { createMuiTheme } from '@material-ui/core/styles';

// Add custom poperties - containers
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    containers: {
      main: {
        marginLeft: React.CSSProperties['margin'];
        marginRight: React.CSSProperties['margin'];
        paddingLeft: React.CSSProperties['padding'];
        paddingRight: React.CSSProperties['padding'];
        width: React.CSSProperties['width'];
        maxWidth: React.CSSProperties['width'];
        backgroundColor: React.CSSProperties['backgroundColor'];
      };
      box: {
        marginTop: React.CSSProperties['margin'];
        marginBottom: React.CSSProperties['margin'];
        paddingTop: React.CSSProperties['padding'];
        paddingLeft: React.CSSProperties['padding'];
        paddingRight: React.CSSProperties['padding'];
        borderRadius: React.CSSProperties['borderRadius'];
      };
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    containers: {
      main: {
        marginLeft: React.CSSProperties['margin'];
        marginRight: React.CSSProperties['margin'];
        paddingLeft: React.CSSProperties['padding'];
        paddingRight: React.CSSProperties['padding'];
        width: React.CSSProperties['width'];
        maxWidth: React.CSSProperties['width'];
        backgroundColor: React.CSSProperties['backgroundColor'];
      };
      box: {
        marginTop: React.CSSProperties['margin'];
        marginBottom: React.CSSProperties['margin'];
        paddingTop: React.CSSProperties['padding'];
        paddingLeft: React.CSSProperties['padding'];
        paddingRight: React.CSSProperties['padding'];
        borderRadius: React.CSSProperties['borderRadius'];
      };
    };
  }
}

// Add custom colors to palette properties
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    success: React.CSSProperties['color'];
    link: React.CSSProperties['color'];
    iceBlue: React.CSSProperties['color'];
  }

  interface PaletteOptions {
    success: React.CSSProperties['color'];
    link: React.CSSProperties['color'];
    iceBlue: React.CSSProperties['color'];
  }
}

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontWeight: 800,
      fontSize: '4.25rem'
    },
    h2: {
      fontWeight: 800
    },
    h3: {
      fontWeight: 700
    }
  },
  containers: {
    main: {
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: 8 * 2,
      paddingRight: 8 * 2,
      width: '100%',
      backgroundColor: 'inherit',
      maxWidth: 1052
    },
    box: {
      marginTop: 16,
      marginBottom: 16,
      paddingTop: 8,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: 3
    }
  },
  palette: {
    success: '#4AC76C',
    link: '#2d64ff',
    iceBlue: '#E6F6FF',
    // 'main's taken from previous fonts and logo
    // 'light' & 'dark' were calculated with material color picker
    // https://material.io/tools/color/#!/?primary.color=4C47F7&secondary.color=2fe9ff
    primary: {
      light: '#8b74ff',
      main: '#4C47F7',
      dark: '#001cc3'
    },
    secondary: {
      light: '#7bffff',
      main: '#2fe9ff',
      dark: '#00b6cc'
    },
    background: {
      default: '#F9FAFF'
    }
  }
  // overrides: {
  // 	MuiButton: {
  // 		root: {
  // 			minWidth: '131px',
  // 			borderRadius: '4px',
  // 			boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 1px 0 rgba(0, 0, 0, 0.2)',
  // 			background: '#4C47F7'
  // 		},
  // 		label: {
  // 			color: '#ffffff',
  // 			fontSize: '16px',
  // 			fontWeight: 'bold',
  // 			fontStyle: 'normal',
  // 			fontStretch: 'normal',
  // 			lineHeight: 'normal',
  // 			letterSpacing: 'normal'
  // 		}
  // 	}
  // }
});

export default theme;
