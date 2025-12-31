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
 
export default function AboutUsLayout() {
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
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            About Us
          </Typography>
<Box sx={{ flex: 2 }}>
  <Typography
    sx={{
      fontStyle: "italic",
      fontWeight: 500,
      mb: 3,
      color: "#91aad3ff",
    }}
  >
    We got the attitude, skills, and experience to deliver the right solutions.
  </Typography>
 
  <Typography sx={{ mb: 2, fontWeight: 600   }}>
    Hello, we're Coding Roots!
  </Typography>
 
  <Typography sx={{ mb: 3, lineHeight: 1.8 ,maxWidth: "800px"}}>
    We are an award winning tech focused web design and development company based
    in Vizag, Visakhapatnam, India. We have a team of dynamic, exuberant and highly
    talented developers and provide bespoke web and mobile solutions across
    India, the US, Canada and other countries. Our goal is to meet the growing
    demands of web and app solutions worldwide, providing exceptional quality and
    fun clientele around the world from varying industries.
  </Typography>
 
  <Typography sx={{ mb: 3, lineHeight: 1.8 ,maxWidth: "800px"}}>
    We have worked with both small and big-sized corporations and delivered
    result-oriented services that help your business achieve extraordinary
    growth and tremendous accomplishments in your industry. We bring creative
    innovations and unique ideas to life.
  </Typography>
 
  <Typography sx={{ mb: 4, fontWeight: 500 ,maxWidth: "800px"}}>
    Get in touch with us to know about services and your requirements!
  </Typography>
 
  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
    Your Digital Partner
  </Typography>
 
  <Typography sx={{ mb: 2, lineHeight: 1.8 ,maxWidth: "800px"}}>
    We offer IT services from web design, development and mobile apps to tech
    software and solutions. We develop solutions tailored to your needs and are
    optimized for performance and usability. We have worked for ambitious
    startups to big organizations across the world. Our web development team can
    build any application that you require with a range of languages including
    .NET, Ruby, PHP and more.
  </Typography>
 
  <Typography sx={{ fontWeight: 600, mb: 1 }}>
    Our Services:
  </Typography>
 
  <List sx={{ pl: 2 }}>
    {[
      "Web Development",
      "Mobile Apps",
      "e-Commerce Solutions",
      "Custom Web Solutions",
    ].map((service) => (
      <ListItem key={service} sx={{ py: 0.5 }}>
        <Typography>• {service}</Typography>
      </ListItem>
    ))}
  </List>
</Box>
 
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