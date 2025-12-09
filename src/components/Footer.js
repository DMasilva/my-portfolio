import React from 'react';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub, LinkedIn, Email, ArrowUpward } from '@mui/icons-material';

const FooterWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? '#0b1120' : '#f1f5f9',
  color: theme.palette.text.primary,
  padding: '48px 0 24px',
}));

const SocialLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  display: 'inline-flex',
  alignItems: 'center',
  margin: '0 12px',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

const BackToTop = styled('button')(({ theme }) => ({
  position: 'fixed',
  bottom: '32px',
  right: '32px',
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  background: theme.palette.primary.main,
  color: theme.palette.background.default,
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.2s ease',
  zIndex: 100,
  '&:hover': {
    background: theme.palette.text.primary,
    transform: 'translateY(-2px)',
  },
}));

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <>
      <FooterWrapper>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              David Onyango Owuor
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, maxWidth: '600px', mx: 'auto' }}>
              Full Stack Developer & Academic Technology Specialist
            </Typography>
            <Box sx={{ mb: 3 }}>
              <SocialLink
                href="mailto:david.owuor@ndsu.edu"
                aria-label="Email"
              >
                <Email />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/david-onyango-082750201/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </SocialLink>
              <SocialLink
                href="https://github.com/DMasilva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHub />
              </SocialLink>
            </Box>
          </Box>

          <Box sx={{ borderTop: 1, borderColor: 'divider', pt: 3, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              © {year} David Onyango Owuor. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </FooterWrapper>

      <BackToTop onClick={scrollToTop} aria-label="Back to top">
        <ArrowUpward />
      </BackToTop>
    </>
  );
};

export default Footer;