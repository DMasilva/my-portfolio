import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import profileImage from '../img/Image.jpeg'; // Importing the image

const HeroSection = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '80px',
    background: theme.palette.background.default,
    [theme.breakpoints.down('md')]: {
        paddingTop: '100px',
        paddingBottom: '60px',
    },
}));

const Title = styled(Typography)(({ theme }) => ({
    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
    fontWeight: 800,
    color: theme.palette.text.primary,
    lineHeight: 1.1,
    marginBottom: '24px',
    letterSpacing: '-0.02em',
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    marginBottom: '48px',
    maxWidth: '600px',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '24px',
        boxShadow: theme.palette.mode === 'dark'
            ? '0 20px 40px rgba(0,0,0,0.5)'
            : '0 20px 40px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
    },
    '&:hover img': {
        transform: 'translateY(-10px)',
    },
    [theme.breakpoints.down('md')]: {
        marginTop: '48px',
    },
}));

const CTAButton = styled(Button)(({ theme, variant }) => ({
    padding: '12px 32px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'none',
    transition: 'all 0.2s ease',
    ...(variant === 'contained' ? {
        background: theme.palette.text.primary,
        color: theme.palette.background.default,
        '&:hover': {
            background: theme.palette.text.secondary,
            transform: 'translateY(-2px)',
        },
    } : {
        background: 'transparent',
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.divider}`,
        '&:hover': {
            background: theme.palette.action.hover,
            borderColor: theme.palette.text.secondary,
        },
    }),
}));

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <HeroSection>
            <Container maxWidth="lg">
                <Grid container alignItems="center" spacing={4}>
                    <Grid item xs={12} md={7}>
                        <Title variant="h1">
                            Full Stack Developer & Academic Technology Specialist
                        </Title>
                        <Subtitle variant="h2">
                            I craft accessible, pixel-perfect digital experiences at the intersection of education and technology.
                            Building solutions that enhance learning and empower users.
                        </Subtitle>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            <CTAButton
                                variant="contained"
                                onClick={() => scrollToSection('projects')}
                            >
                                View My Work
                            </CTAButton>
                            <CTAButton
                                variant="outlined"
                                onClick={() => scrollToSection('contact')}
                            >
                                Get In Touch
                            </CTAButton>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <ImageContainer>
                            <img src={profileImage} alt="David Owuor" />
                        </ImageContainer>
                    </Grid>
                </Grid>
            </Container>
        </HeroSection>
    );
};

export default Hero;
