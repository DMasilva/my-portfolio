import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Header from './components/Header';
import Bio from './components/Bio';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import { Typography, Button, Fab } from '@mui/material';
import { Email, Download, KeyboardArrowUp, DarkMode, LightMode } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Create a custom theme
const getTheme = (mode) => {
  let theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#6366f1' : '#4338ca',
        light: mode === 'dark' ? '#818cf8' : '#6366f1',
        dark: mode === 'dark' ? '#4f46e5' : '#3730a3',
        contrastText: '#ffffff',
      },
      secondary: {
        main: mode === 'dark' ? '#ec4899' : '#db2777',
        light: mode === 'dark' ? '#f472b6' : '#ec4899',
        dark: mode === 'dark' ? '#db2777' : '#be185d',
        contrastText: '#ffffff',
      },
      background: {
        default: mode === 'dark' ? '#0f172a' : '#f8fafc',
        paper: mode === 'dark' ? '#1e293b' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#f8fafc' : '#1e293b',
        secondary: mode === 'dark' ? '#cbd5e1' : '#475569',
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
      divider: mode === 'dark' ? 'rgba(148, 163, 184, 0.12)' : 'rgba(148, 163, 184, 0.2)',
    },
    typography: {
      fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", sans-serif',
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.025em',
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
      mode === 'dark' 
        ? '0 0 0 1px rgba(148, 163, 184, 0.1)'
        : '0 0 0 1px rgba(148, 163, 184, 0.05)',
      mode === 'dark'
        ? '0 1px 2px 0 rgba(148, 163, 184, 0.05)'
        : '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
      mode === 'dark'
        ? '0 1px 3px 0 rgba(148, 163, 184, 0.1), 0 1px 2px -1px rgba(148, 163, 184, 0.1)'
        : '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
      mode === 'dark'
        ? '0 4px 6px -1px rgba(148, 163, 184, 0.1), 0 2px 4px -2px rgba(148, 163, 184, 0.1)'
        : '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -2px rgba(0, 0, 0, 0.03)',
      mode === 'dark'
        ? '0 10px 15px -3px rgba(148, 163, 184, 0.1), 0 4px 6px -4px rgba(148, 163, 184, 0.1)'
        : '0 10px 15px -3px rgba(0, 0, 0, 0.03), 0 4px 6px -4px rgba(0, 0, 0, 0.02)',
      mode === 'dark'
        ? '0 20px 25px -5px rgba(148, 163, 184, 0.1), 0 8px 10px -6px rgba(148, 163, 184, 0.1)'
        : '0 20px 25px -5px rgba(0, 0, 0, 0.02), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
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
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(255, 255, 255, 0.1)',
              clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
              transition: 'clip-path 0.4s ease',
            },
            '&:hover': {
              boxShadow: 'none',
              '&::before': {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
              },
            },
          },
          contained: {
            backgroundImage: 'linear-gradient(135deg, #6366f1, #ec4899)',
            '&:hover': {
              backgroundImage: 'linear-gradient(135deg, #4f46e5, #db2777)',
              transform: 'translateY(-2px)',
            },
          },
          outlined: {
            borderColor: '#6366f1',
            '&:hover': {
              borderColor: '#4f46e5',
              backgroundColor: 'rgba(99, 102, 241, 0.08)',
              transform: 'translateY(-2px)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: mode === 'dark' ? '#1e293b' : '#ffffff',
            borderRadius: 16,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: 'smooth',
            transition: 'background-color 0.3s ease-in-out',
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: mode === 'dark' ? '#0f172a' : '#f1f5f9',
            },
            '&::-webkit-scrollbar-thumb': {
              background: mode === 'dark' ? '#334155' : '#94a3b8',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: mode === 'dark' ? '#475569' : '#64748b',
            },
          },
        },
      },
    },
  });
  
  // Add custom styles for themed elements
  if (mode === 'dark') {
    theme.typography.h1 = {
      ...theme.typography.h1,
      backgroundImage: 'linear-gradient(45deg, #818cf8, #f472b6)',
      backgroundClip: 'text',
      textFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    };
  } else {
    theme.typography.h1 = {
      ...theme.typography.h1,
      backgroundImage: 'linear-gradient(45deg, #4338ca, #be185d)',
      backgroundClip: 'text',
      textFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    };
  }

  return responsiveFontSizes(theme);
};

const MotionBox = styled(motion.div)({
  display: 'contents',
});

const Section = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'alternate',
})(({ theme, alternate }) => ({
  padding: theme.spacing(10, 0),
  position: 'relative',
  backgroundColor: alternate 
    ? theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.02)' 
      : 'rgba(0, 0, 0, 0.01)'
    : 'transparent',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent)',
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
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(90deg, #6366f1, #ec4899)'
      : 'linear-gradient(90deg, #4338ca, #db2777)',
    borderRadius: '2px',
  },
}));

const BackToTopButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  zIndex: 999,
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(99, 102, 241, 0.8)' 
    : 'rgba(67, 56, 202, 0.8)',
  backdropFilter: 'blur(4px)',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(79, 70, 229, 0.9)' 
      : 'rgba(55, 48, 163, 0.9)',
  },
}));

const ThemeSwitcher = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(4),
  right: theme.spacing(14),
  zIndex: 999,
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(236, 72, 153, 0.8)' 
    : 'rgba(219, 39, 119, 0.8)',
  backdropFilter: 'blur(4px)',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(219, 39, 119, 0.9)' 
      : 'rgba(190, 24, 93, 0.9)',
  },
}));

function App() {
  const [themeMode, setThemeMode] = useState('dark');
  const theme = React.useMemo(() => getTheme(themeMode), [themeMode]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const toggleTheme = () => {
    setThemeMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App">
        <Header />
        
        <main>
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Section id="about">
              <Container maxWidth="lg">
                <SectionTitle variant="h2">About Me</SectionTitle>
                <Bio />
              </Container>
            </Section>
          </MotionBox>

          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Section alternate id="experience">
              <Container maxWidth="lg">
                <SectionTitle variant="h2">Professional Journey</SectionTitle>
                <Experience />
              </Container>
            </Section>
          </MotionBox>

          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Section id="projects">
              <Container maxWidth="lg">
                <SectionTitle variant="h2">Featured Projects</SectionTitle>
                <Projects />
              </Container>
            </Section>
          </MotionBox>

          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Section alternate id="skills">
              <Container maxWidth="lg">
                <SectionTitle variant="h2">Skills & Expertise</SectionTitle>
                <Skills />
              </Container>
            </Section>
          </MotionBox>

          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Section id="education">
              <Container maxWidth="lg">
                <SectionTitle variant="h2">Education & Certifications</SectionTitle>
                <Education />
              </Container>
            </Section>
          </MotionBox>

          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
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
                      href="mailto:david.owuor@ndsu.edu"
                      component={motion.a}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
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
                      component={motion.a}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Download Resume
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Section>
          </MotionBox>
        </main>

        <Footer />

        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <BackToTopButton 
              size="medium" 
              onClick={scrollToTop}
              aria-label="back to top"
            >
              <KeyboardArrowUp />
            </BackToTopButton>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <ThemeSwitcher 
            size="medium" 
            onClick={toggleTheme}
            aria-label="toggle theme"
          >
            {themeMode === 'dark' ? <LightMode /> : <DarkMode />}
          </ThemeSwitcher>
        </motion.div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
