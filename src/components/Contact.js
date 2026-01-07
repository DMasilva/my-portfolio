import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Alert, Snackbar } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { Send, GitHub, LinkedIn, Email as EmailIcon, LocationOn, Phone } from '@mui/icons-material';

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

const Section = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  position: 'relative',
  background: theme.palette.mode === 'dark' 
    ? `linear-gradient(180deg, ${theme.palette.background.default} 0%, #1e293b 100%)`
    : `linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)`,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  fontWeight: 800,
  color: theme.palette.text.primary,
  marginBottom: '16px',
  textAlign: 'center',
  animation: `${fadeInUp} 0.6s ease-out`,
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  maxWidth: '600px',
  margin: '0 auto 60px',
  animation: `${fadeInUp} 0.6s ease-out 0.2s backwards`,
}));

const ContactCard = styled(Box)(({ theme }) => ({
  padding: '32px',
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '16px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 12px 24px rgba(0, 0, 0, 0.3)'
      : '0 12px 24px rgba(0, 0, 0, 0.08)',
    borderColor: theme.palette.primary.main,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '56px',
  height: '56px',
  borderRadius: '12px',
  background: theme.palette.mode === 'dark' 
    ? 'rgba(56, 189, 248, 0.1)' 
    : 'rgba(15, 23, 42, 0.05)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'rotate(5deg) scale(1.1)',
    background: theme.palette.primary.main,
    color: theme.palette.mode === 'dark' ? '#0f172a' : '#ffffff',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.03)' 
      : 'rgba(15, 23, 42, 0.02)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark' 
        ? 'rgba(255, 255, 255, 0.05)' 
        : 'rgba(15, 23, 42, 0.04)',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: '2px',
      },
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  padding: '14px 40px',
  fontSize: '1rem',
  fontWeight: 600,
  borderRadius: '12px',
  textTransform: 'none',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)'
    : 'linear-gradient(135deg, #0f172a 0%, #3730a3 100%)',
  color: '#ffffff',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 12px 24px rgba(56, 189, 248, 0.3)'
      : '0 12px 24px rgba(15, 23, 42, 0.2)',
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      value: 'david.owuor@ndsu.edu',
      link: 'mailto:david.owuor@ndsu.edu',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Fargo, ND',
      link: null,
    },
    {
      icon: <GitHub />,
      title: 'GitHub',
      value: 'DMasilva',
      link: 'https://github.com/DMasilva',
    },
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: 'david-owuor-082750201',
      link: 'https://www.linkedin.com/in/david-owuor-082750201/',
    },
  ];

  return (
    <Section id="contact">
      <Container maxWidth="lg">
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </SectionSubtitle>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ContactCard
                component={info.link ? 'a' : 'div'}
                href={info.link || undefined}
                target={info.link ? '_blank' : undefined}
                rel={info.link ? 'noopener noreferrer' : undefined}
              >
                <IconWrapper>{info.icon}</IconWrapper>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}
                >
                  {info.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    wordBreak: 'break-all',
                    overflowWrap: 'break-word',
                    fontSize: '0.875rem',
                  }}
                >
                  {info.value}
                </Typography>
              </ContactCard>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 8,
            p: { xs: 3, md: 5 },
            background: (theme) => theme.palette.background.paper,
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: '20px',
            maxWidth: '800px',
            margin: '64px auto 0',
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}
          >
            Send Me a Message
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Your Message"
                name="message"
                multiline
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <SubmitButton
                type="submit"
                variant="contained"
                endIcon={<Send />}
                size="large"
              >
                Send Message
              </SubmitButton>
            </Grid>
          </Grid>
        </Box>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            Message sent successfully! I'll get back to you soon.
          </Alert>
        </Snackbar>
      </Container>
    </Section>
  );
};

export default Contact;
