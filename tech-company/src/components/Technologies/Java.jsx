"use client";

import { Box, Grid, Typography } from "@mui/material";

const javaTechnologies = [
  {
    name: "",
    icon: "/assets/java.png",
  },
  // {
  //   name: "",
  //   icon: "/assets/spring.png",
  // },
  {
    name: "",
    icon: "/assets/springboot.png",
  },
  // {
  //   name: "",
  //   icon: "/assets/hibernate.png",
  // },
  // {
  //   name: "",
  //   icon: "/assets/jpa.png",
  // },
  // {
  //   name: "",
  //   icon: "/assets/maven.png",
  // },
  // {
  //   name: "",
  //   icon: "/assets/microservices.png",
  // },
  // {
  //   name: "",
  //   icon: "/assets/api.png",
  // },
];

export default function Java() {
  return (
    <Box
      sx={{
        mt: 6,
        mx: { xs: 0, sm: 4, md: 8 }, // ✅ SAME as All.jsx
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        justifyContent="center"
        spacing={{ xs: 1, sm: 4, md: 6 }} // ✅ SAME spacing logic
      >
        {javaTechnologies.map((tech, index) => (
          <Grid
            item
            xs={6}   // 📱 2 cards on mobile
            sm={4}   // 📲 3 cards at 768px
            md={3}   // 💻 desktop unchanged
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              minWidth: 0, // ✅ critical for small screens
            }}
          >
            <Box
              sx={{
                height: { xs: 120, sm: 160, md: 170 },
                width: "100%",              // ❗ NO fixed width
                padding: { xs: 0.5, sm: 1 },
                borderRadius: "18px",
                backgroundColor: "#ffffff",
                boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {/* ICON */}
              <Box
                component="img"
                src={tech.icon}
                alt={tech.name}
                sx={{
                  width: { xs: 100, sm: 120, md: 150 },
                  height: { xs: 100, sm: 120, md: 150 },
                  objectFit: "contain",
                  mb: 1,
                }}
              />
 
              {/* TITLE */}
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#0f172a",
                  textAlign: "center",
                }}
              >
                {tech.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
