"use client";

import { Box, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function CompanyIntroCard({ data }) {
  return (
    /* OUTER WRAPPER */
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%)",
        position: "relative",
        overflow: "hidden",

        /* Subtle animated background pattern */
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.03) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(72, 149, 239, 0.03) 0%, transparent 50%)`,
          pointerEvents: "none",
        },

        /* MOBILE + TABLET */
        "@media (max-width:768px)": {
          height: "auto",
          py: 8,
        },
      }}
    >
      {/* INNER CONTENT */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          px: { xs: 4, md: 10 },
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
          position: "relative",
          zIndex: 1,

          /* MOBILE + TABLET: STACK CONTENT */
          "@media (max-width:768px)": {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            height: "auto",
          },
        }}
      >
        {/* LEFT — TEXT CONTENT */}
        <Stack
          spacing={3}
          component={motion.div}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          sx={{
            maxWidth: 600,
            "@media (max-width:768px)": {
              alignItems: "center",
            },
          }}
        >
          {/* OVERLINE WITH ACCENT */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Typography
              variant="overline"
              sx={{
                letterSpacing: 3,
                color: "#6366f1",
                fontWeight: 700,
                fontSize: "0.8rem",
                display: "inline-block",
                position: "relative",
                paddingBottom: 1,
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "60%",
                  height: "2px",
                  background: "linear-gradient(90deg, #6366f1 0%, transparent 100%)",
                },
                "@media (max-width:768px)": {
                  textAlign: "center",
                },
              }}
            >
              Have a look on our products
            </Typography>
          </Box>

          {/* MAIN TITLE WITH GRADIENT */}
          <Typography
            component={motion.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            variant="h3"
            fontWeight={800}
            sx={{
              background: "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
              "@media (max-width:768px)": {
                textAlign: "center",
                fontSize: "2rem",
              },
            }}
          >
            {data.title}
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            variant="body1"
            sx={{
              color: "#64748b",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              "@media (max-width:768px)": {
                textAlign: "center",
              },
            }}
          >
            {data.description}
          </Typography>

          {/* VALUES / KEY POINTS - PREMIUM PILLS */}
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            direction="row"
            spacing={1.5}
            flexWrap="wrap"
            sx={{
              mt: 3,
              "@media (max-width:768px)": {
                justifyContent: "center",
              },
            }}
          >
            {data.values.map((value, index) => (
              <Box
                key={value}
                component={motion.div}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: "999px",
                  justifySelf: "flex-start",
                  
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  color: "white",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  
                  boxShadow: "0 4px 14px rgba(99, 102, 241, 0.25)",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    justifyContent: "space-between",
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    transition: "left 0.5s",
                  },
                  "&:hover::before": {
                    left: "100%",
                  },
                  "&:last-child": {
  // optional, centers it
  mt: 1,
                 // adds margin-top for spacing
}

                }}
              >
                {value}
              </Box>
            ))}
          </Stack>
        </Stack>

        {/* RIGHT — IMAGE WITH PREMIUM EFFECTS */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: 30, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            width: { xs: "100%", md: 540 },
            height: { xs: 340, md: 540 },
            borderRadius: 3,
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
            boxShadow: "0 40px 100px rgba(0,0,0,0.2)",

            /* Floating animation */
            animation: "float 6s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-20px)" },
            },

            /* Premium border gradient */
            "&::before": {
              content: '""',
              position: "absolute",
              inset: -2,
              borderRadius: 3,
              padding: "2px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              zIndex: -1,
            },

            /* Overlay gradient on hover */
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.1) 100%)",
              opacity: 0,
              transition: "opacity 0.4s ease",
            },

            "&:hover::after": {
              opacity: 1,
            },

            /* MOBILE + TABLET */
            "@media (max-width:768px)": {
              mt: 6,
              animation: "none",
            },
          }}
        >
          <img
            src={data.image}
            alt="Company"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />

          {/* Glass morphism overlay badge (optional decorative element) */}
          <Box
            sx={{
              position: "absolute",
              bottom: 20,
              right: 20,
              px: 2,
              py: 1,
              borderRadius: 2,
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              fontSize: "0.75rem",
              fontWeight: 600,
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
          >
            Premium Quality
          </Box>
        </Box>
      </Box>
    </Box>
  );
}