import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Chip, 
  Card,
  CardContent,
  CardActions,
  Button,
  Collapse,
  IconButton,
  useTheme,
  alpha,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  School as SchoolIcon,
  LocationOn as LocationIcon,
  ExpandMore as ExpandMoreIcon,
  EmojiEvents as EmojiEventsIcon,
  ImportContacts as ImportContactsIcon,
  Stars as StarsIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const EducationCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  backgroundColor: alpha(theme.palette.background.paper, 0.6),
  backdropFilter: 'blur(10px)',
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  }
}));

const CardHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  backgroundColor: alpha(theme.palette.primary.main, 0.05),
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
}));

const SchoolLogo = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  '& svg': {
    fontSize: 32,
    color: theme.palette.primary.main,
  }
}));

const HighlightChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  fontWeight: 500,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  '& svg': {
    marginRight: theme.spacing(1),
    fontSize: 18,
    color: theme.palette.text.secondary,
  }
}));

const ExpandButton = styled(IconButton)(({ theme, expanded }) => ({
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: 'transform 0.3s',
  marginLeft: 'auto',
}));

const Education = () => {
  const theme = useTheme();
  const [expandedId, setExpandedId] = useState(null);

  const handleExpandClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const educationData = [
    {
      id: 1,
      school: 'North Dakota State University',
      location: 'Fargo, ND',
      degree: 'Master of Science in Computer Science',
      period: '2022 - Present',
      gpa: '3.95/4.0',
      highlights: [
        'Research focus on software testing methodologies and LLM integration',
        'Graduate assistant in the Instructional Design Center',
        'Member of the Association for Computing Machinery (ACM)',
        'Relevant coursework: Advanced Algorithms, Machine Learning, Software Engineering'
      ],
      awards: [
        'Graduate Research Fellowship',
        'Computer Science Department Scholarship'
      ]
    },
    {
      id: 2,
      school: 'Moringa School',
      location: 'Nairobi, Kenya',
      degree: 'Software Engineering Certificate',
      period: '2020 - 2021',
      highlights: [
        'Intensive software engineering bootcamp focusing on full-stack development',
        'Completed multiple project-based assessments with real-world applications',
        'Collaborated with industry partners on capstone projects',
        'Specialized in JavaScript, Python, and Ruby frameworks'
      ],
      awards: [
        'Top Performer Award',
        'Best Group Project'
      ]
    },
    {
      id: 3,
      school: 'University of Nairobi',
      location: 'Nairobi, Kenya',
      degree: 'Bachelor of Science in Information Technology',
      period: '2016 - 2020',
      gpa: '3.8/4.0',
      highlights: [
        'Graduated with First Class Honors',
        'Final year project: Development of an Accessibility-First Learning Management System',
        'Student ambassador for technology conferences',
        'Relevant coursework: Database Systems, Web Development, Network Security'
      ],
      awards: [
        'Dean\'s List (All Semesters)',
        'Innovation Award for Final Year Project'
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <Box component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Grid container spacing={4}>
        {educationData.map((education) => (
          <Grid item xs={12} md={6} lg={4} key={education.id}>
            <motion.div variants={itemVariants} style={{ height: '100%' }}>
              <EducationCard elevation={1}>
                <CardHeader>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <SchoolLogo>
                      <SchoolIcon />
                    </SchoolLogo>
                    <Chip 
                      label={education.period} 
                      size="small"
                      sx={{ 
                        backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                        color: theme.palette.secondary.main,
                        borderRadius: '4px',
                      }}
                    />
                  </Box>
                  
                  <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
                    {education.degree}
                  </Typography>
                  
                  <Typography variant="body1" color="primary" fontWeight={500}>
                    {education.school}
                  </Typography>
                </CardHeader>
                
                <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                  <InfoItem>
                    <LocationIcon />
                    <Typography variant="body2">
                      {education.location}
                    </Typography>
                  </InfoItem>
                  
                  {education.gpa && (
                    <InfoItem>
                      <StarsIcon />
                      <Typography variant="body2">
                        GPA: {education.gpa}
                      </Typography>
                    </InfoItem>
                  )}
                  
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                      Key Highlights
                    </Typography>
                    
                    <Box sx={{ pl: 1 }}>
                      {education.highlights.slice(0, 2).map((highlight, idx) => (
                        <Box key={idx} sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start',
                          mb: 1,
                          '&::before': {
                            content: '""',
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            backgroundColor: theme.palette.primary.main,
                            marginRight: 1.5,
                            marginTop: 8,
                            flexShrink: 0,
                          }
                        }}>
                          <Typography variant="body2">
                            {highlight}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </CardContent>
                
                <CardActions sx={{ p: 2, pt: 0, justifyContent: 'space-between' }}>
                  <Button 
                    size="small" 
                    startIcon={<ImportContactsIcon />}
                    sx={{ 
                      color: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.05),
                      }
                    }}
                  >
                    Courses
                  </Button>
                  
                  <ExpandButton
                    expanded={expandedId === education.id}
                    onClick={() => handleExpandClick(education.id)}
                    size="small"
                    aria-expanded={expandedId === education.id}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandButton>
                </CardActions>
                
                <Collapse in={expandedId === education.id} timeout="auto" unmountOnExit>
                  <CardContent sx={{ pt: 0 }}>
                    <Divider sx={{ my: 2, opacity: 0.1 }} />
                    
                    {/* Additional highlights */}
                    {education.highlights.length > 2 && (
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                          Additional Highlights
                        </Typography>
                        
                        <Box sx={{ pl: 1 }}>
                          {education.highlights.slice(2).map((highlight, idx) => (
                            <Box key={idx} sx={{ 
                              display: 'flex', 
                              alignItems: 'flex-start',
                              mb: 1,
                              '&::before': {
                                content: '""',
                                width: 5,
                                height: 5,
                                borderRadius: '50%',
                                backgroundColor: theme.palette.primary.main,
                                marginRight: 1.5,
                                marginTop: 8,
                                flexShrink: 0,
                              }
                            }}>
                              <Typography variant="body2">
                                {highlight}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    )}
                    
                    {/* Awards */}
                    {education.awards && education.awards.length > 0 && (
                      <Box>
                        <Typography variant="subtitle2" fontWeight={600} gutterBottom sx={{ 
                          display: 'flex', 
                          alignItems: 'center' 
                        }}>
                          <EmojiEventsIcon sx={{ fontSize: 18, mr: 1, color: theme.palette.warning.main }} />
                          Awards & Honors
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1 }}>
                          {education.awards.map((award, idx) => (
                            <HighlightChip
                              key={idx}
                              label={award}
                              size="small"
                            />
                          ))}
                        </Box>
                      </Box>
                    )}
                  </CardContent>
                </Collapse>
              </EducationCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education; 