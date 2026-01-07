"use client";

import { Box, Typography } from "@mui/material";

// This component is NOT used in the current horizontal scroll design
// Keeping it for reference if you want to add a side panel later

export default function StickyInfoPanel({ product }) {
  if (!product) return null;

  return (
    <Box
      sx={{
        height: "100%",
        p: { xs: 4, md: 6 },
        color: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Background Blur Effect */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${product.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px)",
          opacity: 0.15,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography 
          sx={{ 
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: 2,
            color: "#5142bf",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Featured Project
        </Typography>

        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 900,
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: "#000",
            letterSpacing: "-0.02em",
            mb: 3,
          }}
        >
          {product.title}
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            maxWidth: 480,
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#555",
          }}
        >
          {product.description}
        </Typography>
      </Box>
    </Box>
  );
}