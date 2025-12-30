"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import RouterIcon from "@mui/icons-material/Router";

const services = [
  {
    icon: <BrushIcon />,
    title: "UI/UX Design",
    desc: "We design clean, intuitive interfaces using research, wireframes, and prototypes that improve usability and deliver consistent digital experiences.",
  },
  {
    icon: <SettingsIcon />,
    title: "Legacy Modernization",
    desc: "We upgrade outdated systems with improved architecture, performance, security, and cloud readiness for long-term business growth.",
  },
  {
    icon: <AppsIcon />,
    title: "Enterprise Applications",
    desc: "We build scalable ERP, CRM, and workflow applications with secure integrations and automation to streamline enterprise operations.",
  },
  {
    icon: <PhoneIphoneIcon />,
    title: "Mobility",
    desc: "We develop high-performance mobile apps with intuitive UI, secure APIs, and smooth cross-platform experiences.",
  },
  {
    icon: <CloudDoneIcon />,
    title: "Cloud Solutions",
    desc: "We deliver secure, scalable cloud environments with architecture, automated deployments and multi-cloud support.",
  },
  {
    icon: <SmartToyIcon />,
    title: "AI Agents",
    desc: "We build intelligent AI agents that automate workflows, analyze data, integrate APIs, and handle tasks autonomously.",
  },
  {
    icon: <RouterIcon />,
    title: "IoT Solutions",
    desc: "We create connected IoT ecosystems with sensors, dashboards, cloud sync, and automation to enable smarter operations.",
  },
];

// ... existing imports


export default function ServicesCards() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#f9fbff", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Heading Section */}
        <Typography
          align="center"
          sx={{
            fontSize: { xs: "26px", md: "36px" },
            fontWeight: 800,
            color: "#0b2343",
            mb: { xs: 5, md: 8 },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Innovative Solutions for Modern Businesses
        </Typography>

        {/* Flexbox Container */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",      // Next row ki cards wrap avvadaniki
            gap: "32px",           // Cards madhyalo gap
            justifyContent: "center", // Items center lo undadaniki
          }}
        >
          {services.map((item, index) => (
            <Box
              key={index}
              sx={{
                // Responsive Width Logic:
                // Desktop (>1024px): 3 cards (approx 30% each)
                // Tablet: 2 cards (approx 45% each)
                // Mobile: 1 card (100%)
                width: {
                  xs: "100%",
                  sm: "calc(50% - 32px)", 
                  md: "calc(33.33% - 32px)" 
                },
                backgroundColor: "#fff",
                borderRadius: "20px",
                p: 4,
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                border: "1px solid #eef3ff",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                },
              }}
            >
              {/* Icon Container */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "15px",
                  backgroundColor: "#eaf1ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1769d2",
                  mb: 3,
                  "& svg": { fontSize: 30 },
                }}
              >
                {item.icon}
              </Box>

              {/* Service Title */}
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#0b2343",
                  mb: 1.5,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {item.title}
              </Typography>

              {/* Service Description */}
              <Typography
                sx={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#5f6c80",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}