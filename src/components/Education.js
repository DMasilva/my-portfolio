import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { School } from '@mui/icons-material';

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

const EducationCard = styled(Card)(({ theme }) => ({
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
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '56px',
  height: '56px',
  borderRadius: '12px',
  background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#f1f5f9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
  '& svg': {
    fontSize: '1.75rem',
    color: theme.palette.text.secondary,
  },
}));

const Degree = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '8px',
  lineHeight: 1.3,
}));

const Institution = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: theme.palette.text.secondary,
  marginBottom: '8px',
}));

const DateRange = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
  fontWeight: 500,
}));

const Education = () => {
  const education = [
    {
      degree: 'Masters of Computer Science',
      institution: 'North Dakota State University',
      location: 'Fargo, ND',
      date: 'Aug 2023 — Present',
    },
    {
      degree: 'Bachelors of Science, Information Science',
      institution: 'Technical University of Kenya',
      location: 'Nairobi, Kenya',
      date: 'Sep 2016 — Nov 2020',
    },
    {
      degree: 'Certificate in Software Development',
      institution: 'Moringa School and Flatiron',
      location: 'Nairobi, Kenya',
      date: 'Nov 2022 — Jun 2023',
    },
  ];

  return (
    <Section id="education">
      <Container maxWidth="lg">
        <SectionTitle>Education</SectionTitle>

        <Grid container spacing={4}>
          {education.map((edu, index) => (
            <Grid item xs={12} md={4} key={index}>
              <EducationCard elevation={0}>
                <CardContent sx={{ p: 4 }}>
                  <IconWrapper>
                    <School />
                  </IconWrapper>
                  <Degree>{edu.degree}</Degree>
                  <Institution>{edu.institution}</Institution>
                  <Typography sx={{ fontSize: '0.95rem', color: '#64748b', mb: 1 }}>
                    {edu.location}
                  </Typography>
                  <DateRange>{edu.date}</DateRange>
                </CardContent>
              </EducationCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Education;