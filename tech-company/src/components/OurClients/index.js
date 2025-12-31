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
 
export default function OurClientsLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0b2343",
        position: "relative",
        overflow: "hidden",
        padding: { xs: 3, md: 8 },
      }}
    >
      {/* ================= TOP CURVE ================= */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          maxWidth: "50%",
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
          zIndex: 1,
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
            Our Clients
          </Typography>
 
          <Typography
            sx={{
              fontStyle: "italic",
              fontWeight: 500,
              mb: 3,
              color: "#91aad3ff",
            }}
          >
            Trusted by businesses across the globe for delivering reliable and
            high-quality digital solutions.
          </Typography>
 
          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "800px" }}>
            We have 50+ clients spread across the globe, mainly from the United
            States of America, Canada, and India. Our clientele includes startups,
            enterprises, and government organizations across diverse industries.
          </Typography>
 
          <Typography sx={{ fontWeight: 600, mb: 2 }}>
            Some of our valued clients include:
          </Typography>
 
          {/* CLIENTS LIST */}
          <List sx={{ pl: 2 }}>
            {[
              "Griffon Systems, LLC",
              "MyBizMailer",
              "NariCare Inc.",
              "KAB Consultants",
              "Manideepa Infra Structures",
              "Concious Solutions",
              "ScreenCheck India",
              "Siri Nirman",
              "Green Solar Power Systems",
              "TriFame™, LLC",
              "tumril",
              "letsgovegas",
              "Visakhapatnam Municipal Corporation",
              "La Bella Spa",
              "Virtue Software Solutions LLC",
              "resolify",
              "Mission Road Pharmacy",
              "REHAU Inc.",
              "Auto ID India Systems",
              "Hastin Technologies Inc.",
              "RWin Technologies, LLC",
              "Diabetic Medical Supply",
            ].map((client) => (
              <ListItem key={client} sx={{ py: 0.5 }}>
                <Typography>• {client}</Typography>
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
              { name: "Our Clients", link: "/ourclients" },
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
                    fontWeight:
                      item.name === "Our Clients" ? 600 : 500,
                    color:
                      item.name === "Our Clients"
                        ? "#16a34a"
                        : "#0b2343",
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