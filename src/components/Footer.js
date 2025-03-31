import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  IconButton, 
  Button,
  List,
  ListItem,
  Divider,
  useTheme,
  alpha,
  Link
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Email, 
  GitHub, 
  LinkedIn, 
  ArrowUpward,
  KeyboardArrowRight
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 0.8),
  backdropFilter: 'blur(10px)',
  color: theme.palette.text.primary,
  position: 'relative',
  padding: theme.spacing(10, 0, 6),
  marginTop: theme.spacing(12),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, 
      transparent,
      ${alpha(theme.palette.primary.main, 0.3)},
      ${alpha(theme.palette.secondary.main, 0.3)},
      transparent
    )`,
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 700,
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: 0,
    width: 30,
    height: 3,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '2px',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateX(3px)',
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.default, 0.7),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  color: theme.palette.text.primary,
  margin: theme.spacing(0.5),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    transform: 'translateY(-3px)',
    boxShadow: '0 5px 10px rgba(0,0,0,0.05)',
  },
}));

const SubscribeInput = styled('input')(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.background.default, 0.7),
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  color: theme.palette.text.primary,
  width: '100%',
  marginBottom: theme.spacing(1.5),
  outline: 'none',
  '&:focus': {
    borderColor: alpha(theme.palette.primary.main, 0.5),
    boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.1)}`,
  },
}));

const ScrollTopButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: -25,
  left: '50%',
  transform: 'translateX(-50%)',
  minWidth: 50,
  width: 50,
  height: 50,
  padding: 0,
  borderRadius: '50%',
  backgroundColor: alpha(theme.palette.primary.main, 0.9),
  color: theme.palette.common.white,
  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
  },
}));

const Footer = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { title: "About Me", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Experience", href: "#experience" },
    { title: "Education", href: "#education" },
    { title: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <Email />, href: "mailto:david.owuor@ndsu.edu", label: "Email" },
    { icon: <LinkedIn />, href: "https://www.linkedin.com/in/david-onyango-082750201/", label: "LinkedIn" },
    { icon: <GitHub />, href: "https://github.com/DMasilva", label: "GitHub" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <FooterWrapper component="footer">
      <ScrollTopButton
        variant="contained"
        onClick={scrollToTop}
        component={motion.button}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUpward />
      </ScrollTopButton>

      <Container maxWidth="lg">
        <Box component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <FooterTitle variant="h6">
                  David Owuor
                </FooterTitle>
                <Typography variant="body2" color="text.secondary" paragraph sx={{ maxWidth: 280 }}>
                  Full Stack Developer & Academic Technology Specialist combining technical expertise with educational knowledge to create innovative solutions.
                </Typography>
                <Box sx={{ mt: 3, display: 'flex' }}>
                  {socialLinks.map((link, index) => (
                    <SocialButton
                      key={index}
                      aria-label={link.label}
                      component="a"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </SocialButton>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={itemVariants}>
                <FooterTitle variant="h6">
                  Quick Links
                </FooterTitle>
                <List dense disablePadding>
                  {quickLinks.map((link, index) => (
                    <ListItem 
                      key={index} 
                      disablePadding 
                      sx={{ mb: 1 }}
                      component={motion.li}
                      whileHover={{ x: 5 }}
                    >
                      <KeyboardArrowRight fontSize="small" color="primary" sx={{ mr: 1, opacity: 0.7 }} />
                      <FooterLink href={link.href}>
                        {link.title}
                      </FooterLink>
                    </ListItem>
                  ))}
                </List>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={itemVariants}>
                <FooterTitle variant="h6">
                  Stay Updated
                </FooterTitle>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Subscribe to my newsletter for the latest updates on projects and tech insights.
                </Typography>
                <Box component="form" noValidate sx={{ mt: 2 }}>
                  <SubscribeInput 
                    type="email" 
                    placeholder="Your email" 
                  />
                  <Button 
                    variant="contained" 
                    fullWidth
                    component={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ my: 5, opacity: 0.1 }} />

          <Box sx={{ 
            textAlign: 'center',
            opacity: 0.7
          }}>
            <Typography variant="body2" color="text.secondary">
              &copy; {year} David Onyango Owuor. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer; 