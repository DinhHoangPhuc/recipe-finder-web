// // src/theme/theme.ts
// import { createTheme } from '@mui/material/styles';
// import { customTypographyVariants } from './typography';
// import { customButtonVariants } from './button';

// // Import the type declarations
// import './typography';
// import './button';

// export const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//       light: '#42a5f5',
//       dark: '#1565c0',
//     },
//     secondary: {
//       main: '#dc004e',
//       light: '#ff5983',
//       dark: '#9a0036',
//     },
//   },
//   typography: {
//     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//     ...customTypographyVariants,
//   },
//   components: {
//     MuiButton: {
//       variants: customButtonVariants,
//     },
//     // You can also override default component styles
//     MuiTypography: {
//       styleOverrides: {
//         root: {
//           // Global typography overrides
//         },
//       },
//     },
//   },
// });


// src/theme.ts
import { createTheme } from '@mui/material/styles';

const brand = {
  // tweak these to your palette — these match the green button in your mock
  primary: '#1F8E4E',
  primaryDark: '#167541',
  primaryLight: '#E7F4EC',
  text: '#1A1A1A',
  textMuting: '#616161',
  bg: '#F7F7F8',
  surface: '#FFFFFF',
  divider: '#E6E6E6',
};

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: brand.primary,
      dark: brand.primaryDark,
      light: brand.primaryLight,
      contrastText: '#FFFFFF',
    },
    text: {
      primary: brand.text,
      secondary: brand.textMuting,
    },
    background: {
      default: brand.bg,
      paper: brand.surface,
    },
    divider: brand.divider,
  },
  shape: {
    borderRadius: 12, // rounded controls everywhere
  },
  typography: {
    fontFamily:
      '"Inter", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"',
    h1: {
      fontFamily: '"Lora", Georgia, Cambria, "Times New Roman", serif',
      fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)', // big hero title
      fontWeight: 600,
      lineHeight: 1.15,
      letterSpacing: '-0.015em',
    },
    h5: {
      fontFamily: '"Lora", Georgia, Cambria, "Times New Roman", serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: brand.bg },
      },
    },

    // AppBar: simple, flat, roomy
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: brand.surface,
          color: brand.text,
          boxShadow: 'none',
          borderBottom: `1px solid ${brand.divider}`,
        },
      },
    },

    // Contained green button for Search
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, paddingInline: 20, height: 44 },
        containedPrimary: {
          boxShadow: 'none',
          ':hover': { boxShadow: 'none', backgroundColor: brand.primaryDark },
        },
      },
      defaultProps: { disableElevation: true },
    },

    // TextField for the search input (large, subtle border)
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 44,
          backgroundColor: '#fff',
          borderRadius: 12,
        },
        notchedOutline: { borderColor: brand.divider },
        input: { padding: '10px 14px' },
      },
    },

    // Chips for the categories (pill + subtle background)
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 999, fontWeight: 600 },
        filled: {
          backgroundColor: '#F1F2F3',
          '&.MuiChip-colorPrimary': {
            backgroundColor: brand.primaryLight,
            color: brand.primaryDark,
          },
        },
        label: { paddingInline: 14, paddingBlock: 8 },
      },
      defaultProps: { variant: 'filled' },
    },

    // Cards/panels, if you add recipe cards later
    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: 16 },
      },
    },

    // Links in the navbar
    MuiLink: {
      styleOverrides: { root: { fontWeight: 600 } },
    },

    // Container padding
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
    },
  },
});
