import { CalendarToday } from "@mui/icons-material";
import {
  Grid,
  Container,
  Fade,
  Typography,
  Card,
  CardMedia,
  Box,
  CardContent,
  Stack,
  Chip,
} from "@mui/material";

export default function Certifications({
  isEnglish,
  isVisible,
  certifications,
  certificationsFr,
}) {
  return (
    <Box
      component="section"
      sx={{
        py: 6,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(0, 212, 255, 0.2)",
        borderBottom: "1px solid rgba(0, 212, 255, 0.2)",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" textAlign="center" sx={{ mb: 3 }}>
          Certifications
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 10, fontWeight: 300, maxWidth: "700px", mx: "auto" }}
        >
          {isEnglish
            ? "These certifications, earned through rigorous, industry-aligned programs, have equipped me with end-to-end development skills."
            : "Fruit de programmes rigoureux et axés sur l'industrie, ces certifications m'ont permis de maîtriser le développement de bout en bout."}
        </Typography>

        {/* Certifications */}
        <Grid container spacing={4} sx={{ mb: 3 }}>
          {(isEnglish ? certifications : certificationsFr)
            .filter((p) => p.featured)
            .map((project, index) => (
              <Grid key={project.id}>
                <Fade in={isVisible} timeout={1500 + index * 300}>
                  <Card
                    sx={{
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        p: 3,
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          width: "50%",

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
                        {project.description}
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
