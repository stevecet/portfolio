import { CalendarToday, GitHub, Launch, StarBorder } from "@mui/icons-material";
import {
  Typography,
  Card,
  CardMedia,
  Box,
  CardContent,
  Stack,
  Chip,
  Container,
  Grid,
  Fade,
  Button,
} from "@mui/material";

export default function Projects({ projects, isEnglish, isVisible }) {
  return (
    <Box component="section" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" sx={{ mb: 3 }}>
          {isEnglish ? "Featured" : "Projets"}{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            {isEnglish ? "Projects" : "phares"}
          </Box>
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 10, fontWeight: 300, maxWidth: "700px", mx: "auto" }}
        >
          {isEnglish
            ? "Showcasing innovative solutions across AI, blockchain, IoT, and cloud technologies that push the boundaries of what's possible."
            : "Mettant en lumière des solutions innovantes en IA, blockchain, IoT et technologies cloud, qui repoussent les frontières du possible."}
        </Typography>

        {/* Featured Projects */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={project.id}>
                <Fade in={isVisible} timeout={1500 + index * 300}>
                  <Card
                    sx={{
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Box sx={{ position: "relative", overflow: "hidden" }}>
                      <CardMedia
                        component="img"
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
                          background:
                            "linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(255, 107, 53, 0.1))",
                        }}
                      />
                      <Chip
                        icon={<StarBorder />}
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
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                          color: "primary.main",
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        sx={{ mb: 3, lineHeight: 1.6 }}
                      >
                        {isEnglish ? project.description: project.descriptionvf}
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={2}
                        flexWrap="wrap"
                        useFlexGap
                        rowGap={2}
                        columnGap={2}
                        sx={{ mb: 4 }}
                      >
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            variant="outlined"
                            size="small"
                            sx={{
                              borderColor: "primary.main",
                              color: "primary.main",
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
                            fontSize: {
                              xs: "0.75rem", // small screens
                              sm: "0.875rem",
                              md: "1rem",
                            },
                            px: {
                              xs: 2, // horizontal padding
                              sm: 3,
                              md: 4,
                            },
                            py: {
                              xs: 1, // vertical padding
                              sm: 1.25,
                              md: 1.5,
                            },
                            borderRadius: {
                              xs: "8px",
                              sm: "10px",
                              md: "12px",
                            },
                            borderColor: "primary.main",
                            "&:hover": {
                              transform: "translateY(-2px)",
                            },
                          }}
                        >
                          Demo
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<GitHub />}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            fontSize: {
                              xs: "0.75rem", // small screens
                              sm: "0.875rem",
                              md: "1rem",
                            },
                            px: {
                              xs: 2, // horizontal padding
                              sm: 3,
                              md: 4,
                            },
                            py: {
                              xs: 1, // vertical padding
                              sm: 1.25,
                              md: 1.5,
                            },
                            borderRadius: {
                              xs: "8px",
                              sm: "10px",
                              md: "12px",
                            },
                            borderColor: "primary.main",
                            color: "primary.main",
                            "&:hover": {
                              backgroundColor: "rgba(0, 212, 255, 0.1)",
                              transform: "translateY(-2px)",
                            },
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

        {/* Other Projects */}
        <Typography variant="h4" sx={{ mb: 6, color: "text.primary" }}>
          {isEnglish ? "More Projects" : "Plus de Projets"}
        </Typography>
        <Grid container spacing={3}>
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <Grid size={{ xs: 12 }} key={project.id}>
                <Fade in={isVisible} timeout={2000 + index * 200}>
                  <Card
                    sx={{
                      display: "flex",
                      overflow: "hidden",
                    }}
                  >
                    <CardContent sx={{ flex: 1, p: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, color: "primary.main" }}
                        >
                          {project.title}
                        </Typography>
                        <Chip
                          label={project.year}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(0, 212, 255, 0.2)",
                            color: "primary.main",
                          }}
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
                        {isEnglish ? project.description: project.descriptionvf}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={2}
                        flexWrap="wrap"
                        useFlexGap
                        rowGap={2}
                        columnGap={2}
                        sx={{ mb: 2 }}
                      >
                        {project.technologies.map((tech) => (
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
                            fontSize: {
                              xs: "0.75rem", // small screens
                              sm: "0.875rem",
                              md: "1rem",
                            },
                            px: {
                              xs: 2, // horizontal padding
                              sm: 3,
                              md: 4,
                            },
                            py: {
                              xs: 1, // vertical padding
                              sm: 1.25,
                              md: 1.5,
                            },
                            borderRadius: {
                              xs: "8px",
                              sm: "10px",
                              md: "12px",
                            },
                            borderColor: "primary.main",
                            "&:hover": {
                              transform: "translateY(-2px)",
                            },
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
                            fontSize: {
                              xs: "0.75rem", // small screens
                              sm: "0.875rem",
                              md: "1rem",
                            },
                            px: {
                              xs: 2, // horizontal padding
                              sm: 3,
                              md: 4,
                            },
                            py: {
                              xs: 1, // vertical padding
                              sm: 1.25,
                              md: 1.5,
                            },
                            borderRadius: {
                              xs: "8px",
                              sm: "10px",
                              md: "12px",
                            },
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
  );
}
