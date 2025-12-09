import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub, OpenInNew, Description } from '@mui/icons-material';

const Section = styled(Box)(({ theme }) => ({
  padding: '80px 0',
  background: theme.palette.mode === 'dark' ? theme.palette.background.default : '#f8fafc',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
  fontWeight: 800,
  color: theme.palette.text.primary,
  marginBottom: '48px',
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  transition: 'all 0.2s ease',
  '&:hover': {
    borderColor: theme.palette.text.secondary,
    boxShadow: theme.palette.mode === 'dark'
      ? '0 4px 12px rgba(0, 0, 0, 0.3)'
      : '0 4px 12px rgba(0, 0, 0, 0.05)',
    transform: 'translateY(-2px)',
  },
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '12px',
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  lineHeight: 1.7,
  color: theme.palette.text.secondary,
  marginBottom: '16px',
}));

const TechTag = styled(Chip)(({ theme }) => ({
  padding: '4px 12px',
  background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#f1f5f9',
  color: theme.palette.text.secondary,
  borderRadius: '6px',
  fontSize: '0.75rem',
  fontWeight: 500,
  margin: '4px 4px 4px 0',
  height: 'auto',
  border: 'none',
}));

const ProjectLink = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  marginRight: '16px',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

const Projects = () => {
  const projects = [
    {
      title: 'Hybrid Approach to Software Testing',
      description: 'Master\'s research project integrating Large Language Models (LLMs) with traditional software testing methods to enhance efficiency and code coverage.',
      tags: ['Java', 'Maven', 'Python', 'GPT-3', 'Research'],
      type: 'Research',
      date: 'May 2024 — Present',
    },
    {
      title: 'Theater Tours and Travels',
      description: 'Dynamic tours and travel website allowing users to easily browse, book, and manage tours and travel amenities with an intuitive interface.',
      tags: ['Java', 'React', 'JavaScript', 'SQL', 'Tailwind CSS'],
      github: 'https://github.com/DMasilva',
      type: 'Web App',
      date: 'Feb 2024 — Aug 2024',
    },
    {
      title: 'Moringa Application Portal',
      description: 'Full-stack web application to manage student applications for Moringa Institute, featuring comprehensive application tracking and management.',
      tags: ['JavaScript', 'React', 'Tailwind CSS', 'Ruby on Rails', 'PostgreSQL'],
      github: 'https://github.com/DMasilva',
      type: 'Web App',
      date: 'Oct 2022 — Jun 2023',
    },
    {
      title: 'Blackboard Ultra Migration',
      description: 'Led comprehensive training program for students on the new Ultra interface, updating courses migrated from Blackboard Original to ensure smooth transitions.',
      tags: ['Blackboard', 'Training', 'Course Design', 'LMS'],
      type: 'Training',
      date: 'Ongoing',
    },
    {
      title: 'Zoom Phone Migration Training',
      description: 'Developed and delivered training sessions for faculty and staff at NDSU on Zoom Phone migration, providing comprehensive support materials.',
      tags: ['Zoom', 'Training', 'Communication', 'Documentation'],
      type: 'Training',
      date: 'Jun 2024',
    },
  ];

  return (
    <Section id="projects">
      <Container maxWidth="lg">
        <SectionTitle>Featured Projects</SectionTitle>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ProjectCard elevation={0}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <ProjectTitle>{project.title}</ProjectTitle>
                  </Box>

                  <Typography sx={{ fontSize: '0.875rem', color: '#94a3b8', mb: 2 }}>
                    {project.date}
                  </Typography>

                  <ProjectDescription>{project.description}</ProjectDescription>

                  <Box sx={{ mb: 3 }}>
                    {project.tags.map((tag) => (
                      <TechTag key={tag} label={tag} />
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {project.github && (
                      <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                        <GitHub sx={{ fontSize: '1rem' }} />
                        Code
                      </ProjectLink>
                    )}
                    {project.demo && (
                      <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                        <OpenInNew sx={{ fontSize: '1rem' }} />
                        Live Demo
                      </ProjectLink>
                    )}
                    {project.paper && (
                      <ProjectLink href={project.paper} target="_blank" rel="noopener noreferrer">
                        <Description sx={{ fontSize: '1rem' }} />
                        Paper
                      </ProjectLink>
                    )}
                  </Box>
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