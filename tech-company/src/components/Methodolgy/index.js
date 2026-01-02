"use client";
 
import { useEffect, useState } from "react";
import {
  Box,
  Card,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
 
const slides = [
  {
    title: "Client-Centric Approach",
    desc: "We place your business goals at the core of our methodology, ensuring every solution is aligned with real-world needs.",
  },
  {
    title: "Transparent Communication",
    desc: "You receive clear updates, defined milestones, and complete visibility throughout the project lifecycle.",
  },
  {
    title: "Scalable & Future-Ready Solutions",
    desc: "Our systems are designed to scale effortlessly, supporting long-term growth and evolving requirements.",
  },
  {
    title: "Proven Delivery Framework",
    desc: "We follow a tested delivery model that minimizes risks and ensures predictable outcomes.",
  },
  {
    title: "Focus on Quality & Performance",
    desc: "Every solution undergoes rigorous quality checks for performance, security, and reliability.",
  },
];
 
export default function MethodologyCarousel() {
  const [index, setIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
 
  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
 
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };
 
  return (
    <Box
      sx={{
        width: "100%",
        background:
          "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
      }}
    >
      {/* SECTION TITLE */}
      <Typography
        align="center"
        sx={{
          fontSize: { xs: 26, md: 34 },
          fontWeight: 800,
          color: "#0f2a44",
          mb: 1,
        }}
      >
        Why Our Methodology Works
      </Typography>
 
      <Typography
        align="center"
        sx={{
          maxWidth: 720,
          mx: "auto",
          fontSize: 16,
          color: "#475569",
          mb: 6,
        }}
      >
        A structured, transparent, and scalable approach designed to deliver
        measurable business outcomes.
      </Typography>
 
      {/* CARD WRAPPER */}
      <Box
        sx={{
          position: "relative",
          maxWidth: "1100px",
          mx: "auto",
        }}
      >
        {/* LEFT ARROW */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: -10, md: -36 },
            transform: "translateY(-50%)",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            color: "#1a73e8",
            "&:hover": { backgroundColor: "#e8f0fe" },
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
 
        {/* MAIN CARD */}
        <Card
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: "18px",
            background:
              "linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)",
            border: "1px solid #e5e7eb",
            boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
          }}
        >
          <Stack spacing={3} alignItems="center">
            {/* ICON BADGE */}
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #22c55e, #16a34a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 30px rgba(34,197,94,0.4)",
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 34, color: "#ffffff" }} />
            </Box>
 
            {/* TITLE */}
            <Typography
              sx={{
                fontSize: { xs: 20, md: 24 },
                fontWeight: 700,
                color: "#0f2a44",
                textAlign: "center",
              }}
            >
              {slides[index].title}
            </Typography>
 
            {/* DESCRIPTION */}
            <Typography
              sx={{
                maxWidth: 860,
                fontSize: 16,
                color: "#374151",
                textAlign: "center",
                lineHeight: 1.9,
              }}
            >
              {slides[index].desc}
            </Typography>
          </Stack>
        </Card>
 
        {/* RIGHT ARROW */}
        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: -10, md: -36 },
            transform: "translateY(-50%)",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            color: "#1a73e8",
            "&:hover": { backgroundColor: "#e8f0fe" },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
 
      {/* DOTS */}
      <Stack direction="row" justifyContent="center" spacing={1.2} sx={{ mt: 4 }}>
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: i === index ? 22 : 10,
              height: 10,
              borderRadius: "20px",
              cursor: "pointer",
              transition: "0.3s ease",
              backgroundColor:
                i === index ? "#22c55e" : "#cbd5e1",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}