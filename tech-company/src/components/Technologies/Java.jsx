"use client";

import { Box, Grid, Typography } from "@mui/material";

const javaTechnologies = [
  {
    name: "",
    icon: "/assets/java.png",
  },
  {
    name: "",
    icon: "/assets/spring.png",
  },
  {
    name: "",
    icon: "/assets/springboot.png",
  },
  {
    name: "",
    icon: "/assets/hibernate.png",
  },
  {
    name: "",
    icon: "/assets/jpa.png",
  },
  {
    name: "",
    icon: "/assets/maven.png",
  },
  {
    name: "",
    icon: "/assets/microservices.png",
  },
  {
    name: "",
    icon: "/assets/api.png",
  },
];

export default function Java() {
  return (
   <Box sx={{ mt: 6, mx:8, justifyContent: "center" ,}}>
      <Grid container spacing={10}>
        {javaTechnologies.map((tech, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
            <Box
              sx={{
                height: 170,
                borderRadius: "18px",
                backgroundColor: "#ffffff",
                boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.35s ease",
                cursor: "pointer",
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
                  width: 180,
                  height: 180,
                  objectFit: "contain",
                  mb: 2,
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
