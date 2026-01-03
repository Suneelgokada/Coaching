"use client";

import { Box, Typography } from "@mui/material";

export default function Products() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0b4a7a, #1ecad3)",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "32px", md: "48px" },
          fontWeight: 800,
          color: "#ffffff",
          animation: "hiAnim 2s ease-in-out infinite",
          "@keyframes hiAnim": {
            "0%": {
              opacity: 0,
              transform: "translateY(20px)",
            },
            "50%": {
              opacity: 1,
              transform: "translateY(0px)",
            },
            "100%": {
              opacity: 0,
              transform: "translateY(-20px)",
            },
          },
        }}
      >
        Hi 👋 Welcome We are coming soon
      </Typography>
    </Box>
  );
}

