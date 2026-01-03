"use client";
 
import {
  Box,
  Container,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
 
export default function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #E5E7EB",
        py: 1.5,
        position: "sticky",
        top: 0,
        zIndex: 1200,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* LEFT SIDE – LOGO (CLICK → HOME) */}
          <Link href="/" passHref legacyBehavior>
            <MuiLink
              sx={{
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src="/assets/logo.png"
                alt="Company Logo"
                sx={{
                  height: 48,
                  width: "auto",
                }}
              />
            </MuiLink>
          </Link>
 
          {/* RIGHT SIDE – CONTACT INFO */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, md: 4 }}
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            <ContactBlock
              icon={<PhoneInTalkIcon />}
              label="Online Enquiry"
              value="+91-8464859848"
            />
 
            <ContactBlock
              icon={<LocationOnIcon />}
              label="Vishakapatnam"
              value="+91-8464859848"
            />
 
            <ContactBlock
              icon={<LocationOnIcon />}
              label="VIP Road"
              value="+91-8464859848"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
 
/* ===============================
   SMALL CONTACT BLOCK
   =============================== */
 
function ContactBlock({ icon, label, value }) {
  return (
    <Stack direction="row" spacing={1.2} alignItems="center">
      <Box sx={{ color: "#1a73e8" }}>
        {icon}
      </Box>
 
      <Stack spacing={0}>
        <Typography
          sx={{
            fontSize: "13px",
            color: "#64748B",
            fontWeight: 500,
            lineHeight: 1.2,
          }}
        >
          {label}
        </Typography>
 
        <MuiLink
          href={`tel:${value.replace(/\s+/g, "")}`}
          underline="none"
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#1a73e8",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {value}
        </MuiLink>
      </Stack>
    </Stack>
  );
}
