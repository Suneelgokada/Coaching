"use client";
import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const OurExpertise = () => {
  const MONTSERRAT = "'Montserrat', sans-serif";
  const LOGO_BLUE = "#085482";

  const expertiseLogos = [
    { src: "/assets/html1.png", alt: "HTML5" },
    { src: "/assets/css.png", alt: "CSS" },
    { src: "/assets/js.png", alt: "JavaScript" },
    { src: "/assets/react.png", alt: "React" },
    { src: "/assets/node.png", alt: "Node.js" },
    { src: "/assets/mongoose.png", alt: "MongoDB" },
    { src: "/assets/sqlserver.png", alt: "SQL Server" },
    { src: "/assets/jquery.png", alt: "jQuery" },
    { src: "/assets/mysql.png", alt: "MySQL" },
    { src: "/assets/java.png", alt: "Java" },
    { src: "/assets/springboot.png", alt: "Spring Boot" },
    { src: "/assets/net.png", alt: ".NET" },
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
    <Box sx={{ py: "80px", backgroundColor: "#fff", fontFamily: MONTSERRAT }}>
      <style>{marqueeKeyframes}</style>

      <Box sx={{ maxWidth: "1400px", margin: "0 auto", overflow: "hidden" }}>
        
        {/* ================= HEADING ================= */}
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 600,
              fontFamily: MONTSERRAT,
              color: LOGO_BLUE,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Our Expertise
          </Typography>
        </Box>

        {/* ================= MARQUEE ================= */}
        <Box sx={{ overflow: "hidden", whiteSpace: "nowrap", position: "relative" }}>
          <Box
            ref={marqueeRef}
            sx={{
              display: "inline-block",
              /* Speed Control: 
                 35s నుండి 60s కి మార్చాను. 
                 ఇంకా స్లో కావాలంటే 80s లేదా 100s పెట్టుకోండి.
              */
              animation: "marquee 60s linear infinite", 
              animationPlayState: "paused",
            }}
            onMouseEnter={() => {
              if (marqueeRef.current)
                marqueeRef.current.style.animationPlayState = "paused";
            }}
            onMouseLeave={() => {
              if (marqueeRef.current)
                marqueeRef.current.style.animationPlayState = "running";
            }}
          >
            {[...expertiseLogos, ...expertiseLogos].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: 4, 
                  minWidth: "150px",
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.alt}
                  sx={{
                    height: "80px",
                    maxWidth: "160px",
                    objectFit: "contain",
                    filter: "grayscale(20%)", // Optional: Slight professional look
                    transition: "transform 0.4s ease, filter 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.15)",
                      filter: "grayscale(0%)",
                    },
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