"use client";

import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Avatar, Stack } from "@mui/material";

const testimonials = [
  {
    quote:
      "Technoxis has been helping us with C#, SQL Server and JQuery development for over two years and it has been a true pleasure to work with them.",
    name: "JOHN BARTOLUCCI | FOUNDER",
    company: "Griffon Systems, LLC",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    quote:
      "Technoxis is one of the most professional companies we have worked with. What make them different from other organization are their commitment, patience, tenacity, and dedication to client's satisfaction. They have handled all our projects most professionally and efficiently. Technoxis have taken ownership in every task assigned to them and delivered beyond expectations. We highly recommend them to any one for any of their projects.",
    name: "AMIR | PRESIDENT",
    company: "Balianti",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    quote:
      "Working with Technoxis has been a great experience. These guys made a genuine effort in understanding all our needs and requirements, and the end result was a product that surpassed all our initial expectations. I truly wish the Technoxis team a very good luck in their future assignments.",
    name: "RAHUL DUBEY | DIRECTOR",
    company: "UnKnown",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    quote:
      "Technoxis has provided my organization great services in .Net development and web design. I highly recommend this group to anyone needing expertise in custom software development and website design.",
    name: "BRETT FEAGANS | PRESIDENT",
    company: "Feagans Systems Development",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    quote:
      "Working with Technoxis has been great, they have worked on our project for over 7 months. The project was developed from the start to the final stage and it was a success. Working with Technoxis team was easy and reliable. Communication was great, deadlines were meet all the time. If you are looking for self motivated programmers to build your system or website don't look any further. Technoxis would be a smart choice. We highly recommend them for any development job.",
    name: "RIDVAN JAKUPI | PRESIDENT",
    company: "Real Creative Studio",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    quote:
      "I have been working with Technoxis for the past 1 year. Our working environment has been primarily SQL Server with ASP .NET & C#. I have found Technoxis team extremely professional and have delivered our projects within budget and on time. They have an excellent team with skills in Microsoft technologies. I am very happy with the services provided by Technoxis.",
    name: "RAM KODHANDARAMAN | IT TECHNICAL APPS MANAGEMENT",
    company: "Tecknowsystems",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
];

export default function TestimonialSection() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-play logic: Changes slide every 6 seconds for better readability of long quotes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ py: 10, backgroundColor: "#fff", textAlign: "center" }}>
      <Container maxWidth="md">
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 4,
            fontFamily: "Poppins",
            color: "#0b2343",
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          WHAT <span style={{ color: "#17cfb6" }}>CLIENTS</span> SAY?
        </Typography>

        {/* Content Area */}
        <Box sx={{ minHeight: "350px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Avatar */}
          <Avatar
            src={testimonials[activeStep].image}
            sx={{
              width: 100,
              height: 100,
              mb: 3,
              border: "2px solid #e0e0e0",
            }}
          />

          {/* Quote Text */}
          <Typography
            sx={{
              fontSize: "16px",
              fontStyle: "italic",
              color: "#444",
              lineHeight: 1.8,
              mb: 4,
              fontFamily: "Inter",
              px: { xs: 2, md: 5 },
            }}
          >
            "{testimonials[activeStep].quote}"
          </Typography>

          {/* Name & Company */}
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "15px",
              color: "#0b2343",
              fontFamily: "Poppins",
              textTransform: "uppercase"
            }}
          >
            — {testimonials[activeStep].name}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#777",
              mb: 4,
              fontFamily: "Inter",
            }}
          >
            {testimonials[activeStep].company}
          </Typography>
        </Box>

        {/* Navigation Dots */}
        <Stack direction="row" spacing={1.5} justifyContent="center" sx={{ mt: 2 }}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveStep(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: activeStep === index ? "#17cfb6" : "#e0e0e0",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                    backgroundColor: "#17cfb6"
                }
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}