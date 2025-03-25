import React from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Header from './components/Header';
import Bio from './components/Bio';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import { Typography, Button } from '@mui/material';
import { Email, Download } from '@mui/icons-material';

// Create a custom theme
let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4f46e5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ec4899',
      light: '#f472b6',
      dark: '#db2777',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    info: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
    },
    divider: 'rgba(148, 163, 184, 0.12)',
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
      backgroundImage: 'linear-gradient(45deg, #818cf8, #f472b6)',
      backgroundClip: 'text',
      textFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1.1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '0.00938em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0 0 0 1px rgba(148, 163, 184, 0.1)',
    '0 1px 2px 0 rgba(148, 163, 184, 0.05)',
    '0 1px 3px 0 rgba(148, 163, 184, 0.1), 0 1px 2px -1px rgba(148, 163, 184, 0.1)',
    '0 4px 6px -1px rgba(148, 163, 184, 0.1), 0 2px 4px -2px rgba(148, 163, 184, 0.1)',
    '0 10px 15px -3px rgba(148, 163, 184, 0.1), 0 4px 6px -4px rgba(148, 163, 184, 0.1)',
    '0 20px 25px -5px rgba(148, 163, 184, 0.1), 0 8px 10px -6px rgba(148, 163, 184, 0.1)',
    ...Array(18).fill('none'),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          padding: '0.625rem 1.5rem',
          fontSize: '0.95rem',
          fontWeight: 600,
          lineHeight: 1.5,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          backgroundImage: 'linear-gradient(to right, #6366f1, #ec4899)',
          '&:hover': {
            backgroundImage: 'linear-gradient(to right, #4f46e5, #db2777)',
          },
        },
        outlined: {
          borderColor: '#6366f1',
          '&:hover': {
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1e293b',
          borderRadius: 16,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#0f172a',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#334155',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#475569',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: alpha(theme.palette.background.paper, 0.6),
  backdropFilter: 'blur(20px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: `linear-gradient(90deg, 
      ${theme.palette.primary.main}, 
      ${theme.palette.secondary.main}, 
      ${theme.palette.primary.main}
    )`,
    backgroundSize: '200% 100%',
    opacity: 0,
    transition: 'opacity 0.3s ease, background-position 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
    '&::before': {
      opacity: 1,
      backgroundPosition: '200% 0',
    },
  },
}));

const MainContent = styled('main')(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 0% 0%, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 50%),
      radial-gradient(circle at 100% 0%, ${alpha(theme.palette.secondary.main, 0.15)} 0%, transparent 50%),
      radial-gradient(circle at 50% 100%, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 50%)
    `,
    zIndex: -1,
  },
}));

const Section = styled(Box)(({ theme, alternate }) => ({
  padding: theme.spacing(10, 0),
  position: 'relative',
  backgroundColor: alternate ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: theme.spacing(6),
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: 0,
    width: '60%',
    height: '4px',
    background: 'linear-gradient(90deg, #6366f1, #ec4899)',
    borderRadius: '2px',
  },
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App">
        <Header />
        
        <main>
          <Section id="about">
            <Container maxWidth="lg">
              <SectionTitle variant="h2">About Me</SectionTitle>
              <Bio />
            </Container>
          </Section>

          <Section alternate id="experience">
            <Container maxWidth="lg">
              <SectionTitle variant="h2">Professional Journey</SectionTitle>
              <Experience />
            </Container>
          </Section>

          <Section id="projects">
            <Container maxWidth="lg">
              <SectionTitle variant="h2">Featured Projects</SectionTitle>
              <Projects />
            </Container>
          </Section>

          <Section alternate id="skills">
            <Container maxWidth="lg">
              <SectionTitle variant="h2">Skills & Expertise</SectionTitle>
              <Skills />
            </Container>
          </Section>

          <Section id="education">
            <Container maxWidth="lg">
              <SectionTitle variant="h2">Education & Certifications</SectionTitle>
              <Education />
            </Container>
          </Section>

          <Section alternate id="contact">
            <Container maxWidth="lg">
              <SectionTitle variant="h2">Get In Touch</SectionTitle>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3,
                textAlign: 'center',
              }}>
                <Typography variant="h5" sx={{ maxWidth: '600px', mb: 2 }}>
                  I'm always open to new opportunities and collaborations. Feel free to reach out!
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<Email />}
                    href="mailto:your.email@example.com"
                  >
                    Email Me
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    startIcon={<Download />}
                    href="/resume.pdf"
                    target="_blank"
                  >
                    Download Resume
                  </Button>
                </Box>
              </Box>
            </Container>
          </Section>
        </main>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
