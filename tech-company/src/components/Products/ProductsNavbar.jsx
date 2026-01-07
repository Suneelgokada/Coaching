"use client";

import { AppBar, Box, Toolbar } from "@mui/material";
import Link from "next/link";

export default function ProductsNavbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(236, 234, 242, 0.4)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        zIndex: 1200,
      }}
    >
      <Toolbar
        sx={{
          minHeight: 56,
          px: 6,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT — LOGO */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src="./assets/logo.png"
            alt="Logo"
            width={150}
            height={34}
          />
        </Box>

        {/* RIGHT — NAV ITEMS */}
        <Box
          sx={{
            display: "flex",
            gap: 1.2,
            alignItems: "center",
          }}
        >
          {[
            { label: "Home", href: "/" },
            { label: "Careers", href: "/careers" },
            { label: "Contact Us", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}              // ✅ fixed key
              href={item.href}              // ✅ fixed href
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  px: 2.4,
                  py: 0.8,
                  borderRadius: "999px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: 0.6,
                  color: "#5142bfff",
                  backgroundColor: "rgba(255,255,255,0.6)",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    backgroundColor: "rgba(0, 180, 120, 0.15)",
                    color: "#00b478",
                    transform: "translateY(-1px)",
                    boxShadow:
                      "0 6px 18px rgba(0, 180, 120, 0.25)",
                  },
                }}
              >
                {item.label.toUpperCase()}   {/* ✅ fixed */}
              </Box>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}