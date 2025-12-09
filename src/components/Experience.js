import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
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

const SubsectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '32px',
}));

const ExperienceCard = styled(Box)(({ theme }) => ({
  borderLeft: `2px solid ${theme.palette.secondary.main}`,
  paddingLeft: '24px',
  marginBottom: '40px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-6px',
    top: '4px',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: theme.palette.secondary.main,
  },
}));

const DateRange = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
  marginBottom: '8px',
  fontWeight: 500,
}));

const JobTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '4px',
}));

const Company = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  marginBottom: '12px',
}));

const ResponsibilityList = styled('ul')(({ theme }) => ({
  margin: 0,
  paddingLeft: '20px',
  listStyle: 'disc',
  color: theme.palette.text.secondary,
}));

const Responsibility = styled('li')(({ theme }) => ({
  fontSize: '0.95rem',
  color: theme.palette.text.secondary,
  lineHeight: 1.7,
  marginBottom: '8px',
}));

const Experience = () => {
  const positions = [
    {
      title: 'IDC Student Supervisor',
      company: 'Instruction Design Center, IT Division - NDSU',
      location: 'Fargo, ND',
      date: 'Nov 2024 — Present',
      responsibilities: [
        'Supervise a team of student employees, ensuring tasks are completed efficiently and accurately',
        'Provide technical support and troubleshooting for multimedia and academic technologies',
        'Train faculty, staff, and students on various learning technologies and software tools',
        'Develop instructional materials, user guides, and training documentation',
        'Manage FreshService ticketing system, resolving technical issues efficiently',
      ],
    },
    {
      title: 'Grad Student Technology Assistant',
      company: 'Instruction Design Center, IT Division - NDSU',
      location: 'Fargo, ND',
      date: 'Aug 2023 — Oct 2024',
      responsibilities: [
        'Assisted faculty and staff in integrating technology into teaching and learning',
        'Provided LMS (Blackboard) support and troubleshooting',
        'Created tutorial videos and training resources for academic software',
        'Led technology workshops and one-on-one training sessions for faculty and students',
        'Monitored IT system functionality and escalated complex issues',
      ],
    },
    {
      title: 'IT Assistant',
      company: 'Solar Rays Energy Sacco',
      location: 'Nairobi, Kenya',
      date: 'Dec 2020 — July 2022',
      responsibilities: [
        'Provided technical support to end-users, resolving hardware and software issues promptly',
        'Managed and monitored IT infrastructure, including servers and network devices',
        'Assisted in deploying software and managing updates across the organization\'s systems',
      ],
    },
  ];

  const internships = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Pavewise Pro',
      location: 'Fargo, ND',
      date: 'Mar 2025 — Present',
      responsibilities: [
        'Write and implement efficient, reusable, and reliable code in TypeScript using React for frontend development',
        'Support back-end development using Ruby on Rails',
        'Write tests using various frameworks to ensure high-quality software',
        'Proactively debug and fix issues that arise in the software',
        'Evaluate and implement pipeline or deployment strategies to optimize developer workflow',
      ],
    },
    {
      title: 'Front-end Web Developer Intern',
      company: 'TIENDA Logistics',
      location: 'Nairobi, Kenya',
      date: 'Feb 2023 — Aug 2023',
      responsibilities: [
        'Developed and optimized user interfaces using HTML, CSS, JavaScript, and React',
        'Implemented responsive design techniques to enhance user experience across various devices',
        'Conducted testing and debugging to ensure cross-browser compatibility and performance',
      ],
    },
    {
      title: 'IT Intern',
      company: 'KUSCCO Ltd.',
      location: 'Nairobi, Kenya',
      date: 'May 2019 — Oct 2019',
      responsibilities: [
        'Worked on network configuration and troubleshooting',
        'Assisted in troubleshooting software systems and resolving technical issues',
        'Documented IT procedures and participated in implementing software and security updates',
      ],
    },
  ];

  return (
    <Section id="experience">
      <Container maxWidth="lg">
        <SectionTitle>Experience</SectionTitle>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <SubsectionTitle>Positions</SubsectionTitle>
            {positions.map((job, index) => (
              <ExperienceCard key={index}>
                <DateRange>{job.date}</DateRange>
                <JobTitle>{job.title}</JobTitle>
                <Company>{job.company}</Company>
                <ResponsibilityList>
                  {job.responsibilities.map((resp, idx) => (
                    <Responsibility key={idx}>{resp}</Responsibility>
                  ))}
                </ResponsibilityList>
              </ExperienceCard>
            ))}
          </Grid>

          <Grid item xs={12} md={6}>
            <SubsectionTitle>Internships</SubsectionTitle>
            {internships.map((job, index) => (
              <ExperienceCard key={index}>
                <DateRange>{job.date}</DateRange>
                <JobTitle>{job.title}</JobTitle>
                <Company>{job.company}</Company>
                <ResponsibilityList>
                  {job.responsibilities.map((resp, idx) => (
                    <Responsibility key={idx}>{resp}</Responsibility>
                  ))}
                </ResponsibilityList>
              </ExperienceCard>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Experience;