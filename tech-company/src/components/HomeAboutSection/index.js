"use client";

import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

const MONTSERRAT = "'Montserrat', sans-serif";

const HomeAboutSection = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/about-us");
  };

  return (
    <Container
      maxWidth="xl"
      sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, sm: 4, md: 8, lg: 12 } }}
    >
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1.2fr 0.8fr" }}
        gap={{ xs: 6, md: 10 }}
        alignItems="center"
      >
        {/* LEFT CONTENT */}
        <Box>
          <Typography
            variant="overline"
            sx={{
              fontFamily: MONTSERRAT,
              fontWeight: 700,
              color: "#085482",
              letterSpacing: 2,
              mb: 1,
              display: "block",
            }}
          >
            Empowering Innovation
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontFamily: MONTSERRAT,
              fontWeight: 800,
              fontSize: { xs: "28px", sm: "34px", md: "42px" },
              lineHeight: { xs: 1.2, md: 1.3 },
              color: "#1A1A1A",
              mb: 3,
            }}
          >
            Crafting High-Performance <br />
            <span style={{ color: "#085482" }}>Digital Ecosystems</span> for <br />
            Modern Enterprises
          </Typography>

          <Box
            sx={{
              width: 60,
              height: 4,
              backgroundColor: "#00E676",
              mb: 4,
              borderRadius: "10px",
            }}
          />

          <Typography
            sx={{
              fontFamily: MONTSERRAT,
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "#555",
              lineHeight: 1.8,
              maxWidth: "600px",
            }}
          >
            At <strong>Coding Roots</strong>, we don't just build software; we
            engineer growth. By merging cutting-edge technology with user-centric
            design, we deliver bespoke web and mobile solutions that drive
            efficiency and scale businesses in an ever-evolving digital
            landscape.
          </Typography>

           <Stack 
            direction="row" 
            spacing={2} 
            alignItems="center" 
            sx={{ cursor: "pointer", width: "fit-content",mt: { xs: 4, md: 6 } }}
            onClick={handleNavigation}
          >
            <IconButton
              sx={{
                border: "2px solid #085482",
                color: "#085482",
                width: 56,
                height: 56,
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor: "#085482",
                  color: "#fff",
                  transform: "rotate(-45deg)"
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>

            <Box>
              <Typography
                sx={{
                  fontFamily: MONTSERRAT,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#1A1A1A",
                  letterSpacing: 0.5,
                  "&:hover": { color: "#085482" }
                }}
              >
                Discover Our DNA
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: MONTSERRAT, 
                  fontSize: "0.85rem", 
                  color: "#00E676", 
                  fontWeight: 600 
                }}
              >
                Learn more about us
              </Typography>
            </Box>
          </Stack>
        </Box>


        {/* RIGHT CONTENT – ROTATING IMAGE */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/dp5ttq85f/image/upload/v1768030092/pattern-1_luupww.png" // 👈 nee main image
            alt="Coding Roots Digital Innovation"
            sx={{
              width: { xs: "220px", sm: "260px", md: "320px", lg: "650px" },
              height: "auto",
              animation: "rotate360 35s linear infinite",
              filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.25))",
            }}
          />
        </Box>

        
      </Box>

      {/* GLOBAL KEYFRAMES */}
      <style jsx global>{`
        @keyframes rotate360 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Container>
  );
};

export default HomeAboutSection;
