import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Download, ArrowForward } from '@mui/icons-material';

const BioSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(12, 0),
  position: 'relative',
  backgroundColor: theme.palette.background.default,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, 
      transparent,
      ${theme.palette.primary.main}33,
      ${theme.palette.primary.main}66,
      transparent
    )`,
  },
}));

const HighlightText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
    background: `${theme.palette.primary.main}1A`,
    zIndex: -1,
    transition: 'height 0.3s ease',
  },
  '&:hover::after': {
    height: '100%',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5, 3),
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
    transform: 'translateY(-2px)',
  },
}));

const Bio = () => {
  return (
    <BioSection>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h2"
            sx={{ 
              mb: 3,
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme => theme.palette.primary.main}, ${theme => theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </Typography>
          <Typography 
            variant="subtitle1"
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            Passionate about bridging technology and education
          </Typography>
        </Box>
        
        <Box sx={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
          <Typography 
            variant="body1" 
            paragraph
            sx={{ mb: 3 }}
          >
            Hello! I'm a <HighlightText>Full Stack Developer</HighlightText> and <HighlightText>Academic Technology Specialist</HighlightText> with a passion for creating innovative solutions that enhance learning experiences. With expertise in both educational technology and software development, I bridge the gap between technical capabilities and educational needs.
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ mb: 3 }}
          >
            My journey in technology began with a deep interest in how digital tools can transform education. Today, I specialize in developing <HighlightText>accessible</HighlightText> and <HighlightText>user-friendly applications</HighlightText> that make learning more engaging and effective.
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph
            sx={{ mb: 4 }}
          >
            I'm constantly exploring new technologies and methodologies to create better educational experiences. My goal is to leverage technology to make education more accessible, interactive, and impactful for everyone.
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 2,
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', sm: 'flex-start' },
            }}
          >
            <StyledButton
              variant="contained"
              color="primary"
              startIcon={<Download />}
              href="/resume.pdf"
              target="_blank"
            >
              Download Resume
            </StyledButton>
            <StyledButton
              variant="outlined"
              color="primary"
              endIcon={<ArrowForward />}
              href="#projects"
            >
              View My Work
            </StyledButton>
          </Box>
        </Box>
      </Container>
    </BioSection>
  );
};

export default Bio; 