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
 
export default function AIAgentsLayout() {
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
            AI Agents
          </Typography>
 
          <Typography
            sx={{
              fontStyle: "italic",
              fontWeight: 600,
              mb: 3,
              color: "#91aad3ff",
              maxWidth: "850px",
            }}
          >
            LET’S GET YOU AI-POWERED! <br />
            Expert AI solutions delivering intelligent agents for your business.
          </Typography>
 
          <Typography sx={{ mb: 3, lineHeight: 1.8, maxWidth: "850px" }}>
            We develop cutting-edge AI agents that help businesses automate
            tasks, boost productivity, and engage users seamlessly. Powered by
            advanced AI technologies such as Python-based LLMs, OpenAI, Groq,
            and Gemini, our AI agents deliver intelligent, actionable results
            tailored to your business needs.
          </Typography>
 
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            The Technology Behind Our AI Agents
          </Typography>
 
          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "850px" }}>
            Our AI agents are built on Large Language Models (LLMs) capable of
            understanding and generating human-like text. Combined with robust
            Python backend architectures and modern AI APIs, our solutions are
            scalable, secure, and future-ready.
          </Typography>
 
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Our AI Agents
          </Typography>
 
          <List sx={{ pl: 2, mb: 3 }}>
            {[
              "Book Appointment Agent",
              "Code Review Agent",
              "Job Hunting Agent",
              "Financial Agent",
              "Conversation AI Agent",
            ].map((agent) => (
              <ListItem key={agent} sx={{ py: 0.5 }}>
                <Typography>• {agent}</Typography>
              </ListItem>
            ))}
          </List>
 
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            What Each Agent Does
          </Typography>
 
          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            Book Appointment Agent
          </Typography>
          <Typography sx={{ mb: 2, lineHeight: 1.8, maxWidth: "850px" }}>
            Automates appointment scheduling with real-time availability,
            reminders, and confirmations—reducing manual work and improving
            customer experience.
          </Typography>
 
          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            Code Review Agent
          </Typography>
          <Typography sx={{ mb: 2, lineHeight: 1.8, maxWidth: "850px" }}>
            Reviews submitted code, provides feedback, ratings, and security
            insights—ideal for faster development cycles.
          </Typography>
 
          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            Job Hunting Agent
          </Typography>
          <Typography sx={{ mb: 2, lineHeight: 1.8, maxWidth: "850px" }}>
            Helps users find job opportunities, generate resumes, and prepare
            for interviews based on skill matching.
          </Typography>
 
          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            Financial Agent
          </Typography>
          <Typography sx={{ mb: 2, lineHeight: 1.8, maxWidth: "850px" }}>
            Assists with finance management, expense tracking, budgeting, and
            actionable insights for smarter decisions.
          </Typography>
 
          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            Conversation AI Agent
          </Typography>
          <Typography sx={{ mb: 4, lineHeight: 1.8, maxWidth: "850px" }}>
            Engages users in natural, context-aware conversations, answering
            queries and providing real-time support.
          </Typography>
 
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Additional Features
          </Typography>
 
          <List sx={{ pl: 2, mb: 4 }}>
            {[
              "Multi-language support",
              "Data security & privacy",
              "Customizable workflows",
              "Integration-friendly architecture",
              "24/7 availability",
            ].map((feature) => (
              <ListItem key={feature} sx={{ py: 0.5 }}>
                <Typography>• {feature}</Typography>
              </ListItem>
            ))}
          </List>
 
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Why Choose Our AI Agents?
          </Typography>
 
          <List sx={{ pl: 2, mb: 4 }}>
            {[
              "Custom-built AI solutions",
              "Seamless system integration",
              "Advanced analytics & insights",
              "Global deployment & support",
            ].map((reason) => (
              <ListItem key={reason} sx={{ py: 0.5 }}>
                <Typography>• {reason}</Typography>
              </ListItem>
            ))}
          </List>
 
          <Typography sx={{ fontWeight: 700 }}>
            Let’s build intelligent solutions together
          </Typography>
          <Typography sx={{ mt: 1 }}>
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
                    fontWeight: item.name === "AI Agents" ? 600 : 500,
                    color:
                      item.name === "AI Agents"
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