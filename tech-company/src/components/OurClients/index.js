"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Typography, Card, Avatar } from "@mui/material";

const clients = [
  { name: "Holden Caulfield", company: "E-commerce Brand" },
  { name: "Henry Letham", company: "FinTech Startup" },
  { name: "Oskar Blinde", company: "SaaS Company" },
  { name: "John Doe", company: "Healthcare Solutions" },
  { name: "Martin Eden", company: "EdTech Platform" },
  { name: "Boris Kitua", company: "Enterprise IT Services" },
  { name: "Atticus Finch", company: "Logistics Company" },
  { name: "Alper Kamu", company: "Cloud Infrastructure" },
  { name: "Rodrigo Monchi", company: "Product Company" },
];

const infiniteClients = [...clients, ...clients, ...clients];

export default function OurClientsCarousel() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId;
    let position = slider.scrollLeft;

    const animate = () => {
      // Mouse tho drag chestunnappudu auto-scroll avvakudadu
      if (!isDragging) {
        position += 0.8; 
        if (position >= slider.scrollWidth / 1.5) {
          position = 0;
        }
        slider.scrollLeft = position;
      } else {
        // Drag chestunnappudu position ni update chestu undali, lekapothe drag vadilesaka jump avtundi
        position = slider.scrollLeft;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag sensitivity
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Box sx={{ width: "100%", py: 10, bgcolor: "white", overflow: "hidden" }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 6, color: "#1a73e8" }}>
        Our Clients
      </Typography>

      <Box
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onMouseMove={handleMouseMove}
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "hidden", // Dragging logic manual ga handle chestunnam kabatti idi hidden unchali
          whiteSpace: "nowrap",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          px: 2,
          py: 4,
          WebkitOverflowScrolling: "touch", // Mobile smooth scroll kosam
        }}
      >
        {infiniteClients.map((client, index) => (
          <Box
            key={index}
            sx={{
              flexShrink: 0,
              pointerEvents: "none", // Mukhyam: Mouse clicks card lopala agipokunda
            }}
          >
            <Card
              sx={{
                width: 260,
                p: 4,
                textAlign: "center",
                borderRadius: "16px",
                border: "1px solid #0a19351a",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
            >
              <Avatar sx={{ width: 72, height: 72, mx: "auto", mb: 2, bgcolor: "#e8f0fe", color: "#1a73e8" }}>
                {client.name.charAt(0)}
              </Avatar>
              <Typography variant="h6" fontWeight={600}>{client.name}</Typography>
              <Typography sx={{ color: "#1a73e8", fontSize: 14 }}>{client.company}</Typography>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}