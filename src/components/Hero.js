import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, IconButton, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { GitHub, LinkedIn, Email, KeyboardArrowDown } from '@mui/icons-material';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: theme.palette.mode === 'dark' 
    ? `linear-gradient(135deg, ${theme.palette.background.default} 0%, #1e293b 100%)`
    : `linear-gradient(135deg, ${theme.palette.background.default} 0%, #f1f5f9 100%)`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: theme.palette.mode === 'dark'
      ? 'radial-gradient(circle at 20% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)'
      : 'radial-gradient(circle at 20% 50%, rgba(15, 23, 42, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)',
    animation: `${gradientMove} 15s ease infinite`,
    backgroundSize: '200% 200%',
  },
}));

const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 1,
});

const Greeting = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: theme.palette.secondary.main,
  marginBottom: '16px',
  animation: `${fadeInUp} 0.6s ease-out`,
}));

const Name = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
  fontWeight: 900,
  lineHeight: 1.1,
  marginBottom: '24px',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #f59e0b 100%)'
    : 'linear-gradient(135deg, #0f172a 0%, #3730a3 50%, #f59e0b 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: `${fadeInUp} 0.6s ease-out 0.2s backwards, ${gradientMove} 8s ease infinite`,
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '24px',
  animation: `${fadeInUp} 0.6s ease-out 0.4s backwards`,
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  lineHeight: 1.8,
  color: theme.palette.text.secondary,
  maxWidth: '700px',
  marginBottom: '40px',
  animation: `${fadeInUp} 0.6s ease-out 0.6s backwards`,
}));

const ButtonGroup = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  marginBottom: '48px',
  animation: `${fadeInUp} 0.6s ease-out 0.8s backwards`,
});

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '14px 32px',
  fontSize: '1rem',
  fontWeight: 600,
  borderRadius: '12px',
  textTransform: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 12px 24px rgba(56, 189, 248, 0.3)'
      : '0 12px 24px rgba(15, 23, 42, 0.2)',
  },
}));

const SocialLinks = styled(Box)({
  display: 'flex',
  gap: '16px',
  animation: `${fadeInUp} 0.6s ease-out 1s backwards`,
});

const SocialIcon = styled(IconButton)(({ theme }) => ({
  width: '48px',
  height: '48px',
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)' 
    : 'rgba(15, 23, 42, 0.05)',
  border: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    color: theme.palette.mode === 'dark' ? '#0f172a' : '#ffffff',
    transform: 'translateY(-4px) scale(1.05)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 8px 16px rgba(56, 189, 248, 0.3)'
      : '0 8px 16px rgba(15, 23, 42, 0.2)',
  },
}));

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '40px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
  animation: `${float} 3s ease-in-out infinite`,
  '&:hover': {
    '& .arrow-icon': {
      color: theme.palette.primary.main,
    },
  },
}));

const ScrollText = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 600,
  color: theme.palette.text.secondary,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
}));

const Hero = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handleDownloadResume = () => {
    // You can link to your actual resume file here
    window.open('/resume.pdf', '_blank');
  };

  return (
    <HeroSection id="home">
      <Container maxWidth="lg">
        <ContentWrapper>
          <Greeting>Hi there! 👋 I'm</Greeting>
          
          <Name>David Onyango Owuor</Name>
          
          <Title>Full Stack Developer & Technology Specialist</Title>
          
          <Description>
            I craft exceptional digital experiences through clean code and innovative solutions. 
            Currently building scalable web applications at Pavewise Pro with a Master's degree 
            in Computer Science from North Dakota State University.
          </Description>
          
          <ButtonGroup>
            <StyledButton
              variant="contained"
              size="large"
              href="#projects"
              sx={{
                bgcolor: 'primary.main',
                color: theme.palette.mode === 'dark' ? '#0f172a' : '#ffffff',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              View My Work
            </StyledButton>
            
            <StyledButton
              variant="outlined"
              size="large"
              onClick={handleDownloadResume}
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.dark',
                  bgcolor: theme.palette.mode === 'dark' 
                    ? 'rgba(56, 189, 248, 0.1)' 
                    : 'rgba(15, 23, 42, 0.05)',
                },
              }}
            >
              Download Resume
            </StyledButton>
          </ButtonGroup>
          
          <SocialLinks>
            <SocialIcon
              href="https://github.com/DMasilva"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHub />
            </SocialIcon>
            
            <SocialIcon
              href="https://www.linkedin.com/in/david-owuor-082750201/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </SocialIcon>
            
            <SocialIcon
              href="mailto:david.owuor@ndsu.edu"
              aria-label="Email"
            >
              <Email />
            </SocialIcon>
          </SocialLinks>
        </ContentWrapper>
      </Container>
      
      <ScrollIndicator onClick={scrollToContent}>
        <ScrollText>Scroll</ScrollText>
        <KeyboardArrowDown 
          className="arrow-icon"
          sx={{ 
            fontSize: '2rem',
            color: 'text.secondary',
            animation: `${pulse} 2s ease-in-out infinite`,
          }} 
        />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
