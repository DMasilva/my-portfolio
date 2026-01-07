import React, { useContext } from 'react';
import { Box, Container, Typography, IconButton, Grid, Divider, Button } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import {
  GitHub,
  LinkedIn,
  Email,
  ArrowUpward,
  Favorite,
  Coffee,
} from '@mui/icons-material';
import { ColorModeContext } from '../App';

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const FooterWrapper = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'
      : 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: '60px 0 30px',
  position: 'relative',
}));

const BackToTopButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '-25px',
  left: '50%',
  transform: 'translateX(-50%)',
  minWidth: '50px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  padding: 0,
  background:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, #38bdf8, #818cf8)'
      : 'linear-gradient(135deg, #0f172a, #3730a3)',
  color: '#ffffff',
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 8px 16px rgba(56, 189, 248, 0.3)'
      : '0 8px 16px rgba(15, 23, 42, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateX(-50%) translateY(-4px)',
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 12px 24px rgba(56, 189, 248, 0.4)'
        : '0 12px 24px rgba(15, 23, 42, 0.3)',
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 900,
  background:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, #38bdf8, #818cf8)'
      : 'linear-gradient(135deg, #0f172a, #3730a3)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '16px',
}));

const SocialLink = styled(IconButton)(({ theme }) => ({
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
    transform: 'translateY(-4px)',
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 8px 16px rgba(56, 189, 248, 0.3)'
        : '0 8px 16px rgba(15, 23, 42, 0.2)',
  },
}));

const FooterLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.95rem',
  marginBottom: '12px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  display: 'inline-block',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateX(4px)',
  },
}));

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <FooterWrapper>
      <BackToTopButton onClick={scrollToTop} aria-label="Back to top">
        <ArrowUpward />
      </BackToTopButton>

      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Logo>DMasilva</Logo>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', mb: 3, maxWidth: '300px', lineHeight: 1.7 }}
            >
              Full Stack Developer & Technology Specialist crafting exceptional digital
              experiences through clean code and innovative solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <SocialLink
                href="https://github.com/DMasilva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHub />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/david-owuor-082750201/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </SocialLink>
              <SocialLink href="mailto:david.owuor@ndsu.edu" aria-label="Email">
                <Email />
              </SocialLink>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {quickLinks.map((link) => (
                <FooterLink key={link.id} onClick={() => scrollToSection(link.id)}>
                  {link.label}
                </FooterLink>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}
            >
              Get In Touch
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', fontWeight: 600, mb: 0.5 }}
                >
                  Email
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary' }}
                  component="a"
                  href="mailto:david.owuor@ndsu.edu"
                  style={{ textDecoration: 'none' }}
                >
                  david.owuor@ndsu.edu
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', fontWeight: 600, mb: 0.5 }}
                >
                  Location
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Fargo, ND
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', fontWeight: 600, mb: 0.5 }}
                >
                  Availability
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Open to opportunities
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, opacity: 0.1 }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
            © {new Date().getFullYear()} David Onyango Owuor. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            Made with
            <Favorite
              sx={{ fontSize: '1rem', color: '#ef4444', animation: `${pulse} 1.5s ease-in-out infinite` }}
            />
            and
            <Coffee sx={{ fontSize: '1rem', color: '#f59e0b' }} />
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
