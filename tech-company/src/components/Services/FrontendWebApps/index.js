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

export default function FrontendWebAppsLayout() {
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
            Frontend Web Development
          </Typography>

          <Typography
            sx={{
              fontStyle: "italic",
              fontWeight: 600,
              mb: 3,
              color: "#91aad3ff",
              maxWidth: "820px",
            }}
          >
            We bring ideas to life on the web so that they look and feel
            delightful to every user, on every device.
          </Typography>

          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "820px" }}>
            At Technoxis, we understand how challenging it can be for businesses
            to hire and scale skilled frontend developers. Whether you are a
            startup or a large organization, we help you expand your frontend
            development capabilities for new products and evolving business
            needs.
          </Typography>

          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "820px" }}>
            We are a leading frontend development company based in Vizag,
            Visakhapatnam, India, serving clients across India, the USA, Canada
            and other countries. With over 12 years of experience, we deliver
            projects using ReactJS, AngularJS and VueJS, selecting the best
            framework for your application.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Our Top-Class Frontend Development Delivers
          </Typography>

          <List sx={{ pl: 2, mb: 4 }}>
            {[
              "Great user experience",
              "Standards-led, high-quality code",
              "Accessible web interfaces",
              "Low carbon emissions",
              "Lightning fast load times",
            ].map((point) => (
              <ListItem key={point} sx={{ py: 0.5 }}>
                <Typography>• {point}</Typography>
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Our Experience Speaks for Us
          </Typography>

          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "820px" }}>
            With over 12 years of experience, we have worked with startups,
            product companies, and large enterprises across the globe. Our
            highly skilled frontend development team has helped businesses
            transform ideas into engaging digital experiences.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Boost Customer Engagement
          </Typography>

          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "820px" }}>
            Our UX/UI-focused frontend development services boost customer
            engagement and guide users to take meaningful actions. We are a
            preferred frontend development partner in Vizag, India, the USA and
            Canada.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Why Outsource Frontend Development?
          </Typography>

          <List sx={{ pl: 2, mb: 4 }}>
            {[
              "Reduce cost up to 50%",
              "Access top IT talent",
              "Fill gaps in skill sets",
              "Faster time-to-market",
              "Future-proof web applications",
              "Innovation & competitive advantage",
              "Enhanced efficiency",
              "Operational agility",
              "Complete peace of mind",
            ].map((reason) => (
              <ListItem key={reason} sx={{ py: 0.5 }}>
                <Typography>• {reason}</Typography>
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Your Offshore Frontend Development Partner
          </Typography>

          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "820px" }}>
            Technoxis is a trusted offshore frontend development company with
            expertise in AngularJS, ReactJS, VueJS and Node.js, delivering
            scalable and modern applications worldwide.
          </Typography>

          <Typography sx={{ fontWeight: 700 }}>
            Are you ready to get started?
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
                      item.name === "Frontend Web Apps" ? 600 : 500,
                    color:
                      item.name === "Frontend Web Apps"
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