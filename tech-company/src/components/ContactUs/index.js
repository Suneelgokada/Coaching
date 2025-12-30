"use client";
import React from "react";
import { Box, Typography, Grid, Paper, Container, Link } from "@mui/material";
import { LocationOn, Email, Phone } from "@mui/icons-material";
import QuotationForm from "@/src/components/Form";

const contactInfo = [
  {
    icon: <Phone sx={{ fontSize: 40, color: "#0B2343" }} />,
    title: "Call Us",
    detail: ["+91 9100023692", "+91 9281452732"],
  },
  {
    icon: <Email sx={{ fontSize: 40, color: "#0B2343" }} />,
    title: "Email",
    detail: ["vtc_corporation@yahoo.com"],
  },
  {
    icon: <LocationOn sx={{ fontSize: 40, color: "#0B2343" }} />,
    title: "Our Location",
    detail: [" Ground Floor, 31-32-28 Near Captain Ramarao Junction Dabagardens, Visakhapatnam-530020 Andhra Pradesh, India"],
  },
];

export default function ContactPage() {
  return (
    <Box sx={{ bgcolor: "#ffffff" }}>
      <Box
        sx={{
          position: "relative",
          py: { xs: 10, md: 12, lg: 14 },
          width: "100%",
          backgroundImage: "url('/assets/contact.png')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Black blurred overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(0.5px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#FFFF00",
              fontWeight: "bold",
              fontFamily: "Poppins",
              textAlign: "center",
              fontSize: { xs: "28px", md: "32px" },
            }}
          >
            Contact Us
          </Typography>
        </Box>
      </Box>
      <Container maxWidth={"lg"} sx={{ pt: 6 }}>
        <Grid container spacing={3}>
          {contactInfo.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 2,
                  height: "100%",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box mb={1}>{item.icon}</Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontFamily: "Poppins", fontWeight: 500 }}
                >
                  {item.title}
                </Typography>

                {/* 🚀 Rendering Multiple Details Safely */}
                {item.detail && Array.isArray(item.detail) && item.detail.map((text, idx) => (
                  <Typography
                    key={idx}
                    component={Link}
                    display="block" // Rendu numbers line by line raavadaniki
                    sx={{
                      color: "text.secondary",
                      fontFamily: "Inter",
                      textDecoration: "none",
                      mb: 0.5,
                      fontSize: "0.95rem"
                    }}
                    href={
                      item.title === "Call Us" ? `tel:${text.replace(/\s/g, '')}` : 
                      item.title === "Email" ? `mailto:${text}` : "#"
                    }
                  >
                    {text}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
        <QuotationForm />
      </Container>
    </Box>
  );
}