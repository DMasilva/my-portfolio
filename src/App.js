import React, { useState, useMemo, createContext, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Color Mode Context
export const ColorModeContext = createContext({ toggleColorMode: () => { } });

function App() {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#38bdf8' : '#0f172a', // Light Blue in Dark, Dark Blue in Light
          },
          secondary: {
            main: '#f59e0b',
          },
          background: {
            default: mode === 'dark' ? '#0f172a' : '#ffffff',
            paper: mode === 'dark' ? '#1e293b' : '#f8fafc',
          },
          text: {
            primary: mode === 'dark' ? '#f1f5f9' : '#0f172a',
            secondary: mode === 'dark' ? '#94a3b8' : '#64748b',
          },
        },
        typography: {
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
          h1: { fontWeight: 800, letterSpacing: '-0.02em' },
          h2: { fontWeight: 700, letterSpacing: '-0.02em' },
          h3: { fontWeight: 700 },
          h4: { fontWeight: 600 },
          h5: { fontWeight: 600 },
          h6: { fontWeight: 600 },
          body1: { lineHeight: 1.7 },
        },
        shape: {
          borderRadius: 8,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                fontWeight: 600,
              },
            },
          },
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                scrollBehavior: 'smooth',
                transition: 'background-color 0.3s ease, color 0.3s ease',
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
          <Header />
          <Hero />
          <Bio />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
