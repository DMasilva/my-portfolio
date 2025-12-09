import React, { useContext } from 'react';
import { AppBar, Toolbar, Container, Box, Link as MuiLink, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { GitHub, LinkedIn, Email, Brightness4, Brightness7 } from '@mui/icons-material';
import { ColorModeContext } from '../App';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(15, 23, 42, 0.8)'
    : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider || 'rgba(255, 255, 255, 0.1)'}`,
}));

const NavLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.95rem',
  fontWeight: 500,
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

const SocialLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

const Logo = styled('div')(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledAppBar position="fixed" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Logo>David Owuor</Logo>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            <NavLink onClick={() => scrollToSection('about')}>
              About
            </NavLink>
            <NavLink onClick={() => scrollToSection('projects')}>
              Projects
            </NavLink>
            <NavLink onClick={() => scrollToSection('experience')}>
              Experience
            </NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>
              Contact
            </NavLink>

            <Box sx={{ display: 'flex', gap: 2, ml: 2, pl: 2, alignItems: 'center', borderLeft: `1px solid ${theme.palette.divider}` }}>
              <IconButton onClick={colorMode.toggleColorMode} color="inherit" size="small">
                {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>

              <SocialLink
                href="https://github.com/DMasilva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHub sx={{ fontSize: '1.25rem' }} />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/david-onyango-082750201/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedIn sx={{ fontSize: '1.25rem' }} />
              </SocialLink>
              <SocialLink
                href="mailto:david.owuor@ndsu.edu"
                aria-label="Email"
              >
                <Email sx={{ fontSize: '1.25rem' }} />
              </SocialLink>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;