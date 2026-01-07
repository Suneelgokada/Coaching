"use client";

import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  Container,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

export default function ProductsNavbar({ scrollProgress = 0 }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        // 🔥 GLASS LOOK (PREVIOUS UI)
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        zIndex: 1300,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            py: { xs: 1.5, md: 1 },
            px: "0 !important",
            gap: { xs: 1, md: 0 },
          }}
        >
          {/* LEFT: LOGO */}
          <Box
            component={Link}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src="/assets/logo copy.png"
              alt="Logo"
              sx={{
                height: { xs: 50, md: 70 },
                cursor: "pointer",
                filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.05))",
              }}
            />
          </Box>

          {/* CENTER: NAV LINKS */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 3, md: 5 },
              order: { xs: 3, md: 2 },
            }}
          >
            {[
              { name: "HOME", link: "/" },
              { name: "CAREERS", link: "/careers" },
              { name: "CONTACT US", link: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                underline="none"
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#333",
                  letterSpacing: 1.2,
                  transition: "all 0.3s ease",
                  "&:hover": { color: "#5142bf" },
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>

          {/* RIGHT: CONTACT */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 4,
              order: { xs: 2, md: 3 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <EmailIcon sx={{ color: "#5142bf", fontSize: 18 }} />
              <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#444" }}>
                codingroots.in@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CallIcon sx={{ color: "#5142bf", fontSize: 18 }} />
              <Typography sx={{ fontSize: "13px", fontWeight: 700, color: "#444" }}>
                +91 8639176137
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>

      {/* 🔥 CLEAN PROGRESS BAR (SINGLE COLOR) */}
     <Box
  sx={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "1px",
    backgroundColor: "rgba(0,0,0,0.03)",
  }}
>
  <Box
    sx={{
      height: "100%",
      width: `${scrollProgress * 100}%`,
      backgroundColor: "#5142bf",
      boxShadow: "0px 0px 8px rgba(81, 66, 191, 0.4)",
    }}
  />
</Box>

    </AppBar>
  );
}