"use client";

import { useState } from "react";
import { Box, Button, Stack, Fade } from "@mui/material";

/* CATEGORY COMPONENTS */
import All from "./All";
import WebTechnologies from "./Webtechnologies";
import Mern from "./Mern";
import Java from "./Java";
import Iot from "./Iot";
import AiAgents from "./AiAgents";
import Database from "./Database";
import OpenSource from "./OpenSource";
import Others from "./Others";

const tabs = [
  { label: "All", value: "all" },
  { label: "Web Technologies", value: "web" },
  { label: "MERN", value: "mern" },
  { label: "Java", value: "java" },
  { label: "IoT", value: "iot" },
  { label: "AI Agents", value: "ai" },
  { label: "Database", value: "db" },
  { label: "Open Source", value: "os" },
  { label: "Others", value: "others" },
];

export default function Technologies() {
  const [activeTab, setActiveTab] = useState("all");

  const renderContent = () => {
    switch (activeTab) {
      case "web":
        return <WebTechnologies />;
      case "mern":
        return <Mern />;
      case "java":
        return <Java />;
      case "iot":
        return <Iot />;
      case "ai":
        return <AiAgents />;
      case "db":
        return <Database />;
      case "os":
        return <OpenSource />;
      case "others":
        return <Others />;
      default:
        return <All />;
    }
  };

  return (
    <Box sx={{ width: "100%", py: { xs: 4, md: 8 } }}>
      {/* MAIN CONTAINER */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
         
          px: { xs: 2, md: 4 },
        }}
      >
        {/* ================= TABS ================= */}
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
        
          justifyContent="center"
          
          p={1}
          sx={{ mb: 4 }}
        >
          {tabs.map((tab) => (
            <Button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              sx={{
                textTransform: "none",
                px: 3,
                py: 1,
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "14px",
                border:
                  activeTab === tab.value
                    ? "1px solid #16a34a"
                    : "1px solid #e5e7eb",
                backgroundColor:
                  activeTab === tab.value ? "#16a34a" : "#ffffff",
                color:
                  activeTab === tab.value ? "#ffffff" : "#475569",
                boxShadow:
                  activeTab === tab.value
                    ? "0 6px 16px rgba(22,163,74,0.35)"
                    : "none",
                "&:hover": {
                  backgroundColor:
                    activeTab === tab.value ? "#15803d" : "#f8fafc",
                },
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Stack>

        {/* ================= CONTENT ================= */}
        <Fade in key={activeTab} timeout={300}>
          <Box>{renderContent()}</Box>
        </Fade>
      </Box>
    </Box>
  );
}
