"use client";
 
import {
  Box,
  Container,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
 
export default function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #E5E7EB",
        py: 1.5,
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* LEFT SIDE – LOGO */}
          <Box>
            <Box
              component="img"
              src="/assets/logo.png"   // 🔁 replace with your logo path
              alt="Company Logo"
              sx={{
                height: 48,
                width: "auto",
              }}
            />
          </Box>
 
          {/* RIGHT SIDE – CONTACT INFO */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, md: 4 }}
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            {/* ONLINE ENQUIRY */}
            <ContactBlock
              icon={<PhoneInTalkIcon />}
              label="Online Enquiry"
              value="+91-8464859848"
            />
 
            {/* CHENNAI */}
            <ContactBlock
              icon={<LocationOnIcon />}
              label="Vishakapatnam"
              value="+91-8464859848"
            />
 
            {/* BANGALORE */}
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
 
        <Link
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
        </Link>
      </Stack>
    </Stack>
  );
}