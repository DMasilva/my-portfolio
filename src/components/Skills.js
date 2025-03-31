import React, { useState } from 'react';
import { 
  Box, 
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Chip,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
  alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Code as CodeIcon,
  Language as LanguageIcon,
  Build as BuildIcon,
  Devices as DevicesIcon,
  DataObject as DataObjectIcon,
  Layers as LayersIcon,
  Psychology as PsychologyIcon,
  School as SchoolIcon,
  AutoAwesome as AutoAwesomeIcon,
  Info as InfoIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const SkillCategory = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  backgroundColor: alpha(theme.palette.background.paper, 0.6),
  backdropFilter: 'blur(10px)',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
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
    height: '4px',
    background: 'transparent',
    transition: 'background 0.3s ease',
  },
  '&:hover::before': {
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  }
}));

const CategoryIcon = styled(Box)(({ theme, color }) => ({
  width: 50,
  height: 50,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: alpha(theme.palette[color].main, 0.12),
  color: theme.palette[color].main,
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: 28,
  }
}));

const SkillChip = styled(Chip)(({ theme, level }) => {
  const colors = {
    advanced: {
      bg: alpha(theme.palette.success.main, 0.1),
      color: theme.palette.success.main,
      border: alpha(theme.palette.success.main, 0.3)
    },
    intermediate: {
      bg: alpha(theme.palette.info.main, 0.1),
      color: theme.palette.info.main,
      border: alpha(theme.palette.info.main, 0.3)
    },
    beginner: {
      bg: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
      border: alpha(theme.palette.primary.main, 0.3)
    }
  };

  const levelColors = colors[level] || colors.intermediate;

  return ({
    margin: theme.spacing(0.5),
    backgroundColor: levelColors.bg,
    color: levelColors.color,
    border: `1px solid ${levelColors.border}`,
    '&:hover': {
      backgroundColor: alpha(levelColors.color, 0.2),
    }
  });
});

const ProgressBar = styled(LinearProgress)(({ theme, color }) => ({
  height: 6,
  borderRadius: 3,
  width: '100%',
  marginTop: theme.spacing(1),
  backgroundColor: alpha(theme.palette[color].main, 0.1),
  '& .MuiLinearProgress-bar': {
    backgroundColor: theme.palette[color].main,
  }
}));

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <CodeIcon />;
      case 'Frameworks':
        return <LayersIcon />;
      case 'Developer Tools':
        return <BuildIcon />;
      case 'Academic Technologies':
        return <SchoolIcon />;
      case 'UX & Design':
        return <AutoAwesomeIcon />;
      case 'Assistive Technologies':
        return <PsychologyIcon />;
      case 'Databases':
        return <DataObjectIcon />;
      case 'Web Technologies':
        return <LanguageIcon />;
      default:
        return <DevicesIcon />;
    }
  };

  const getProgressValue = (level) => {
    switch (level) {
      case 'advanced':
        return 90;
      case 'intermediate':
        return 65;
      case 'beginner':
        return 40;
      default:
        return 50;
    }
  };

  const skillCategories = [
    {
      id: 1,
      title: 'Programming Languages',
      icon: 'CodeIcon',
      color: 'primary',
      description: 'Core languages used for application development and scripting',
      skills: [
        { name: 'JavaScript', level: 'advanced' },
        { name: 'TypeScript', level: 'intermediate' },
        { name: 'Python', level: 'advanced' },
        { name: 'Java', level: 'intermediate' },
        { name: 'C#', level: 'intermediate' },
        { name: 'PHP', level: 'beginner' }
      ]
    },
    {
      id: 2,
      title: 'Frameworks & Libraries',
      icon: 'LayersIcon',
      color: 'secondary',
      description: 'Technologies for building robust web and mobile applications',
      skills: [
        { name: 'React', level: 'advanced' },
        { name: 'Node.js', level: 'advanced' },
        { name: 'Express', level: 'intermediate' },
        { name: 'Angular', level: 'beginner' },
        { name: 'Next.js', level: 'intermediate' },
        { name: 'Django', level: 'intermediate' }
      ]
    },
    {
      id: 3,
      title: 'Academic Technologies',
      icon: 'SchoolIcon',
      color: 'info',
      description: 'Tools and platforms for educational environments',
      skills: [
        { name: 'Learning Management Systems', level: 'advanced' },
        { name: 'Blackboard', level: 'advanced' },
        { name: 'Canvas', level: 'intermediate' },
        { name: 'Moodle', level: 'intermediate' },
        { name: 'Educational Software', level: 'advanced' },
        { name: 'E-Learning Authoring Tools', level: 'intermediate' }
      ]
    },
    {
      id: 4,
      title: 'Assistive Technologies',
      icon: 'PsychologyIcon',
      color: 'success',
      description: 'Technologies that enhance accessibility for all users',
      skills: [
        { name: 'Screen Readers', level: 'advanced' },
        { name: 'WCAG Guidelines', level: 'advanced' },
        { name: 'Accessibility Testing', level: 'intermediate' },
        { name: 'Assistive Hardware', level: 'beginner' },
        { name: 'Speech Recognition', level: 'intermediate' },
        { name: 'Color Contrast Tools', level: 'advanced' }
      ]
    },
    {
      id: 5,
      title: 'Developer Tools',
      icon: 'BuildIcon',
      color: 'warning',
      description: 'Essential tools for efficient software development',
      skills: [
        { name: 'Git', level: 'advanced' },
        { name: 'VS Code', level: 'advanced' },
        { name: 'Docker', level: 'intermediate' },
        { name: 'CI/CD Pipelines', level: 'intermediate' },
        { name: 'Webpack', level: 'intermediate' },
        { name: 'npm/yarn', level: 'advanced' }
      ]
    },
    {
      id: 6,
      title: 'UX & Design',
      icon: 'AutoAwesomeIcon',
      color: 'error',
      description: 'Tools and methods for creating engaging user experiences',
      skills: [
        { name: 'Figma', level: 'intermediate' },
        { name: 'Responsive Design', level: 'advanced' },
        { name: 'CSS/SASS', level: 'advanced' },
        { name: 'UI Frameworks', level: 'advanced' },
        { name: 'Material UI', level: 'advanced' },
        { name: 'Tailwind CSS', level: 'intermediate' }
      ]
    },
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

  const handleCategoryClick = (id) => {
    setSelectedCategory(selectedCategory === id ? null : id);
  };

  return (
    <Box component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Grid container spacing={4}>
        {skillCategories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id}>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ height: '100%' }}
            >
              <SkillCategory 
                elevation={1}
                onClick={() => handleCategoryClick(category.id)}
                sx={{ cursor: 'pointer' }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <CategoryIcon color={category.color}>
                    {getCategoryIcon(category.title)}
                  </CategoryIcon>
                  
                  <Tooltip title="Click to see details">
                    <IconButton size="small">
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
                
                <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
                  {category.title}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" paragraph>
                  {category.description}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
                  {category.skills.slice(0, 4).map((skill) => (
                    <SkillChip
                      key={skill.name}
                      label={skill.name}
                      level={skill.level}
                      size="small"
                    />
                  ))}
                  {category.skills.length > 4 && (
                    <SkillChip
                      label={`+${category.skills.length - 4}`}
                      level="intermediate"
                      size="small"
                    />
                  )}
                </Box>
                
                <AnimatePresence>
                  {selectedCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Box sx={{ mt: 3 }}>
                        {category.skills.map((skill) => (
                          <Box key={skill.name} sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                              <Typography variant="body2">{skill.name}</Typography>
                              <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'capitalize' }}>
                                {skill.level}
                              </Typography>
                            </Box>
                            <ProgressBar 
                              variant="determinate" 
                              value={getProgressValue(skill.level)} 
                              color={category.color}
                            />
                          </Box>
                        ))}
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SkillCategory>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills; 