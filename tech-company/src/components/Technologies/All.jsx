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
 
];

export default function All() {
  return (
    <Box
      sx={{
        mt: 6,
        mx: { xs: 0, sm: 4, md: 8 }, // ❗ NO margin on 320px
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        justifyContent="center"
        spacing={{ xs: 1, sm: 4, md: 6 }} // ❗ tight spacing for 320px
      >
        {technologies.map((tech, index) => (
          <Grid
            item
            xs={6}   // ✅ 2 icons on mobile
            sm={4}   // ✅ 3 icons at 768px
            md={3}   // ✅ desktop unchanged
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              minWidth: 0, // ❗ MOST IMPORTANT FOR 320px
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
