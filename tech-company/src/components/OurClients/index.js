"use client";
 
import { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Card,
  Avatar,
} from "@mui/material";
 
const clients = [
  {
    name: "Holden Caulfield",
    company: "E-commerce Brand",
  },
  {
    name: "Henry Letham",
    company: "FinTech Startup",
  },
  {
    name: "Oskar Blinde",
    company: "SaaS Company",
  },
  {
    name: "John Doe",
    company: "Healthcare Solutions",
  },
  {
    name: "Martin Eden",
    company: "EdTech Platform",
  },
  {
    name: "Boris Kitua",
    company: "Enterprise IT Services",
  },
  {
    name: "Atticus Finch",
    company: "Logistics Company",
  },
  {
    name: "Alper Kamu",
    company: "Cloud Infrastructure",
  },
  {
    name: "Rodrigo Monchi",
    company: "Product Company",
  },
];
 
// Duplicate for infinite effect
const infiniteClients = [...clients, ...clients];
 
export default function OurClientsCarousel() {
  const sliderRef = useRef(null);
 
  useEffect(() => {
    const slider = sliderRef.current;
    let animationId;
    let position = 0;
 
    const speed = 0.5; // adjust scroll speed
 
    const animate = () => {
      position += speed;
      if (position >= slider.scrollWidth / 2) {
        position = 0;
      }
      slider.scrollLeft = position;
      animationId = requestAnimationFrame(animate);
    };
 
    animationId = requestAnimationFrame(animate);
 
    // Pause on hover
    const stop = () => cancelAnimationFrame(animationId);
    const start = () => requestAnimationFrame(animate);
 
    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
 
    return () => {
      cancelAnimationFrame(animationId);
      slider.removeEventListener("mouseenter", stop);
      slider.removeEventListener("mouseleave", start);
    };
  }, []);
 
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 700,
          color: "#1a73e8",
          mb: 2,
        }}
      >
        Our Clients
      </Typography>
 
      <Typography
        align="center"
        sx={{
          maxWidth: 900,
          mx: "auto",
          mb: 6,
          color: "#4b5563",
          fontSize: 16,
        }}
      >
        We partner with startups, enterprises, and global brands across industries
        to deliver scalable, high-impact digital solutions.
      </Typography>
 
      {/* Infinite Slider */}
      <Box
  ref={sliderRef}
  sx={{
    display: "flex",
    gap: 3,
    overflowX: "hidden",   // keep horizontal hidden
    overflowY: "visible",  // ✅ allow cards to come out
    whiteSpace: "nowrap",
     py: 4,  
    position: "relative",
  }}
>
 
        {infiniteClients.map((client, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 260,
              maxWidth: 260,
              p: 4,
              textAlign: "center",
               zIndex: 9999,
              borderRadius: "16px",
              border: "1px solid #0a1935ff",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              flexShrink: 0,
              transition: "0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 14px 40px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Profile Image */}
            <Avatar
              sx={{
                width: 72,
                height: 72,
                mx: "auto",
                mb: 2,
                bgcolor: "#e8f0fe",
                color: "#1a73e8",
                fontSize: 28,
                fontWeight: 600,
              }}
            >
              {client.name.charAt(0)}
            </Avatar>
 
            {/* Name */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#1f2937",
              }}
            >
              {client.name}
            </Typography>
 
            {/* Company */}
            <Typography
              sx={{
                mt: 1,
                color: "#1a73e8",
                fontSize: 14,
               
                fontWeight: 500,
              }}
            >
              {client.company}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
 