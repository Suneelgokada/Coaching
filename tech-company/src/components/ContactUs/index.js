"use client";
import {
  Box,
  Typography,
  TextField,
  Button,
  LinearProgress,
  Alert,
  Snackbar,
  Container,
} from "@mui/material";
import { Grid } from "@mui/material"; // Material UI Grid v2 use chestunnam
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter();

  const LOGO_GREEN = "#2D7D2D";
  const LOGO_BLUE = "#004D71";

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.string().required("Phone is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const WHATSAPP_NUMBER = "+91 8639176137";
        const encodedText = encodeURIComponent(
          `*New Contact Inquiry*\n\n` +
          `*Name:* ${values.name}\n` +
          `*Phone:* ${values.phone}\n` +
          `*Email:* ${values.email}\n` +
          `*Message:* ${values.message}`
        );
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

        setOpenSnackbar(true);
        window.open(whatsappUrl, "_blank");

        setTimeout(() => {
          resetForm();
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    },
  });

  return (
    <Box sx={{ bgcolor: "#fff", pb: 10 }}>
      {/* Header with Blue Wave Effect */}
      <Box
        sx={{
          background: LOGO_BLUE,
          color: "white",
          pt: 10,
          pb: 15,
          textAlign: "center",
          borderRadius: "0 0 50% 50% / 0 0 15% 15%", // Simple curve effect
          mb: -10,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, fontFamily: "Poppins" }}>
          Contact Us
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} sx={{ background: "#fff", p: 2, borderRadius: 2 }}>
          
          {/* Left Side: Google Map Integration */}
      <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "350px", md: "500px" },
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
                border: "1px solid #eee",
              }}
            >
              {/* Pointing directly to your Balaji Nagar, Siripuram address */}
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=9-29-14/2,+Balaji+Nagar,+Siripuram,+Visakhapatnam,+Andhra+Pradesh+530003&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
            <Typography variant="body2" sx={{ mt: 2, color: "#666", textAlign: "center" }}>
              2nd Floor, 9-29-14/2, Balaji Nagar, Siripuram, Visakhapatnam - 530003
            </Typography>
          </Grid>

          {/* Right Side: Contact Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: { xs: 2, md: 4 } }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: "#333" }}>
                Send us an Email
              </Typography>

              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 600 }}>Name*</Typography>
                    <TextField
                      fullWidth
                      name="name"
                      placeholder="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 600 }}>Phone Number*</Typography>
                    <TextField
                      fullWidth
                      name="phone"
                      placeholder="Phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 600 }}>Email*</Typography>
                    <TextField
                      fullWidth
                      name="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 600 }}>Message*</Typography>
                    <TextField
                      fullWidth
                      name="message"
                      multiline
                      rows={4}
                      placeholder="Message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      error={formik.touched.message && Boolean(formik.errors.message)}
                      helperText={formik.touched.message && formik.errors.message}
                    />
                  </Grid>
                </Grid>

                {loading && <LinearProgress sx={{ mt: 2 }} />}

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 3,
                    px: 5,
                    py: 1.2,
                    bgcolor: LOGO_GREEN,
                   "&:hover": { bgcolor: LOGO_GREEN, opacity: 0.9 },
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="success" sx={{ width: "100%",bgcolor: LOGO_GREEN, color: '#fff' }}>
          Your inquiry has been sent to WhatsApp!
        </Alert>
      </Snackbar>
    </Box>
  );
}