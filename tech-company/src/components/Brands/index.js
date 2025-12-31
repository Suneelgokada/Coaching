"use client";
import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const OurExpertise = () => {
  const expertiseLogos = [
     { src: "/assets/html1.png", alt: "HTML5" },
    { src: "/assets/css.png", alt: "css" },
    { src: "/assets/js.png", alt: "JavaScript" },
    { src: "/assets/react.png", alt: "React" },
    { src: "/assets/node.png", alt: "Node.js" },
     { src: "/assets/mongoose.png", alt: "MongoDB" },
    { src: "/assets/sqlserver.png", alt: "SQL Server" },
    { src: "/assets/jquery.png", alt: "jQuery" },
    { src: "/assets/mysql.png", alt: "MySQL" },
    { src: "/assets/java.png", alt: "java" },
    { src: "/assets/springboot.png", alt: "Spring Boot" },
    { src: "/assets/net.png", alt: ".net" },
    { src: "/assets/react-native.png", alt: "React Native" },
  ];

  const marqueeRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (marqueeRef.current) {
        marqueeRef.current.style.animationPlayState = "running";
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const marqueeKeyframes = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  return (
    <Box sx={{ py: "80px", backgroundColor: "#fff" }}>
      <style>{marqueeKeyframes}</style>
      <Box sx={{ maxWidth: "1400px", margin: "0 auto", overflow: "hidden" }}>
        
        <Box textAlign={"center"} sx={{ mb: 8 }}>
          <Typography
            variant="h3" // Heading size koncham penchanu
            sx={{
              fontWeight: 700,
              letterSpacing: "3px",
              color: "#222",
              fontFamily: "Poppins, sans-serif",
              textTransform: "uppercase"
            }}
          >
            Our Expertise
          </Typography>
        </Box>

        <Box sx={{ overflow: "hidden", whiteSpace: "nowrap", position: "relative" }}>
          <Box
            ref={marqueeRef}
            sx={{
              display: "inline-block",
              animation: "marquee 35s linear infinite", 
              animationPlayState: "paused",
            }}
            onMouseEnter={() => {
              if (marqueeRef.current) marqueeRef.current.style.animationPlayState = "paused";
            }}
            onMouseLeave={() => {
              if (marqueeRef.current) marqueeRef.current.style.animationPlayState = "running";
            }}
          >
            {[...expertiseLogos, ...expertiseLogos].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: 6, // Logos madhya gap penchanu
                  minWidth: "180px" // Minimum width penchanu
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.alt}
                  sx={{
                    width: "auto",
                    height: "85px", // Height 60px nundi 85px ki penchanu (Zoom Effect)
                    maxWidth: "220px",
                    objectFit: "contain",
                    transition: "transform 0.4s ease",
                    "&:hover": { 
                      transform: "scale(1.2)" // Hover chesinappudu inka zoom avthundi
                    }
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurExpertise;