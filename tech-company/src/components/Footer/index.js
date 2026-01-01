"use client";

import React from "react";
import { useState } from "react";
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
        pt: 8,
        pb: 4,
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          
          {/* ================= HEAD OFFICE ================= */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{ fontWeight: 600, mb: 3, fontSize: "20px" }}>
              Head Office
            </Typography>
            <Typography sx={{ lineHeight: 1.8, mb: 2, fontSize: "14px" }}>
              2nd Floor, 9-29-14/2, Balaji Nagar,<br />
              VIP Road, Beside Canara Bank,<br />
              Siripuram, Visakhapatnam,<br />
              Andhra Pradesh 530003, INDIA.
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              <strong>Phone:</strong> +91 8639176137
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              <strong>Email:</strong> codingroots.in@gmail.com
            </Typography>
          </Grid>

          {/* ================= QUICK LINKS ================= */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography
              sx={{
                fontWeight: 600,
                mb: 3,
                fontSize: "16px",
                textTransform: "uppercase",
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
                      opacity: 0.85,
                      "&:hover": { opacity: 1 },
                    }}
                  >
                    {item}
                  </Link>
                )
              )}
            </Stack>
          </Grid>

          {/* ================= ABOUT ================= */}
          <Grid item xs={12} md={5.5}>
            <Typography sx={{ fontWeight: 600, mb: 3, fontSize: "22px" }}>
              About Coding Roots
            </Typography>
            <Typography
              sx={{
                lineHeight: 1.7,
                mb: 4,
                fontSize: "14px",
                maxWidth: "420px",
              }}
            >
              Coding Roots is an offshore application development service
              based in India. We strive to deliver quality solutions involving
              high-end technology at reasonable prices. We design and develop
              Web, Mobile, and Enterprise applications.
            </Typography>

            {/* ================= SOCIAL + WHATSAPP ================= */}
            <Stack direction="row" spacing={3} alignItems="center">
              {/* Facebook */}
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box sx={{ bgcolor: "#3b5998", p: 0.8, borderRadius: 1 }}>
                  <FacebookIcon sx={{ color: "#fff", fontSize: 20 }} />
                </Box>
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  Facebook
                </Typography>
              </Stack>

              {/* LinkedIn */}
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box sx={{ bgcolor: "#0077b5", p: 0.8, borderRadius: 1 }}>
                  <LinkedInIcon sx={{ color: "#fff", fontSize: 20 }} />
                </Box>
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  LinkedIn
                </Typography>
              </Stack>

              {/* WhatsApp */}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)", my: 5 }} />

        {/* ================= BOTTOM BAR ================= */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "12px", opacity: 0.9 }}>
              © 2025 Coding Roots. All Rights Reserved.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
              <Link sx={{ fontSize: "12px", color: "#fff" }}>Terms of Use</Link>
              <Typography sx={{ fontSize: "12px" }}>|</Typography>
              <Link sx={{ fontSize: "12px", color: "#fff" }}>
                Privacy Policy
              </Link>
            </Stack>
          </Box>

          <Stack direction="row" spacing={3}>
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon sx={{ fontSize: 16 }} />
              <Typography sx={{ fontSize: "12px" }}>
                codingroots.in@gmail.com
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon sx={{ fontSize: 16 }} />
              <Typography sx={{ fontSize: "12px" }}>
                +91 8639176137
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>

         {showWhatsApp && (
        <IconButton
          component="a"
          href="https://wa.me/918639176137"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: "fixed",
            right: 24,
            bottom: 24,
            width: 50,
            height: 50,
            bgcolor: "#25D366",
            color: "#fff",
            zIndex: 9999,
            boxShadow: "0 10px 30px rgba(37, 211, 102, 0.6)",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "#128C7E",
              transform: "scale(1.12)",
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: "2.4rem" }} />
        </IconButton>
      )}
     </>
  );
}
