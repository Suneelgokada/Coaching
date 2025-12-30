"use client";
import { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "520px", md: "650px" },
        backgroundColor: "#1769d2", // exact Technoxis blue
        overflow: "hidden",
        color: "#fff",
      }}
    >
      {/* ================= CONTENT ================= */}
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 10, md: 14 }, // ⬅️ important fix
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ maxWidth: "640px" }}>
          <Typography
            sx={{
              fontSize: { xs: "26px", md: "36px" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            IT Development Services
          </Typography>

          <Typography sx={{ lineHeight: 1.8, opacity: 0.95 }}>
            Our offshore Web Development Services offer a range of solutions
            over multiple platforms like custom website development,
            design, mobile development, Windows, Web Services,
            REST APIs, and e-commerce solutions designed to suit your needs.
            <br /><br />
            Providing our clients with optimum quality based solutions
            to cater to the ever changing requirements is our priority.
          </Typography>
        </Box>
      </Container>

      {/* ================= RIGHT IMAGE ================= */}
      <Box
        component="img"
        src="/assets/16-years-anniversary.png" 
        alt="16 Years Anniversary"
        sx={{
          position: "absolute",
          right: { xs: "-20px", md: "40px" },
          top: { xs: "55%", md: "50%" },
          transform: "translateY(-50%)",
          width: { xs: "240px", md: "420px" },
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* ================= CURVE WITH PARALLAX ================= */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-1px",
          left: 0,
          width: "100%",
          transform: `translateY(${scrollY * 0.12}px)`, // ⬅️ subtle motion
          transition: "transform 0.03s linear",
          zIndex: 1,
        }}
      >
        <svg
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "520px", display: "block" }}
        >
          {/* MAIN WHITE CURVE */}
          <path
            fill="#ffffff"
            d="
              M0,150
              C10,280 500,240 760,200
              C1040,150 2000,120 1440,140
              L1440,240
              L0,500
              Z
            "
          />
        </svg>
      </Box>
    </Box>
  );
}
