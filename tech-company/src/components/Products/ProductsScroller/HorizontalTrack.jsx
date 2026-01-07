
"use client";

import { Box } from "@mui/material";
import ProductCard from "./ProductCard";

export default function HorizontalTrack({ products, trackRef }) {
  return (
    <Box
      ref={trackRef}
      sx={{
        display: "flex",
        alignItems: "center",
        // gap: 1,

        height: "100%",
        px: 6,
        willChange: "transform",
      }}
    >
      {products.map((p, i) => (
        <ProductCard key={p.id} product={p} index={i} />
      ))}
    </Box>
  );
}