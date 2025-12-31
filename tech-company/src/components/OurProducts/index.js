"use client";

import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Avatar, Stack } from "@mui/material";

const testimonials = [
  {
    quote: "Coding Roots has been exceptional in training our team in MERN stack development. Their practical approach and industry-focused curriculum prepared us perfectly for real-world projects. The placement support was outstanding!",
    name: "RAHUL SHARMA | SOFTWARE ENGINEER",
    company: "Tech Innovators Pvt Ltd",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    rating: 5,
  },
  {
    quote: "What makes Coding Roots different from other institutes is their commitment, patience, and dedication to student success. They provided comprehensive training in IoT and .NET, followed by placement in their own company based on performance. Highly recommend for anyone serious about a tech career!",
    name: "PRIYA REDDY | FULL STACK DEVELOPER",
    company: "Digital Solutions Inc",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    rating: 5,
  },
  {
    quote: "Working with Coding Roots has been a transformative experience. The trainers made genuine efforts in understanding our learning needs, and the hands-on projects surpassed all expectations. The opportunity to work in their company post-training based on performance is truly unique!",
    name: "ADITYA KUMAR | IOT DEVELOPER",
    company: "Smart Systems Pvt Ltd",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    rating: 5,
  },
  {
    quote: "Coding Roots has provided excellent training in .NET development and modern web technologies. The placement assistance and opportunity to join their team made all the difference. I highly recommend this institute to anyone seeking expertise in software development.",
    name: "SNEHA PATEL | .NET DEVELOPER",
    company: "Enterprise Tech Solutions",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    rating: 5,
  },
  {
    quote: "Training at Coding Roots was exceptional. The 6-month MERN stack program covered everything from basics to advanced concepts. Communication was excellent, deadlines were met, and the real-world project experience was invaluable. If you're looking for quality tech training with placement support, Coding Roots is the perfect choice!",
    name: "VIKRAM SINGH | MERN STACK DEVELOPER",
    company: "Web Dynamics",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    rating: 5,
  },
  {
    quote: "I completed my IoT and .NET training at Coding Roots and couldn't be happier. The trainers are extremely professional and delivered content that was both comprehensive and industry-relevant. The performance-based placement in their company is an excellent opportunity. Very satisfied with Coding Roots!",
    name: "ANANYA KRISHNAN | IOT SPECIALIST",
    company: "Connected Devices Ltd",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    rating: 5,
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