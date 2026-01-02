"use client";
 
import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Avatar,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
 
const PRIMARY_BLUE = "#2F4B7C";
const TEXT_MUTED = "#6B7280";
const DOT_ACTIVE = "#3BA7E8";
const DOT_INACTIVE = "#E5E7EB";
 
const testimonials = [
  {
    name: "John Bartolucci",
    role: "Customer Testimonials",
    text:
      "Coding Roots has been helping us with C#, SQL Server and JQuery development for over two years and it has been a true pleasure to work with them.",
  },
  {
    name: "Amir",
    role: "Customer Testimonials",
    text:
      "Coding Roots is one of the most professional companies we have worked with. What makes them different is their commitment and patience.",
  },
  {
    name: "Rahul Dubey",
    role: "Customer Testimonials",
    text:
      "Working with Coding Roots has been a great experience. They genuinely understood our requirements and delivered excellent results.",
  },
  {
    name: "Brett Feagans",
    role: "Customer Testimonials",
    text:
      "Coding Roots provided my organization great services in .NET development and web design. Highly recommended.",
  },
  {
    name: "Ridvan Jakupi",
    role: "Customer Testimonials",
    text:
      "Working with Coding Roots for over 7 months has been great. The project was handled professionally from start to finish.",
  },
  {
    name: "Ram Kodhandaraman",
    role: "Customer Testimonials",
    text:
      "I have been working with Coding Roots for the past year using SQL Server and ASP.NET. Their development expertise is excellent.",
  },
  {
    name: "Matt Bradfield",
    role: "Customer Testimonials",
    text:
      "Coding Roots provided unparalleled development work for our startup and consistently exceeded expectations.",
  },
];
 
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];
 
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="md">
 
        {/* HEADER */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "36px" },
              fontWeight: 700,
              color: PRIMARY_BLUE,
              letterSpacing: "1px",
            }}
          >
            TESTIMONIALS
          </Typography>
 
          <Box
            sx={{
              width: 70,
              height: 3,
              backgroundColor: DOT_ACTIVE,
              mx: "auto",
              mt: 1.5,
              mb: 2,
            }}
          />
 
          <Typography sx={{ color: TEXT_MUTED, fontSize: "16px" }}>
            Trusted by businesses who count on technology that works.
          </Typography>
        </Box>
 
        {/* TESTIMONIAL CONTENT */}
        <Box sx={{ textAlign: "center", px: { xs: 2, md: 6 } }}>
          <Avatar
            sx={{
              width: 90,
              height: 90,
              mx: "auto",
              mb: 2,
              backgroundColor: "#E5E7EB",
              fontSize: "32px",
              color: PRIMARY_BLUE,
            }}
          >
            {current.name.charAt(0)}
          </Avatar>
 
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              color: PRIMARY_BLUE,
            }}
          >
            {current.name}
          </Typography>
 
          <Typography
            sx={{
              fontSize: "14px",
              color: TEXT_MUTED,
              mb: 1.5,
            }}
          >
            {current.role}
          </Typography>
 
          {/* STARS */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} sx={{ color: "#FACC15", fontSize: 22 }} />
            ))}
          </Box>
 
          {/* QUOTE */}
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontStyle: "italic",
              color: "#4B5563",
              lineHeight: 1.8,
              maxWidth: 720,
              mx: "auto",
            }}
          >
            “ {current.text} ”
          </Typography>
        </Box>
 
        {/* DOTS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1.5,
            mt: 5,
          }}
        >
          {testimonials.map((_, i) => (
            <Box
              key={i}
              onClick={() => setActive(i)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor:
                  active === i ? DOT_ACTIVE : DOT_INACTIVE,
                transition: "0.3s",
              }}
            />
          ))}
        </Box>
 
      </Container>
    </Box>
  );
}