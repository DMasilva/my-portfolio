import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, IconButton, Button } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { GitHub, OpenInNew, Code, TrendingUp, Description } from '@mui/icons-material';
import {
  SiReact,
  SiTailwindcss,
  SiRubyonrails,
  SiPostgresql,
  SiPython,
  SiJavascript,
} from 'react-icons/si';
import { TbApi, TbDatabase, TbChartBar } from 'react-icons/tb';
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

const Section = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  background: theme.palette.mode === 'dark' ? theme.palette.background.default : '#ffffff',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  fontWeight: 800,
  color: theme.palette.text.primary,
  marginBottom: '60px',
  textAlign: 'center',
  animation: `${fadeInUp} 0.6s ease-out`,
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '16px',
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #38bdf8, #818cf8, #f59e0b)',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.4s ease',
  },
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 20px 40px rgba(0, 0, 0, 0.4)'
      : '0 20px 40px rgba(0, 0, 0, 0.1)',
    borderColor: theme.palette.primary.main,
    '&::before': {
      transform: 'scaleX(1)',
    },
  },
}));

const ProjectHeader = styled(Box)(({ theme, category }) => {
  const colors = {
    'Full Stack': 'linear-gradient(135deg, #38bdf8, #818cf8)',
    Research: 'linear-gradient(135deg, #f59e0b, #f97316)',
    Dashboard: 'linear-gradient(135deg, #10b981, #14b8a6)',
  };

  return {
    padding: '32px',
    background: colors[category] || colors['Full Stack'],
    color: '#ffffff',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '100%',
      background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.2) 100%)',
    },
  };
});

const ProjectTitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 800,
  marginBottom: '12px',
  position: 'relative',
  zIndex: 1,
});

const ProjectMeta = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '16px',
  position: 'relative',
  zIndex: 1,
});

const CategoryChip = styled(Chip)({
  height: '24px',
  fontWeight: 600,
  fontSize: '0.75rem',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  color: '#ffffff',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  backdropFilter: 'blur(4px)',
});

const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.8,
  fontSize: '0.95rem',
  marginBottom: '20px',
}));

const TechStack = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginTop: 'auto',
  paddingTop: '20px',
  borderTop: '1px solid',
  borderColor: 'divider',
});

const TechTag = styled(Chip)(({ theme }) => ({
  height: '28px',
  fontSize: '0.8125rem',
  fontWeight: 500,
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(56, 189, 248, 0.1)'
    : 'rgba(15, 23, 42, 0.05)',
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.divider}`,
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

const ActionButtons = styled(Box)({
  display: 'flex',
  gap: '8px',
  marginTop: '16px',
});

const ActionButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(15, 23, 42, 0.05)',
  border: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    color: theme.palette.mode === 'dark' ? '#0f172a' : '#ffffff',
    transform: 'translateY(-2px)',
  },
}));

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const getTechIcon = (tech) => {
    const iconMap = {
      'Java': <FaJava size={14} />,
      'React': <SiReact size={14} />,
      'SQL': <TbDatabase size={14} />,
      'Tailwind CSS': <SiTailwindcss size={14} />,
      'Ruby on Rails': <SiRubyonrails size={14} />,
      'PostgreSQL': <SiPostgresql size={14} />,
      'REST APIs': <TbApi size={14} />,
      'PowerBI': <TbChartBar size={14} />,
      'Python': <SiPython size={14} />,
      'JavaScript': <SiJavascript size={14} />,
      'Maven': <FaJava size={14} />,
    };
    return iconMap[tech] || <Code sx={{ fontSize: '0.875rem' }} />;
  };

  const projects = [
    {
      id: 1,
      title: 'Theater Tours and Travels',
      category: 'Full Stack',
      period: 'Feb 2024 — Aug 2024',
      description: 'Built a comprehensive tours and travel booking system with a responsive frontend and robust database-backed features. Implemented core booking workflows, UI pages, integrated data storage and retrieval.',
      tech: ['Java', 'React', 'SQL', 'Tailwind CSS'],
      github: 'https://github.com/DMasilva',
      demo: null,
    },
    {
      id: 2,
      title: 'Moringa Application Portal',
      category: 'Full Stack',
      period: 'Oct 2022 — Jun 2023',
      description: 'Developed a full-stack admissions management system supporting application intake and review workflows. Implemented frontend forms and backend logic; improved reliability through debugging and iteration.',
      tech: ['React', 'Ruby on Rails', 'PostgreSQL', 'REST APIs'],
      github: 'https://github.com/DMasilva',
      demo: null,
    },
    {
      id: 3,
      title: 'Cloud Support Dashboards',
      category: 'Dashboard',
      period: 'Mar 2024 — Jun 2024',
      description: 'Built comprehensive dashboards to visualize FreshService trends and service health metrics. Improved visibility into workload patterns and recurring issues for better decision-making.',
      tech: ['PowerBI', 'FreshService Data', 'Data Analysis'],
      github: null,
      demo: null,
    },
    {
      id: 4,
      title: 'Hybrid Approach to Software Testing',
      category: 'Research',
      period: 'May 2024 — Present',
      description: 'Research on combining Large Language Models (LLMs) with traditional testing tools to improve test coverage and efficiency. Exploring novel approaches to automated testing.',
      tech: ['Java', 'Maven', 'Python', 'GPT-based Models', 'Testing'],
      github: null,
      demo: null,
      current: true,
    },
  ];

  const categories = ['All', 'Full Stack', 'Research', 'Dashboard'];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Section id="projects">
      <Container maxWidth="lg">
        <SectionTitle>Featured Projects</SectionTitle>

        {/* Filter Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6, flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? 'contained' : 'outlined'}
              sx={{
                borderRadius: '24px',
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
              }}
            >
              {category}
            </Button>
          ))}
        </Box>

        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <ProjectCard elevation={0}>
                <ProjectHeader category={project.category}>
                  <ProjectMeta>
                    <CategoryChip label={project.category} />
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {project.period}
                    </Typography>
                    {project.current && (
                      <Chip
                        label="Ongoing"
                        size="small"
                        sx={{
                          height: '20px',
                          fontSize: '0.7rem',
                          backgroundColor: 'rgba(16, 185, 129, 0.2)',
                          color: '#ffffff',
                          fontWeight: 600,
                        }}
                      />
                    )}
                  </ProjectMeta>
                  <ProjectTitle>{project.title}</ProjectTitle>
                </ProjectHeader>

                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <ProjectDescription>{project.description}</ProjectDescription>

                  <TechStack>
                    {project.tech.map((tech, index) => (
                      <TechTag key={index} icon={getTechIcon(tech)} label={tech} />
                    ))}
                  </TechStack>

                  {(project.github || project.demo) && (
                    <ActionButtons>
                      {project.github && (
                        <ActionButton
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View Source Code"
                        >
                          <GitHub />
                        </ActionButton>
                      )}
                      {project.demo && (
                        <ActionButton
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View Live Demo"
                        >
                          <OpenInNew />
                        </ActionButton>
                      )}
                    </ActionButtons>
                  )}
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Projects;
