import { useState, useEffect } from "react"
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Avatar,
  Fade,
  Slide,
  Stack,
} from "@mui/material"
import {
  GitHub,
  LinkedIn,
  Email,
  Launch,
  Code,
  Palette,
  PhoneAndroid,
  Language,
  KeyboardArrowDown,
  Star,
  CalendarToday,
} from "@mui/icons-material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
    },
    secondary: {
      main: "#e91e63",
      light: "#f06292",
      dark: "#c2185b",
    },
    background: {
      default: "#0a0a0a",
      paper: "rgba(30, 30, 30, 0.8)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "4rem",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            borderColor: "#9c27b0",
            boxShadow: "0 8px 32px rgba(156, 39, 176, 0.3)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          fontWeight: 600,
        },
      },
    },
  },
})

export default function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Material-UI"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce-platform",
      featured: true,
      year: "2024",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      liveUrl: "https://example-taskapp.com",
      githubUrl: "https://github.com/username/task-manager",
      featured: true,
      year: "2024",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "OpenWeather API", "Chart.js", "Material-UI"],
      liveUrl: "https://example-weather.com",
      githubUrl: "https://github.com/username/weather-dashboard",
      featured: false,
      year: "2023",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing web development projects with smooth animations and interactive elements.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Material-UI", "Framer Motion", "TypeScript"],
      liveUrl: "https://example-portfolio.com",
      githubUrl: "https://github.com/username/portfolio",
      featured: false,
      year: "2023",
    },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/username",
      icon: GitHub,
      color: "#333",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/username",
      icon: LinkedIn,
      color: "#0077b5",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: Email,
      color: "#ea4335",
    },
  ]

  const skills = [
    { name: "Frontend", icon: Code, items: ["React", "Next.js", "TypeScript", "Material-UI"] },
    { name: "Backend", icon: Language, items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { name: "Design", icon: Palette, items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"] },
    { name: "Mobile", icon: PhoneAndroid, items: ["React Native", "Flutter", "iOS", "Android"] },
  ]

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #16213e 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Elements */}
        <Box
          sx={{
            position: "absolute",
            top: "-20%",
            right: "-20%",
            width: "40%",
            height: "40%",
            background: "radial-gradient(circle, rgba(156, 39, 176, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "pulse 4s ease-in-out infinite",
            "@keyframes pulse": {
              "0%, 100%": { opacity: 0.3 },
              "50%": { opacity: 0.6 },
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-20%",
            left: "-20%",
            width: "40%",
            height: "40%",
            background: "radial-gradient(circle, rgba(233, 30, 99, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "pulse 4s ease-in-out infinite 2s",
          }}
        />

        {/* Hero Section */}
        <Box
          component="section"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Container maxWidth="lg">
            <Fade in={isVisible} timeout={1000}>
              <Box textAlign="center">
                <Box sx={{ mb: 4 }}>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      mx: "auto",
                      mb: 3,
                      background: "linear-gradient(45deg, #9c27b0 30%, #e91e63 90%)",
                      fontSize: "3rem",
                    }}
                  >
                    <Code sx={{ fontSize: "3rem" }} />
                  </Avatar>
                </Box>

                <Typography
                  variant="h1"
                  sx={{
                    background: "linear-gradient(45deg, #9c27b0 30%, #e91e63 90%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 3,
                  }}
                >
                   Developer
                </Typography>

                <Typography variant="h4" color="text.secondary" sx={{ mb: 4, fontWeight: 300, lineHeight: 1.4 }}>
                  Full-Stack Web Developer crafting digital experiences
                  <br />
                  <Box component="span" sx={{ color: "primary.main", fontWeight: 500 }}>
                    with passion and precision
                  </Box>
                </Typography>

                <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 6 }}>
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="outlined"
                      size="large"
                      startIcon={<link.icon />}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderColor: "primary.main",
                        color: "primary.main",
                        "&:hover": {
                          backgroundColor: "primary.main",
                          color: "white",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {link.name}
                    </Button>
                  ))}
                </Stack>

                <Box
                  sx={{
                    animation: "bounce 2s infinite",
                    "@keyframes bounce": {
                      "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
                      "40%": { transform: "translateY(-10px)" },
                      "60%": { transform: "translateY(-5px)" },
                    },
                  }}
                >
                  <KeyboardArrowDown sx={{ fontSize: "2rem", color: "primary.main" }} />
                </Box>
              </Box>
            </Fade>
          </Container>
        </Box>

        {/* Skills Section */}
        <Box
          component="section"
          sx={{
            py: 10,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h2" textAlign="center" sx={{ mb: 8 }}>
              Skills &{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Expertise
              </Box>
            </Typography>

            <Grid container spacing={4}>
              {skills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={3} key={skill.name}>
                  <Slide in={isVisible} direction="up" timeout={1000 + index * 200}>
                    <Card sx={{ height: "100%", textAlign: "center" }}>
                      <CardContent sx={{ p: 3 }}>
                        <skill.icon
                          sx={{
                            fontSize: "3rem",
                            color: "primary.main",
                            mb: 2,
                          }}
                        />
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                          {skill.name}
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
                          {skill.items.map((item) => (
                            <Chip
                              key={item}
                              label={item}
                              size="small"
                              sx={{
                                backgroundColor: "rgba(156, 39, 176, 0.2)",
                                color: "primary.light",
                                mb: 1,
                                "&:hover": {
                                  backgroundColor: "rgba(156, 39, 176, 0.4)",
                                },
                              }}
                            />
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Slide>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Projects Section */}
        <Box component="section" sx={{ py: 10 }}>
          <Container maxWidth="lg">
            <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
              Featured{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Projects
              </Box>
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="text.secondary"
              sx={{ mb: 8, fontWeight: 300, maxWidth: "600px", mx: "auto" }}
            >
              Here are some of my recent projects that showcase my skills in web development, from concept to
              deployment.
            </Typography>

            {/* Featured Projects */}
            <Grid container spacing={4} sx={{ mb: 8 }}>
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <Grid item xs={12} md={6} key={project.id}>
                    <Fade in={isVisible} timeout={1500 + index * 300}>
                      <Card sx={{ height: "100%", position: "relative" }}>
                        <Box sx={{ position: "relative" }}>
                          <CardMedia
                            component="img"
                            height="250"
                            image={project.image}
                            alt={project.title}
                            sx={{
                              transition: "transform 0.3s ease",
                              "&:hover": { transform: "scale(1.05)" },
                            }}
                          />
                          <Chip
                            icon={<Star />}
                            label="Featured"
                            color="primary"
                            sx={{
                              position: "absolute",
                              top: 16,
                              right: 16,
                              backgroundColor: "primary.main",
                            }}
                          />
                          <Chip
                            icon={<CalendarToday />}
                            label={project.year}
                            sx={{
                              position: "absolute",
                              top: 16,
                              left: 16,
                              backgroundColor: "rgba(0, 0, 0, 0.7)",
                              color: "white",
                            }}
                          />
                        </Box>

                        <CardContent sx={{ p: 3 }}>
                          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                            {project.title}
                          </Typography>
                          <Typography color="text.secondary" sx={{ mb: 3 }}>
                            {project.description}
                          </Typography>

                          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3 }}>
                            {project.technologies.map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                variant="outlined"
                                size="small"
                                sx={{
                                  borderColor: "primary.main",
                                  color: "primary.main",
                                  mb: 1,
                                }}
                              />
                            ))}
                          </Stack>

                          <Stack direction="row" spacing={2}>
                            <Button
                              variant="contained"
                              startIcon={<Launch />}
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ backgroundColor: "primary.main" }}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outlined"
                              startIcon={<GitHub />}
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Code
                            </Button>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Fade>
                  </Grid>
                ))}
            </Grid>

            {/* Other Projects */}
            <Grid container spacing={3}>
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <Grid item xs={12} md={6} key={project.id}>
                    <Fade in={isVisible} timeout={2000 + index * 200}>
                      <Card sx={{ display: "flex", height: 200 }}>
                        <CardMedia component="img" sx={{ width: 160 }} image={project.image} alt={project.title} />
                        <CardContent sx={{ flex: 1, p: 2 }}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {project.title}
                            </Typography>
                            <Chip
                              label={project.year}
                              size="small"
                              sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            />
                          </Box>
                          <Typography
                            color="text.secondary"
                            sx={{
                              mb: 2,
                              fontSize: "0.875rem",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {project.description}
                          </Typography>
                          <Stack direction="row" spacing={0.5} flexWrap="wrap" sx={{ mb: 2 }}>
                            {project.technologies.slice(0, 3).map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                variant="outlined"
                                sx={{
                                  fontSize: "0.75rem",
                                  height: 20,
                                  borderColor: "primary.main",
                                  color: "primary.main",
                                }}
                              />
                            ))}
                            {project.technologies.length > 3 && (
                              <Chip
                                label={`+${project.technologies.length - 3}`}
                                size="small"
                                sx={{ fontSize: "0.75rem", height: 20 }}
                              />
                            )}
                          </Stack>
                          <Stack direction="row" spacing={1}>
                            <Button
                              size="small"
                              variant="contained"
                              startIcon={<Launch />}
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ fontSize: "0.75rem" }}
                            >
                              Demo
                            </Button>
                            <Button
                              size="small"
                              variant="outlined"
                              startIcon={<GitHub />}
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ fontSize: "0.75rem" }}
                            >
                              Code
                            </Button>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Fade>
                  </Grid>
                ))}
            </Grid>
          </Container>
        </Box>

        {/* Contact Section */}
        <Box
          component="section"
          sx={{
            py: 10,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Container maxWidth="md">
            <Box textAlign="center">
              <Typography variant="h2" sx={{ mb: 3 }}>
                Let's{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  Connect
                </Box>
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 6, fontWeight: 300 }}>
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can work
                together!
              </Typography>

              <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outlined"
                    size="large"
                    startIcon={<link.icon />}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                        transform: "scale(1.05)",
                      },
                      transition: "all 0.3s ease",
                      mb: { xs: 2, sm: 0 },
                    }}
                  >
                    {link.name}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Container>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 4,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          <Container maxWidth="lg">
            <Typography textAlign="center" color="text.secondary">
              © {new Date().getFullYear()} John Developer. Built with Next.js and Material-UI.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
