"use client";

import React from "react";
import { Box, Container, Grid, Typography, Link, Stack, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box sx={{ backgroundColor: "#333333", color: "#b0b0b0", pt: 8, pb: 4, position: "relative" }}>
      <Container maxWidth="lg">
        {/* Grid Container - 12 column system ni correct ga divide chesam */}
        <Grid container spacing={2} justifyContent="space-between">
          
          {/* 1. Head Office - Width md=3 (25%) */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700, mb: 3, fontSize: '20px' }}>
              Head office
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8, mb: 2 }}>
              2nd Floor, 9-29-14/2, Balaji Nagar,<br />
              VIP Road, Beside Canara Bank, <br/>
              Siripuram, Visakhapatnam,<br />
              Andhra Pradesh 530003, INDIA.
            </Typography>
            <Typography variant="body2"><strong>Phone:</strong> +91 8639176137</Typography>
            <Typography variant="body2"><strong>Email:</strong> codingroots.in@gmail.com</Typography>
          </Grid>

          {/* 2. Get To Know Us - Width md=2.5 (Approx 20%) */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700, mb: 3, fontSize: '16px', textTransform: 'uppercase' }}>
              GET TO KNOW US
            </Typography>
            <Stack spacing={1.5}>
              {["Home", "About us", "Career", "Portfolio", "Contact us"].map((item) => (
                <Link key={item} href="#" underline="none" sx={{ color: "#b0b0b0", fontSize: '14px', "&:hover": { color: "#fff" } }}>
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* 3. About Technoxis - Width md=5.5 (Approx 45%) - Side by side fix */}
          <Grid item xs={12} md={5.5}>
            <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700, mb: 3, fontSize: '22px' }}>
              About Coding Roots
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.7, mb: 4, textAlign: 'left', maxWidth: '400px' }}>
              Coding Roots is an offshore application development service <br />
              based in India. We at Coding Roots, strive to <br />
              deliver quality solutions involving high end <br />
              technology at reasonable price. We Design and <br />
              Develop Web, Mobile and Enterprise Applications.
            </Typography>

            {/* Social Icons - Side by Side */}
            <Stack direction="row" spacing={3}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ bgcolor: '#3b5998', p: 0.8, borderRadius: 1, display: 'flex' }}><FacebookIcon sx={{ color: '#fff', fontSize: 20 }} /></Box>
                <Box sx={{ lineHeight: 1 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#fff', display: 'block' }}>Like us</Typography>
                  <Typography variant="caption" sx={{ fontSize: '11px' }}>on Facebook</Typography>
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ bgcolor: '#0077b5', p: 0.8, borderRadius: 1, display: 'flex' }}><LinkedInIcon sx={{ color: '#fff', fontSize: 20 }} /></Box>
                <Box sx={{ lineHeight: 1 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#fff', display: 'block' }}>Follow us</Typography>
                  <Typography variant="caption" sx={{ fontSize: '11px' }}>on Linkedin</Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)", my: 5 }} />

        {/* Bottom Bar Alignment */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
          <Box>
            <Typography variant="caption" sx={{ color: '#888' }}>Copyright ©2025 All Rights Reserved by Coding Roots</Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
              <Link href="#" sx={{ color: "#888", fontSize: '12px', textDecoration: 'none' }}>Terms of Use</Link>
              <Typography variant="caption" sx={{ color: '#444' }}>/</Typography>
              <Link href="#" sx={{ color: "#888", fontSize: '12px', textDecoration: 'none' }}>Privacy Policy</Link>
            </Stack>
          </Box>
          <Stack direction="row" spacing={3} sx={{ color: '#888' }}>
            <Stack direction="row" alignItems="center" spacing={1}><EmailIcon sx={{ fontSize: 16 }} /><Typography variant="caption">codingroots.in@gmail.com</Typography></Stack>
            <Stack direction="row" alignItems="center" spacing={1}><PhoneIcon sx={{ fontSize: 16 }} /><Typography variant="caption">+91 8639176137</Typography></Stack>
          </Stack>
        </Box>
      </Container>

      {/* Scroll Top Button */}
      <IconButton onClick={scrollToTop} sx={{ position: "absolute", right: 40, bottom: 30, bgcolor: "#222", color: "#fff", "&:hover": { bgcolor: "#000" }, borderRadius: 1, width: 40, height: 40 }}>
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  );
}