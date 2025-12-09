import React from 'react';
import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '16px',
}));

const SkillTag = styled(Chip)(({ theme }) => ({
  padding: '8px 16px',
  background: theme.palette.background.paper,
  color: theme.palette.text.secondary,
  borderRadius: '8px',
  fontSize: '0.875rem',
  fontWeight: 500,
  margin: '6px',
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    background: theme.palette.action.hover,
    borderColor: theme.palette.text.primary,
    color: theme.palette.text.primary,
  },
}));

const CategoryBox = styled(Box)({
  marginBottom: '32px',
});

const Skills = () => {
  const skillCategories = [
    {
      category: 'Academic Technologies',
      skills: ['Blackboard Ultra', 'Blackboard Original', 'Zoom', 'Canvas', 'Camtasia', 'Adobe Suite', 'Yuja', 'PointSolutions'],
    },
    {
      category: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS', 'Ruby'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['React', 'Node.js', 'Ruby on Rails', 'Tailwind CSS', 'Bootstrap', 'JUnit', 'WordPress', 'FastAPI', 'React Router', 'Axios'],
    },
    {
      category: 'Assistive Technologies',
      skills: ['JAWS', 'NVDA', 'VoiceOver', 'ZoomText', 'Read & Writes', 'WCAG Guidelines', 'Accessibility Testing'],
    },
    {
      category: 'Developer Tools',
      skills: ['Git', 'Docker', 'VS Code', 'Visual Studio', 'IntelliJ', 'Eclipse', 'PostgreSQL', 'MySQL', 'SQLite'],
    },
    {
      category: 'Additional Skills',
      skills: ['Technical Training', 'Customer Service', 'Documentation', 'LMS Support', 'Network Configuration'],
    },
  ];

  return (
    <Section id="skills">
      <Container maxWidth="lg">
        <SectionTitle>Technical Skills</SectionTitle>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <CategoryBox>
                <CategoryTitle>{category.category}</CategoryTitle>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1 }}>
                  {category.skills.map((skill) => (
                    <SkillTag key={skill} label={skill} />
                  ))}
                </Box>
              </CategoryBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Skills;