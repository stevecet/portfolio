import { CloudDownload, KeyboardArrowDown, Translate } from "@mui/icons-material";
import {
  Typography,
  Box,
  Stack,
  Chip,
  Container,
  Fade,
  Button,
  Avatar
} from "@mui/material";

export default function Hero({isEnglish, isVisible, setIsEnglish}) {
  return (
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
                  background:
                    "linear-gradient(45deg, #00d4ff 30%, #ff6b35 90%)",
                  boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)",
                }}
                src="img/steveceto.jpeg"
              />
            </Box>

            <Typography
              variant="h1"
              sx={{
                background: "linear-gradient(45deg, #00d4ff 30%, #ff6b35 70%)",
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
                mb: 2,
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "1.2rem",
              }}
            >
              {"<"}{" "}
              {isEnglish
                ? "Full-Stack Developer & Software Engineer."
                : "Développeur Full-Stack & Ingénieur Logiciel."}{" "}
              {" />"}
            </Typography>

            <Typography
              variant="h4"
              color="text.secondary"
              sx={{ mb: 4, fontWeight: 300, lineHeight: 1.6 }}
            >
              {isEnglish
                ? "Building the future with"
                : "Bâtir l'avenir avec des"}
              <br />
              <Box
                component="span"
                sx={{ color: "primary.main", fontWeight: 600 }}
              >
                {isEnglish
                  ? "cutting-edge technology"
                  : "technologies de pointe"}
              </Box>
              {" & "}
              <Box
                component="span"
                sx={{ color: "secondary.main", fontWeight: 600 }}
              >
                {isEnglish
                  ? "innovative solutions"
                  : "des solutions innovantes."}
              </Box>
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mb: 4 }}
            >
              <Chip
                label={isEnglish ? "Douala, Cameroon" : "Douala, Cameroun"}
                variant="outlined"
                sx={{ borderColor: "primary.main", color: "primary.main" }}
              />
              <Chip
                label={
                  isEnglish ? "Available for hire" : "Ouvert aux opportunités"
                }
                variant="outlined"
                sx={{
                  borderColor: "secondary.main",
                  color: "secondary.main",
                }}
              />
            </Stack>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", sm: "row" },
                justifyContent: "center",
                gap: 2,
                mx: 6,
                mb: 2,
              }}
            >
              <Button
                variant="outlined"
                size="small"
                startIcon={<CloudDownload />}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/CV_Steveceto.pdf";
                  link.download = "CV_Steveceto.pdf";
                  link.click();
                }}
                sx={{
                  borderColor:
                    "linear-gradient(45deg, #00d4ff 40%, #ff6b35 50%)",
                  color: "white",
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
                  py: 1,
                  borderRadius: {
                    xs: "8px",
                    sm: "10px",
                    md: "12px",
                  },
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(0, 212, 255, 0.4)",
                  },
                }}
              >
                {isEnglish ? "Download resume" : "Télécharger le CV"}
              </Button>
              <Button
                variant="outlined"
                size="small"
                startIcon={<Translate />}
                onClick={() => setIsEnglish(!isEnglish)}
                sx={{
                  // Match your other button styles or make it distinct
                  borderColor: "primary.main",
                  color: "white",
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
                  py: 1,
                  borderRadius: {
                    xs: "8px",
                    sm: "10px",
                    md: "12px",
                  },
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(0, 212, 255, 0.4)",
                  },
                }}
              >
                {isEnglish ? "Portfolio français" : "English portfolio"}
              </Button>
            </Box>

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
              <KeyboardArrowDown
                sx={{ fontSize: "2.5rem", color: "primary.main" }}
              />
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
