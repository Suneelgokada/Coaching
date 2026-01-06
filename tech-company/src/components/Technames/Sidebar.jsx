import { Box, Typography, List, ListItem } from "@mui/material";

const categories = [
{ id: "ai_ml", label: "ARTIFICIAL INTELLIGENCE" },
  { id: "frontend", label: "FRONTEND" },
  { id: "backend", label: "BACKEND" },
  { id: "frameworks", label: "FRAMEWORKS" },
  { id: "mobile", label: "MOBILE" },
  { id: "hi_tech", label: "HI-TECH" }, // Added to match screenshots
  { id: "platforms_bi", label: "PLATFORMS / BI TOOLS" }, // Added to match screenshots
  { id: "cms_ecommerce", label: "CMS / ECOMMERCE" },
  { id: "cloud_devops", label: "CLOUD / DEVOPS" },
];

export default function Sidebar({ active, onChange }) {
  const activeIndex = categories.findIndex((cat) => cat.id === active);
  const mainColor = "#085482";

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');`}
      </style>

      <List sx={{ display: "flex", flexDirection: "column", gap: 1, p: 0, position: "relative" }}>
        
        {/* 1. Sliding Background Box (The feature you asked) */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: activeIndex * 48, // Item height (40px) + Gap (8px) = 48px
            width: "100%",
            height: "40px",
            backgroundColor: "rgba(8, 84, 130, 0.1)", // Nee main color thoti light transparent background
            borderRadius: "8px",
            transition: "top 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: 0,
          }}
        />

        {/* 2. Side Line Indicator */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: (activeIndex * 48) + 5, // Box center lo undataniki adjust chesa
            width: "4px",
            height: "30px",
            backgroundColor: mainColor,
            transition: "top 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            borderRadius: "0 4px 4px 0",
            zIndex: 2,
          }}
        />

        {categories.map((cat) => (
          <ListItem
            key={cat.id}
            onClick={() => onChange(cat.id)}
            disablePadding
            sx={{
              height: "40px",
              cursor: "pointer",
              position: "relative",
              paddingLeft: "40px",
              color: active === cat.id ? mainColor : "#555",
              transition: "all 0.3s ease",
              zIndex: 1, // Text background box paina undali
              "&:hover": {
                color: mainColor,
              },
              // Default Dot
              "&::before": {
                content: '""',
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "6px",
                height: "6px",
                backgroundColor: active === cat.id ? mainColor : "#ddd",
                borderRadius: "50%",
                transition: "background-color 0.3s ease",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: active === cat.id ? 700 : 500,
                fontSize: "0.9rem",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              {cat.label}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}