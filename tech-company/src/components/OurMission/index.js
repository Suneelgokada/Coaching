"use client";
 
import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
 
export default function OurMission() {
  const PRIMARY_BLUE = "#004D6D";
  const BRAND_GREEN = "#16A34A";
  const TEXT_MUTED = "#475569";
  const BG_LIGHT = "#F8FAFC";
 
  const values = [
    {
      title: "Client and End-User Perspective",
      desc: `Success for us is seeing your business thrive. Before we take up a project,
      we deeply understand your vision and customer persona. This insight helps us
      select the right development strategy and deliver tailored solutions.`,
    },
    {
      title: "Culture of Excellence",
      desc: `We strive to cultivate excellence in everything we do by delivering outstanding
      results and continuously updating our skills, tools, and technology knowledge.`,
    },
    {
      title: "Innovative Thinkers",
      desc: `We constantly innovate to build long-lasting solutions that allow our clients
      to focus on business goals rather than technology challenges.`,
    },
  ];
 
  return (
    <Box
      id="our-mission"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: BG_LIGHT,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
         
          {/* ================= LEFT CONTENT ================= */}
          <Grid item xs={12} md={7}>
            <Typography
              sx={{
                fontSize: { xs: "28px", md: "40px" },
                fontWeight: 600,
                color: PRIMARY_BLUE,
                mb: 2,
              }}
            >
              Our Mission
            </Typography>
 
            {/* HIGHLIGHTED MISSION LINE */}
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "22px" },
                fontWeight: 600,
                color: PRIMARY_BLUE,
                lineHeight: 1.5,
                mb: 3,
              }}
            >
              Our mission is to be the partner of choice for enterprises by
              delivering innovative, reliable, and cost-effective digital
              solutions.
            </Typography>
 
            {/* SUPPORTING TEXT */}
            <Typography
              sx={{
                fontSize: "16px",
                color: TEXT_MUTED,
                lineHeight: 1.8,
                mb: 5,
                maxWidth: "700px",
              }}
            >
              We help enterprises create, build, and maintain cutting-edge
              applications that meet evolving customer needs. By leveraging
              modern technologies and best practices, we ensure scalability,
              reliability, and long-term success for our clients.
            </Typography>
 
            {/* VALUES */}
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 600,
                color: PRIMARY_BLUE,
                maxWidth: "700px",
                mb: 3,
              }}
            >
              Our Values
            </Typography>
 
            {/* ACCORDION */}
            {values.map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 2,
                  borderRadius: "12px !important",
                  boxShadow: "none",
                  border: "1px solid #91b6e6ff",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    px: 3,
                    py: 1.5,
                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16.5px",
                      fontWeight: 600,
                      color: PRIMARY_BLUE,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")} &nbsp; {item.title}
                  </Typography>
                </AccordionSummary>
 
                <AccordionDetails sx={{ px: 3, pb: 3 }}>
                  <Typography
                    sx={{
                      fontSize: "15.5px",
                      color: TEXT_MUTED,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
 
            {/* CTA */}
            <Box sx={{ mt: 5 }}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: PRIMARY_BLUE,
                  mb: 1,
                }}
              >
                Let’s Grow Your Business Together
              </Typography>
 
              <Typography
                sx={{
                  fontSize: "16px",
                  color: BRAND_GREEN,
                  fontWeight: 600,
                }}
              >
                Contact us today!
              </Typography>
            </Box>
          </Grid>
 
          {/* ================= RIGHT IMAGE ================= */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "300px", md: "480px" },
                borderRadius: "24px",
                backgroundImage: "url('/assets/hero-bg.jpg')", // 👈 change image
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
              }}
            />
          </Grid>
 
        </Grid>
      </Container>
    </Box>
  );
}