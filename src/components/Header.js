import React, { useState, useEffect, useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  DarkMode,
  LightMode,
} from '@mui/icons-material';
import { ColorModeContext } from '../App';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  backgroundColor: scrolled
    ? theme.palette.mode === 'dark'
      ? 'rgba(15, 23, 42, 0.95)'
      : 'rgba(255, 255, 255, 0.95)'
    : 'transparent',
  backdropFilter: scrolled ? 'blur(10px)' : 'none',
  boxShadow: scrolled
    ? theme.palette.mode === 'dark'
      ? '0 4px 12px rgba(0, 0, 0, 0.3)'
      : '0 4px 12px rgba(0, 0, 0, 0.05)'
    : 'none',
  borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const Logo = styled(Box)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 800,
  background:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)'
      : 'linear-gradient(135deg, #0f172a 0%, #3730a3 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundPosition: 'right center',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  fontSize: '0.95rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
  textTransform: 'none',
  padding: '8px 16px',
  borderRadius: '8px',
  position: 'relative',
  transition: 'all 0.3s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '0%',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease',
  },
  '&:hover': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(56, 189, 248, 0.1)'
        : 'rgba(15, 23, 42, 0.05)',
    color: theme.palette.primary.main,
    '&::after': {
      width: '80%',
    },
  },
}));

const ThemeToggle = styled(IconButton)(({ theme }) => ({
  marginLeft: '8px',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.05)'
      : 'rgba(15, 23, 42, 0.05)',
  border: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    color: theme.palette.mode === 'dark' ? '#0f172a' : '#ffffff',
    transform: 'rotate(180deg)',
  },
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const colorMode = useContext(ColorModeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(item.href)}
              sx={{
                py: 2,
                px: 3,
                '&:hover': {
                  backgroundColor:
                    theme.palette.mode === 'dark'
                      ? 'rgba(56, 189, 248, 0.1)'
                      : 'rgba(15, 23, 42, 0.05)',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 600,
                  fontSize: '1.05rem',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <StyledAppBar position="fixed" scrolled={scrolled ? 1 : 0}>
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ py: 1 }}>
              <Logo onClick={() => handleNavClick('#home')}>DMasilva</Logo>

              <Box sx={{ flexGrow: 1 }} />

              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {navItems.map((item) => (
                    <NavButton
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.label}
                    </NavButton>
                  ))}
                </Box>
              )}

              {/* Theme Toggle */}
              <ThemeToggle onClick={colorMode.toggleColorMode} size="medium">
                {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
              </ThemeToggle>

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{ ml: 1 }}
                  aria-label="open menu"
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </StyledAppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
