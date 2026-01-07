// "use client";
// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   TextField,
//   Button,
//   Card,
//   CardContent,
//   Chip,
//   Snackbar,
//   Alert,
//   LinearProgress,
//   Paper,
// } from "@mui/material";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// /* ================= COLORS & FONTS ================= */
// const LOGO_GREEN = "#2D7D2D"; 
// const LOGO_BLUE = "#004D71";
// const MONTSERRAT = "'Montserrat', sans-serif";

// const jobOpenings = [
//   { title: "Graphic Designer", type: "Full-Time", location: "Visakhapatnam", experience: "Fresher/Exp" },
//   { title: "UI/UX Designer", type: "Full-Time", location: "Visakhapatnam", experience: "Fresher/Exp" },
//   { title: "FullStack Developer", type: "Full-Time", location: "Visakhapatnam", experience: "Fresher/Exp" },
// ];

// export default function CareersPage() {
//   const [loading, setLoading] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [fileName, setFileName] = useState("");

//   const formik = useFormik({
//     initialValues: { fullName: "", email: "", phone: "", position: "", portfolio: "" },
//     validationSchema: Yup.object({
//       fullName: Yup.string().required("Required"),
//       email: Yup.string().email("Invalid email").required("Required"),
//       phone: Yup.string().required("Required"),
//       position: Yup.string().required("Required"),
//     }),
//     onSubmit: (values) => {
//       setLoading(true);
//       const WHATSAPP_NUMBER = "918639176137";
//       const text = `*New Job Application*\n*Name:* ${values.fullName}\n*Position:* ${values.position}`;
//       window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
//       setTimeout(() => {
//         setLoading(false);
//         setOpenSnackbar(true);
//         formik.resetForm();
//         setFileName("");
//       }, 1000);
//     },
//   });

//   // Common style for TextFields
//   const textFieldStyles = {
//     "& .MuiInputBase-input": { fontFamily: MONTSERRAT },
//     "& .MuiInputLabel-root": { fontFamily: MONTSERRAT },
//     "& .MuiFormHelperText-root": { fontFamily: MONTSERRAT },
//   };

//   return (
//     <Box sx={{ bgcolor: "#fbfbfb", pb: 10, fontFamily: MONTSERRAT }}>
//       {/* Hero Section */}
//       <Box sx={{ bgcolor: LOGO_BLUE, color: "#fff", pt: 10, pb: 15, textAlign: "center" }}>
//         <Container maxWidth="md">
//           <Typography variant="h3" sx={{ fontWeight: 600, mb: 2, fontFamily: MONTSERRAT }}>Join Our Team</Typography>
//           <Typography variant="h6" sx={{ opacity: 0.8, fontFamily: MONTSERRAT }}>Building the future of IT services with Coding Roots.</Typography>
//         </Container>
//       </Box>

//       <Container maxWidth="lg" sx={{ mt: -8 }}>
//         {/* ================= 1. JOB OPENINGS GRID ================= */}
//         <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: LOGO_BLUE, fontFamily: MONTSERRAT }}>Current Openings</Typography>
        
//         <Box sx={{ 
//           display: "flex", 
//           flexWrap: "wrap", 
//           gap: 3, 
//           mb: 8 
//         }}>
//           {jobOpenings.map((job, index) => (
//             <Card key={index} elevation={0} sx={{ 
//               flex: { xs: "1 1 100%", sm: "1 1 calc(48% - 12px)", md: "1 1 calc(33.33% - 16px)" },
//               borderRadius: 3, 
//               border: "1px solid #eee", 
//               borderTop: `6px solid ${LOGO_GREEN}`, 
//               transition: '0.3s', 
//               '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.1)', transform: 'translateY(-5px)' } 
//             }}>
//               <CardContent sx={{ p: 3 }}>
//                 <Typography variant="h6" sx={{ fontWeight: 600, color: LOGO_BLUE, mb: 1, fontFamily: MONTSERRAT }}>{job.title}</Typography>
//                 <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
//                   <Chip label={job.type} size="small" sx={{ bgcolor: "rgba(45, 125, 45, 0.1)", color: LOGO_GREEN, fontWeight: 600, fontFamily: MONTSERRAT }} />
//                   <Chip label={job.experience} size="small" variant="outlined" sx={{ fontFamily: MONTSERRAT }} />
//                 </Box>
//                 <Typography variant="body2" sx={{ color: "#666", fontFamily: MONTSERRAT }}>📍 {job.location}</Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>

//         {/* ================= 2. APPLICATION FORM ================= */}
//         <Grid container justifyContent="center">
//           <Grid item xs={12} md={10} lg={8}>
//             <Paper 
//               elevation={0} 
//               sx={{ 
//                 p: { xs: 3, sm: 4, md: 6 }, 
//                 borderRadius: 4, 
//                 boxShadow: "0 15px 40px rgba(0,0,0,0.08)", 
//                 border: '1px solid #f0f0f0',
//                 mx: "auto"
//               }}
//             >
//               <Box textAlign="center" mb={4}>
//                 <Typography variant="h4" sx={{ fontWeight: 600, color: LOGO_BLUE, fontSize: { xs: '1.8rem', md: '2.2rem' }, fontFamily: MONTSERRAT }}>
//                   Apply Now
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#777", fontFamily: MONTSERRAT }}>
//                   Fill in your details to start your journey with us.
//                 </Typography>
//               </Box>

//               <form onSubmit={formik.handleSubmit}>
//                 <Grid container spacing={3}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label="Full Name*" name="fullName" {...formik.getFieldProps('fullName')} error={formik.touched.fullName && Boolean(formik.errors.fullName)} helperText={formik.touched.fullName && formik.errors.fullName} sx={textFieldStyles} />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label="Phone Number*" name="phone" {...formik.getFieldProps('phone')} error={formik.touched.phone && Boolean(formik.errors.phone)} helperText={formik.touched.phone && formik.errors.phone} sx={textFieldStyles} />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField fullWidth label="Email Address*" name="email" {...formik.getFieldProps('email')} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} sx={textFieldStyles} />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField fullWidth label="Position Applied For*" name="position" placeholder="e.g. Frontend Developer" {...formik.getFieldProps('position')} error={formik.touched.position && Boolean(formik.errors.position)} helperText={formik.touched.position && formik.errors.position} sx={textFieldStyles} />
//                   </Grid>
                  
//                   <Grid item xs={12}>
//                     <Box 
//                       sx={{ 
//                         p: { xs: 2, md: 3 }, 
//                         border: "2px dashed #ddd", 
//                         borderRadius: 3, 
//                         textAlign: "center", 
//                         bgcolor: "#fafafa",
//                         transition: "0.3s",
//                         "&:hover": { borderColor: LOGO_BLUE }
//                       }}
//                     >
//                       <Button 
//                         component="label" 
//                         startIcon={<CloudUploadIcon />} 
//                         sx={{ 
//                           color: LOGO_BLUE, 
//                           fontWeight: 600,
//                           fontFamily: MONTSERRAT,
//                           fontSize: { xs: '0.85rem', md: '1rem' },
//                           textTransform: 'none'
//                         }}
//                       >
//                         Upload Resume (PDF only)
//                         <input type="file" hidden accept=".pdf" onChange={(e) => setFileName(e.target.files[0]?.name)} />
//                       </Button>
//                       {fileName && (
//                         <Typography variant="body2" sx={{ mt: 1, color: LOGO_GREEN, fontWeight: 600, fontSize: '0.8rem', fontFamily: MONTSERRAT }}>
//                           Selected: {fileName}
//                         </Typography>
//                       )}
//                     </Box>
//                   </Grid>
//                 </Grid>

//                 <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
//                   <Button 
//                     type="submit" 
//                     variant="contained" 
//                     disabled={loading} 
//                     sx={{ 
//                       width: { xs: '100%', sm: '250px' },
//                       py: 1.5, 
//                       bgcolor: LOGO_BLUE, 
//                       fontWeight: 600, 
//                       borderRadius: 2, 
//                       fontFamily: MONTSERRAT,
//                       fontSize: { xs: '0.9rem', md: '1rem' },
//                       textTransform: 'none',
//                       "&:hover": { bgcolor: LOGO_GREEN } 
//                     }}
//                   >
//                     {loading ? "Submitting..." : "Submit Application"}
//                   </Button>
//                 </Box>
//               </form>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>

//       <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
//         <Alert severity="success" sx={{ width: "100%", bgcolor: LOGO_GREEN, color: '#fff', fontFamily: MONTSERRAT }}>
//           Application data sent via WhatsApp!
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// }


"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Chip,
  Snackbar,
  Alert,
  Paper,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/* ================= COLORS & FONTS ================= */
const LOGO_GREEN = "#2D7D2D"; 
const LOGO_BLUE = "#004D71";
const MONTSERRAT = "'Montserrat', sans-serif";

const jobOpenings = [
  { title: "Graphic Designer", type: "Full-Time", location: "Visakhapatnam", experience: "Fresher/Exp" },
  { title: "UI/UX Designer", type: "Full-Time", location: "Visakhapatnam", experience: "Fresher/Exp" },
  { title: "FullStack Developer", type: "Full-Time", location: "Visakhapatnam", experience: "Fresher/Exp" },
];

export default function CareersPage() {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [fileName, setFileName] = useState("");

  const formik = useFormik({
    initialValues: { fullName: "", email: "", phone: "", position: "", portfolio: "" },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().required("Required"),
      position: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      const WHATSAPP_NUMBER = "918639176137";
      const text = `*New Job Application*\n*Name:* ${values.fullName}\n*Position:* ${values.position}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
      setTimeout(() => {
        setLoading(false);
        setOpenSnackbar(true);
        formik.resetForm();
        setFileName("");
      }, 1000);
    },
  });

  const textFieldStyles = {
    "& .MuiInputBase-input": { 
      fontFamily: MONTSERRAT,
      fontSize: { xs: "0.95rem", md: "1rem" }
    },
    "& .MuiInputLabel-root": { fontFamily: MONTSERRAT },
    "& .MuiFormHelperText-root": { fontFamily: MONTSERRAT },
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      bgcolor: "#fff",
      transition: "all 0.3s ease",
      "&:hover fieldset": { 
        borderColor: LOGO_BLUE,
        borderWidth: "2px"
      },
      "&.Mui-focused fieldset": { 
        borderColor: LOGO_GREEN,
        borderWidth: "2px"
      }
    }
  };

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh", fontFamily: MONTSERRAT }}>
      {/* ================= PREMIUM HERO SECTION ================= */}
      <Box 
        sx={{ 
          position: "relative",
          background: `linear-gradient(135deg, ${LOGO_BLUE} 0%, #003d5c 50%, ${LOGO_GREEN} 100%)`,
          color: "#fff", 
          pt: { xs: 12, md: 14 }, 
          pb: { xs: 18, md: 22 }, 
          textAlign: "center",
          overflow: "hidden",
          // Animated background effects
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 50%, rgba(45, 125, 45, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)
            `,
            pointerEvents: "none"
          },
          // Floating shapes animation
          "&::after": {
            content: '""',
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            top: "-100px",
            right: "-100px",
            animation: "float 6s ease-in-out infinite"
          },
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-20px)" }
          }
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <Box 
            sx={{ 
              display: "inline-block", 
              px: 3, 
              py: 1.2, 
              bgcolor: "rgba(255,255,255,0.15)", 
              borderRadius: 50, 
              mb: 3,
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.25)",
                transform: "scale(1.05)"
              }
            }}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                fontWeight: 700, 
                letterSpacing: 2, 
                fontFamily: MONTSERRAT,
                fontSize: { xs: "0.75rem", md: "0.85rem" }
              }}
            >
              🚀 WE'RE HIRING
            </Typography>
          </Box>

          {/* Main Heading */}
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 600, 
              mb: 3, 
              fontFamily: MONTSERRAT,
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.75rem" },
              lineHeight: 1.1,
              textShadow: "0 4px 20px rgba(0,0,0,0.2)",
              letterSpacing: "-0.02em"
            }}
          >
            Join Our Team
          </Typography>

          {/* Subtitle */}
          <Typography 
            variant="h5" 
            sx={{ 
              opacity: 0.95, 
              fontFamily: MONTSERRAT,
              maxWidth: "650px",
              mx: "auto",
              lineHeight: 1.7,
              fontWeight: 400,
              fontSize: { xs: "1.1rem", md: "1.35rem" }
            }}
          >
            Building the future of IT services with Coding Roots. Be part of something extraordinary.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: -10, md: -14 }, position: "relative", zIndex: 2, pb: 10 }}>
        {/* ================= SECTION HEADER ================= */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 600, 
              color: "#ffff", 
              fontFamily: MONTSERRAT,
              mb: 2,
              fontSize: { xs: "2rem", md: "2.75rem" },
              letterSpacing: "-0.01em"
            }}
          >
            Current Openings
          </Typography>
          <Box 
            sx={{ 
              width: 100, 
              height: 5, 
              bgcolor: LOGO_GREEN, 
              mx: "auto", 
              borderRadius: 3,
              boxShadow: `0 4px 12px ${LOGO_GREEN}40`
            }} 
          />
        </Box>
        
        {/* ================= PREMIUM JOB CARDS ================= */}
        <Grid container spacing={3} sx={{ mb: 12 }} justifyContent="center">
          {jobOpenings.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                elevation={0} 
                sx={{ 
                  height: "100%",
                  borderRadius: 4, 
                  border: "2px solid #e8e8e8", 
                  background: "linear-gradient(to bottom, #ffffff 0%, #fafbfc 100%)",
                  position: "relative",
                  overflow: "hidden",
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', 
                  // Top gradient border
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "6px",
                    background: `linear-gradient(90deg, ${LOGO_GREEN} 0%, ${LOGO_BLUE} 100%)`,
                  },
                  // Hover effects
                  '&:hover': { 
                    boxShadow: `0 20px 60px ${LOGO_BLUE}20`, 
                    transform: 'translateY(-12px)',
                    borderColor: LOGO_BLUE,
                    "& .job-icon-wrapper": {
                      bgcolor: LOGO_BLUE,
                      transform: "scale(1.1) rotate(5deg)",
                      "& svg": { 
                        color: "#fff"
                      }
                    }
                  } 
                }}
              >
                <CardContent sx={{ p: 4 }} align="center">
                  {/* Icon */}
                  <Box 
                    className="job-icon-wrapper" 
                    sx={{ 
                      width: 64, 
                      height: 64, 
                      borderRadius: 3, 
                      bgcolor: `${LOGO_BLUE}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: `0 4px 12px ${LOGO_BLUE}10`
                    }}
                  >
                    <WorkOutlineIcon sx={{ fontSize: 32, color: LOGO_BLUE, transition: "color 0.3s" }} />
                  </Box>
                  
                  {/* Job Title */}
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 800, 
                      color: LOGO_BLUE, 
                      mb: 2.5, 
                      fontFamily: MONTSERRAT,
                      fontSize: "1.25rem",
                      lineHeight: 1.3
                    }}
                  >
                    {job.title}
                  </Typography>
                  
                  {/* Chips */}
                  <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mb: 3 }}>
                    <Chip 
                      icon={<AccessTimeIcon sx={{ fontSize: 16 }} />}
                      label={job.type} 
                      size="small" 
                      sx={{ 
                        bgcolor: `${LOGO_GREEN}20`, 
                        color: LOGO_GREEN, 
                        fontWeight: 700, 
                        fontFamily: MONTSERRAT,
                        border: `1.5px solid ${LOGO_GREEN}50`,
                        fontSize: "0.8rem",
                        height: "28px",
                        "& .MuiChip-icon": {
                          color: LOGO_GREEN
                        }
                      }} 
                    />
                    <Chip 
                      label={job.experience} 
                      size="small" 
                      sx={{ 
                        bgcolor: "#fff",
                        border: `1.5px solid ${LOGO_BLUE}50`,
                        color: LOGO_BLUE,
                        fontWeight: 700,
                        fontFamily: MONTSERRAT,
                        fontSize: "0.8rem",
                        height: "28px"
                      }} 
                    />
                  </Box>
                  
                  {/* Location */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
                    <LocationOnIcon sx={{ fontSize: 20, color: "#666" }} />
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "#666", 
                        fontFamily: MONTSERRAT,
                        fontWeight: 600,
                        fontSize: "0.95rem",
                      }}
                    >
                      {job.location}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* ================= PREMIUM APPLICATION FORM ================= */}
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10} lg={9}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 4, sm: 6, md: 8 }, 
                borderRadius: 5, 
                boxShadow: `0 30px 90px ${LOGO_BLUE}15`, 
                border: '2px solid #f0f2f5',
                mx: "auto",
                background: "linear-gradient(to bottom, #ffffff 0%, #fafbfc 100%)",
                position: "relative",
                overflow: "hidden",
                // Top gradient border
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "6px",
                  background: `linear-gradient(90deg, ${LOGO_GREEN} 0%, ${LOGO_BLUE} 100%)`,
                },
                // Side accent
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "200px",
                  height: "200px",
                  background: `radial-gradient(circle, ${LOGO_GREEN}10 0%, transparent 70%)`,
                  pointerEvents: "none"
                }
              }}
            >
              {/* Form Header */}
              <Box textAlign="center" mb={6}>
                {/* Icon */}
                <Box 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: "50%", 
                    background: `linear-gradient(135deg, ${LOGO_BLUE} 0%, ${LOGO_GREEN} 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                    boxShadow: `0 12px 35px ${LOGO_BLUE}35`,
                    animation: "pulse 2s ease-in-out infinite",
                    "@keyframes pulse": {
                      "0%, 100%": { transform: "scale(1)" },
                      "50%": { transform: "scale(1.05)" }
                    }
                  }}
                >
                  <WorkOutlineIcon sx={{ fontSize: 42, color: "#fff" }} />
                </Box>

                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 800, 
                    color: LOGO_BLUE, 
                    fontSize: { xs: '2rem', md: '2.75rem' }, 
                    fontFamily: MONTSERRAT,
                    mb: 2,
                    letterSpacing: "-0.01em"
                  }}
                >
                  Apply Now
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: "#666", 
                    fontFamily: MONTSERRAT,
                    maxWidth: "550px",
                    mx: "auto",
                    lineHeight: 1.8,
                    fontSize: { xs: "0.95rem", md: "1.05rem" }
                  }}
                >
                  Fill in your details to start your journey with us. We're excited to meet you!
                </Typography>
              </Box>

              {/* Form */}
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                  {/* Full Name */}
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      fullWidth 
                      label="Full Name*" 
                      name="fullName" 
                      {...formik.getFieldProps('fullName')} 
                      error={formik.touched.fullName && Boolean(formik.errors.fullName)} 
                      helperText={formik.touched.fullName && formik.errors.fullName} 
                      sx={textFieldStyles} 
                    />
                  </Grid>

                  {/* Phone */}
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      fullWidth 
                      label="Phone Number*" 
                      name="phone" 
                      {...formik.getFieldProps('phone')} 
                      error={formik.touched.phone && Boolean(formik.errors.phone)} 
                      helperText={formik.touched.phone && formik.errors.phone} 
                      sx={textFieldStyles} 
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12}>
                    <TextField 
                      fullWidth 
                      label="Email Address*" 
                      name="email" 
                      {...formik.getFieldProps('email')} 
                      error={formik.touched.email && Boolean(formik.errors.email)} 
                      helperText={formik.touched.email && formik.errors.email} 
                      sx={textFieldStyles} 
                    />
                  </Grid>

                  {/* Position */}
                  <Grid item xs={12}>
                    <TextField 
                      fullWidth 
                      label="Position Applied For*" 
                      name="position" 
                      placeholder="e.g. Frontend Developer" 
                      {...formik.getFieldProps('position')} 
                      error={formik.touched.position && Boolean(formik.errors.position)} 
                      helperText={formik.touched.position && formik.errors.position} 
                      sx={textFieldStyles} 
                    />
                  </Grid>
                  
                  {/* File Upload */}
                  <Grid item xs={12}>
                    <Box 
                      sx={{ 
                        p: { xs: 3, md: 5 }, 
                        border: "3px dashed #d0d5dd", 
                        borderRadius: 3, 
                        textAlign: "center", 
                        bgcolor: "#fff",
                        transition: "all 0.4s ease",
                        position: "relative",
                        "&:hover": { 
                          borderColor: LOGO_BLUE,
                          bgcolor: `${LOGO_BLUE}05`,
                          transform: "scale(1.01)"
                        }
                      }}
                    >
                      <CloudUploadIcon 
                        sx={{ 
                          fontSize: 56, 
                          color: LOGO_BLUE, 
                          mb: 2, 
                          opacity: 0.7,
                          transition: "all 0.3s",
                          "&:hover": { opacity: 1, transform: "scale(1.1)" }
                        }} 
                      />
                      
                      <Button 
                        component="label" 
                        sx={{ 
                          color: LOGO_BLUE, 
                          fontWeight: 700,
                          fontFamily: MONTSERRAT,
                          fontSize: { xs: '0.95rem', md: '1.05rem' },
                          textTransform: 'none',
                          mb: 1,
                          "&:hover": {
                            bgcolor: `${LOGO_BLUE}10`
                          }
                        }}
                      >
                        Choose Resume (PDF only)
                        <input 
                          type="file" 
                          hidden 
                          accept=".pdf" 
                          onChange={(e) => setFileName(e.target.files[0]?.name)} 
                        />
                      </Button>

                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: "#888", 
                          fontSize: "0.9rem", 
                          fontFamily: MONTSERRAT 
                        }}
                      >
                        or drag and drop your file here
                      </Typography>

                      {fileName && (
                        <Box 
                          sx={{ 
                            mt: 3, 
                            p: 2.5, 
                            bgcolor: `${LOGO_GREEN}12`, 
                            borderRadius: 2,
                            border: `2px solid ${LOGO_GREEN}40`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1.5
                          }}
                        >
                          <CheckCircleIcon sx={{ color: LOGO_GREEN, fontSize: 24 }} />
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: LOGO_GREEN, 
                              fontWeight: 700, 
                              fontSize: '0.95rem', 
                              fontFamily: MONTSERRAT 
                            }}
                          >
                            Selected: {fileName}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Grid>
                </Grid>

                {/* Submit Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    disabled={loading} 
                    sx={{ 
                      width: { xs: '100%', sm: '320px' },
                      py: 2, 
                      background: `linear-gradient(135deg, ${LOGO_BLUE} 0%, ${LOGO_GREEN} 100%)`,
                      fontWeight: 800, 
                      borderRadius: 3, 
                      fontFamily: MONTSERRAT,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      textTransform: 'none',
                      boxShadow: `0 10px 30px ${LOGO_BLUE}40`,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      letterSpacing: "0.5px",
                      "&:hover": { 
                        background: `linear-gradient(135deg, ${LOGO_GREEN} 0%, ${LOGO_BLUE} 100%)`,
                        transform: "translateY(-3px)",
                        boxShadow: `0 15px 40px ${LOGO_BLUE}50`
                      },
                      "&:active": {
                        transform: "translateY(-1px)"
                      },
                      "&:disabled": {
                        background: "#ccc",
                        color: "#666"
                      }
                    }}
                  >
                    {loading ? "Submitting..." : "Submit Application →"}
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* ================= SUCCESS SNACKBAR ================= */}
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={5000} 
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          severity="success" 
          icon={<CheckCircleIcon sx={{ fontSize: 28 }} />}
          sx={{ 
            width: "100%", 
            background: `linear-gradient(135deg, ${LOGO_GREEN} 0%, ${LOGO_BLUE} 100%)`,
            color: '#fff', 
            fontFamily: MONTSERRAT,
            fontWeight: 700,
            fontSize: "1rem",
            boxShadow: `0 10px 30px ${LOGO_GREEN}40`,
            borderRadius: 3,
            py: 1.5,
            px: 3,
            "& .MuiAlert-icon": {
              color: "#fff"
            }
          }}
        >
          Application data sent via WhatsApp!
        </Alert>
      </Snackbar>
    </Box>
  );
}