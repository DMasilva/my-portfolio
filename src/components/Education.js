import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { School, CalendarToday, LocationOn, EmojiEvents, MenuBook } from '@mui/icons-material';

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
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
`;

const Section = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  background: theme.palette.mode === 'dark' ? theme.palette.background.default : '#f8fafc',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  fontWeight: 800,
  color: theme.palette.text.primary,
  marginBottom: '60px',
  textAlign: 'center',
  animation: `${fadeInUp} 0.6s ease-out`,
}));

const EducationCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '5px',
    background: 'linear-gradient(90deg, #38bdf8, #818cf8, #f59e0b)',
  },
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 20px 40px rgba(0, 0, 0, 0.4)'
      : '0 20px 40px rgba(0, 0, 0, 0.1)',
    borderColor: theme.palette.primary.main,
    '& .icon-wrapper': {
      animation: `${float} 2s ease-in-out infinite`,
      background: theme.palette.primary.main,
      color: theme.palette.mode === 'dark' ? '#0f172a' : '#ffffff',
    },
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '20px',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(129, 140, 248, 0.15))'
    : 'linear-gradient(135deg, rgba(15, 23, 42, 0.08), rgba(55, 48, 163, 0.08))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '24px',
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease',
}));

const DegreeTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 800,
  color: theme.palette.text.primary,
  marginBottom: '12px',
  lineHeight: 1.3,
}));

const Institution = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: theme.palette.primary.main,
  marginBottom: '16px',
}));

const MetaInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '16px',
  paddingTop: '16px',
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const MetaItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: theme.palette.text.secondary,
  fontSize: '0.95rem',
  '& svg': {
    fontSize: '1.125rem',
    color: theme.palette.primary.main,
  },
}));

const HighlightBox = styled(Box)(({ theme }) => ({
  padding: '16px',
  marginTop: '16px',
  borderRadius: '12px',
  background: theme.palette.mode === 'dark'
    ? 'rgba(56, 189, 248, 0.05)'
    : 'rgba(15, 23, 42, 0.03)',
  border: `1px solid ${theme.palette.divider}`,
}));

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'North Dakota State University',
      location: 'Fargo, ND',
      period: 'Aug 2023 — Dec 2025',
      current: false,
      icon: <EmojiEvents sx={{ fontSize: '2.5rem' }} />,
      highlights: [
        'Advanced algorithms and data structures',
        'Software engineering principles',
        'Research in software testing with LLMs',
      ],
    },
    {
      degree: 'Bachelor of Science, Information Science',
      institution: 'Technical University of Kenya',
      location: 'Nairobi, Kenya',
      period: 'Sep 2016 — Nov 2020',
      current: false,
      icon: <School sx={{ fontSize: '2.5rem' }} />,
      highlights: [
        'Information systems and database management',
        'Web development and programming',
        'IT infrastructure and networking',
      ],
    },
    {
      degree: 'Certificate in Software Development',
      institution: 'Moringa School and Flatiron School',
      location: 'Nairobi, Kenya',
      period: 'Nov 2022 — Jun 2023',
      current: false,
      icon: <MenuBook sx={{ fontSize: '2.5rem' }} />,
      highlights: [
        'Full-stack web development',
        'Modern JavaScript frameworks',
        'Agile development methodologies',
      ],
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
                  <IconWrapper className="icon-wrapper">
                    {edu.icon}
                  </IconWrapper>

                  <DegreeTitle>{edu.degree}</DegreeTitle>
                  <Institution>{edu.institution}</Institution>

                  <MetaInfo>
                    <MetaItem>
                      <LocationOn />
                      <span>{edu.location}</span>
                    </MetaItem>
                    <MetaItem>
                      <CalendarToday />
                      <span>{edu.period}</span>
                      {edu.current && (
                        <Box
                          component="span"
                          sx={{
                            ml: 1,
                            px: 1,
                            py: 0.5,
                            bgcolor: 'success.main',
                            color: 'white',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                          }}
                        >
                          Current
                        </Box>
                      )}
                    </MetaItem>
                  </MetaInfo>

                  <HighlightBox>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: 'text.primary',
                      }}
                    >
                      Key Focus Areas:
                    </Typography>
                    {edu.highlights.map((highlight, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 1,
                          mb: 0.5,
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            mt: 1,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', lineHeight: 1.7 }}
                        >
                          {highlight}
                        </Typography>
                      </Box>
                    ))}
                  </HighlightBox>
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
