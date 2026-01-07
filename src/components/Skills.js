import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiRuby,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiRubyonrails,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
} from 'react-icons/si';
import { TbApi, TbDatabase, TbBug, TbChartBar } from 'react-icons/tb';
import { Code, BusinessCenter, CloudDone } from '@mui/icons-material';
import { FaJava } from 'react-icons/fa';

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

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const Section = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  background:
    theme.palette.mode === 'dark'
      ? `linear-gradient(180deg, #1e293b 0%, ${theme.palette.background.default} 100%)`
      : `linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)`,
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
  animation: `${fadeInUp} 0.6s ease-out 0.2s backwards`,
}));

const CategoryCard = styled(Paper)(({ theme }) => ({
  padding: '32px',
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '16px',
  height: '100%',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 12px 24px rgba(0, 0, 0, 0.4)'
        : '0 12px 24px rgba(0, 0, 0, 0.08)',
    borderColor: theme.palette.primary.main,
    '&::before': {
      transform: 'scaleX(1)',
    },
    '& .icon-wrapper': {
      animation: `${pulse} 1s ease-in-out infinite`,
    },
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '16px',
  background:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(129, 140, 248, 0.15))'
      : 'linear-gradient(135deg, rgba(15, 23, 42, 0.08), rgba(55, 48, 163, 0.08))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease',
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '16px',
}));

const SkillTag = styled(Chip)(({ theme, level }) => {
  const levelColors = {
    expert: {
      bg: theme.palette.mode === 'dark' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.1)',
      border: theme.palette.mode === 'dark' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.2)',
      color: theme.palette.mode === 'dark' ? '#34d399' : '#059669',
    },
    advanced: {
      bg: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(56, 189, 248, 0.1)',
      border: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.3)' : 'rgba(56, 189, 248, 0.2)',
      color: theme.palette.mode === 'dark' ? '#38bdf8' : '#0284c7',
    },
    intermediate: {
      bg: theme.palette.mode === 'dark' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(245, 158, 11, 0.1)',
      border: theme.palette.mode === 'dark' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(245, 158, 11, 0.2)',
      color: theme.palette.mode === 'dark' ? '#fbbf24' : '#d97706',
    },
  };

  const colors = levelColors[level] || levelColors.intermediate;

  return {
    margin: '6px',
    height: '32px',
    backgroundColor: colors.bg,
    color: colors.color,
    border: `1px solid ${colors.border}`,
    fontWeight: 500,
    fontSize: '0.875rem',
    transition: 'all 0.3s ease',
    '& .MuiChip-icon': {
      color: colors.color,
      marginLeft: '8px',
    },
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: `0 4px 8px ${colors.border}`,
    },
  };
});

const Skills = () => {
  const skillCategories = [
    {
      icon: <SiJavascript size={28} />,
      title: 'Languages',
      skills: [
        { name: 'TypeScript', level: 'expert', icon: <SiTypescript size={14} /> },
        { name: 'JavaScript', level: 'expert', icon: <SiJavascript size={14} /> },
        { name: 'Python', level: 'advanced', icon: <SiPython size={14} /> },
        { name: 'Java', level: 'advanced', icon: <FaJava size={14} /> },
        { name: 'Ruby', level: 'advanced', icon: <SiRuby size={14} /> },
        { name: 'SQL', level: 'advanced', icon: <TbDatabase size={14} /> },
        { name: 'HTML/CSS', level: 'expert', icon: <SiHtml5 size={14} /> },
      ],
    },
    {
      icon: <SiReact size={28} />,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 'expert', icon: <SiReact size={14} /> },
        { name: 'Tailwind CSS', level: 'expert', icon: <SiTailwindcss size={14} /> },
        { name: 'Bootstrap', level: 'advanced', icon: <SiBootstrap size={14} /> },
        { name: 'Responsive Design', level: 'expert', icon: <SiCss3 size={14} /> },
        { name: 'Material-UI', level: 'expert', icon: <SiMui size={14} /> },
      ],
    },
    {
      icon: <SiRubyonrails size={28} />,
      title: 'Backend',
      skills: [
        { name: 'Ruby on Rails', level: 'expert', icon: <SiRubyonrails size={14} /> },
        { name: 'Node.js', level: 'advanced', icon: <SiNodedotjs size={14} /> },
        { name: 'FastAPI', level: 'advanced', icon: <SiFastapi size={14} /> },
        { name: 'REST APIs', level: 'expert', icon: <TbApi size={14} /> },
        { name: 'PostgreSQL', level: 'advanced', icon: <SiPostgresql size={14} /> },
        { name: 'MySQL', level: 'advanced', icon: <SiMysql size={14} /> },
      ],
    },
    {
      icon: <SiGit size={28} />,
      title: 'Tools & Testing',
      skills: [
        { name: 'Git', level: 'expert', icon: <SiGit size={14} /> },
        { name: 'Docker', level: 'advanced', icon: <SiDocker size={14} /> },
        { name: 'VS Code', level: 'expert', icon: <Code sx={{ fontSize: '0.875rem' }} /> },
        { name: 'JUnit', level: 'intermediate', icon: <FaJava size={14} /> },
        { name: 'Debugging', level: 'expert', icon: <TbBug size={14} /> },
        { name: 'Testing', level: 'advanced', icon: <TbBug size={14} /> },
      ],
    },
    {
      icon: <TbChartBar size={28} />,
      title: 'Data & Reporting',
      skills: [
        { name: 'PowerBI', level: 'expert', icon: <TbChartBar size={14} /> },
        { name: 'Tableau', level: 'intermediate', icon: <TbDatabase size={14} /> },
        { name: 'Data Analysis', level: 'advanced', icon: <TbDatabase size={14} /> },
        { name: 'Reporting', level: 'expert', icon: <TbDatabase size={14} /> },
      ],
    },
    {
      icon: <BusinessCenter sx={{ fontSize: '1.75rem' }} />,
      title: 'Platforms & Collaboration',
      skills: [
        { name: 'Microsoft 365', level: 'expert', icon: <BusinessCenter sx={{ fontSize: '0.875rem' }} /> },
        { name: 'Google Workspace', level: 'expert', icon: <CloudDone sx={{ fontSize: '0.875rem' }} /> },
        { name: 'Documentation', level: 'expert', icon: <BusinessCenter sx={{ fontSize: '0.875rem' }} /> },
        { name: 'Technical Writing', level: 'advanced', icon: <CloudDone sx={{ fontSize: '0.875rem' }} /> },
      ],
    },
  ];

  return (
    <Section id="skills">
      <Container maxWidth="lg">
        <SectionTitle>Technical Skills</SectionTitle>
        <SectionSubtitle>
          A comprehensive toolkit for building robust, scalable, and user-friendly applications
        </SectionSubtitle>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CategoryCard elevation={0}>
                <IconWrapper className="icon-wrapper">{category.icon}</IconWrapper>
                <CategoryTitle>{category.title}</CategoryTitle>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillTag
                      key={skillIndex}
                      icon={skill.icon}
                      label={skill.name}
                      level={skill.level}
                    />
                  ))}
                </Box>
              </CategoryCard>
            </Grid>
          ))}
        </Grid>

        {/* Skill Legend */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', mb: 2, fontWeight: 600 }}
          >
            Proficiency Levels
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: '#34d399',
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Expert
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: '#38bdf8',
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Advanced
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: '#fbbf24',
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Intermediate
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default Skills;
