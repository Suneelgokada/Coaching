"use client";

import { Box, Container, Typography, Chip } from "@mui/material";

const MONTSERRAT = "'Montserrat', sans-serif";

export default function BePartOfOurTeam() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "#fff",
      }}
    >
      <Container maxWidth="xl">
        {/* MAIN BLUE CONTAINER */}
        <Box
          sx={{
            bgcolor: "#085482",
            borderRadius: { xs: "24px", md: "40px" },
            px: { xs: 3, sm: 5, md: 8 },
            py: { xs: 5, md: 0 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 2 },
            //overflow: "hidden", 
            minHeight: { md: "400px", lg: "450px" }, 
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ maxWidth: { xs: "100%", md: "550px", lg: "650px" }, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "28px", md: "34px", lg: "40px" },
                fontWeight: 800,
                color: "#ffffff",
                fontFamily: MONTSERRAT,
                mb: 1.5,
                lineHeight: 1.2
              }}
            >
              Join Our Innovative Team
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                color: "rgba(255,255,255,0.85)",
                mb: 4,
                lineHeight: 1.6,
                fontFamily: MONTSERRAT,
              }}
            >
              Work with passionate professionals building modern digital
              products and experiences across industries.
            </Typography>

            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: 600,
                color: "#ffffff",
                mb: 2,
                fontFamily: MONTSERRAT,
              }}
            >
              Available Positions
            </Typography>

            {/* POSITION CHIPS */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {[
                "Full Stack Developer",
                "Frontend Developer",
                "Graphic Designer",
                "UI / UX Designer",
              ].map((role, i) => (
                <Chip
                  key={i}
                  label={role}
                  sx={{
                    px: 1.5,
                    py: 2,
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.4)",
                    bgcolor: "rgba(255,255,255,0.05)",
                    borderRadius: "99px",
                    fontFamily: MONTSERRAT,
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.15)",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* RIGHT IMAGE - Fixed for 1024px, 1440px+ */}
          <Box
            sx={{
              width: { xs: "100%", md: "40%", lg: "45%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              position: "relative",
             height: { xs: "250px", md: "400px" },
            }}
          >
            <Box
              component="img"
              src="/assets/man.png" 
              alt="Team member"
              sx={{
                width: "auto",
                height: "100%",
                // 🔥 Desktop sizes control
                maxHeight: { 
                  xs: "220px", 
                  sm: "280px", 
                  md: "450px", 
                  lg: "520px", 
                  xl: "580px"  
                },
                objectFit: "contain",
                transform: {
                  xs: "scale(1.1) translateY(0px)",     // Mobile lo normal ga uncham
                  md: "scale(1.1) translateY(-20px)",  // MD screen lo koncham paiki (-20px)
                  lg: "scale(1.2) translateY(-40px)",  // LG screen lo inka paiki (-40px)
                },
                transformOrigin: "bottom center",
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}