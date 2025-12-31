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

export default function WebApplicationLayout() {
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
        <svg viewBox="0 0 1440 120" width="100%" height="120">
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
        <Box sx={{ color: "#ffffff", padding: { xs: 4, md: 8 } }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Web Application Development
          </Typography>

          <Typography
            sx={{
              fontStyle: "italic",
              fontWeight: 600,
              mb: 3,
              color: "#91aad3ff",
            }}
          >
            LET’S GET YOU DIGITAL! <br />
            Expert Website Development Company based in Vizag
          </Typography>

          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "800px" }}>
            We’re a Vizag web development company, providing fresh, dynamic and
            beautifully crafted websites to businesses who want to grow online.
            Focusing on results, our highly skilled development teams work closely
            with you to bring the digital vision of your brand to life.
          </Typography>

          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "800px" }}>
            Gaining a unique brand identity in today’s digital era is not easy.
            If you don’t have a website, you are as good as invisible. As a
            professional web development company, we help businesses across
            Vizag, India, USA and Canada achieve their digital goals.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            What We Do
          </Typography>

          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            Bespoke Web Development
          </Typography>
          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "800px" }}>
            Whether you need a custom web application or a customer-facing
            portal, Coding Roots designs and develops scalable solutions aligned
            with your business goals across global markets.
          </Typography>

          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            E-Commerce, B2B and B2C Solutions
          </Typography>
          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "800px" }}>
            Our web solutions enhance visibility, sales and brand loyalty.
            From payment gateway integration to custom B2B & B2C platforms,
            we help you scale efficiently.
          </Typography>

          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            Custom Application Development
          </Typography>
          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "800px" }}>
            We build secure, high-performance applications using open-source
            technologies including PHP and ASP.NET to bring your business ideas
            to life.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Web Development Expertise
          </Typography>

          <List sx={{ pl: 2 }}>
            {[
              "ASP.NET Framework Development",
              "Software Product Development",
              "N-Tier Application Development",
              "ReactJS Development",
              "Angular Development",
              "ASP.NET MVC Development",
            ].map((skill) => (
              <ListItem key={skill} sx={{ py: 0.5 }}>
                <Typography>• {skill}</Typography>
              </ListItem>
            ))}
          </List>

          <Typography sx={{ fontWeight: 700, mt: 4 }}>
            Let’s build something great together
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Contact us today!
          </Typography>
        </Box>

        {/* RIGHT SIDE SERVICES LINKS */}
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            padding: 3,
            borderRadius: "12px",
            maxWidth: "260px",
            marginTop: "200px",
          }}
        >
          <List>
            {[
              { name: "Web Application", link: "/services/web-application" },
              { name: "Mobile Application", link: "/services/mobile-application" },
              { name: "Open Source", link: "/services/open-source" },
              { name: "e-Commerce Solutions", link: "/services/ecommerce-solutions" },
              { name: "Frontend Web Apps", link: "/services/frontend-web-apps" },
              { name: "AI Agents", link: "/services/ai-agents" },
            ].map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.link}
                  sx={{
                    justifyContent: "center",
                    fontWeight:
                      item.name === "Web Application" ? 600 : 500,
                    color:
                      item.name === "Web Application"
                        ? "#16a34a"
                        : "#0b2343",
                  }}
                >
                  ➜ {item.name}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
}