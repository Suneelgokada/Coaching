"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  List,
  ListItem,
  Collapse,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { servicesData } from "./servicedata";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("Mobile App Development");
  const [mobileOpen, setMobileOpen] = useState(null);

  const categories = Object.keys(servicesData);
  const activeIndex = categories.indexOf(activeTab);
  const mainColor = "#085482";

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // ≤ 768px

  return (
    <Container maxWidth="xl" sx={{ py: 8, minHeight: "60vh" }}>
      {/* Font + animation */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>

      {/* ================= MOBILE / TABLET VIEW ================= */}
      {isMobile && (
        <Box>
          <List sx={{ p: 0 }}>
            {categories.map((cat) => {
              const isOpen = mobileOpen === cat;

              return (
                <Box
                  key={cat}
                  sx={{
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {/* Service Row */}
                  <ListItem
                    onClick={() =>
                      setMobileOpen(isOpen ? null : cat)
                    }
                    sx={{
                      cursor: "pointer",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 600,
                      py: 1.5,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {cat}
                    <IconButton size="small">
                      <ChevronRightIcon
                        sx={{
                          transform: isOpen
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                          transition: "0.3s ease",
                        }}
                      />
                    </IconButton>
                  </ListItem>

                  {/* Sub Technologies */}
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <Box sx={{ pl: 3, pb: 2 }}>
                      {servicesData[cat].techs.map((tech) => (
                        <Typography
                          key={tech}
                          sx={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "0.95rem",
                            color: "#555",
                            py: 0.5,
                          }}
                        >
                          • {tech}
                        </Typography>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              );
            })}
          </List>
        </Box>
      )}

      {/* ================= DESKTOP VIEW ================= */}
      {!isMobile && (
        <Grid
          container
          spacing={6}
          sx={{ flexWrap: "nowrap" }}
        >
          {/* ===== LEFT SIDEBAR ===== */}
          <Grid
            item
            sx={{
              flex: "0 0 320px",
              maxWidth: "320px",
            }}
          >
            <Box sx={{ position: "relative", borderLeft: "1px solid #eee" }}>
              {/* Active Indicator */}
              <Box
                sx={{
                  position: "absolute",
                  left: -2,
                  top: activeIndex * 52,
                  width: "4px",
                  height: "40px",
                  backgroundColor: mainColor,
                  transition: "all 0.35s ease",
                }}
              />

              <List sx={{ p: 0 }}>
                {categories.map((cat) => (
                  <ListItem
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    sx={{
                      height: "52px",
                      cursor: "pointer",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: activeTab === cat ? 700 : 500,
                      color: activeTab === cat ? mainColor : "#333",
                      pl: activeTab === cat ? 4 : 3,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        color: mainColor,
                        pl: 4,
                      },
                    }}
                  >
                    {cat}
                    {activeTab === cat && (
                      <Box sx={{ ml: 1 }}>→</Box>
                    )}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          {/* ===== RIGHT CONTENT ===== */}
          <Grid item sx={{ flex: 1 }}>
            <Box
              key={activeTab}
              sx={{ animation: "fadeInRight 0.45s ease-out" }}
            >
              {/* Title */}
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  mb: 3,
                  fontSize: "2.4rem",
                }}
              >
                {servicesData[activeTab].title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1.05rem",
                  color: "#666",
                  mb: 5,
                  lineHeight: 1.8,
                  maxWidth: "720px",
                }}
              >
                {servicesData[activeTab].desc}
              </Typography>

              {/* Technologies (Flex Wrap) */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px 40px",
                  maxWidth: "720px",
                }}
              >
                {servicesData[activeTab].techs.map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      width: "calc(50% - 20px)",
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 500,
                      color: "#444",
                      fontSize: "0.98rem",
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        bgcolor: "#ccc",
                        borderRadius: "50%",
                        mr: 1.5,
                        flexShrink: 0,
                      }}
                    />
                    {tech}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
