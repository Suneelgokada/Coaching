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
 
export default function EcommerceSolutionsLayout() {
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
            eCommerce Solutions
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
            Introduce your brand to the world & turn visitors into customers.
          </Typography>
 
          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "800px" }}>
            The eCommerce platform is one of the most effective ways to sell your
            products online directly to your customers. At Technoxis, we provide
            innovative and modern eCommerce solutions by combining our technical
            expertise with your business ideas.
          </Typography>
 
          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "800px" }}>
            Our eCommerce solutions are scalable, flexible, and simple to manage.
            Whether you are starting a new online business or expanding globally,
            we help you build a platform that grows with your business.
          </Typography>
 
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Affordable Ecommerce Web Development
          </Typography>
 
          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "800px" }}>
            We offer affordable eCommerce development services in Vizag to help
            your business expand worldwide. Our platforms are engaging, easy to
            navigate, and designed to build trust and deliver a superior user
            experience.
          </Typography>
 
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Mobile-Friendly Ecommerce
          </Typography>
 
          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "800px" }}>
            With more customers shopping on mobile devices, we ensure your
            eCommerce platform is fully optimized for mobile and app-based
            purchasing across all devices.
          </Typography>
 
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Payment and Shipping Choices
          </Typography>
 
          <List sx={{ pl: 2, mb: 3 }}>
            {["PayPal", "Stripe", "CCAvenue", "PayU", "And more"].map(
              (gateway) => (
                <ListItem key={gateway} sx={{ py: 0.5 }}>
                  <Typography>• {gateway}</Typography>
                </ListItem>
              )
            )}
          </List>
 
          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "800px" }}>
            We also integrate popular delivery services such as FedEx, DHL and
            others to provide a seamless checkout and shipping experience.
          </Typography>
 
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Custom eCommerce Development
          </Typography>
 
          <List sx={{ pl: 2, mb: 4 }}>
            {[
              "Seamless one-page checkout experience",
              "SEO optimized eCommerce development",
              "100% customizable platform",
              "Global payment gateway integrations",
              "Mobile responsive shopping experience",
              "Advanced analytics & reporting modules",
            ].map((point) => (
              <ListItem key={point} sx={{ py: 0.5 }}>
                <Typography>• {point}</Typography>
              </ListItem>
            ))}
          </List>
 
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Analytics That Inform
          </Typography>
 
          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "800px" }}>
            Our analytics services help you understand traffic flow, purchasing
            behavior, cart ratios and customer insights so you can plan smarter
            growth strategies.
          </Typography>
 
          <Typography sx={{ fontWeight: 700 }}>
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
                    fontWeight:
                      item.name === "e-Commerce Solutions" ? 600 : 500,
                    color:
                      item.name === "e-Commerce Solutions"
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
 
 