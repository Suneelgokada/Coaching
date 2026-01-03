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
   <Box sx={{ mt: 6, mx:8, justifyContent: "center" ,}}>
      <Grid container spacing={6} justifyContent="center">
        {webTechnologies.map((tech, index) => (
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
              <Box
                component="img"
                src={tech.icon}
                alt={tech.name}
                sx={{
                  width: 200,
                  height: 200,
                  objectFit: "contain",
                  mb: 2,
                }}
              />

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
