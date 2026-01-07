"use client";

import { Box, Typography } from "@mui/material";

export default function NextSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4">
        Next Section Content
      </Typography>
    </Box>
  );
}