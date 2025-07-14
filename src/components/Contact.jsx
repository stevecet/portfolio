import { Container, Typography, Box, Stack, Button } from "@mui/material";

export default function Contact({ isEnglish, socialLinks }) {
  return (
    <Box
      component="section"
      sx={{
        py: 12,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(0, 212, 255, 0.2)",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=600&fit=cover')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <Container maxWidth="md">
        <Box textAlign="center">
          <Typography variant="h2" sx={{ mb: 3 }}>
            {isEnglish ? "Let's Build" : "Bâtissons quelque chose"}{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              {isEnglish ? "Something Amazing" : "d'extraordinaire !"}
            </Box>
          </Typography>
          <Typography
            variant="h6"
            color="primary.secondary"
            sx={{ mb: 8, fontWeight: 300, lineHeight: 1.6 }}
          >
            {isEnglish
              ? "Ready to turn your ideas into reality? I'm passionate about creating innovative solutions that make a difference. Let's collaborate and build the future together."
              : "Prêt à transformer vos idées en réalité ? Je suis passionné par la création de solutions innovantes qui ont un impact. Collaborons et construisons l'avenir ensemble."}
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
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outlined"
                startIcon={<link.icon />}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                color={link.color}
                sx={{
                  borderColor: "primary.main",
                  color: "primary.main",
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
                  "&:hover": {
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
  );
}
