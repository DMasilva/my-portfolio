import React from 'react';
import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

const Section = styled(Box)(({ theme }) => ({
  padding: '80px 0',
  background: theme.palette.background.default,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
  fontWeight: 800,
  color: theme.palette.text.primary,
  marginBottom: '48px',
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  lineHeight: 1.7,
  color: theme.palette.text.secondary,
  marginBottom: '24px',
}));

const SubsectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '24px',
}));

const SkillTag = styled(Chip)(({ theme }) => ({
  padding: '8px 16px',
  background: theme.palette.background.paper,
  color: theme.palette.text.secondary,
  borderRadius: '8px',
  fontSize: '0.875rem',
  fontWeight: 500,
  margin: '4px',
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    background: theme.palette.action.hover,
    color: theme.palette.text.primary,
  },
}));

const ExperienceItem = styled(Box)(({ theme }) => ({
  borderLeft: `2px solid ${theme.palette.secondary.main}`,
  paddingLeft: '16px',
  marginBottom: '24px',
}));

const ExperienceDate = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
  marginBottom: '4px',
}));

const ExperienceTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: '4px',
}));

const ExperienceCompany = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
}));

const Bio = () => {
  const topSkills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python',
    'Blackboard Ultra', 'Accessibility', 'Tailwind CSS', 'Git'
  ];

  const experiences = [
    {
      date: 'Nov 2024 — Present',
      title: 'IDC Student Supervisor',
      company: 'North Dakota State University',
    },
    {
      date: 'Aug 2023 — Oct 2024',
      title: 'Grad Student Technology Assistant',
      company: 'North Dakota State University',
    },
    {
      date: 'Mar 2025 — Present',
      title: 'Full Stack Developer Intern',
      company: 'Pavewise Pro',
    },
  ];

  return (
    <Section id="about">
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid item xs={12} md={7}>
            <SectionTitle>About Me</SectionTitle>
            <Paragraph>
              I'm a Full Stack Developer and Academic Technology Specialist passionate about creating
              accessible, user-centered digital experiences that enhance learning and productivity.
            </Paragraph>
            <Paragraph>
              Currently pursuing my Master's in Computer Science at North Dakota State University,
              I specialize in educational technology integration, web development, and accessibility solutions.
              My work focuses on bridging the gap between innovative technology and practical educational applications.
            </Paragraph>
            <Paragraph>
              With experience in both software development and academic technology support, I bring a unique
              perspective to building tools that serve diverse user needs. I'm particularly interested in
              assistive technologies, learning management systems, and creating inclusive digital environments.
            </Paragraph>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box sx={{ mb: 6 }}>
              <SubsectionTitle>Skills</SubsectionTitle>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {topSkills.map((skill) => (
                  <SkillTag key={skill} label={skill} />
                ))}
              </Box>
            </Box>

            <Box>
              <SubsectionTitle>Experience</SubsectionTitle>
              {experiences.map((exp, index) => (
                <ExperienceItem key={index}>
                  <ExperienceDate>{exp.date}</ExperienceDate>
                  <ExperienceTitle>{exp.title}</ExperienceTitle>
                  <ExperienceCompany>{exp.company}</ExperienceCompany>
                </ExperienceItem>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Bio;