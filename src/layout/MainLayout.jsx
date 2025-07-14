import { Box } from "@mui/material";

export default function MainLayout({children}) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
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
            animation: `float-${i} ${
              3 + Math.random() * 4
            }s ease-in-out infinite`,
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
      {children}
    </Box>
  );
}
