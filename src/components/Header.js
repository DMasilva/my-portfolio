import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Avatar, IconButton, AppBar, Toolbar, Button, useScrollTrigger, Slide } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { Email, LinkedIn, GitHub, KeyboardArrowDown, Menu as MenuIcon, Close } from '@mui/icons-material';
import profilePic from '../img/Image.jpeg';
import { alpha } from '@mui/material/styles';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeaderContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  background: `linear-gradient(-45deg, 
    ${theme.palette.primary.dark},
    ${theme.palette.primary.main},
    ${theme.palette.secondary.main},
    ${theme.palette.secondary.dark}
  )`,
  backgroundSize: '400% 400%',
  animation: `${gradient} 15s ease infinite`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 25%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 25%),
      radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.02) 10px, rgba(255, 255, 255, 0.02) 20px)
    `,
    opacity: 0.6,
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 220,
  height: 220,
  border: '4px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 0 60px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: `${float} 6s ease-in-out infinite`,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: -4,
    padding: 4,
    background: `linear-gradient(45deg, 
      ${theme.palette.primary.main}, 
      ${theme.palette.secondary.main}
    )`,
    borderRadius: '50%',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
  '&:hover': {
    transform: 'scale(1.05) translateY(-10px)',
    boxShadow: '0 0 80px rgba(0, 0, 0, 0.4)',
    '&::before': {
      animation: `${gradient} 2s linear infinite`,
    },
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  padding: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    transform: 'translateY(-3px) scale(1.1)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
  '& svg': {
    fontSize: '1.5rem',
  },
}));

const ScrollIndicator = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(6),
  left: '50%',
  transform: 'translateX(-50%)',
  color: theme.palette.common.white,
  animation: `${float} 2s ease-in-out infinite`,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  padding: theme.spacing(1.5),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateX(-50%) scale(1.1)',
  },
  '& svg': {
    fontSize: '2rem',
  },
}));

const GlowingTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textShadow: '0 0 30px rgba(255, 255, 255, 0.4)',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -12,
    left: '25%',
    width: '50%',
    height: 4,
    background: `linear-gradient(90deg,
      transparent,
      ${theme.palette.secondary.main},
      transparent
    )`,
    borderRadius: theme.shape.borderRadius,
    opacity: 0.7,
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.9)',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  letterSpacing: '0.1em',
  fontWeight: 500,
}));

const NavigationBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  transition: 'all 0.3s ease',
  '&.scrolled': {
    background: alpha(theme.palette.background.paper, 0.8),
    backdropFilter: 'blur(10px)',
    borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '1rem',
  padding: theme.spacing(1, 2),
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.1),
  },
}));

const MobileMenu = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: alpha(theme.palette.background.paper, 0.98),
  backdropFilter: 'blur(10px)',
  zIndex: 100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(4),
  transform: 'translateX(100%)',
  transition: 'transform 0.3s ease',
  '&.open': {
    transform: 'translateX(0)',
  },
}));

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const trigger = useScrollTrigger();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <NavigationBar className={isScrolled ? 'scrolled' : ''}>
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700,
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                David Owuor
              </Typography>
              
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                {navigationItems.map((item) => (
                  <NavButton 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </NavButton>
                ))}
              </Box>

              <IconButton 
                sx={{ 
                  display: { md: 'none' },
                  color: 'common.white',
                }} 
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </NavigationBar>
      </Slide>

      <MobileMenu className={isMobileMenuOpen ? 'open' : ''}>
        <IconButton
          sx={{ 
            position: 'absolute', 
            top: 16, 
            right: 16,
            color: 'common.white',
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Close />
        </IconButton>
        {navigationItems.map((item) => (
          <Button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            sx={{
              color: 'common.white',
              fontSize: '1.25rem',
              py: 2,
            }}
          >
            {item.label}
          </Button>
        ))}
      </MobileMenu>

      <HeaderContainer>
        <Container 
          maxWidth="md" 
          sx={{ 
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box 
            sx={{ 
              mb: 8,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: -1,
              },
            }}
          >
            <StyledAvatar
              src={profilePic}
              alt="David Onyango Owuor"
            />
          </Box>
          <GlowingTitle 
            variant="h1" 
            component="h1" 
            sx={{ 
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            }}
          >
            David Onyango Owuor
          </GlowingTitle>
          <SubTitle 
            variant="h4" 
            sx={{ 
              mb: 8,
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
            }}
          >
            Full Stack Developer & Academic Technology Specialist
          </SubTitle>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <SocialButton 
              href="mailto:david.owuor@ndsu.edu"
              component="a"
              aria-label="Email"
            >
              <Email />
            </SocialButton>
            <SocialButton 
              href="https://www.linkedin.com/in/david-onyango-082750201/"
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </SocialButton>
            <SocialButton 
              href="https://github.com/DMasilva"
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHub />
            </SocialButton>
          </Box>
          <ScrollIndicator onClick={scrollToSection} aria-label="Scroll down">
            <KeyboardArrowDown />
          </ScrollIndicator>
        </Container>
      </HeaderContainer>
    </>
  );
};

export default Header; 