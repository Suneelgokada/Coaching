"use client";

import { Box, Typography, Stack } from "@mui/material";

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
        backgroundColor: "#f9f9fb",

        /* MOBILE + TABLET */
        "@media (max-width:768px)": {
          height: "auto",
          py: 6,
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
          gap: 4,

          /* MOBILE + TABLET: STACK CONTENT */
          "@media (max-width:768px)": {
            flexDirection: "column",   // ✅ stack vertically
            alignItems: "center",      // ✅ center horizontally
            textAlign: "center",       // ✅ center text
            height: "auto",
          },
        }}
      >
        {/* LEFT — TEXT CONTENT */}
        <Stack
          spacing={3}
          sx={{
            maxWidth: 560,
            "@media (max-width:768px)": {
              alignItems: "center", // ✅ center stack items
            },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 2,
              color: "text.secondary",
              "@media (max-width:768px)": {
                textAlign: "center", // ✅ center text
              },
            }}
          >
            Have a look on our products
          </Typography>

          <Typography
            variant="h3"
            fontWeight={700}
            sx={{
              "@media (max-width:768px)": {
                textAlign: "center",
              },
            }}
          >
            {data.title}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              "@media (max-width:768px)": {
                textAlign: "center",
              },
            }}
          >
            {data.description}
          </Typography>

          {/* VALUES / KEY POINTS */}
          <Stack
            direction="row"
            spacing={2}
            flexWrap="nowrap"
            sx={{
              mt: 2,
              "@media (max-width:768px)": {
                justifyContent: "center",
                rowGap: 1,
                flexWrap: "wrap",
              },
            }}
          >
            {data.values.map((value) => (
              <Box
                key={value}
                sx={{
                  px: 2,
                  py: 0.5,
                  borderRadius: "999px",
                  backgroundColor: "rgba(0,0,0,0.06)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                {value}
              </Box>
            ))}
          </Stack>
        </Stack>

        {/* RIGHT — IMAGE */}
        <Box
          sx={{
            width: { xs: "100%", md: 520 },
            height: { xs: 320, md: 520 },
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
            flexShrink: 0,

            /* MOBILE + TABLET */
            "@media (max-width:768px)": {
              mt: 6, // ✅ push image below text
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
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
