"use client";
 
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
 
const navItems = [
  { label: "Job Guarantee Courses", link: "/job-guarantee-courses" },
  { label: "All Courses", link: "/all-courses" },
  { label: "Corporate Training", link: "/corporate-training" },
  { label: "Placed Students list", link: "/placed-students" },
  { label: "Reviews", link: "/reviews" },
  { label: "Job seekers", link: "/job-seekers" },
  { label: "Resources", link: "/resources" },
  { label: "Branches", link: "/branches" },
  { label: "More", link: "/more" },
];
 
export default function NavPage() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(90deg, #0b4a7a, #1e88e5)",
        py: 1.5,
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "0.2s ease",
                  "&:hover": {
                    color: "#E3F2FD",
                  },
                }}
              >
                {item.label}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}