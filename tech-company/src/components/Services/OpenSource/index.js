"use client";

import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Paper,
} from "@mui/material";
import Link from "next/link";

export default function OpenSourceLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0b2343",
        position: "relative",
        overflow: "hidden",
        padding: { xs: 3, md: 8 },
      }}
    >
      {/* ================= TOP CURVE ================= */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          maxWidth: "50%",
          lineHeight: 0,
          zIndex: 0,
        }}
      >
        <svg viewBox="0 0 1440 120" width="100%" height="120">
          <path
            d="M0,96L80,85.3C160,75,320,53,480,48C640,43,800,53,960,64C1120,75,1280,85,1360,90.7L1440,96L1440,0L0,0Z"
            fill="#0b2343"
          />
        </svg>
      </Box>
      {/* ============================================ */}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
          alignItems: "flex-start",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT CONTENT */}
        <Box sx={{ color: "#ffffff", padding: { xs: 4, md: 8 } }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Open Source Development
          </Typography>

          <Typography
            sx={{
              fontStyle: "italic",
              fontWeight: 600,
              mb: 3,
              color: "#91aad3ff",
              maxWidth: "800px",
            }}
          >
            Flexible, cost-effective and scalable open source solutions for your
            business.
          </Typography>

          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "800px" }}>
            We offer open source development, customization and implementation
            services. Our designers and developers are experienced in template
            design, module installation, system customization and seamless
            integration to help you build a strong online presence.
          </Typography>

          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "800px" }}>
            Deploying applications using open source systems allows websites to
            go live faster and more efficiently. At Coding Roots, we analyze your
            requirements and suggest the best open source platform suited to
            your business goals.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Why Open Source?
          </Typography>

          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "800px" }}>
            Open source systems are cost-effective, flexible and easy to
            integrate. They provide access to a vast ecosystem of plugins,
            modules and extensions that help your application evolve with your
            changing business needs.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Open Source Platforms We Work With
          </Typography>

          <List sx={{ pl: 2 }}>
            {[
              "CakePHP",
              "CMS Development",
              "DotNuke",
              "Drupal",
              "Joomla",
              "OSCommerce",
              "WordPress",
            ].map((platform) => (
              <ListItem key={platform} sx={{ py: 0.5 }}>
                <Typography>• {platform}</Typography>
              </ListItem>
            ))}
          </List>

          <Typography sx={{ fontWeight: 700, mt: 4 }}>
            Contact us today!
          </Typography>
        </Box>

        {/* RIGHT SIDE SERVICES LINKS */}
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            padding: 3,
            borderRadius: "12px",
            maxWidth: "260px",
            marginTop: "200px",
          }}
        >
          <List>
            {[
              { name: "Web Application", link: "/services/web-application" },
              { name: "Mobile Application", link: "/services/mobile-application" },
              { name: "Open Source", link: "/services/open-source" },
              { name: "e-Commerce Solutions", link: "/services/ecommerce-solutions" },
              { name: "Frontend Web Apps", link: "/services/frontend-web-apps" },
              { name: "AI Agents", link: "/services/ai-agents" },
            ].map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.link}
                  sx={{
                    justifyContent: "center",
                    fontWeight: item.name === "Open Source" ? 600 : 500,
                    color:
                      item.name === "Open Source"
                        ? "#16a34a"
                        : "#0b2343",
                  }}
                >
                  ➜ {item.name}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
}