"use client";
 
import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Paper,
} from "@mui/material";
import Link from "next/link";
 
export default function MethodologyLayout() {
 
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0b2343",
        position: "relative", // REQUIRED for top curve
        overflow: "hidden",   // hide extra SVG
        padding: { xs: 3, md: 8 },
     
      }}
    >
      {/* ================= TOP CURVE ================= */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          maxWidth:"50%",
          lineHeight: 0,
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          width="100%"
          height="120"
        >
          <path
            d="M0,96L80,85.3C160,75,320,53,480,48C640,43,800,53,960,64C1120,75,1280,85,1360,90.7L1440,96L1440,0L0,0Z"
            fill="#0b2343"
          />
        </svg>
      </Box>
      {/* ============================================ */}
 
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
          alignItems: "flex-start",
          position: "relative",
          zIndex: 1, // keep content above curve
        }}
      >
        {/* LEFT CONTENT */}
        <Box
          sx={{
            color: "#ffffff",
            padding: { xs: 4, md: 8 },
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
  Methodology
</Typography>
 
<Typography
  sx={{
    fontStyle: "italic",
    fontWeight: 500,
    mb: 3,
    color: "#91aad3ff",
  }}
>
  Our proven methodology ensures consistent quality and measurable results.
</Typography>
 
<Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "800px" }}>
  Our methodology is designed to deliver scalable, secure, and high-performance
  solutions. We follow a structured and transparent development process that
  aligns technology with business goals.
</Typography>
 
<Typography sx={{ fontWeight: 600, mb: 1 }}>
  Our Process:
</Typography>
 
<List sx={{ pl: 2 }}>
  {[
    "Requirement Analysis",
    "Planning & Strategy",
    "Design & Prototyping",
    "Development",
    "Testing & Quality Assurance",
    "Deployment & Support",
  ].map((step) => (
    <ListItem key={step} sx={{ py: 0.5 }}>
      <Typography>• {step}</Typography>
    </ListItem>
  ))}
</List>
 
 
        </Box>
 
        {/* RIGHT SIDE COMPANY LINKS */}
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            padding: 3,
            borderRadius: "12px",
            maxWidth: "250px",
            marginTop: "200px",
 
          }}
        >
          <List>
            {[
              { name: "About Us", link: "/about-us" },
              { name: "Methodology", link: "/methodology" },
              { name: "Our Clients", link: "/our-clients" },
              { name: "Our Mission", link: "/our-mission" },
              { name: "Testimonials", link: "/testimonials" },
            ].map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.link}
                  sx={{
                    borderRadius: "6px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    fontWeight: 500,
                    color: "#0b2343",
                    transition: "0.3s",
                 
                    "&:hover": {
                      backgroundColor: "#f1f5f9",
                      color: "#16a34a",
                    },
                  }}
                >
                  <Typography component="span">➜</Typography>
                  <Typography component="span">{item.name}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
}
 