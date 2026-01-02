"use client";
 
import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  IconButton,
} from "@mui/material";
 
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X"; // Twitter (X)
import PhoneIcon from "@mui/icons-material/Phone";
import BarChartIcon from "@mui/icons-material/BarChart";
 
export default function Topfooter() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F1F5F9", // light background
        borderBottom: "1px solid #E2E8F0",
        py: 0.8,
        fontSize: "14px",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 1, md: 2 }}
        >
          {/* LEFT SIDE – CONTACT INFO */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems="center"
            flexWrap="wrap"
          >
            <ContactItem
              label="Hire From Us"
              number="+91 8925 958 900"
            />
            <ContactItem
              label="Corporate"
              number="+91 89259 58907"
            />
            <ContactItem
              label="Support"
              number="+91 8447 446 138"
            />
 
            {/* Placement Statistics */}
            <Link
              href="/placement-statistics"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: "#0f172a",
                fontWeight: 500,
                "&:hover": { color: "#1a73e8" },
              }}
            >
              <BarChartIcon sx={{ fontSize: 18 }} />
              Placement Statistics
            </Link>
          </Stack>
 
          {/* RIGHT SIDE – SOCIAL ICONS */}
          <Stack direction="row" spacing={1}>
            <SocialIcon
              href="https://www.facebook.com"
              icon={<FacebookIcon />}
            />
            <SocialIcon
              href="https://www.instagram.com"
              icon={<InstagramIcon />}
            />
            <SocialIcon
              href="https://www.linkedin.com"
              icon={<LinkedInIcon />}
            />
            <SocialIcon
              href="https://twitter.com"
              icon={<XIcon />}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
 
/* ===============================
   SMALL COMPONENTS
   =============================== */
 
function ContactItem({ label, number }) {
  return (
    <Stack direction="row" spacing={0.5} alignItems="center">
      <PhoneIcon sx={{ fontSize: 16, color: "#64748B" }} />
      <Typography
        sx={{
          fontSize: "13px",
          color: "#334155",
          fontWeight: 500,
        }}
      >
        {label}:
      </Typography>
      <Typography
        sx={{
          fontSize: "13px",
          color: "#0f172a",
          fontWeight: 600,
        }}
      >
        {number}
      </Typography>
    </Stack>
  );
}
 
function SocialIcon({ href, icon }) {
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        width: 34,
        height: 34,
        backgroundColor: "#E8F0FE",
        color: "#1a73e8",
        "&:hover": {
          backgroundColor: "#1a73e8",
          color: "#ffffff",
        },
      }}
    >
      {icon}
    </IconButton>
  );
}