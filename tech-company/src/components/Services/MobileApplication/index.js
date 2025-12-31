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

export default function MobileApplicationLayout() {
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
            Mobile Application Development
          </Typography>

          <Typography
            sx={{
              fontStyle: "italic",
              fontWeight: 600,
              mb: 3,
              color: "#91aad3ff",
            }}
          >
            We can help you grow brand engagement with a beautiful, fast,
            creative and interactive mobile app.
          </Typography>

          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "800px" }}>
            Coding Roots is an experienced mobile app development company based in
            Vizag, Visakhapatnam. With over 12 years of experience, we help
            startups and enterprises launch successful mobile products and
            boost their KPIs.
          </Typography>

          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "800px" }}>
            Mobile apps offer businesses the opportunity to reach customers at
            their fingertips. We design and develop modern, high-performance,
            and interactive mobile applications from concept to launch across
            India, USA, and Canada.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            What We Can Do For You
          </Typography>

          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            Bespoke Mobile Application
          </Typography>
          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "800px" }}>
            Our expert mobile app developers research your market, design
            intuitive UX, and build applications that engage users. We have
            experience in native, hybrid, food delivery apps, taxi apps and
            more across India, USA and Canada.
          </Typography>

          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            mCommerce, B2B and B2C Solutions
          </Typography>
          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "800px" }}>
            From raw ideas to powerful products, we develop m-commerce, B2B and
            B2C mobile applications focused on speed, user experience and
            conversion optimization.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Our Approach to Mobile App Development
          </Typography>

          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "800px" }}>
            We provide end-to-end mobile app development services, focusing not
            just on technology but also on market trends, competitors, and
            performance across Android and iOS platforms.
          </Typography>

          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            Android App Development
          </Typography>
          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "800px" }}>
            Our Android apps are fast, lightweight and scalable, covering
            e-commerce, food delivery, taxi, fintech and social media apps with
            strong Play Store performance.
          </Typography>

          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            iOS App Development
          </Typography>
          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "800px" }}>
            We develop simple, stylish and powerful iOS applications that
            leverage the full potential of Apple’s ecosystem to stand out in
            the App Store.
          </Typography>

          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            Hybrid App Development
          </Typography>
          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "800px" }}>
            For innovative ideas, we recommend hybrid development using React
            Native, Ionic and PhoneGap, delivering cross-platform apps across
            India, USA and Canada.
          </Typography>

          <Typography sx={{ fontWeight: 700 }}>
            Collaborate with Coding Roots today
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Let’s Get Started!
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
                      item.name === "Mobile Application" ? 600 : 500,
                    color:
                      item.name === "Mobile Application"
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