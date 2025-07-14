import {
  Grid,
  Container,
  Typography,
  Card,
  CardMedia,
  Box,
  Slide,
  CardContent,
  Stack,
  Chip,
} from "@mui/material";

export default function Skills({ skills, isEnglish, isVisible }) {
  return (
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
          {isEnglish ? "Technical" : "Expertise"}{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            {isEnglish ? "Expertise" : "technique"}
          </Box>
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 10, fontWeight: 300, maxWidth: "600px", mx: "auto" }}
        >
          {isEnglish
            ? "Specialized in modern technologies and frameworks for building scalable, high-performance applications"
            : "Spécialisé dans les technologies et frameworks modernes pour la création d'applications évolutives et à hautes performances."}
        </Typography>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={skill.name}>
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
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="center"
                      flexWrap="wrap"
                      useFlexGap
                      rowGap={2}
                      columnGap={2}
                    >
                      {skill.items.map((item) => (
                        <Chip
                          key={item}
                          label={item}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(0, 212, 255, 0.2)",
                            color: "primary.light",
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
  );
}
