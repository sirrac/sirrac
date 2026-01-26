import React, { useState } from 'react';

// --- MUI Core Imports ---
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
  TextField,
  Chip,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material';
import { cyan, grey } from '@mui/material/colors';

// --- MUI Icon Imports ---
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// --- MUI Dark Theme ---
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: cyan[500],
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
    text: {
      primary: grey[50],
      secondary: grey[300],
    },
    // Adding custom color shades to use
    cyan: {
      300: cyan[300],
      400: cyan[400],
      500: cyan[500],
      600: cyan[600],
    },
    grey: {
      ...grey
    }
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    // Add smooth scrolling to the whole page
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
      },
    },
  },
});

// --- Placeholder Project Data ---
const projects = [
  {
    title: 'Project One',
    description: 'A brief description of your project. What problem does it solve? What technologies did you use?',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Project Two',
    description: 'Another awesome project. This one showcases your skills in a different area, like data structures or algorithms.',
    stack: ['Python', 'Flask', 'PostgreSQL'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Project Three',
    description: 'This could be a group project, a hackathon submission, or a personal passion project.',
    stack: ['React Native', 'Firebase'],
    githubUrl: '#',
    liveUrl: null, // No live URL
  },
];

// --- Navigation Links ---
const navItems = [
  { text: 'Home', href: '#home' },
  { text: 'About', href: '#about' },
  { text: 'Projects', href: '#projects' },
  { text: 'Contact', href: '#contact' },
];

/**
 * Main App Component
 * This component renders the entire portfolio website.
 */
function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // --- Mobile Drawer Component ---
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', bgcolor: 'grey.900', color: 'grey.50', height: '100%' }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Menu
        </Typography>
        <IconButton>
          <CloseIcon sx={{ color: 'grey.50' }} />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component="a" href={item.href} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        
        {/* --- Header / AppBar --- */}
        <AppBar 
          component="header" 
          // Use rgba for transparency to see blur
          sx={{ bgcolor: 'rgba(31, 41, 55, 0.7)', backdropFilter: 'blur(10px)' }}
          elevation={0} // Using backdrop filter instead of shadow
          position="fixed" // Keep it fixed at the top
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              {/* Desktop Logo/Name */}
              <Typography
                variant="h6"
                component="a"
                href="#home"
                sx={{
                  flexGrow: 1, // Pushes nav links to the right
                  fontWeight: 'bold',
                  color: 'cyan.400',
                  textDecoration: 'none',
                  '&:hover': { color: 'cyan.300' },
                  transition: 'color 0.3s'
                }}
              >
                Srikar Girijala
              </Typography>

              {/* Mobile Menu Icon */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' } }} // Only show on mobile
              >
                <MenuIcon />
              </IconButton>
              
              {/* Desktop Navigation Links */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.text}
                    component="a"
                    href={item.href}
                    sx={{
                      color: 'grey.300',
                      '&:hover': { bgcolor: 'grey.700', color: 'white' }
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* --- Mobile Navigation Drawer --- */}
        <Box component="nav">
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }} // Better open performance on mobile.
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

        {/* --- Main Content --- */}
        <Box component="main">
          
          {/* --- Hero Section (#home) --- */}
          <Box
            id="home"
            sx={{
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              // pt: 8 is 64px, the default height of the AppBar
              pt: { xs: 8, md: 0 }, 
              textAlign: 'center'
            }}
          >
            <Container maxWidth="lg">
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                  fontWeight: 800,
                  color: 'white',
                  lineHeight: 1.2
                }}
              >
                Hi, I'm <Box component="span" sx={{ color: 'cyan.400' }}>Srikar Girijala</Box>
              </Typography>
              <Typography
                variant="h4"
                component="p"
                sx={{
                  mt: 2,
                  fontSize: { xs: '1.5rem', md: '1.875rem' },
                  fontWeight: 600,
                  color: 'grey.200'
                }}
              >
                Software Engineer
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 3,
                  maxWidth: '60ch', // Limits line length for readability
                  mx: 'auto',
                  fontSize: '1.125rem',
                  color: 'grey.300'
                }}
              >
                I'm a passionate student developer with a love for building creative and efficient solutions. I'm currently seeking internship opportunities to apply my skills and grow as an engineer.
              </Typography>
              <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center', gap: 3 }}>
                <Link
                  href="https://github.com/sirrac "
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'grey.400', '&:hover': { color: 'cyan.400' }, transition: 'color 0.3s' }}
                >
                  <GitHubIcon sx={{ fontSize: 40 }} />
                </Link>
                <Link
                  href="https://linkedin.com/in/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'grey.400', '&:hover': { color: 'cyan.400' }, transition: 'color 0.3s' }}
                >
                  <LinkedInIcon sx={{ fontSize: 40 }} />
                </Link>
              </Box>
            </Container>
          </Box>

          {/* --- About Me Section (#about) --- */}
          <Box id="about" sx={{ bgcolor: 'background.paper', py: { xs: 10, md: 16 } }}>
            <Container maxWidth="lg">
              <Grid container spacing={4}>
                <Grid item xs={12} md={12}>
                  <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3, color: 'cyan.400' }}>
                    About Me
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'grey.300', mb: 2 }}>
                    Hello! I'm a third-year student at University of Illinois at Urbana-Champaign studying Computer Science and Statistics. I'm deeply passionate about web development, machine learning, and everything in between.
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'grey.300', mb: 3 }}>
                    Outside of coding, I enjoy anything creative in music and art, as well as running. I'm always eager to learn new technologies and collaborate with others.
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5, color: 'grey.100' }}>
                    My Skills:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {['JavaScript', 'React', 'Node.js', 'Python', 'Material-UI', 'Git'].map(skill => (
                      <Chip 
                        key={skill} 
                        label={skill} 
                        sx={{ 
                          bgcolor: 'cyan.500', 
                          color: 'grey.900', 
                          fontWeight: 500,
                          fontSize: '0.875rem'
                        }} 
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* --- Projects Section (#projects) --- */}
          <Box id="projects" sx={{ py: { xs: 10, md: 16 } }}>
            <Container maxWidth="lg">
              <Typography variant="h2" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6, color: 'cyan.400' }}>
                My Projects
              </Typography>
              <Grid container spacing={4}>
                {projects.map((project, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card 
                      sx={{
                        bgcolor: 'background.paper',
                        color: 'text.primary',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 2,
                        boxShadow: 6,
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        '&:hover': { 
                          transform: 'scale(1.05)',
                          boxShadow: 12,
                        }
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {project.stack.map(tech => (
                            <Chip 
                              key={tech} 
                              label={tech} 
                              size="small" 
                              sx={{ 
                                bgcolor: 'grey.700', 
                                color: 'cyan.400', 
                                fontWeight: 500 
                              }} 
                            />
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions sx={{ p: 2 }}>
                        <Button size="small" href={project.githubUrl} target="_blank" sx={{ color: 'cyan.400' }}>
                          <GitHubIcon sx={{ mr: 0.5, fontSize: '1.25rem' }} /> Code
                        </Button>
                        {project.liveUrl && (
                          <Button size="small" href={project.liveUrl} target="_blank" sx={{ color: 'cyan.400' }}>
                            Live Demo
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>

          {/* --- Contact Section (#contact) --- */}
          <Box id="contact" sx={{ bgcolor: 'background.paper', py: { xs: 10, md: 16 } }}>
            <Container maxWidth="md">
              <Typography variant="h2" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6, color: 'cyan.400' }}>
                Get In Touch
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', textAlign: 'center', color: 'grey.300', mb: 4, maxWidth: '60ch', mx: 'auto' }}>
                I'm actively looking for internship opportunities and am open to any questions or collaborations. Feel free to reach out!
              </Typography>
              <Box
                component="form"
                name="contact"
                method="POST"
                data-netlify="true"
                sx={{ maxWidth: '600px', mx: 'auto' }}
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  required
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'grey.600' },
                      '&:hover fieldset': { borderColor: 'cyan.500' },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  required
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'grey.600' },
                      '&:hover fieldset': { borderColor: 'cyan.500' },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={6}
                  required
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'grey.600' },
                      '&:hover fieldset': { borderColor: 'cyan.500' },
                    },
                  }}
                />
                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: 'cyan.500',
                      color: 'grey.900',
                      fontWeight: 'bold',
                      py: 1.5,
                      px: 3,
                      borderRadius: 1,
                      '&:hover': { bgcolor: 'cyan.600' }
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>

        {/* --- Footer --- */}
        <Box component="footer" sx={{ bgcolor: 'background.default', py: 4, textAlign: 'center' }}>
          <Container maxWidth="lg">
            <Typography variant="body2" sx={{ color: 'grey.400' }}>
              &copy; {new Date().getFullYear()} Srikar Girijala. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

// Default export of the App
export default App;
