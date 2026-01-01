"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Footer() {
  const [showWhatsApp] = useState(true);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#085482",
          color: "#fff",
          pt: { xs: 6, md: 8 },
          pb: 4,
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
            
            {/* ================= LOGO & HEAD OFFICE ================= */}
            <Grid item xs={12} sm={6} md={3}>
              <Box 
                sx={{
                  display: "inline-block",
                  bgcolor: "#fff",
                  p: 1.5,
                  borderRadius: "12px",
                  mb: 3,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  lineHeight: 0
                }}
              >
                <Box 
                  component="img"
                  src="/assets/logo.png" 
                  alt="Coding Roots Logo"
                  sx={{ 
                    height: { xs: 40, md: 50 }, 
                    width: "auto",
                    display: "block"
                  }}
                />
              </Box>
              
              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: "18px" }}>
                Head Office
              </Typography>
              <Typography sx={{ lineHeight: 1.8, mb: 2, fontSize: "14px", opacity: 0.9 }}>
                2nd Floor, 9-29-14/2, Balaji Nagar,<br />
                VIP Road, Beside Canara Bank,<br />
                Siripuram, Visakhapatnam,<br />
                Andhra Pradesh 530003, INDIA.
              </Typography>
              <Stack spacing={1}>
                <Typography sx={{ fontSize: "14px" }}>
                  <strong>Phone:</strong> +91 8639176137
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  <strong>Email:</strong> codingroots.in@gmail.com
                </Typography>
              </Stack>
            </Grid>

            {/* ================= QUICK LINKS ================= */}
            <Grid item xs={12} sm={6} md={2.5} sx={{ pt: { md: "95px !important", xs: "0px" } }}>
              {/* లోగో హైట్ కి తగ్గట్టుగా md: 95px Padding ఇచ్చాను */}
              <Typography
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  fontSize: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}
              >
                Get To Know Us
              </Typography>
              <Stack spacing={1.5}>
                {["Home", "About us", "Career", "Portfolio", "Contact us"].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      underline="none"
                      sx={{
                        color: "#fff",
                        fontSize: "14px",
                        opacity: 0.8,
                        transition: "0.3s",
                        "&:hover": { opacity: 1, pl: 1 },
                      }}
                    >
                      {item}
                    </Link>
                  )
                )}
              </Stack>
            </Grid>

            {/* ================= ABOUT & SOCIAL ================= */}
            <Grid item xs={12} md={5} sx={{ pt: { md: "95px !important", xs: "0px" } }}>
              {/* ఇక్కడ కూడా md: 95px Padding ఇచ్చాను */}
              <Typography sx={{ fontWeight: 600, mb: 3, fontSize: "22px" }}>
                About Coding Roots
              </Typography>
              <Typography
                sx={{
                  lineHeight: 1.7,
                  mb: 4,
                  fontSize: "14px",
                  maxWidth: "450px",
                  opacity: 0.9
                }}
              >
                Coding Roots is an offshore application development service
                based in India. We strive to deliver quality solutions involving
                high-end technology at reasonable prices.
              </Typography>

              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: "14px", textTransform: "uppercase" }}>
                Follow Us
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Stack direction="row" spacing={1} alignItems="center" component={Link} href="#" sx={{ color: "#fff", textDecoration: "none" }}>
                  <Box sx={{ bgcolor: "#3b5998", p: 0.8, borderRadius: "50%", display: "flex" }}>
                    <FacebookIcon sx={{ fontSize: 18 }} />
                  </Box>
                  <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>Facebook</Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center" component={Link} href="#" sx={{ color: "#fff", textDecoration: "none" }}>
                  <Box sx={{ bgcolor: "#0077b5", p: 0.8, borderRadius: "50%", display: "flex" }}>
                    <LinkedInIcon sx={{ fontSize: 18 }} />
                  </Box>
                  <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>LinkedIn</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)", my: 5 }} />

          {/* ================= BOTTOM BAR ================= */}
          <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: "12px", opacity: 0.7, textAlign: { xs: "center", md: "left" } }}>
                © 2025 Coding Roots. All Rights Reserved.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 1, justifyContent: { xs: "center", md: "left" } }}>
                <Link sx={{ fontSize: "12px", color: "#fff", opacity: 0.7, "&:hover": { opacity: 1 }, textDecoration: "none" }}>Terms of Use</Link>
                <Link sx={{ fontSize: "12px", color: "#fff", opacity: 0.7, "&:hover": { opacity: 1 }, textDecoration: "none" }}>Privacy Policy</Link>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Stack 
                direction={{ xs: "column", sm: "row" }} 
                spacing={{ xs: 1, sm: 3 }} 
                sx={{ justifyContent: { xs: "center", md: "flex-end" }, alignItems: "center" }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <EmailIcon sx={{ fontSize: 16, opacity: 0.8 }} />
                  <Typography sx={{ fontSize: "12px" }}>codingroots.in@gmail.com</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PhoneIcon sx={{ fontSize: 16, opacity: 0.8 }} />
                  <Typography sx={{ fontSize: "12px" }}>+91 8639176137</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= WHATSAPP FLOATING BUTTON ================= */}
      {showWhatsApp && (
        <IconButton
          component="a"
          href="https://wa.me/918639176137"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: "fixed",
            right: { xs: 16, md: 24 },
            bottom: { xs: 16, md: 24 },
            width: { xs: 50, md: 50 },
            height: { xs: 50, md: 50 },
            bgcolor: "#25D366",
            color: "#fff",
            zIndex: 9999,
            boxShadow: "0 10px 30px rgba(37, 211, 102, 0.4)",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "#128C7E",
              transform: "scale(1.1) rotate(5deg)",
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" } }} />
        </IconButton>
      )}
    </>
  );
}