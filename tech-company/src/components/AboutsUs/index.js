"use client";

import { Box, Typography, Container, Grid, Button } from "@mui/material";

export default function AboutUs() {
  const PRIMARY_BLUE = "#004D6D";
  const BRAND_GREEN = "#16A34A";
  const TEXT_MUTED = "#475569";

  return (
    <Box
      id="about-us"
      sx={{
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 4, lg: 6 }} 
          alignItems="center"
          sx={{ flexWrap: "wrap" }}
        >
          {/* ================= COLUMN 1: CONTENT ================= */}
          <Grid
            item
            xs={12}
            md={6} // 900px కంటే ఎక్కువ ఉంటేనే పక్కన వస్తుంది
            sx={{ 
              textAlign: { xs: "center", md: "left" },
              // 768px (md కంటే తక్కువ) లో టెక్స్ట్ సెంటర్ అవ్వడానికి
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "26px", sm: "30px", md: "34px", lg: "42px" },
                fontWeight: 700,
                color: PRIMARY_BLUE,
                lineHeight: 1.2,
                mb: 3,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              About Us
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "15px", md: "16px" },
                color: TEXT_MUTED,
                lineHeight: 1.8,
                mb: 3,
                maxWidth: { xs: "100%", md: "500px", lg: "560px" },
                mx: { xs: "auto", md: "unset" },
              }}
            >
              At our Design Blocks, we are a collective of talented individuals
              ignited by our unwavering passion for transforming ideas into
              reality. With a harmonious blend of diverse backgrounds and a vast
              array of skill sets, we join forces to create compelling solutions
              for our esteemed clients.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "15px", md: "16px" },
                color: TEXT_MUTED,
                lineHeight: 1.8,
                maxWidth: { xs: "100%", md: "500px", lg: "560px" },
                mx: { xs: "auto", md: "unset" },
              }}
            >
              We have provided premium website designing, software solutions, and
              marketing expertise to hundreds of companies around the world.
            </Typography>

            {/* బటన్లు ఇక్కడ కేవలం 900px (md) కంటే పెద్ద స్క్రీన్లలోనే కనిపిస్తాయి */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
                mt: 4,
              }}
            >
              <PrimaryButtons
                PRIMARY_BLUE={PRIMARY_BLUE}
                BRAND_GREEN={BRAND_GREEN}
              />
            </Box>
          </Grid>

          {/* ================= COLUMN 2: IMAGE ================= */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center", 
              mt: { xs: 4, md: 0 }
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: {
                  xs: "340px", 
                  sm: "450px", // 768px స్క్రీన్ లో ఇమేజ్ సైజు
                  md: "400px",
                  lg: "520px",
                },
                height: {
                  xs: "220px", 
                  sm: "280px", 
                  md: "320px",
                  lg: "420px",
                },
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                mx: "auto", 
              }}
            >
              <Box
                component="img"
                src="/assets/about.png"
                alt="About Us"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // 768px లో ఖాళీలు లేకుండా ఉండటానికి
                }}
              />
            </Box>
          </Grid>

          {/* ================= MOBILE & TABLET (768px) BUTTONS ================= */}
          {/* ఇమేజ్ కింద బటన్లు రావడానికి md: none మరియు ఇక్కడ Grid ఉపయోగించాను */}
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "flex", md: "none" }, // 900px లోపు ఉన్న అన్ని స్క్రీన్లలో ఇక్కడ కనిపిస్తాయి
              justifyContent: "center",
              mt: 4, // ఇమేజ్ కింద స్పేస్ కోసం
            }}
          >
            <PrimaryButtons
              PRIMARY_BLUE={PRIMARY_BLUE}
              BRAND_GREEN={BRAND_GREEN}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function PrimaryButtons({ PRIMARY_BLUE, BRAND_GREEN }) {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: BRAND_GREEN,
          color: "#ffffff",
          textTransform: "none",
          fontWeight: 600,
          px: 3.5,
          py: 1.2,
          borderRadius: "8px",
          "&:hover": { backgroundColor: "#15803D" },
        }}
      >
        Get Started
      </Button>

      <Button
        variant="outlined"
        sx={{
          borderColor: "#CBD5E1",
          color: "#004D6D",
          textTransform: "none",
          fontWeight: 600,
          px: 3.5,
          py: 1.2,
          borderRadius: "8px",
          "&:hover": {
            borderColor: "#004D6D",
            backgroundColor: "#F8FAFC",
          },
        }}
      >
        Learn More
      </Button>
    </Box>
  );
}