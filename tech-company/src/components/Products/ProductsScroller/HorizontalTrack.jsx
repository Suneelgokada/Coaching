"use client";

import { Box } from "@mui/material";
import CompanyIntroCard from "./CompanyIntroCard";
import ProductCard from "./ProductCard";

export default function HorizontalTrack({ companyIntro, products, isColumn }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isColumn ? "column" : "row", // ✅ switch layout
        alignItems: isColumn ? "stretch" : "center",
        height: isColumn ? "auto" : "100vh",
        width: isColumn ? "100%" : "max-content",
        gap: 2,
      }}
    >
      <CompanyIntroCard data={companyIntro} />

      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          sx={{
            width: isColumn ? "100%" : "300px", // ✅ full width on mobile
          }}
        />
      ))}
    </Box>
  );
}
