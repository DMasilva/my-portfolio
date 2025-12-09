import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Container, Box, Link as MuiLink, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { GitHub, LinkedIn, Email, Brightness4, Brightness7, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <StyledAppBar position="fixed" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Logo>David Owuor</Logo>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center', mr: 2 }}>
                {navItems.map((item) => (
                  <NavLink key={item.id} onClick={() => scrollToSection(item.id)}>
                    {item.label}
                  </NavLink>
                ))}
              </Box>

              {/* Theme Toggle - Visible on all screens */}
              <Box sx={{ display: 'flex', alignItems: 'center', borderLeft: { md: `1px solid ${theme.palette.divider}` }, pl: { md: 2 } }}>
                <IconButton onClick={colorMode.toggleColorMode} color="inherit" size="small" sx={{ color: theme.palette.text.secondary }}>
                  {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
              </Box>

              {/* Desktop Socials */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
                <SocialLink href="https://github.com/DMasilva" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GitHub sx={{ fontSize: '1.25rem' }} />
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/david-onyango-082750201/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedIn sx={{ fontSize: '1.25rem' }} />
                </SocialLink>
                <SocialLink href="mailto:david.owuor@ndsu.edu" aria-label="Email">
                  <Email sx={{ fontSize: '1.25rem' }} />
                </SocialLink>
              </Box>

              {/* Mobile Menu Button */}
              <Box sx={{ display: { md: 'none' } }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ color: theme.palette.text.primary, ml: 1 }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: '100%', maxWidth: '300px', background: theme.palette.background.default }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: theme.palette.text.primary }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              sx={{ borderRadius: 1, mb: 1 }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: 'inherit',
                  fontWeight: 600,
                  color: theme.palette.text.primary
                }}
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 'auto', p: 4, display: 'flex', gap: 3, justifyContent: 'center' }}>
          <SocialLink href="https://github.com/DMasilva" target="_blank" rel="noopener noreferrer">
            <GitHub sx={{ fontSize: '1.5rem' }} />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/david-onyango-082750201/" target="_blank" rel="noopener noreferrer">
            <LinkedIn sx={{ fontSize: '1.5rem' }} />
          </SocialLink>
          <SocialLink href="mailto:david.owuor@ndsu.edu">
            <Email sx={{ fontSize: '1.5rem' }} />
          </SocialLink>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;