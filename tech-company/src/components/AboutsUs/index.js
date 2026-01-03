"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
} from "@mui/material";

export default function AboutUs() {
  const PRIMARY_BLUE = "#004D6D";
  const BRAND_GREEN = "#16A34A";
  const TEXT_MUTED = "#475569";

  // Tablet (768px) లో మాత్రమే కనిపించేలా Break Tag Component
  const TabletBR = () => (
    <Box component="br" sx={{ display: { xs: "none", sm: "block", md: "none" } }} />
  );

  return (
    <Box
      id="about-us"
      sx={{
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">

          {/* ================= COLUMN 1: CONTENT ================= */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "26px", sm: "30px", md: "34px", lg: "42px" },
                fontWeight: 700,
                color: PRIMARY_BLUE,
                mb: 3,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              About Us
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: TEXT_MUTED,
                lineHeight: 1.8,
                mb: 3,
                maxWidth: "560px",
                mx: { xs: "auto", sm: "unset" },
              }}
            >
              At our Design Blocks, we are a collective <TabletBR />
              of talented individuals ignited by our <TabletBR />
              unwavering passion for transforming <TabletBR /> ideas into
              reality.
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: TEXT_MUTED,
                lineHeight: 1.8,
                maxWidth: "560px",
                mx: { xs: "auto", sm: "unset" },
              }}
            >
              We have provided premium website <TabletBR /> designing, software solutions, and <TabletBR />
              marketing expertise to hundreds of <TabletBR /> companies around the world.
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2, mt: 4 }}>
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
            sm={6}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
              mt: { xs: 4, sm: 0 },
              // మొబైల్ స్క్రీన్లలో ఇమేజ్ పొజిషన్ సర్దుబాటు

              "@media (min-width:375px)": {
                transform: "translateX(35px)", // కొంచెం సెంటర్ చేయడానికి వాల్యూ తగ్గించాను
              },
              "@media (min-width:425px)": {
                transform: "translateX(20px)",
                "& .MuiBox-root": {
                  maxWidth: "350px", // ఇక్కడ మీకు కావాల్సినంత విడ్త్ పెంచుకోండి
                  height: "350px",   // హైట్ కూడా కావాలంటే అడ్జస్ట్ చేయవచ్చు
                } // కొంచెం సెంటర్ చేయడానికి వాల్యూ తగ్గించాను
              },
               "@media (min-width:1440px)": {
                "& .MuiBox-root": {
                  maxWidth: "450px", // ఇక్కడ మీకు కావాల్సినంత విడ్త్ పెంచుకోండి
                  height: "400px",   // హైట్ కూడా కావాలంటే అడ్జస్ట్ చేయవచ్చు
                } // కొంచెం సెంటర్ చేయడానికి వాల్యూ తగ్గించాను
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                // ✅ ఇక్కడ కేవలం 375px - 425px స్క్రీన్ల కోసం సైజు పెంచాను
                maxWidth: {
                  xs: "390px", // ఇమేజ్ సైజు 340px నుండి 390px కి పెంచాను
                  sm: "100%",
                  md: "520px",
                  lg: "680px"
                  
                },
                height: {
                  xs: "260px", // హైట్ కూడా 220px నుండి 260px కి పెంచాను
                  sm: "300px",
                  md: "320px",
                  lg: "420px"
                },
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              }}
            >
              <Box
                component="img"
                src="/assets/about.png"
                alt="About Us"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>

          {/* Mobile Buttons */}
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "flex", sm: "none" },
              justifyContent: "center",
              mt: 4,

              "@media (min-width:375px)": {
                transform: "translateX(25px)",
              },
              "@media (min-width:425px)": {
                transform: "translateX(40px)",
              },
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
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: BRAND_GREEN,
          color: "#fff",
          px: 3.5,
          py: 1.2,
          fontWeight: 600,
          textTransform: "none",
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
          color: PRIMARY_BLUE,
          px: 3.5,
          py: 1.2,
          fontWeight: 600,
          textTransform: "none",
          borderRadius: "8px",
        }}
      >
        Learn More
      </Button>
    </Box>
  );
}