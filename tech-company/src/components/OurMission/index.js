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
 
export default function OurMissionLayout() {
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
            Our Mission
          </Typography>
 
          <Typography
            sx={{
              fontStyle: "italic",
              fontWeight: 500,
              mb: 3,
              color: "#91aad3ff",
              maxWidth: "800px",
            }}
          >
            Our mission is to be the partner of choice for enterprises by
            delivering innovative, reliable, and cost-effective digital
            solutions.
          </Typography>
 
          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "800px" }}>
            Our mission is to help enterprises create, build, and maintain
            cutting-edge applications that meet their customers’ growing needs.
            By leveraging new technologies and best practices, we ensure
            scalability, reliability, and long-term success for our clients.
          </Typography>
 
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Our Values
          </Typography>
 
          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            Client and End-User Perspective
          </Typography>
          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "800px" }}>
            Success for us is seeing your business thrive. Before we take up a
            project, we deeply understand your vision and customer persona. This
            insight helps us select the right development strategy and deliver
            tailored solutions.
          </Typography>
 
          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            Culture of Excellence
          </Typography>
          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "800px" }}>
            We strive to cultivate excellence in everything we do by delivering
            outstanding results and continuously updating our skills, tools,
            and technology knowledge.
          </Typography>
 
          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            Innovative Thinkers
          </Typography>
          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "800px" }}>
            We constantly innovate to build long-lasting solutions that allow
            our clients to focus on business goals rather than technology
            challenges.
          </Typography>
 
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.1rem",
              mb: 1,
            }}
          >
            Let’s Grow Your Business Together
          </Typography>
 
          <Typography sx={{ fontWeight: 500 }}>
            Contact us today!
          </Typography>
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
                      item.name === "Our Mission" ? 600 : 500,
                    color:
                      item.name === "Our Mission"
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