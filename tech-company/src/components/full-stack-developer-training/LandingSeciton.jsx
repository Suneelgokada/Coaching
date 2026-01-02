"use client";
 
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Button,
  Chip,
  Card,
  TextField,
  MenuItem,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
 
export default function LandingSection() {
  return (
    <Box
      sx={{
        width: "100%",
        background:
          "linear-gradient(135deg, #071a33 0%, #0b4a7a 50%, #1ecad3 100%)",
        color: "#ffffff",
        py: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5} alignItems="center">
          {/* ================= LEFT HERO CONTENT ================= */}
          <Grid item xs={12} md={7}>
            <Typography
              sx={{
                fontSize: { xs: 30, md: 42 },
                fontWeight: 800,
                mb: 2,
              }}
            >
              Full Stack Developer Training in Visakhapatnam
            </Typography>
 
            <Typography
              sx={{
                fontSize: 16,
                color: "#e0f2fe",
                mb: 3,
                maxWidth: 620,
              }}
            >
              Join our job-oriented Full Stack Developer program to learn
              real-world programming skills with placement assistance and career
              guidance.
            </Typography>
 
            {/* BULLET POINTS */}
            <Stack spacing={1.5} sx={{ mb: 3 }}>
              {[
                "Career planning & interview preparation",
                "Real-time projects & hands-on training",
                "Flexible weekday & weekend batches",
                "Placement assistance with industry support",
              ].map((item, index) => (
                <Stack key={index} direction="row" spacing={1}>
                  <CheckCircleIcon sx={{ color: "#22c55e" }} />
                  <Typography sx={{ fontSize: 16 }}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
 
            {/* TRUST CHIPS */}
            <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 3 }}>
              <Chip
                icon={<WorkIcon sx={{ color: "#ffffffff" }} />}
                label="Job Assistance"
                sx={{
                  background:
                    "linear-gradient(135deg, #22c55e, #16a34a)",
                  color: "#fff",
                  fontWeight: 600,
                  px: 1.5,
                }}
              />
              <Chip
                icon={<StarIcon sx={{ color: "#facc15" }} />}
                label="4.8 / 5 Rating"
                sx={{
                  background:
                    "linear-gradient(135deg, #fff7cc, #fde68a)",
                  fontWeight: 600,
                  px: 1.5,
                }}
              />
              <Chip
                icon={<SchoolIcon sx={{ color: "#1a73e8" }} />}
                label="1,200+ Students Enrolled"
                sx={{
                  background:
                    "linear-gradient(135deg, #e8f0fe, #dbeafe)",
                  fontWeight: 600,
                  px: 1.5,
                }}
              />
            </Stack>
 
            {/* INFO STRIP */}
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                background:
                  "linear-gradient(90deg, #ffffff 0%, #8ecae6 50%, #4ade80 100%)",
                mb: 2,
                maxWidth: "65%",
              }}
            >
              <Box sx={{ px: 8, py: 2 }}>
                <Typography sx={{ fontSize: 13, color: "#475569" }}>
                  In collaboration with
                </Typography>
                <Typography
                  sx={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#1e5fa3",
                  }}
                >
                  Design Blocks
                </Typography>
              </Box>
 
            <Divider />
 
<InfoItem
  title="65+ Hrs."
  subtitle="Duration"
  sx={{ color: "#0f6ae9ff", px: 8, py: 2 }}
/>
 
<Divider />
 
<InfoItem
  title="Online/Offline"
  subtitle="Format"
  // sx={{ color: "#066af5ff", px: 8, py: 2 }}
/>
 
            </Stack>
 
            {/* CTA BUTTONS */}
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#1e88e5",
                  px: 4,
                  py: 1.2,
                  fontWeight: 600,
                  "&:hover": { bgcolor: "#1565c0" },
                }}
              >
                Download Curriculum
              </Button>
 
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#ffffff",
                  color: "#ffffff",
                  px: 4,
                  py: 1.2,
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Interview Questions
              </Button>
            </Stack>
          </Grid>
 
          {/* ================= RIGHT SIDE FORM ================= */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  p: 2.5,
                  borderRadius: "18px",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                  animation: "floatForm 4s ease-in-out infinite",
                  "@keyframes floatForm": {
                    "0%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                    "100%": { transform: "translateY(0px)" },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: 16,
                    mb: 1.5,
                    color: "#1a73e8",
                    textAlign: "center",
                  }}
                >
                  100% Placement Assistance
                </Typography>
 
                <Stack spacing={1}>
                  <TextField size="small" label="Your Name" fullWidth />
                  <TextField size="small" label="Your Email" fullWidth />
                  <TextField size="small" label="Mobile Number" fullWidth />
 
                  <TextField
                    size="small"
                    select
                    label="Training Mode"
                    fullWidth
                  >
                    <MenuItem value="Online">Online</MenuItem>
                    <MenuItem value="Offline">Offline</MenuItem>
                  </TextField>
 
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      mt: 1,
                      bgcolor: "#22c55e",
                      fontWeight: 600,
                      "&:hover": { bgcolor: "#16a34a" },
                    }}
                  >
                    Submit Enquiry
                  </Button>
                </Stack>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
 
/* ================= SMALL COMPONENTS ================= */
 
function Divider() {
  return (
    <Box
      sx={{
        width: "1px",
        height: "48px",
        bgcolor: "rgba(0,0,0,0.15)",
      }}
    />
  );
}
 
function InfoItem({ title, subtitle }) {
  return (
    <Box sx={{ px: 3, py: 2 }}>
      <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: 13 }}>{subtitle}</Typography>
    </Box>
  );
}