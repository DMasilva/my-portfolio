import React, { useState } from 'react';
import { Box, Container, Typography, Chip, IconButton, Collapse } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import {
  WorkOutline,
  CalendarToday,
  LocationOn,
  ExpandMore,
  CheckCircle,
  Code,
} from '@mui/icons-material';
import {
  SiReact,
  SiTypescript,
  SiRubyonrails,
  SiJavascript,
} from 'react-icons/si';
import { TbApi, TbUsers, TbFileDescription, TbChartBar } from 'react-icons/tb';

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
  background:
    theme.palette.mode === 'dark'
      ? `linear-gradient(180deg, ${theme.palette.background.default} 0%, #1e293b 100%)`
      : `linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)`,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  fontWeight: 800,
  color: theme.palette.text.primary,
  marginBottom: '60px',
  textAlign: 'center',
  animation: `${fadeInUp} 0.6s ease-out`,
}));

const TimelineContainer = styled(Box)({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '30px',
    top: 0,
    bottom: 0,
    width: '2px',
    background: 'linear-gradient(180deg, #38bdf8 0%, #818cf8 50%, #f59e0b 100%)',
    '@media (max-width: 768px)': {
      left: '20px',
    },
  },
});

const TimelineItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingLeft: '80px',
  paddingBottom: '60px',
  '@media (max-width: 768px)': {
    paddingLeft: '60px',
  },
}));

const TimelineDot = styled(Box)(({ theme, active }) => ({
  position: 'absolute',
  left: '20px',
  top: '6px',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  border: `3px solid ${theme.palette.primary.main}`,
  backgroundColor: active ? theme.palette.primary.main : theme.palette.background.default,
  boxShadow: active
    ? `0 0 0 4px ${
        theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(15, 23, 42, 0.1)'
      }`
    : 'none',
  transition: 'all 0.3s ease',
  '@media (max-width: 768px)': {
    left: '11px',
    width: '18px',
    height: '18px',
  },
}));

const ExperienceCard = styled(Box)(({ theme }) => ({
  padding: '32px',
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '16px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateX(8px)',
    borderColor: theme.palette.primary.main,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 8px 24px rgba(0, 0, 0, 0.4)'
        : '0 8px 24px rgba(0, 0, 0, 0.08)',
  },
}));

const CompanyName = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginBottom: '8px',
}));

const JobTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 800,
  color: theme.palette.text.primary,
  marginBottom: '12px',
}));

const MetaInfo = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  marginBottom: '16px',
});

const MetaItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  color: theme.palette.text.secondary,
  fontSize: '0.95rem',
  '& svg': {
    fontSize: '1.125rem',
  },
}));

const TechTag = styled(Chip)(({ theme }) => ({
  margin: '4px',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(56, 189, 248, 0.1)'
      : 'rgba(15, 23, 42, 0.05)',
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.divider}`,
  fontWeight: 500,
  fontSize: '0.8125rem',
  height: '28px',
  '& .MuiChip-icon': {
    color: theme.palette.text.secondary,
    marginLeft: '6px',
  },
}));

const ExpandButton = styled(IconButton)(({ expanded }) => ({
  transform: expanded ? 'rotate(180deg)' : 'rotate(0)',
  transition: 'transform 0.3s ease',
}));

const Responsibility = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '12px',
  marginBottom: '12px',
  '& svg': {
    fontSize: '1.125rem',
    color: theme.palette.primary.main,
    flexShrink: 0,
    marginTop: '4px',
  },
}));

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const getTechIcon = (tech) => {
    const iconMap = {
      'React': <SiReact size={14} />,
      'TypeScript': <SiTypescript size={14} />,
      'Ruby on Rails': <SiRubyonrails size={14} />,
      'PowerBI': <TbChartBar size={14} />,
      'JavaScript': <SiJavascript size={14} />,
      'REST APIs': <TbApi size={14} />,
      'Team Leadership': <TbUsers size={14} />,
      'Documentation': <TbFileDescription size={14} />,
      'Training': <TbUsers size={14} />,
      'LMS Support': <Code sx={{ fontSize: '0.875rem' }} />,
      'Responsive Design': <Code sx={{ fontSize: '0.875rem' }} />,
    };
    return iconMap[tech] || <Code sx={{ fontSize: '0.875rem' }} />;
  };

  const experiences = [
    {
      company: 'Pavewise Pro',
      title: 'Full Stack Developer Intern',
      location: 'Fargo, ND',
      period: 'Mar 2025 — Present',
      current: true,
      responsibilities: [
        'Built and maintained application features using React and TypeScript; supported backend development using Ruby on Rails',
        'Worked with APIs and data flows to support internal tooling and reporting needs',
        'Developed dashboards and operational reporting using PowerBI and JavaScript-based data processing',
        'Debugged issues, supported testing and validation, and contributed to deployment-related tasks',
        'Collaborated with team members using clear documentation and structured handoffs',
      ],
      tags: ['React', 'TypeScript', 'Ruby on Rails', 'PowerBI', 'REST APIs'],
    },
    {
      company: 'Instruction Design Center, IT Division — NDSU',
      title: 'IDC Student Supervisor',
      location: 'NDSU, ND',
      period: 'Nov 2024 — Dec 2025',
      current: false,
      responsibilities: [
        'Led a small student team; improved workflows through documentation, troubleshooting playbooks, and process cleanup',
        'Managed and resolved issues using a ticketing workflow; tracked recurring problems and shared recommendations',
        'Coordinated with IT teams and stakeholders to support platform updates and user needs',
      ],
      tags: ['Team Leadership', 'Documentation', 'Ticketing Systems', 'Process Improvement'],
    },
    {
      company: 'Instruction Design Center, IT Division — NDSU',
      title: 'Graduate Student Technology Assistant',
      location: 'NDSU, ND',
      period: 'Aug 2023 — Nov 2024',
      current: false,
      responsibilities: [
        'Built documentation and training materials that improved adoption of campus platforms and reduced repeated support issues',
        'Supported technology transitions and basic testing/validation during platform updates',
        'Used reporting tools to track trends and communicate findings to the support team',
      ],
      tags: ['Training', 'Documentation', 'LMS Support', 'Reporting'],
    },
    {
      company: 'TIENDA Logistics',
      title: 'Front-end Web Developer Intern',
      location: 'Nairobi, KE',
      period: 'Feb 2023 — Aug 2023',
      current: false,
      responsibilities: [
        'Developed responsive UI components using React, HTML, CSS, and JavaScript',
        'Integrated REST APIs and tested UI behavior across browsers and devices',
        'Documented UI components and patterns to support maintainability',
      ],
      tags: ['React', 'JavaScript', 'REST APIs', 'Responsive Design'],
    },
    {
      company: 'Solar Rays Energy Sacco',
      title: 'IT Assistant',
      location: 'Nairobi, KE',
      period: 'Dec 2020 — Jul 2022',
      current: false,
      responsibilities: [
        'Supported systems and end users; performed troubleshooting, updates, and maintenance on user machines and software',
        'Maintained documentation and produced basic reports to support operations',
      ],
      tags: ['IT Support', 'Troubleshooting', 'Documentation'],
    },
  ];

  const handleExpandClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Section id="experience">
      <Container maxWidth="lg">
        <SectionTitle>Professional Experience</SectionTitle>

        <TimelineContainer>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineDot active={exp.current} />
              <ExperienceCard onClick={() => handleExpandClick(index)}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <CompanyName>{exp.company}</CompanyName>
                    <JobTitle>{exp.title}</JobTitle>
                    <MetaInfo>
                      <MetaItem>
                        <CalendarToday />
                        <span>{exp.period}</span>
                      </MetaItem>
                      <MetaItem>
                        <LocationOn />
                        <span>{exp.location}</span>
                      </MetaItem>
                      {exp.current && (
                        <Chip
                          label="Current"
                          color="primary"
                          size="small"
                          sx={{
                            fontWeight: 600,
                            height: '24px',
                          }}
                        />
                      )}
                    </MetaInfo>
                  </Box>
                  <ExpandButton
                    expanded={expandedIndex === index}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExpandClick(index);
                    }}
                    size="small"
                  >
                    <ExpandMore />
                  </ExpandButton>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
                  {exp.tags.map((tag, tagIndex) => (
                    <TechTag key={tagIndex} icon={getTechIcon(tag)} label={tag} />
                  ))}
                </Box>

                <Collapse in={expandedIndex === index} timeout="auto">
                  <Box sx={{ mt: 3, pt: 3, borderTop: 1, borderColor: 'divider' }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}
                    >
                      Key Responsibilities:
                    </Typography>
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <Responsibility key={respIndex}>
                        <CheckCircle />
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', lineHeight: 1.7 }}
                        >
                          {responsibility}
                        </Typography>
                      </Responsibility>
                    ))}
                  </Box>
                </Collapse>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Container>
    </Section>
  );
};

export default Experience;
