"use client";

import { Box, Grid, Typography } from "@mui/material";

const webTechnologies = [
  { name: "", icon: "/assets/html1.png" },
  { name: "", icon: "/assets/css.png" },
  { name: "", icon: "/assets/js.png" },
  { name: "", icon: "/assets/jquery.png" },
  { name: "", icon: "/assets/react.png" },
  { name: "", icon: "/assets/ui-ux.png" },
  { name: "", icon: "/assets/web.png" },
  { name: "", icon: "/assets/aspnet.png" },
  { name: "", icon: "/assets/net.png" },
];

export default function WebTechnologies() {
  return (
    <Box
      sx={{
        mt: 6,
        mx: { xs: 0, sm: 4, md: 8 },   // ✅ SAME as IoT.jsx
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        justifyContent="center"
        spacing={{ xs: 1, sm: 4, md: 6 }}   // ✅ SAME spacing
      >
        {webTechnologies.map((tech, index) => (
          <Grid
            item
            xs={6}   // 📱 2 cards on mobile
            sm={4}   // 📲 3 cards at 768px
            md={3}   // 💻 desktop unchanged
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              minWidth: 0,              // ✅ critical for 320px
            }}
          >
            <Box
              sx={{
                height: { xs: 120, sm: 160, md: 170 },  // ✅ SAME card height
                width: "100%",
                padding: { xs: 0.5, sm: 1 },
                borderRadius: "18px",
                backgroundColor: "#ffffff",
                boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 45px rgba(0,0,0,0.16)",
                },
              }}
            >
              {/* ICON */}
              <Box
                component="img"
                src={tech.icon}
                alt={tech.name}
                sx={{
                  width: { xs: 100, sm: 120, md: 150 },  // ✅ SAME image size
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
