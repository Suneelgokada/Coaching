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
        py: { xs: 8, md: 12 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
 
          {/* ================= LEFT CONTENT ================= */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: { xs: "28px", md: "42px" },
                fontWeight: 700,
                color: PRIMARY_BLUE,
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              About Us
            </Typography>
 
            <Typography
              sx={{
                fontSize: "16.5px",
                color: TEXT_MUTED,
                lineHeight: 1.8,
                mb: 3,
                maxWidth: "560px",
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
                fontSize: "16.5px",
                color: TEXT_MUTED,
                lineHeight: 1.8,
                mb: 5,
                maxWidth: "560px",
              }}
            >
              We have provided premium website designing, software solutions, and
              marketing expertise to hundreds of companies around the world. With
              a strong focus on building collaborative relationships, we are
              known for exceeding client expectations through quality work and
              fast delivery turnaround.
            </Typography>
 
            {/* BUTTONS */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
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
                  "&:hover": {
                    backgroundColor: "#15803D",
                  },
                }}
              >
                Get Started
              </Button>
 
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#CBD5E1",
                  color: PRIMARY_BLUE,
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3.5,
                  py: 1.2,
                  borderRadius: "8px",
                  "&:hover": {
                    borderColor: PRIMARY_BLUE,
                    backgroundColor: "#F8FAFC",
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
 
          {/* ================= RIGHT IMAGE ================= */}
<Grid item xs={12} md={6}>
  <Box
    sx={{
      width: "100%",
      height: { xs: "260px", md: "420px" },
      borderRadius: "20px",
      overflow: "hidden",                 // 🔑 important for rounded image
      boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
      backgroundColor: "#F1F5F9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box
      component="img"
      src="/assets/about.png"       // 🔁 correct image path
      alt="About Us"
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",               // 🔑 fills container nicely
      }}
    />
  </Box>
</Grid>
        </Grid>
      </Container>
    </Box>
  );
}