import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Chip, 
  Button,
  IconButton,
  Collapse,
  useTheme,
  alpha,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Work as WorkIcon,
  LocationOn as LocationIcon,
  Event as EventIcon,
  ExpandMore as ExpandMoreIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const TimelineWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: { xs: 16, md: '50%' },
    transform: { xs: 'none', md: 'translateX(-50%)' },
    width: 4,
    top: 0,
    bottom: 0,
    background: `linear-gradient(to bottom, 
      ${theme.palette.primary.main}, 
      ${alpha(theme.palette.primary.main, 0.1)}
    )`,
    borderRadius: 4,
    zIndex: 0,
  }
}));

const TimelineItem = styled(Box)(({ theme, isEven }) => ({
  display: 'flex',
  flexDirection: { xs: 'column', md: isEven ? 'row-reverse' : 'row' },
  marginBottom: theme.spacing(6),
  position: 'relative',
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  width: 16,
  height: 16,
  backgroundColor: theme.palette.primary.main,
  borderRadius: '50%',
  zIndex: 1,
  position: 'absolute',
  left: { xs: 16, md: '50%' },
  transform: { xs: 'none', md: 'translateX(-50%)' },
  boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.1)}`,
}));

const TimelineContent = styled(Paper)(({ theme, isEven }) => ({
  padding: theme.spacing(3),
  marginLeft: { xs: theme.spacing(5), md: isEven ? 0 : theme.spacing(5) },
  marginRight: { xs: 0, md: isEven ? theme.spacing(5) : 0 },
  width: { xs: 'auto', md: 'calc(50% - 32px)' },
  backgroundColor: alpha(theme.palette.background.paper, 0.6),
  backdropFilter: 'blur(10px)',
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  position: 'relative',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: `linear-gradient(90deg, 
      ${theme.palette.primary.main}, 
      ${theme.palette.secondary.main}
    )`,
  }
}));

const TimelineDate = styled(Chip)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  fontWeight: 500,
  marginBottom: theme.spacing(2),
  '& .MuiChip-icon': {
    color: theme.palette.primary.main,
  }
}));

const ResponsibilityItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(1),
  '&::before': {
    content: '""',
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing(1.5),
    marginTop: 8,
    flexShrink: 0,
  }
}));

const ExpandButton = styled(IconButton)(({ theme, expanded }) => ({
  marginLeft: 'auto',
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: 'transform 0.3s',
  color: theme.palette.text.secondary,
}));

const Experience = () => {
  const theme = useTheme();
  const [expandedId, setExpandedId] = useState(null);

  const handleExpandClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const experiences = [
    {
      id: 1,
      title: 'Academic Technology Specialist',
      company: 'North Dakota State University',
      location: 'Fargo, ND',
      period: '2023 - Present',
      shortDescription: 'Leading educational technology integration and providing expertise in academic software solutions.',
      responsibilities: [
        'Managed the migration of learning management systems from Blackboard Original to Ultra, supporting faculty through the transition.',
        'Conducted training sessions for faculty and staff on various academic technologies and accessibility tools.',
        'Developed and implemented accessible technology solutions for students with disabilities.',
        'Collaborated with IT teams to ensure seamless integration of academic software with university systems.',
        'Created documentation and tutorials for students and faculty on utilizing academic technologies.'
      ],
      skills: ['Blackboard Ultra', 'Accessibility', 'Training', 'Technical Support', 'Documentation']
    },
    {
      id: 2,
      title: 'Graduate Teaching Assistant',
      company: 'North Dakota State University',
      location: 'Fargo, ND',
      period: '2022 - 2023',
      shortDescription: 'Assisted in teaching computer science courses while pursuing graduate studies.',
      responsibilities: [
        'Conducted laboratory sessions for undergraduate computer science courses, guiding students through practical exercises.',
        'Assisted with grading assignments and providing constructive feedback to improve student learning outcomes.',
        'Held regular office hours to provide additional support to students struggling with course material.',
        'Collaborated with professors to refine curriculum and teaching materials for better student engagement.',
        'Developed innovative teaching approaches to explain complex programming concepts to students.'
      ],
      skills: ['Java', 'Python', 'Teaching', 'Student Engagement', 'Curriculum Development']
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Moringa Institute',
      location: 'Nairobi, Kenya',
      period: '2021 - 2022',
      shortDescription: 'Developed and maintained full-stack web applications with focus on educational platforms.',
      responsibilities: [
        'Built responsive web applications using React, Node.js, and various modern web frameworks.',
        'Implemented database solutions using PostgreSQL and MongoDB for various client projects.',
        'Collaborated with UX/UI designers to transform wireframes into functional, responsive interfaces.',
        'Ensured application accessibility and compliance with web standards.',
        'Participated in agile development processes, including sprint planning and code reviews.'
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Agile Development', 'RESTful APIs']
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50
      }
    }
  };

  return (
    <Box component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <TimelineWrapper>
        {experiences.map((experience, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <TimelineItem 
              key={experience.id} 
              component={motion.div}
              variants={itemVariants}
              isEven={isEven}
            >
              <TimelineDot />
              <TimelineContent 
                elevation={1} 
                isEven={isEven}
              >
                <TimelineDate 
                  label={experience.period} 
                  icon={<EventIcon />} 
                />
                
                <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
                  {experience.title}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <WorkIcon fontSize="small" color="primary" sx={{ mr: 1, opacity: 0.7 }} />
                  <Typography variant="body2" sx={{ mr: 2 }}>
                    {experience.company}
                  </Typography>
                  
                  <LocationIcon fontSize="small" color="secondary" sx={{ mr: 1, opacity: 0.7 }} />
                  <Typography variant="body2">
                    {experience.location}
                  </Typography>
                </Box>
                
                <Typography variant="body2" color="text.secondary" paragraph>
                  {experience.shortDescription}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
                  {experience.skills.slice(0, 3).map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        m: 0.5,
                        bgcolor: alpha(theme.palette.secondary.main, 0.1),
                        color: theme.palette.secondary.main,
                        borderRadius: '4px',
                        border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                      }}
                    />
                  ))}
                  {experience.skills.length > 3 && (
                    <Chip
                      label={`+${experience.skills.length - 3}`}
                      size="small"
                      sx={{
                        m: 0.5,
                        bgcolor: alpha(theme.palette.secondary.main, 0.05),
                        color: theme.palette.secondary.main,
                        borderRadius: '4px',
                      }}
                    />
                  )}
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <Button
                    size="small"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ 
                      color: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.05),
                      }
                    }}
                  >
                    Learn More
                  </Button>
                  
                  <ExpandButton
                    expanded={expandedId === experience.id}
                    onClick={() => handleExpandClick(experience.id)}
                    size="small"
                    aria-expanded={expandedId === experience.id}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandButton>
                </Box>
                
                <Collapse in={expandedId === experience.id} timeout="auto" unmountOnExit>
                  <Divider sx={{ my: 2, opacity: 0.1 }} />
                  <Box sx={{ pt: 1 }}>
                    <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                      Key Responsibilities:
                    </Typography>
                    
                    {experience.responsibilities.map((responsibility, idx) => (
                      <ResponsibilityItem key={idx}>
                        <Typography variant="body2">
                          {responsibility}
                        </Typography>
                      </ResponsibilityItem>
                    ))}
                  </Box>
                </Collapse>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </TimelineWrapper>
    </Box>
  );
};

export default Experience; 