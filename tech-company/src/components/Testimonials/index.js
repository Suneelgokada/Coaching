"use client";

import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Paper,
  Avatar,
} from "@mui/material";
import Link from "next/link";

const testimonials = [
  {
    text:
      "Technoxis has been helping us with C#, SQL Server and JQuery development for over two years and it has been a true pleasure to work with them....",
    name: "John Bartolucci",
  },
  {
    text:
      "Technoxis is one of the most professional companies we have worked with. What make them different from other organization are their commitment, patience,...",
    name: "Amir",
  },
  {
    text:
      "Working with Technoxis has been a great experience. These guys made a genuine effort in understanding all our needs and requirements, and the end result ...",
    name: "Rahul Dubey",
  },
  {
    text:
      "Technoxis has provided my organization great services in .Net development and web design. I highly recommend this group to anyone needing expertise in cu...",
    name: "Brett Feagans",
  },
  {
    text:
      "Working with Technoxis has been great, they have worked on our project for over 7 months. The project was developed from the start to the final stage and...",
    name: "Ridvan Jakupi",
  },
  {
    text:
      "I have been working with Technoxis for the past 1 year. Our working environment has been primarily SQL Server with ASP .NET & C#. I have found Technoxis ...",
    name: "Ram Kodhandaraman",
  },
  {
    text:
      "I have been working with Technoxis for almost two months on a medium sized internet start up where he has provided unparalleled development work and incr...",
    name: "Matt Bradfield",
  },
];

export default function TestimonialsLayout() {
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
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT CONTENT */}
        <Box sx={{ flex: 2, padding: { xs: 4, md: 8 } }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, color: "#fff" }}>
            Testimonials
          </Typography>

          {testimonials.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                gap: 3,
                pb: 4,
                mb: 4,
                borderBottom: "1px dashed #e5e7eb",
              }}
            >
              <Avatar sx={{ width: 56, height: 56 }} />

              <Box>
                <Typography sx={{ mb: 2, lineHeight: 1.8, color: "#fff" }}>
                  “ {item.text} ”
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#e5e7eb",
                    textAlign: "right",
                  }}
                >
                  {item.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: "#cbd5f5",
                    textAlign: "right",
                  }}
                >
                  Customer Testimonials
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* RIGHT SIDE COMPANY LINKS */}
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            padding: 3,
            borderRadius: "12px",
            maxWidth: "260px",
            maxHeight: "270px",
            marginTop: "200px",
          }}
        >
          <List>
            {[
              { name: "About Us", link: "/about-us" },
              { name: "Methodology", link: "/methodology" },
              { name: "Our Mission", link: "/our-mission" },
              { name: "Our Clients", link: "/ourclients" },
              { name: "Testimonials", link: "/testimonials" },
            ].map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.link}
                  sx={{
                    justifyContent: "center",
                    fontWeight:
                      item.name === "Testimonials" ? 600 : 500,
                    color:
                      item.name === "Testimonials"
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