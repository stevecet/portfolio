import { useState, useEffect } from "react";
import { Box, responsiveFontSizes } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import {
  certifications,
  certificationsFr,
  projects,
  skills,
  socialLinks,
} from "./assets/data";
import MainLayout from "./layout/MainLayout";

let darkTheme = createTheme({
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
            boxShadow:
              "0 20px 40px rgba(0, 212, 255, 0.4), 0 0 0 1px rgba(0, 212, 255, 0.5)",
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
});
darkTheme = responsiveFontSizes(darkTheme);

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MainLayout>
        {/* Hero Section */}
        <Hero
          isEnglish={isEnglish}
          isVisible={isVisible}
          setIsEnglish={setIsEnglish}
        />

        {/* Skills Section */}
        <Skills skills={skills} isVisible={isVisible} isEnglish={isEnglish} />

        {/* Projects Section */}
        <Projects
          isEnglish={isEnglish}
          isVisible={isVisible}
          projects={projects}
        />

        {/* Certifications Section */}
        <Certifications
          isEnglish={isEnglish}
          isVisible={isVisible}
          certifications={certifications}
          certificationsFr={certificationsFr}
        />

        {/* Contact Section */}
        <Contact isEnglish={isEnglish} socialLinks={socialLinks} />

        {/* Footer */}
        <Footer isEnglish={isEnglish} />
      </MainLayout>
    </ThemeProvider>
  );
}
