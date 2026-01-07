import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import {
  Code,
  School,
  EmojiObjects,
  TrendingUp,
  AccessibilityNew,
  DataObject,
} from '@mui/icons-material';
import {
  SiTypescript,
  SiReact,
  SiRubyonrails,
  SiNodedotjs,
  SiGit,
} from 'react-icons/si';
import { TbApi, TbDatabase, TbBug, TbChartBar } from 'react-icons/tb';

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
    transform: translateY(-10px);
  }
`;

const Section = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  position: 'relative',
  background:
    theme.palette.mode === 'dark'
      ? theme.palette.background.default
      : '#ffffff',
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
  maxWidth: '700px',
  margin: '0 auto 60px',
  lineHeight: 1.8,
  animation: `${fadeInUp} 0.6s ease-out 0.2s backwards`,
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: '32px',
  height: '100%',
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '16px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(90deg, #38bdf8, #818cf8)'
        : 'linear-gradient(90deg, #0f172a, #3730a3)',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 20px 40px rgba(0, 0, 0, 0.4)'
        : '0 20px 40px rgba(0, 0, 0, 0.1)',
    borderColor: theme.palette.primary.main,
    '&::before': {
      transform: 'scaleX(1)',
    },
    '& .icon-wrapper': {
      transform: 'scale(1.1) rotate(5deg)',
      animation: `${float} 2s ease-in-out infinite`,
    },
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '64px',
  height: '64px',
  borderRadius: '16px',
  background:
    theme.palette.mode === 'dark'
      ? 'rgba(56, 189, 248, 0.1)'
      : 'rgba(15, 23, 42, 0.05)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '24px',
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease',
}));

const SkillTag = styled(Chip)(({ theme }) => ({
  margin: '4px',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(56, 189, 248, 0.1)'
      : 'rgba(15, 23, 42, 0.05)',
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.divider}`,
  fontWeight: 500,
  fontSize: '0.875rem',
  transition: 'all 0.3s ease',
  '& .MuiChip-icon': {
    color: theme.palette.text.secondary,
    marginLeft: '6px',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    color: theme.palette.mode === 'dark' ? '#0f172a' : '#ffffff',
    transform: 'translateY(-2px)',
    '& .MuiChip-icon': {
      color: theme.palette.mode === 'dark' ? '#0f172a' : '#ffffff',
    },
  },
}));

const StatBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: '24px',
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
  },
}));

const StatNumber = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 800,
  background:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, #38bdf8, #818cf8)'
      : 'linear-gradient(135deg, #0f172a, #3730a3)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '8px',
}));

const Bio = () => {
  const features = [
    {
      icon: <Code sx={{ fontSize: '2rem' }} />,
      title: 'Full Stack Development',
      description:
        'Building scalable web applications with React, TypeScript, Ruby on Rails, and modern frameworks. Focus on clean, maintainable code.',
    },
    {
      icon: <DataObject sx={{ fontSize: '2rem' }} />,
      title: 'Data & Reporting',
      description:
        'Creating insightful dashboards and operational reports using PowerBI, with data processing and API integration.',
    },
    {
      icon: <School sx={{ fontSize: '2rem' }} />,
      title: 'Academic Technology',
      description:
        'Supporting educational platforms and learning management systems with training, documentation, and user support.',
    },
    {
      icon: <EmojiObjects sx={{ fontSize: '2rem' }} />,
      title: 'Problem Solving',
      description:
        'Debugging complex issues, optimizing workflows, and implementing practical solutions with attention to detail.',
    },
    {
      icon: <TrendingUp sx={{ fontSize: '2rem' }} />,
      title: 'Continuous Learning',
      description:
        "Master's degree in Computer Science completed, always exploring new technologies and best practices to stay current.",
    },
    {
      icon: <AccessibilityNew sx={{ fontSize: '2rem' }} />,
      title: 'User-Focused',
      description:
        'Prioritizing user experience, accessibility, and clear documentation in every project.',
    },
  ];

  const coreSkills = [
    { name: 'TypeScript', icon: <SiTypescript size={14} /> },
    { name: 'React', icon: <SiReact size={14} /> },
    { name: 'Ruby on Rails', icon: <SiRubyonrails size={14} /> },
    { name: 'Node.js', icon: <SiNodedotjs size={14} /> },
    { name: 'PowerBI', icon: <TbChartBar size={14} /> },
    { name: 'REST APIs', icon: <TbApi size={14} /> },
    { name: 'SQL', icon: <TbDatabase size={14} /> },
    { name: 'Git', icon: <SiGit size={14} /> },
    { name: 'Testing', icon: <TbBug size={14} /> },
  ];

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <Section id="about">
      <Container maxWidth="lg">
        <SectionTitle>About Me</SectionTitle>
        <SectionSubtitle>
          Software developer with experience building web applications and
          internal tools. Comfortable working across the stack, debugging
          issues, integrating APIs, and supporting testing and deployments.
        </SectionSubtitle>

        {/* Stats */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <StatBox>
                <StatNumber>{stat.number}</StatNumber>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </StatBox>
            </Grid>
          ))}
        </Grid>

        {/* Features */}
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <FeatureCard elevation={0}>
                <IconWrapper className="icon-wrapper">
                  {feature.icon}
                </IconWrapper>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', lineHeight: 1.8 }}
                >
                  {feature.description}
                </Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>

        {/* Core Skills */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}
          >
            Core Technologies
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {coreSkills.map((skill, index) => (
              <SkillTag key={index} icon={skill.icon} label={skill.name} />
            ))}
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default Bio;
