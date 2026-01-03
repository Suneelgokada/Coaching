"use client";

import { Box, Grid, Typography } from "@mui/material";

const technologies = [
  // Web / UI
  { name: "", icon: "/assets/html1.png" },
  { name: "", icon: "/assets/css.png" },
  { name: "", icon: "/assets/js.png" },
  { name: "", icon: "/assets/jquery.png" },
  { name: "", icon: "/assets/ui-ux.png" },
//   { name: "Web Design", icon: "/assets/web.png" },

  // Frontend / Mobile
  { name: "", icon: "/assets/react.png" },
  { name: "", icon: "/assets/react-native.png" },
  { name: "", icon: "/assets/mobileapp.png" },
  { name: " ", icon: "/assets/mobilewebdeg.png" },
  { name: "", icon: "/assets/android.png" },
  { name: "", icon: "/assets/flutter.png" },
  { name: "", icon: "/assets/ionic.png" },

  // Backend / Frameworks
  { name: "", icon: "/assets/node.png" },
  { name: "", icon: "/assets/java.png" },
  { name: "", icon: "/assets/springboot.png" },
  { name: "", icon: "/assets/net.png" },

  // Database
  { name: "", icon: "/assets/mysql.png" },
  { name: "", icon: "/assets/mongodb.png" },
  { name: "", icon: "/assets/mongoose.png" },
  { name: "", icon: "/assets/sqlserver.png" },

  // AI / Others
  { name: "", icon: "/assets/ai.png" },
  { name: "", icon: "/assets/iot.png" },
  { name: "", icon: "/assets/paypal.png" },

  // Open Source / Tools
  { name: "", icon: "/assets/tabelulegs.png" },
];

export default function All() {
  return (
    <Box sx={{ mt: 6, mx:8, justifyContent: "center" ,}}>
      <Grid container spacing={6}>
        {technologies.map((tech, index) => (
          <Grid item xs={6} sm={3} md={3} lg={2.4} justifyContent="center" key={index}>
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
                  width: 150,
                  height: 150,
                  objectFit: "contain",
                  mx: 4,
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
