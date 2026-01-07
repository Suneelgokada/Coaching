"use client";
import { motion } from "framer-motion";

import { Box, Typography } from "@mui/material";

export default function StickyInfoPanel({ product }) {
  if (!product) return null;

  return (
    <Box
      sx={{
        height: "100%",
        p: 6,
        color: "#272525ff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${product.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(12px)",
          opacity: 0.25,
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.7 }}>
          Product
        </Typography>

        <Typography variant="h3" sx={{ my: 2, fontWeight: 700 }}>
          {product.title}
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: 420 }}>
          {product.description}
        </Typography>
      </Box>
      {/* <Box
  sx={{
    position: "absolute",
    bottom: 24,
    left: "50%",
    transform: "translateX(-50%)",
    px: 3,
    py: 1,
    borderRadius: "999px",
    background: "rgba(255,255,255,0.75)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    display: "flex",
    alignItems: "center",
    gap: 1,
    zIndex: 2,
    pointerEvents: "none",
  }}
>
  <Typography
    variant="caption"
    sx={{
      fontWeight: 600,
      letterSpacing: "0.08em",
      color: "#333",
    }}
  >
    SCROLL FOR MORE ↓
  </Typography>
</Box> */}
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  style={{
    position: "absolute",
    bottom: 24,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
    pointerEvents: "none",
  }}
>
  <motion.div
    animate={{ y: [0, 6, 0] }}
    transition={{
      duration: 1.6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Box
      sx={{
        px: 3,
        py: 1,
        borderRadius: "999px",
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          fontWeight: 600,
          letterSpacing: "0.08em",
          color: "#333",
        }}
      >
        SCROLL FOR MORE ↓
      </Typography>
    </Box>
  </motion.div>
</motion.div>

    </Box>
  );
}