import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Chip, 
  Paper, 
  IconButton,
  Collapse,
  Divider,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Code as CodeIcon, 
  School as SchoolIcon,
  Psychology as PsychologyIcon, 
  ExpandMore as ExpandMoreIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  position: 'relative',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  height: '100%',
  backdropFilter: 'blur(10px)',
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(30, 41, 59, 0.5)' 
    : 'rgba(255, 255, 255, 0.8)',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(148, 163, 184, 0.1)' 
    : 'rgba(148, 163, 184, 0.2)'}`,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    backgroundImage: `linear-gradient(90deg, 
      ${theme.palette.primary.main}, 
      ${theme.palette.secondary.main})`,
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(99, 102, 241, 0.15)' 
    : 'rgba(67, 56, 202, 0.1)',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(99, 102, 241, 0.3)' 
    : 'rgba(67, 56, 202, 0.2)'}`,
  color: theme.palette.mode === 'dark' 
    ? theme.palette.primary.light 
    : theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(99, 102, 241, 0.25)' 
      : 'rgba(67, 56, 202, 0.2)',
  },
}));

const ExpandMoreButton = styled(IconButton)(({ theme, expanded }) => ({
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: 'transform 0.3s',
  marginLeft: 'auto',
}));

const HighlightedText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
}));

const GradientText = styled(Typography)(({ theme }) => ({
  backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundClip: 'text',
  textFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  display: 'inline',
}));

const AnimatedIconWrapper = styled(motion.div)({
  display: 'inline-flex',
  marginRight: '8px',
  borderRadius: '50%',
});

const Bio = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const interests = [
    'Web Development', 
    'Educational Technology', 
    'Accessibility', 
    'UI/UX Design', 
    'Academic Technology', 
    'E-Learning'
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

  const iconVariants = {
    hover: { 
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={7}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <StyledPaper elevation={1}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AnimatedIconWrapper whileHover="hover" variants={iconVariants}>
                  <PsychologyIcon 
                    fontSize="large" 
                    color="primary" 
                  />
                </AnimatedIconWrapper>
                <Typography variant="h4" component="h2" gutterBottom>
                  About Me
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                Hi there! I'm <HighlightedText>David Onyango Owuor</HighlightedText>, an enthusiastic 
                <GradientText> Full Stack Developer </GradientText> 
                and <GradientText>Academic Technology Specialist</GradientText> with a 
                passion for creating engaging digital experiences. With a background in 
                educational technology and web development, I specialize in building 
                accessible, user-friendly applications that enhance learning and productivity.
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AnimatedIconWrapper whileHover="hover" variants={iconVariants}>
                  <CodeIcon 
                    fontSize="large" 
                    color="primary" 
                  />
                </AnimatedIconWrapper>
                <Typography variant="h5" component="h3" gutterBottom>
                  What I Do
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                I combine my technical expertise with educational knowledge to develop innovative 
                solutions for academic and professional environments. My work focuses on creating 
                intuitive interfaces and robust backend systems that deliver exceptional user experiences.
              </Typography>
            </Box>

            <Box>
              <motion.div variants={itemVariants}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Areas of Interest
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                  {interests.map((interest, index) => (
                    <motion.div 
                      key={interest}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <StyledChip 
                        label={interest} 
                        clickable
                      />
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <ExpandMoreButton
                expanded={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMoreButton>
            </Box>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Divider sx={{ my: 3 }} />
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                  My Philosophy
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  I believe in technology's power to transform education and enhance human potential.
                  Every project I undertake is guided by a commitment to accessibility, user-centric design,
                  and continuous innovation. I'm passionate about creating tools that make learning more
                  engaging, intuitive, and effective for diverse audiences.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  Whether developing educational software, designing learning experiences, or implementing
                  accessibility solutions, my goal is to leverage technology to break down barriers and
                  create meaningful connections between people and information.
                </Typography>
              </Box>
            </Collapse>
          </StyledPaper>
        </motion.div>
      </Grid>

      <Grid item xs={12} md={5}>
        <Box component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
          <Grid container spacing={3} height="100%">
            <Grid item xs={12}>
              <motion.div variants={itemVariants}>
                <StyledPaper elevation={1}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <AnimatedIconWrapper whileHover="hover" variants={iconVariants}>
                      <SchoolIcon 
                        fontSize="large" 
                        color="primary" 
                      />
                    </AnimatedIconWrapper>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ mb: 0 }}>
                      Education
                    </Typography>
                  </Box>

                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Master of Science
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Computer Science
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                    North Dakota State University
                  </Typography>

                  <Box sx={{ display: 'flex', mt: 2 }}>
                    <motion.div 
                      whileHover={{ scale: 1.05, x: 5 }}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Typography variant="body2" sx={{ color: theme.palette.primary.main, cursor: 'pointer' }}>
                        View Details
                      </Typography>
                      <KeyboardArrowRightIcon fontSize="small" color="primary" />
                    </motion.div>
                  </Box>
                </StyledPaper>
              </motion.div>
            </Grid>

            <Grid item xs={12}>
              <motion.div variants={itemVariants}>
                <StyledPaper elevation={1}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <AnimatedIconWrapper whileHover="hover" variants={iconVariants}>
                      <GitHubIcon 
                        fontSize="large" 
                        color="primary" 
                      />
                    </AnimatedIconWrapper>
                    <Typography variant="h5" component="h3" sx={{ mb: 0 }}>
                      Connect
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box 
                      component={motion.a}
                      whileHover={{ x: 5 }}
                      href="https://github.com/DMasilva"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        color: 'text.primary',
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main'
                        }
                      }}
                    >
                      <GitHubIcon sx={{ mr: 1 }} />
                      <Typography>GitHub</Typography>
                    </Box>

                    <Box 
                      component={motion.a}
                      whileHover={{ x: 5 }}
                      href="https://www.linkedin.com/in/david-onyango-082750201/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        color: 'text.primary',
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main'
                        }
                      }}
                    >
                      <LinkedInIcon sx={{ mr: 1 }} />
                      <Typography>LinkedIn</Typography>
                    </Box>
                  </Box>
                </StyledPaper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Bio; 