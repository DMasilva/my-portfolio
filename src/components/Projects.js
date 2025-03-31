import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip, 
  IconButton,
  CardActions,
  Button,
  useTheme,
  alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  GitHub, 
  Language, 
  Code, 
  Visibility,
  FolderSpecial,
  Science,
  School
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Default project images (replace with actual images in a real implementation)
const defaultImages = {
  research: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
  web: 'https://images.unsplash.com/photo-1573164713988-8665fc963095',
  training: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
};

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  backgroundColor: alpha(theme.palette.background.paper, 0.6),
  backdropFilter: 'blur(10px)',
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  overflow: 'hidden',
  position: 'relative',
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

const CardOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(3),
  background: `linear-gradient(to top, 
    ${alpha(theme.palette.background.paper, 0.9)}, 
    ${alpha(theme.palette.background.paper, 0.1)}
  )`,
  transition: 'all 0.3s ease',
}));

const TechnologyChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  color: theme.palette.primary.main,
  fontWeight: 500,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
}));

const TypeChip = styled(Chip)(({ theme, type }) => {
  const colors = {
    Research: {
      bg: alpha(theme.palette.info.main, 0.1),
      border: alpha(theme.palette.info.main, 0.3),
      color: theme.palette.info.main
    },
    Training: {
      bg: alpha(theme.palette.success.main, 0.1),
      border: alpha(theme.palette.success.main, 0.3),
      color: theme.palette.success.main
    },
    'Web App': {
      bg: alpha(theme.palette.secondary.main, 0.1),
      border: alpha(theme.palette.secondary.main, 0.3),
      color: theme.palette.secondary.main
    }
  };
  
  const typeColors = colors[type] || colors['Web App'];
  
  return ({
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 2,
    backgroundColor: typeColors.bg,
    border: `1px solid ${typeColors.border}`,
    color: typeColors.color,
    fontWeight: 600,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)'
  });
});

const getTypeIcon = (type) => {
  switch (type) {
    case 'Research':
      return <Science />;
    case 'Training':
      return <School />;
    case 'Web App':
      return <Code />;
    default:
      return <FolderSpecial />;
  }
};

const Projects = () => {
  const theme = useTheme();
  const [hoveredId, setHoveredId] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: 'Accessible Learning Platform',
      period: '2022 - Present',
      technology: ['React', 'Node.js', 'MongoDB', 'Express', 'Accessibility APIs'],
      description: 'An inclusive e-learning platform designed with accessibility at its core, ensuring educational content is available to all users regardless of abilities or disabilities.',
      image: defaultImages.web,
      type: 'Web App',
      links: {
        github: 'https://github.com/DMasilva',
        demo: 'https://example.com'
      }
    },
    {
      id: 2,
      title: 'Educational Technology Research',
      period: '2021 - 2022',
      technology: ['Data Analysis', 'R', 'SPSS', 'Survey Design'],
      description: 'Research study examining the effectiveness of technology integration in higher education classrooms, with focus on student engagement and learning outcomes.',
      image: defaultImages.research,
      type: 'Research',
      links: {
        paper: 'https://example.com/research-paper'
      }
    },
    {
      id: 3,
      title: 'Interactive Teaching Modules',
      period: '2020 - 2021',
      technology: ['JavaScript', 'HTML5', 'CSS3', 'Interactive Design'],
      description: 'Suite of interactive teaching modules designed to enhance student understanding of complex concepts through visual demonstrations and exercises.',
      image: defaultImages.training,
      type: 'Training',
      links: {
        demo: 'https://example.com'
      }
    },
    {
      id: 4,
      title: 'Student Progress Dashboard',
      period: '2020',
      technology: ['Vue.js', 'Firebase', 'Chart.js', 'REST APIs'],
      description: 'Real-time dashboard allowing instructors to monitor student progress, identify areas of difficulty, and provide timely interventions.',
      image: defaultImages.web,
      type: 'Web App',
      links: {
        github: 'https://github.com/DMasilva',
        demo: 'https://example.com'
      }
    },
    {
      id: 5,
      title: 'Assistive Technology Implementation',
      period: '2019 - 2020',
      technology: ['Screen Readers', 'Voice Recognition', 'Adaptive UI', 'WCAG 2.1'],
      description: 'Implementation of assistive technologies across university systems to ensure equal access for all students, meeting and exceeding accessibility standards.',
      image: defaultImages.research,
      type: 'Research',
      links: {
        report: 'https://example.com/report'
      }
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ height: '100%' }}
            >
              <ProjectCard 
                elevation={hoveredId === project.id ? 8 : 1}
                sx={{ 
                  transform: hoveredId === project.id ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                <TypeChip
                  label={project.type}
                  type={project.type}
                  icon={getTypeIcon(project.type)}
                />
                
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                  sx={{ 
                    filter: hoveredId === project.id ? 'brightness(0.85)' : 'brightness(0.7)',
                    transition: 'all 0.3s ease',
                  }}
                />
                
                <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                  <Typography variant="overline" color="text.secondary">
                    {project.period}
                  </Typography>
                  
                  <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                    {project.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ 
                    height: 80, 
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}>
                    {project.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', pt: 1 }}>
                    {project.technology.slice(0, 3).map((tech) => (
                      <TechnologyChip
                        key={tech}
                        label={tech}
                        size="small"
                      />
                    ))}
                    {project.technology.length > 3 && (
                      <TechnologyChip
                        label={`+${project.technology.length - 3}`}
                        size="small"
                      />
                    )}
                  </Box>
                </CardContent>
                
                <CardActions sx={{ 
                  justifyContent: 'flex-end',
                  p: 2,
                  pt: 0
                }}>
                  {project.links.github && (
                    <IconButton 
                      aria-label="GitHub repository" 
                      component="a"
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                    >
                      <GitHub />
                    </IconButton>
                  )}
                  
                  {project.links.demo && (
                    <IconButton 
                      aria-label="Live demo" 
                      component="a"
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      color="primary"
                    >
                      <Language />
                    </IconButton>
                  )}
                  
                  {(project.links.paper || project.links.report) && (
                    <IconButton 
                      aria-label="View document" 
                      component="a"
                      href={project.links.paper || project.links.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      color="secondary"
                    >
                      <Visibility />
                    </IconButton>
                  )}
                  
                  <Button
                    size="small"
                    color="primary"
                    sx={{ ml: 1 }}
                  >
                    Details
                  </Button>
                </CardActions>
              </ProjectCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects; 