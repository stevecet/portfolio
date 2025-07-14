import { Container, Typography, Box, Stack } from "@mui/material";

export default function Footer({ isEnglish }) {
  return (
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
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
          useFlexGap
          rowGap={2}
          columnGap={2}
        >
          <Typography
            color="text.secondary"
            sx={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            © {new Date().getFullYear()} Steveceto.
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: "0.9rem" }}>
            {isEnglish
              ? "Crafted with ❤️ using React & Material-UI"
              : "Conçu avec ❤️ en utilisant React & Material-UI"}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
