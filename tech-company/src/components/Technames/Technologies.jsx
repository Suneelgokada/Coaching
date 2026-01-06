"use client";

import { useState } from "react";
import { Box, Container } from "@mui/material";
import Sidebar from "./Sidebar";
import TechGrid from "./TechGrid";
import TechModal from "./TechModal";
import { technologies } from "./data";

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <Box sx={{ minHeight: "100vh", py: { xs: 4, sm: 6 }, px: { xs: 2, sm: 3 } }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, sm: 4 },
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "stretch", md: "flex-start" },
          }}
        >
          {/* Sidebar */}
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "250px" },
              flexShrink: 0,
              position: { md: "sticky" },
              top: { md: 24 },
              mb: { xs: 3, md: 0 }, // spacing below sidebar on mobile
            }}
          >
            <Sidebar active={activeCategory} onChange={setActiveCategory} />
          </Box>

          {/* Tech Grid - Centered */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              width: "100%",
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: "100%", sm: "700px", md: "900px", lg: "1100px" },
                width: "100%",
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
