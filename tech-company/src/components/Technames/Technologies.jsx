"use client";

import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import TechGrid from "./TechGrid";
import TechModal from "./TechModal";
import { technologies } from "./data";

export default function Technologies({ heading, showContent = true }) {
  const [activeCategory, setActiveCategory] = useState("ai_ml");
  const [selectedTech, setSelectedTech] = useState(null);

  const PRIMARY_COLOR = "#085482";
  const ACCENT_COLOR = "#00E676";
  const FONT = "'Montserrat', sans-serif";

  return (
    <Box 
      component="section"
      sx={{ 
        minHeight: "100vh", 
        py: { xs: 8, md: 12 }, 
        px: { xs: 2, sm: 3 },
        bgcolor: "#ffffff" 
      }}
    >
      <Container maxWidth="xl">
        {/* 🔥 Header Section - Professional Alignment */}
        <Box 
          sx={{ 
            mb: { xs: 6, md: 10 }, 
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontFamily: FONT,
              color: PRIMARY_COLOR,
              textTransform: "uppercase",
              letterSpacing: { xs: 1.5, md: 3 },
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            {heading || "The Engines Behind Our Innovation"}
          </Typography>

      

          {showContent && (
            <Typography
              variant="body1"
              sx={{ 
                maxWidth: "850px", 
                color: "text.secondary", 
                fontFamily: FONT,
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                lineHeight: 1.8,
                textAlign: "center"
              }}
            >
              We specialize in a diverse range of cutting-edge technologies to build 
              future-ready digital products. From robust backend systems to immersive 
              frontend experiences, our tech stack is optimized for performance and scale.
            </Typography>
          )}
        </Box>

        {/* 🔥 Main Content Layout */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 4, md: 6, lg: 8 },
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
          }}
        >
          {/* Sidebar - Sticky on Desktop, Centered on Mobile */}
          <Box
            sx={{
              width: { xs: "100%", md: "280px" },
              flexShrink: 0,
              position: { md: "sticky" },
              top: { md: 100 }, // Header height ki adjust avvadaniki
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Sidebar active={activeCategory} onChange={setActiveCategory} />
          </Box>

          {/* Tech Grid - Smooth Transition Area */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" }
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", lg: "1150px" },
                // Category click chesinappudu smooth fade effect kosam (optional)
                animation: "fadeIn 0.5s ease-in-out",
                "@keyframes fadeIn": {
                  from: { opacity: 0, transform: "translateY(10px)" },
                  to: { opacity: 1, transform: "translateY(0)" }
                }
              }}
            >
              <TechGrid
                data={technologies[activeCategory] || []}
                onSelect={setSelectedTech}
              />
            </Box>
          </Box>
        </Box>
      </Container>

      <TechModal tech={selectedTech} onClose={() => setSelectedTech(null)} />
    </Box>
  );
}