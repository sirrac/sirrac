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
  TextField
} from '@mui/material';

// --- MUI Icon Imports ---
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // --- Mobile Drawer Component ---
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      className="text-center bg-gray-900 text-gray-50 h-full"
    >
      <Box className="flex justify-between items-center p-4">
        <Typography variant="h6" className="font-bold">
          Menu
        </Typography>
        <IconButton>
          <CloseIcon className="text-gray-50" />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component="a" href={item.href} className="text-center">
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    // We use a dark theme by default from Tailwind
    // We can wrap the whole App in MUI's ThemeProvider if we need deep customization
    <Box className="bg-gray-900 text-gray-50 scroll-smooth">
      
      {/* --- Header / AppBar --- */}
      <AppBar 
        component="header" 
        className="bg-gray-800/90 backdrop-blur-sm shadow-md"
        elevation={0} // Use Tailwind shadow instead
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Desktop Logo/Name */}
            <Typography
              variant="h6"
              component="a"
              href="#home"
              className="mr-auto font-bold text-cyan-400 no-underline hover:text-cyan-300 transition-colors"
            >
              Your Name
            </Typography>

            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="md:hidden" // Only show on mobile
            >
              <MenuIcon />
            </IconButton>
            
            {/* Desktop Navigation Links */}
            <Box className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  component="a"
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white"
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
          className="min-h-screen flex items-center pt-16" // pt-16 to offset app bar
        >
          <Container maxWidth="lg" className="text-center">
            <Typography
              variant="h1"
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
            >
              Hi, I'm <span className="text-cyan-400">Your Name</span>
            </Typography>
            <Typography
              variant="h4"
              component="p"
              className="mt-4 text-2xl md:text-3xl font-semibold text-gray-200"
            >
              Aspiring Software Engineer
            </Typography>
            <Typography
              variant="body1"
              className="mt-6 max-w-2xl mx-auto text-lg text-gray-300"
            >
              I'm a passionate student developer with a love for building creative and efficient solutions. I'm currently seeking internship opportunities to apply my skills and grow as an engineer.
            </Typography>
            <Box className="mt-10 flex justify-center space-x-6">
              <Link href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <GitHubIcon style={{ fontSize: 40 }} />
              </Link>
              <Link href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <LinkedInIcon style={{ fontSize: 40 }} />
              </Link>
            </Box>
          </Container>
        </Box>

        {/* --- About Me Section (#about) --- */}
        <Box id="about" className="bg-gray-800 py-20 md:py-32">
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={12}>
                <Typography variant="h2" className="text-4xl font-bold mb-6 text-cyan-400">
                  About Me
                </Typography>
                <Typography variant="body1" className="text-lg text-gray-300 mb-4">
                  Hello! I'm a [Your Year, e.g., third-year] student at [Your University] studying Computer Science. I'm deeply passionate about web development, machine learning, and everything in between.
                </Typography>
                <Typography variant="body1" className="text-lg text-gray-300 mb-6">
                  Outside of coding, I enjoy [Your Hobby 1], [Your Hobby 2], and contributing to open-source projects. I'm always eager to learn new technologies and collaborate with others.
                </Typography>
                <Typography variant="h5" className="font-semibold mb-3 text-gray-100">
                  My Skills:
                </Typography>
                <Box className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Node.js', 'Python', 'Tailwind CSS', 'Material-UI', 'Git'].map(skill => (
                    <Box key={skill} className="bg-cyan-500 text-gray-900 text-sm font-medium px-3 py-1 rounded-full">
                      {skill}
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* --- Projects Section (#projects) --- */}
        <Box id="projects" className="py-20 md:py-32">
          <Container maxWidth="lg">
            <Typography variant="h2" className="text-4xl font-bold text-center mb-12 text-cyan-400">
              My Projects
            </Typography>
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card 
                    className="bg-gray-800 text-gray-50 h-full flex flex-col rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                    <CardContent className="flex-grow">
                      <Typography gutterBottom variant="h5" component="div" className="font-bold">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" className="text-gray-300 mb-4">
                        {project.description}
                      </Typography>
                      <Box className="flex flex-wrap gap-2">
                        {project.stack.map(tech => (
                          <span key={tech} className="bg-gray-700 text-cyan-400 text-xs font-medium px-2 py-0.5 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions className="p-4">
                      <Button size="small" href={project.githubUrl} target="_blank" className="text-cyan-400">
                        <GitHubIcon className="mr-1" /> Code
                      </Button>
                      {project.liveUrl && (
                        <Button size="small" href={project.liveUrl} target="_blank" className="text-cyan-400">
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
        <Box id="contact" className="bg-gray-800 py-20 md:py-32">
          <Container maxWidth="md">
            <Typography variant="h2" className="text-4xl font-bold text-center mb-12 text-cyan-400">
              Get In Touch
            </Typography>
            <Typography variant="body1" className="text-lg text-center text-gray-300 mb-8 max-w-lg mx-auto">
              I'm actively looking for internship opportunities and am open to any questions or collaborations. Feel free to reach out!
            </Typography>
            <Box
              component="form"
              // Add your form handling logic (e.g., Netlify forms, Formspree)
              name="contact"
              method="POST"
              data-netlify="true"
              className="max-w-xl mx-auto"
            >
              {/* For Netlify forms */}
              <input type="hidden" name="form-name" value="contact" />
              
              {/* We need to style MUI TextFields. We can use sx prop or Tailwind.
                  For simplicity, we'll use Tailwind classes on the wrapper. 
                  MUI inputs need specific styling for their internal slots.
                  We'll use `sx` for label and input color for dark mode.
              */}
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                required
                className="mb-6"
                InputLabelProps={{ style: { color: '#d1d5db' } }} // text-gray-300
                inputProps={{ style: { color: '#f9fafb' } }} // text-gray-50
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#4b5563' }, // border-gray-600
                    '&:hover fieldset': { borderColor: '#06b6d4' }, // border-cyan-500
                  },
                }}
              />
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                required
                className="mb-6"
                InputLabelProps={{ style: { color: '#d1d5db' } }}
                inputProps={{ style: { color: '#f9fafb' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#4b5563' },
                    '&:hover fieldset': { borderColor: '#06b6d4' },
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
                className="mb-6"
                InputLabelProps={{ style: { color: '#d1d5db' } }}
                inputProps={{ style: { color: '#f9fafb' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#4b5563' },
                    '&:hover fieldset': { borderColor: '#06b6d4' },
                  },
                }}
              />
              <Box className="text-center">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-3 px-8 rounded-md"
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* --- Footer --- */}
      <Box component="footer" className="bg-gray-900 py-8 text-center">
        <Container maxWidth="lg">
          <Typography variant="body2" className="text-gray-400">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}