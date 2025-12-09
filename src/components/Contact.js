import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

const Section = styled(Box)(({ theme }) => ({
    padding: '80px 0',
    background: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#f8fafc',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: 800,
    color: theme.palette.text.primary,
    marginBottom: '24px',
    textAlign: 'center',
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.25rem',
    color: theme.palette.text.secondary,
    marginBottom: '48px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto 48px',
}));

const ContactButton = styled(Button)(({ theme }) => ({
    padding: '14px 32px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'none',
    background: theme.palette.text.primary,
    color: theme.palette.background.default,
    margin: '8px',
    transition: 'all 0.2s ease',
    '&:hover': {
        background: theme.palette.text.secondary,
        transform: 'translateY(-2px)',
    },
}));

const SocialLink = styled('a')(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 32px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
    textDecoration: 'none',
    border: `1px solid ${theme.palette.divider}`,
    margin: '8px',
    transition: 'all 0.2s ease',
    '&:hover': {
        background: theme.palette.action.hover,
        borderColor: theme.palette.text.secondary,
    },
}));

const Contact = () => {
    return (
        <Section id="contact">
            <Container maxWidth="lg">
                <SectionTitle>Get In Touch</SectionTitle>
                <Subtitle>
                    I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and education.
                </Subtitle>

                <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
                    <ContactButton
                        href="mailto:david.owuor@ndsu.edu"
                        component="a"
                        startIcon={<Email />}
                    >
                        Email Me
                    </ContactButton>

                    <SocialLink
                        href="https://www.linkedin.com/in/david-onyango-082750201/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedIn />
                        LinkedIn
                    </SocialLink>

                    <SocialLink
                        href="https://github.com/DMasilva"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHub />
                        GitHub
                    </SocialLink>
                </Box>
            </Container>
        </Section>
    );
};

export default Contact;
