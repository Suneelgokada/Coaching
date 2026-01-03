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
  LinearProgress,
  Paper,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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

  // Common style for TextFields
  const textFieldStyles = {
    "& .MuiInputBase-input": { fontFamily: MONTSERRAT },
    "& .MuiInputLabel-root": { fontFamily: MONTSERRAT },
    "& .MuiFormHelperText-root": { fontFamily: MONTSERRAT },
  };

  return (
    <Box sx={{ bgcolor: "#fbfbfb", pb: 10, fontFamily: MONTSERRAT }}>
      {/* Hero Section */}
      <Box sx={{ bgcolor: LOGO_BLUE, color: "#fff", pt: 10, pb: 15, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 600, mb: 2, fontFamily: MONTSERRAT }}>Join Our Team</Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, fontFamily: MONTSERRAT }}>Building the future of IT services with Coding Roots.</Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -8 }}>
        {/* ================= 1. JOB OPENINGS GRID ================= */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: LOGO_BLUE, fontFamily: MONTSERRAT }}>Current Openings</Typography>
        
        <Box sx={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: 3, 
          mb: 8 
        }}>
          {jobOpenings.map((job, index) => (
            <Card key={index} elevation={0} sx={{ 
              flex: { xs: "1 1 100%", sm: "1 1 calc(48% - 12px)", md: "1 1 calc(33.33% - 16px)" },
              borderRadius: 3, 
              border: "1px solid #eee", 
              borderTop: `6px solid ${LOGO_GREEN}`, 
              transition: '0.3s', 
              '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.1)', transform: 'translateY(-5px)' } 
            }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: LOGO_BLUE, mb: 1, fontFamily: MONTSERRAT }}>{job.title}</Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
                  <Chip label={job.type} size="small" sx={{ bgcolor: "rgba(45, 125, 45, 0.1)", color: LOGO_GREEN, fontWeight: 600, fontFamily: MONTSERRAT }} />
                  <Chip label={job.experience} size="small" variant="outlined" sx={{ fontFamily: MONTSERRAT }} />
                </Box>
                <Typography variant="body2" sx={{ color: "#666", fontFamily: MONTSERRAT }}>📍 {job.location}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* ================= 2. APPLICATION FORM ================= */}
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 3, sm: 4, md: 6 }, 
                borderRadius: 4, 
                boxShadow: "0 15px 40px rgba(0,0,0,0.08)", 
                border: '1px solid #f0f0f0',
                mx: "auto"
              }}
            >
              <Box textAlign="center" mb={4}>
                <Typography variant="h4" sx={{ fontWeight: 600, color: LOGO_BLUE, fontSize: { xs: '1.8rem', md: '2.2rem' }, fontFamily: MONTSERRAT }}>
                  Apply Now
                </Typography>
                <Typography variant="body2" sx={{ color: "#777", fontFamily: MONTSERRAT }}>
                  Fill in your details to start your journey with us.
                </Typography>
              </Box>

              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Full Name*" name="fullName" {...formik.getFieldProps('fullName')} error={formik.touched.fullName && Boolean(formik.errors.fullName)} helperText={formik.touched.fullName && formik.errors.fullName} sx={textFieldStyles} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Phone Number*" name="phone" {...formik.getFieldProps('phone')} error={formik.touched.phone && Boolean(formik.errors.phone)} helperText={formik.touched.phone && formik.errors.phone} sx={textFieldStyles} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Email Address*" name="email" {...formik.getFieldProps('email')} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} sx={textFieldStyles} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Position Applied For*" name="position" placeholder="e.g. Frontend Developer" {...formik.getFieldProps('position')} error={formik.touched.position && Boolean(formik.errors.position)} helperText={formik.touched.position && formik.errors.position} sx={textFieldStyles} />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Box 
                      sx={{ 
                        p: { xs: 2, md: 3 }, 
                        border: "2px dashed #ddd", 
                        borderRadius: 3, 
                        textAlign: "center", 
                        bgcolor: "#fafafa",
                        transition: "0.3s",
                        "&:hover": { borderColor: LOGO_BLUE }
                      }}
                    >
                      <Button 
                        component="label" 
                        startIcon={<CloudUploadIcon />} 
                        sx={{ 
                          color: LOGO_BLUE, 
                          fontWeight: 600,
                          fontFamily: MONTSERRAT,
                          fontSize: { xs: '0.85rem', md: '1rem' },
                          textTransform: 'none'
                        }}
                      >
                        Upload Resume (PDF only)
                        <input type="file" hidden accept=".pdf" onChange={(e) => setFileName(e.target.files[0]?.name)} />
                      </Button>
                      {fileName && (
                        <Typography variant="body2" sx={{ mt: 1, color: LOGO_GREEN, fontWeight: 600, fontSize: '0.8rem', fontFamily: MONTSERRAT }}>
                          Selected: {fileName}
                        </Typography>
                      )}
                    </Box>
                  </Grid>
                </Grid>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    disabled={loading} 
                    sx={{ 
                      width: { xs: '100%', sm: '250px' },
                      py: 1.5, 
                      bgcolor: LOGO_BLUE, 
                      fontWeight: 600, 
                      borderRadius: 2, 
                      fontFamily: MONTSERRAT,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      textTransform: 'none',
                      "&:hover": { bgcolor: LOGO_GREEN } 
                    }}
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
        <Alert severity="success" sx={{ width: "100%", bgcolor: LOGO_GREEN, color: '#fff', fontFamily: MONTSERRAT }}>
          Application data sent via WhatsApp!
        </Alert>
      </Snackbar>
    </Box>
  );
}