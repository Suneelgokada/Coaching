"use client";

import { Box, Grid, Typography } from "@mui/material";

const iotTechnologies = [
  {
    name: "",
    icon: "/assets/iot.png",
  },
  // {
  //   name: "",
  //   icon: "/assets/arduino.png",
  // },
  // {
  //   name: "",
  //   icon: "/assets/raspberrypi.png",
  // },
  // {
  //   name: "",
  //   icon: "/assets/embedded.png",
  // },
  // {
  //   name: "",
  //   icon: "/assets/sensors.png",
  // },
  // {
  //   name: "",
  //   icon: "/assets/mqtt.png",
  // },
  // {
  //   name: "",
  //   icon: "/assets/aws-iot.png",
  // },
  // {
  //   name: "",
  //   icon: "/assets/azure-iot.png",
  // },
];

export default function IoT() {
  return (
    <Box
      sx={{
        mt: 6,
        mx: { xs: 0, sm: 4, md: 8 }, // ✅ SAME as All.jsx (critical)
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        justifyContent="center"
        spacing={{ xs: 1, sm: 4, md: 6 }} // ✅ SAME spacing logic
      >
        {iotTechnologies.map((tech, index) => (
          <Grid
            item
            xs={6}   // 📱 2 cards on mobile
            sm={4}   // 📲 3 cards at 768px
            md={3}   // 💻 desktop unchanged
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              minWidth: 0, // ✅ SAME critical line
            }}
          >
            <Box
              sx={{
                height: { xs: 120, sm: 160, md: 170 },
                width: "100%",              // ✅ NO fixed width
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
