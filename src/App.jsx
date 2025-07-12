"use client"

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
  IconButton,
  Tooltip,
} from "@mui/material"
import {
  GitHub,
  LinkedIn,
  Email,
  Launch,
  Code,
  Palette,
  Language,
  KeyboardArrowDown,
  Star,
  CalendarToday,
  CloudDownload,
  LocationOn,
  Work,
} from "@mui/icons-material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00d4ff",
      light: "#4dd0e1",
      dark: "#0097a7",
    },
    secondary: {
      main: "#ff6b35",
      light: "#ff8a65",
      dark: "#e64a19",
    },
    background: {
      default: "#0a0e1a",
      paper: "rgba(15, 23, 42, 0.8)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#94a3b8",
    },
  },
  typography: {
    fontFamily: '"JetBrains Mono", "Fira Code", "Roboto Mono", monospace',
    h1: {
      fontWeight: 700,
      fontSize: "4.5rem",
      "@media (max-width:600px)": {
        fontSize: "2.8rem",
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: "3rem",
      "@media (max-width:600px)": {
        fontSize: "2.2rem",
      },
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 212, 255, 0.2)",
          borderRadius: "16px",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-8px) scale(1.02)",
            borderColor: "#00d4ff",
            boxShadow: "0 20px 40px rgba(0, 212, 255, 0.4), 0 0 0 1px rgba(0, 212, 255, 0.5)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "12px",
          fontWeight: 600,
          padding: "12px 24px",
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
      title: "AI-Powered Dashboard",
      description:
        "A comprehensive analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      technologies: ["React", "Python", "TensorFlow", "D3.js", "FastAPI", "PostgreSQL"],
      liveUrl: "https://example-ai-dashboard.com",
      githubUrl: "https://github.com/username/ai-dashboard",
      featured: true,
      year: "2024",
    },
    {
      id: 2,
      title: "Blockchain DeFi Platform",
      description:
        "Decentralized finance platform with smart contracts, yield farming, and NFT marketplace integration. Built with Web3 technologies.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      technologies: ["Next.js", "Solidity", "Web3.js", "Ethereum", "IPFS", "MetaMask"],
      liveUrl: "https://example-defi.com",
      githubUrl: "https://github.com/username/defi-platform",
      featured: true,
      year: "2024",
    },
    {
      id: 3,
      title: "IoT Monitoring System",
      description:
        "Real-time IoT device monitoring with sensor data visualization, alerts, and automated control systems for smart buildings.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
      technologies: ["React", "Node.js", "MQTT", "InfluxDB", "Grafana", "Arduino"],
      liveUrl: "https://example-iot.com",
      githubUrl: "https://github.com/username/iot-monitoring",
      featured: false,
      year: "2024",
    },
    {
      id: 4,
      title: "Cloud Infrastructure Manager",
      description:
        "Multi-cloud infrastructure management tool with automated deployment, monitoring, and cost optimization features.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      technologies: ["Vue.js", "Go", "Docker", "Kubernetes", "AWS", "Terraform"],
      liveUrl: "https://example-cloud.com",
      githubUrl: "https://github.com/username/cloud-manager",
      featured: false,
      year: "2023",
    },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/stevecet/",
      icon: GitHub,
      color: "#333",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gilchrist-steve-aurel-veceto-6a4216202/",
      icon: LinkedIn,
      color: "#0077b5",
    },
    {
      name: "Email",
      url: "mailto:steveceto@gmail.com",
      icon: Email,
      color: "#ea4335",
    },
  ]

  const skills = [
    {
      name: "Frontend",
      icon: Code,
      items: ["React", "Next.js", "TypeScript", "Vue.js", "Angular", "WebGL"],
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
    },
    {
      name: "Backend",
      icon: Language,
      items: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    },
    {
      name: "Cloud & DevOps",
      icon: CloudDownload,
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    },
    {
      name: "AI & Data",
      icon: Palette,
      items: ["Machine Learning", "TensorFlow", "PyTorch", "Data Analysis", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
    },
  ]

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: `
            linear-gradient(135deg, #0a0e1a 0%, #1e293b 25%, #0f172a 50%, #020617 100%),
            url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&overlay=dark') center/cover
          `,
          backgroundBlendMode: "overlay",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Tech Grid Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
            "@keyframes grid-move": {
              "0%": { transform: "translate(0, 0)" },
              "100%": { transform: "translate(50px, 50px)" },
            },
          }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: "4px",
              height: "4px",
              backgroundColor: "#00d4ff",
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-${i} ${3 + Math.random() * 4}s ease-in-out infinite`,
              "@keyframes float-0": {
                "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
                "50%": { transform: "translateY(-20px) translateX(10px)" },
              },
              "@keyframes float-1": {
                "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
                "50%": { transform: "translateY(-15px) translateX(-10px)" },
              },
              "@keyframes float-2": {
                "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
                "50%": { transform: "translateY(-25px) translateX(15px)" },
              },
              "@keyframes float-3": {
                "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
                "50%": { transform: "translateY(-18px) translateX(-5px)" },
              },
              "@keyframes float-4": {
                "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
                "50%": { transform: "translateY(-22px) translateX(8px)" },
              },
              "@keyframes float-5": {
                "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
                "50%": { transform: "translateY(-16px) translateX(-12px)" },
              },
            }}
          />
        ))}

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
                <Box sx={{ mt: 5 }}>
                  <Avatar
                    sx={{
                      width: 140,
                      height: 140,
                      mx: "auto",
                      background: "linear-gradient(45deg, #00d4ff 30%, #ff6b35 90%)",
                      boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)",
                    }}
                    src="img/steveceto.jpeg"
                  />
                </Box>

                <Typography
                  variant="h1"
                  sx={{
                    background: "linear-gradient(45deg, #00d4ff 30%, #ff6b35 90%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    my: 2,
                    mx: "auto",
                    textShadow: "0 0 30px rgba(0, 212, 255, 0.5)",
                  }}
                >
                  Steve Veceto
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "primary.main",
                    mb: 3,
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "1.2rem",
                  }}
                >
                  {"<"} Full-Stack Developer & Software Engineer {" />"}
                </Typography>

                <Typography variant="h4" color="text.secondary" sx={{ mb: 4, fontWeight: 300, lineHeight: 1.6 }}>
                  Building the future with
                  <br />
                  <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
                    cutting-edge technology
                  </Box>
                  {" & "}
                  <Box component="span" sx={{ color: "secondary.main", fontWeight: 600 }}>
                    innovative solutions
                  </Box>
                </Typography>

                <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 4 }}>
                  <Chip
                    icon={<LocationOn />}
                    label="Douala, Cameroon"
                    variant="outlined"
                    sx={{ borderColor: "primary.main", color: "primary.main" }}
                  />
                  <Chip
                    icon={<Work />}
                    label="Available for hire"
                    variant="filled"
                    sx={{ backgroundColor: "secondary.main", color: "white" }}
                  />
                </Stack>

                {/* <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 6 }}>
                  {socialLinks.map((link) => (
                    <Tooltip key={link.name} title={`Connect on ${link.name}`}>
                      <IconButton
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: "rgba(0, 212, 255, 0.1)",
                          border: "1px solid rgba(0, 212, 255, 0.3)",
                          color: "primary.main",
                          "&:hover": {
                            backgroundColor: "primary.main",
                            color: "white",
                            transform: "translateY(-3px) scale(1.1)",
                            boxShadow: "0 10px 20px rgba(0, 212, 255, 0.4)",
                          },
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <link.icon />
                      </IconButton>
                    </Tooltip>
                  ))}
                </Stack> */}

                <Button
                  variant="contained"
                  size="large"
                  startIcon={<CloudDownload />}
                  sx={{
                    background: "linear-gradient(45deg, #00d4ff 30%, #ff6b35 90%)",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 25px rgba(0, 212, 255, 0.4)",
                    },
                    mb: 2,
                  }}
                >
                  Download Resume
                </Button>

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
                  <KeyboardArrowDown sx={{ fontSize: "2.5rem", color: "primary.main" }} />
                </Box>
              </Box>
            </Fade>
          </Container>
        </Box>

        {/* Skills Section */}
        <Box
          component="section"
          sx={{
            py: 12,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(0, 212, 255, 0.2)",
            borderBottom: "1px solid rgba(0, 212, 255, 0.2)",
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h2" textAlign="center" sx={{ mb: 3 }}>
              Technical{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Expertise
              </Box>
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="text.secondary"
              sx={{ mb: 10, fontWeight: 300, maxWidth: "600px", mx: "auto" }}
            >
              Specialized in modern technologies and frameworks for building scalable, high-performance applications
            </Typography>

            <Grid container spacing={4}>
              {skills.map((skill, index) => (
                <Grid size={{ xs: 12, sm:6 }} key={skill.name}>
                  <Slide in={isVisible} direction="up" timeout={1000 + index * 200}>
                    <Card sx={{ height: "100%", overflow: "hidden" }}>
                      <CardMedia
                        component="img"
                        height="120"
                        image={skill.image}
                        alt={skill.name}
                        sx={{
                          filter: "brightness(0.7)",
                          transition: "all 0.3s ease",
                        }}
                      />
                      <CardContent sx={{ py: 3, textAlign: "center" }}>
                        <skill.icon
                          sx={{
                            fontSize: "2.5rem",
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
                                backgroundColor: "rgba(0, 212, 255, 0.2)",
                                color: "primary.light",
                                mb: 1,
                                fontSize: "0.75rem",
                                "&:hover": {
                                  backgroundColor: "rgba(0, 212, 255, 0.4)",
                                  transform: "scale(1.05)",
                                },
                                transition: "all 0.2s ease",
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
        <Box component="section" sx={{ py: 12 }}>
          <Container maxWidth="lg">
            <Typography variant="h2" textAlign="center" sx={{ mb: 3 }}>
              Featured{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Projects
              </Box>
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="text.secondary"
              sx={{ mb: 10, fontWeight: 300, maxWidth: "700px", mx: "auto" }}
            >
              Showcasing innovative solutions across AI, blockchain, IoT, and cloud technologies that push the
              boundaries of what's possible
            </Typography>

            {/* Featured Projects */}
            <Grid container spacing={4} sx={{ mb: 10 }}>
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <Grid size={{ xs: 12, md: 6 }} key={project.id}>
                    <Fade in={isVisible} timeout={1500 + index * 300}>
                      <Card sx={{ height: "100%", position: "relative", overflow: "hidden" }}>
                        <Box sx={{ position: "relative", overflow: "hidden" }}>
                          <CardMedia
                            component="img"
                            height="280"
                            image={project.image}
                            alt={project.title}
                            sx={{
                              transition: "transform 0.5s ease",
                              "&:hover": { transform: "scale(1.1)" },
                            }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: "linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(255, 107, 53, 0.1))",
                            }}
                          />
                          <Chip
                            icon={<Star />}
                            label="Featured"
                            sx={{
                              position: "absolute",
                              top: 16,
                              right: 16,
                              backgroundColor: "secondary.main",
                              color: "white",
                              fontWeight: 600,
                            }}
                          />
                          <Chip
                            icon={<CalendarToday />}
                            label={project.year}
                            sx={{
                              position: "absolute",
                              top: 16,
                              left: 16,
                              backgroundColor: "rgba(0, 0, 0, 0.8)",
                              color: "white",
                              backdropFilter: "blur(10px)",
                            }}
                          />
                        </Box>

                        <CardContent sx={{ p: 4 }}>
                          <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: "primary.main" }}>
                            {project.title}
                          </Typography>
                          <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                            {project.description}
                          </Typography>

                          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 4 }}>
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
                                  fontWeight: 500,
                                  "&:hover": {
                                    backgroundColor: "rgba(0, 212, 255, 0.1)",
                                  },
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
                              sx={{
                                background: "linear-gradient(45deg, #00d4ff 30%, #ff6b35 90%)",
                                "&:hover": {
                                  transform: "translateY(-2px)",
                                  boxShadow: "0 8px 20px rgba(0, 212, 255, 0.4)",
                                },
                              }}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outlined"
                              startIcon={<GitHub />}
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                borderColor: "primary.main",
                                color: "primary.main",
                                "&:hover": {
                                  backgroundColor: "rgba(0, 212, 255, 0.1)",
                                  transform: "translateY(-2px)",
                                },
                              }}
                            >
                              View Code
                            </Button>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Fade>
                  </Grid>
                ))}
            </Grid>

            {/* Other Projects */}
            <Typography variant="h4" sx={{ mb: 6, color: "text.primary" }}>
              More Projects
            </Typography>
            <Grid container spacing={3}>
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <Grid size={{ xs: 12}} key={project.id}>
                    <Fade in={isVisible} timeout={2000 + index * 200}>
                      <Card sx={{ display: "flex", height: 220, overflow: "hidden" }}>
                        <CardMedia
                          component="img"
                          sx={{ width: 180, filter: "brightness(0.8)" }}
                          image={project.image}
                          alt={project.title}
                        />
                        <CardContent sx={{ flex: 1, p: 3 }}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600, color: "primary.main" }}>
                              {project.title}
                            </Typography>
                            <Chip
                              label={project.year}
                              size="small"
                              sx={{ backgroundColor: "rgba(0, 212, 255, 0.2)", color: "primary.main" }}
                            />
                          </Box>
                          <Typography
                            color="text.secondary"
                            sx={{
                              mb: 2,
                              fontSize: "0.9rem",
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              lineHeight: 1.4,
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
                                  fontSize: "0.7rem",
                                  height: 22,
                                  borderColor: "primary.main",
                                  color: "primary.main",
                                }}
                              />
                            ))}
                            {project.technologies.length > 3 && (
                              <Chip
                                label={`+${project.technologies.length - 3}`}
                                size="small"
                                sx={{ fontSize: "0.7rem", height: 22, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
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
                              sx={{
                                fontSize: "0.75rem",
                                background: "linear-gradient(45deg, #00d4ff 30%, #ff6b35 90%)",
                              }}
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
                              sx={{
                                fontSize: "0.75rem",
                                borderColor: "primary.main",
                                color: "primary.main",
                              }}
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
            py: 12,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(0, 212, 255, 0.2)",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        >
          <Container maxWidth="md">
            <Box textAlign="center">
              <Typography variant="h2" sx={{ mb: 3 }}>
                Let's Build{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  Something Amazing
                </Box>
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 8, fontWeight: 300, lineHeight: 1.6 }}>
                Ready to turn your ideas into reality? I'm passionate about creating innovative solutions that make a
                difference. Let's collaborate and build the future together.
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
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      "&:hover": {
                        background: "linear-gradient(45deg, #00d4ff 30%, #ff6b35 90%)",
                        color: "white",
                        transform: "translateY(-3px) scale(1.05)",
                        boxShadow: "0 10px 25px rgba(0, 212, 255, 0.4)",
                        borderColor: "transparent",
                      },
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
            py: 6,
            borderTop: "1px solid rgba(0, 212, 255, 0.2)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Container maxWidth="lg">
            <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
              <Typography color="text.secondary" sx={{ fontFamily: '"JetBrains Mono", monospace' }}>
                © {new Date().getFullYear()} Steveceto. Crafted with ❤️ using React & Material-UI
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: "0.9rem" }}>
                Made with cutting-edge tech
              </Typography>
            </Stack>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
