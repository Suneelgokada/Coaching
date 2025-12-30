// "use client";
// import {
//   Box,
//   Typography,
//   TextField,
//   Grid,
//   Button,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Select,
//   LinearProgress,
//   Alert,
//   Snackbar,
// } from "@mui/material";
// import { useFormik } from "formik";
// import { useState } from "react";
// import * as Yup from "yup";
// import { useRouter } from "next/navigation";

// export default function QuotationForm() {
//   const [loading, setLoading] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const router = useRouter();

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       phone: "",
//       steelType: "",
//       material: "",
//       message: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Required"),
//       phone: Yup.string().required("Required"),
//       steelType: Yup.string().required("Required"),
//       material: Yup.string().required("Required"),
//       message: Yup.string().required("Required"),
//     }),
//     onSubmit: async (values, { resetForm }) => {
//       setLoading(true);
//       const now = new Date().toLocaleString();
//       const data = {
//         name: values.name,
//         phone: values.phone,
//         steelType: values.steelType,
//         material: values.material,
//         message: values.message,
//       };

//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_API_BASE}/api/submit-lead`,
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(data),
//           }
//         );

//         if (response.ok) {
//           setOpenSnackbar(true);
//           resetForm();
//           router.push("/thank-you");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   const categoryOptions = [
//     {
//       label: "Modular Switches",
//       values: [
//         "1 Way Switch",
//         "2 Way Switch",
//         "3 Way Switch",
//         "4 Way Switch",
//         "Dimmer Switch",
//         "Bell Push Switch",
//         "USB Socket",
//         "Phone Socket",
//         "TV Socket",
//         "Combination Switches",
//         "Fan Regulator",
//         "Other",
//       ],
//     },
//     {
//       label: "Sanitaryware",
//       values: [
//         "Wall Hung Toilet",
//         "Floor Mounted Toilet",
//         "One Piece Toilet",
//         "Urinals",
//         "Wash Basins",
//         "Bathroom Sinks",
//         "Bidets",
//         "Shower Panels",
//         "Bath Tubs",
//         "Other",
//       ],
//     },
//     {
//       label: "Electric Items",
//       values: [
//         "LED Bulbs",
//         "Tube Lights",
//         "Panel Lights",
//         "Street Lights",
//         "Flood Lights",
//         "Ceiling Fans",
//         "Exhaust Fans",
//         "MCBs",
//         "ELCBs",
//         "Other",
//       ],
//     },
//     {
//       label: "Astral Pipes",
//       values: [
//         "CPVC Pipes",
//         "UPVC Pipes",
//         "SWR Pipes",
//         "Pipe Fittings",
//         "Valves",
//         "Couplings",
//         "Other",
//       ],
//     },
//     {
//       label: "Wash Basin",
//       values: [
//         "Ceramic Pedestal Wash Basin",
//         "Bathroom Steel Sink",
//         "Wall Mounted Commode",
//         "Wall Hung Wash Basin",
//         "Kohler Ceramic Wash Basin",
//         "Bath Shower Faucets",
//         "Counter Top Wash Basin",
//         "Table Top Wash Basin",
//         "Other",
//       ],
//     },
//     {
//       label: "Electrical Switches",
//       values: [
//         "Toggle Switches",
//         "Rocker Switches",
//         "Push Button Switches",
//         "Rotary Switches",
//         "Other",
//       ],
//     },
//     {
//       label: "Bathroom Accessories",
//       values: [
//         "Towel Rods",
//         "Soap Dishes",
//         "Toilet Paper Holders",
//         "Robe Hooks",
//         "Bathroom Shelves",
//         "Mirrors",
//         "Other",
//       ],
//     },
//     {
//       label: "Water Softener",
//       values: [
//         "Manual Water Softener",
//         "Automatic Water Softener",
//         "Industrial Water Softener",
//         "Domestic Water Softener",
//         "Other",
//       ],
//     },
//     {
//       label: "Western Toilet",
//       values: [
//         "Wall Hung Western Toilet",
//         "Floor Mounted Western Toilet",
//         "One Piece Western Toilet",
//         "Two Piece Western Toilet",
//         "Other",
//       ],
//     },
//     {
//       label: "One Piece Toilet Seat",
//       values: [
//         "Standard One Piece",
//         "Elongated One Piece",
//         "Compact One Piece",
//         "Smart One Piece Toilet",
//         "Other",
//       ],
//     },
//     {
//       label: "Cpvc Pipe",
//       values: [
//         "CPVC Hot Water Pipes",
//         "CPVC Cold Water Pipes",
//         "CPVC Plumbing Pipes",
//         "CPVC Fittings",
//         "Other",
//       ],
//     },
//     {
//       label: "Shower Panel",
//       values: [
//         "Stainless Steel Shower Panel",
//         "Glass Shower Panel",
//         "Thermostatic Shower Panel",
//         "Rain Shower Panel",
//         "Multi-Function Shower Panel",
//         "Other",
//       ],
//     },
//   ];

//   const getSubProducts = (product) => {
//     const selected = categoryOptions.find((cat) => cat.label === product);
//     return selected ? selected.values : [];
//   };

//   const subProducts = getSubProducts(formik.values.steelType);

//   return (
//     <Box
//       sx={{
//         maxWidth: "900px",
//         mx: "auto",
//         mt: 6,
//         px: { xs: 2, md: 4 },
//         py: 4,
//         bgcolor: "#fff",
//       }}
//       id="quote"
//     >
//       <Typography
//         variant="h4"
//         sx={{
//           mb: 3,
//           textAlign: "center",
//           fontWeight: 700,
//           fontFamily: "Poppins",
//           color: "#0B2343",
//         }}
//       >
//         Request a Free Quotation
//       </Typography>

//       <form onSubmit={formik.handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid size={{ xs: 12, md: 6 }}>
//             <TextField
//               fullWidth
//               size="small"
//               sx={{
//                 fontFamily: "Poppins",
//                 "& .MuiInputLabel-root": {
//                   fontFamily: "Poppins",
//                 },
//                 "& .MuiInputLabel-root.Mui-focused": {
//                   color: "#0B2343",
//                 },
//                 "& .MuiOutlinedInput-root": {
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#0B2343",
//                   },
//                 },
//               }}
//               label="Name"
//               name="name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               error={formik.touched.name && Boolean(formik.errors.name)}
//               helperText={formik.touched.name && formik.errors.name}
//             />
//           </Grid>
//           <Grid size={{ xs: 12, md: 6 }}>
//             <TextField
//               fullWidth
//               size="small"
//               sx={{
//                 fontFamily: "Poppins",
//                 "& .MuiInputLabel-root": {
//                   fontFamily: "Poppins",
//                 },
//                 "& .MuiInputLabel-root.Mui-focused": {
//                   color: "#0B2343",
//                 },
//                 "& .MuiOutlinedInput-root": {
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#0B2343",
//                   },
//                 },
//               }}
//               label="Phone"
//               name="phone"
//               value={formik.values.phone}
//               onChange={formik.handleChange}
//               error={formik.touched.phone && Boolean(formik.errors.phone)}
//               helperText={formik.touched.phone && formik.errors.phone}
//             />
//           </Grid>
//           <Grid size={{ xs: 12 }}>
//             <FormControl fullWidth size="small" sx={{ fontFamily: "Poppins" }}>
//               <InputLabel sx={{ fontFamily: "Poppins", "&.Mui-focused": { color: "#0B2343" } }}>
//                 Product Category
//               </InputLabel>
//               <Select
//                 name="steelType"
//                 value={formik.values.steelType}
//                 onChange={(e) => {
//                   if (formik.values?.material) {
//                     formik.values.material = "";
//                   }
//                   formik.handleChange(e);
//                 }}
//                 label="Product Category"
//                 sx={{
//                   fontFamily: "Poppins",
//                   "& .MuiInputLabel-root": {
//                     fontFamily: "Poppins",
//                   },
//                   "& .MuiOutlinedInput-notchedOutline": {
//                     borderColor: "#ccc",
//                   },
//                   "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                     borderColor: "#0B2343",
//                   },
//                 }}
//                 error={
//                   formik.touched.steelType && Boolean(formik.errors.steelType)
//                 }
//               >
//                 {categoryOptions.map((cat) => (
//                   <MenuItem
//                     key={cat.label}
//                     value={cat.label}
//                     sx={{ fontFamily: "Poppins" }}
//                   >
//                     {cat.label}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//           {formik.values.steelType && (
//             <Grid size={{ xs: 12 }}>
//               <FormControl fullWidth size="small" sx={{ fontFamily: "Poppins" }}>
//                 <InputLabel sx={{ fontFamily: "Poppins", "&.Mui-focused": { color: "#0B2343" } }}>
//                   Product Type
//                 </InputLabel>
//                 <Select
//                   name="material"
//                   value={formik.values.material}
//                   onChange={formik.handleChange}
//                   label="Product Type"
//                   sx={{
//                     fontFamily: "Poppins",
//                     "& .MuiOutlinedInput-notchedOutline": {
//                       borderColor: "#ccc",
//                     },
//                     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                       borderColor: "#0B2343",
//                     },
//                   }}
//                   error={
//                     formik.touched.material && Boolean(formik.errors.material)
//                   }
//                 >
//                   {subProducts.map((item) => (
//                     <MenuItem
//                       key={item}
//                       value={item}
//                       sx={{ fontFamily: "Poppins" }}
//                     >
//                       {item}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>
//           )}

//           {/* Message Field */}
//           <Grid size={{ xs: 12 }}>
//             <TextField
//               fullWidth
//               size="small"
//               label="Message"
//               name="message"
//               multiline
//               rows={4}
//               value={formik.values.message}
//               onChange={formik.handleChange}
//               error={formik.touched.message && Boolean(formik.errors.message)}
//               helperText={formik.touched.message && formik.errors.message}
//               sx={{
//                 fontFamily: "Poppins",
//                 "& .MuiInputLabel-root": {
//                   fontFamily: "Poppins",
//                 },
//                 "& .MuiInputLabel-root.Mui-focused": {
//                   color: "#0B2343",
//                 },
//                 "& .MuiOutlinedInput-root": {
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#0B2343",
//                   },
//                 },
//               }}
//             />
//           </Grid>
//         </Grid>
//         {loading && (
//           <LinearProgress
//             sx={{
//               mt: 1,
//               "& .MuiLinearProgress-bar": {
//                 backgroundColor: "#0B2343",
//               },
//             }}
//           />
//         )}

//         <Box sx={{ textAlign: "center", mt: 4 }}>
//           <Button
//             type="submit"
//             variant="contained"
//             size="large"
//             sx={{
//               px: 4,
//               py: 1.5,
//               fontWeight: 600,
//               fontSize: "1.1rem",
//               borderRadius: "30px",
//               background: "linear-gradient(to right, #0B2343 0%, #1a4d7a 100%)",
//               color: "#fff",
//               textTransform: "none",
//               fontFamily: "Poppins",
//               "&:hover": {
//                 background: "linear-gradient(to right, #1a4d7a 0%, #0B2343 100%)",
//               },
//             }}
//           >
//             Submit Request
//           </Button>
//         </Box>
//       </form>
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={() => setOpenSnackbar(false)}
//         sx={{ position: "fixed", top: 20, right: 20, zIndex: 1300 }}
//       >
//         <Alert
//           onClose={() => setOpenSnackbar(false)}
//           severity="success"
//           sx={{ width: "100%", fontFamily: "Poppins" }}
//         >
//           Your message has been sent successfully!
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// }


"use client";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  LinearProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export default function QuotationForm() {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      steelType: "",
      material: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      steelType: Yup.string().required("Required"),
      material: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      
      try {
        // 1. WhatsApp Message Prepare cheyadam
        const WHATSAPP_NUMBER = "919100023692";
        const encodedText = encodeURIComponent(
          `*New Quotation Request*\n\n` +
          `*Name:* ${values.name}\n` +
          `*Phone:* ${values.phone}\n` +
          `*Category:* ${values.steelType}\n` +
          `*Product:* ${values.material}\n` +
          `*Message:* ${values.message}`
        );
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

        // 2. Success Actions (Indulo API setup unte fetch pettachu, lekapoyina success chupisthundi)
        setOpenSnackbar(true);
        
        // WhatsApp open chestundi
        window.open(whatsappUrl, "_blank");

        // Form reset and Redirect
        setTimeout(() => {
          resetForm();
          router.push("/");
          setLoading(false);
        }, 1000);

      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    },
  });

  // ... (categoryOptions and getSubProducts are same as before)
  const categoryOptions = [
    { label: "Modular Switches", values: ["1 Way Switch", "2 Way Switch", "Other"] },
    { label: "Sanitaryware", values: ["Wall Hung Toilet", "Wash Basins", "Other"] },
    { label: "Electric Items", values: ["LED Bulbs", "Ceiling Fans", "Other"] },
    { label: "Astral Pipes", values: ["CPVC Pipes", "UPVC Pipes", "Other"] },
    { label: "Wash Basin", values: ["Ceramic Wash Basin", "Table Top Wash Basin", "Other"] },
    { label: "Electrical Switches", values: ["Toggle Switches", "Rocker Switches", "Other"] },
    { label: "Bathroom Accessories", values: ["Towel Rods", "Mirrors", "Other"] },
    { label: "Water Softener", values: ["Manual", "Automatic", "Other"] },
    { label: "Western Toilet", values: ["Wall Hung", "Floor Mounted", "Other"] },
    { label: "One Piece Toilet Seat", values: ["Standard", "Smart Piece", "Other"] },
    { label: "Cpvc Pipe", values: ["CPVC Fittings", "Hot Water Pipes", "Other"] },
    { label: "Shower Panel", values: ["Stainless Steel", "Rain Shower", "Other"] },
  ];

  const getSubProducts = (product) => {
    const selected = categoryOptions.find((cat) => cat.label === product);
    return selected ? selected.values : [];
  };

  const subProducts = getSubProducts(formik.values.steelType);

  return (
    <Box sx={{ maxWidth: "900px", mx: "auto", mt: 6, px: { xs: 2, md: 4 }, py: 4, bgcolor: "#fff" }} id="quote">
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center", fontWeight: 700, fontFamily: "Poppins", color: "#0B2343" }}>
        Request a Free Quotation
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          {/* Form Fields - Same as your UI */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField fullWidth size="small" label="Name" name="name" value={formik.values.name} onChange={formik.handleChange} error={formik.touched.name && Boolean(formik.errors.name)} helperText={formik.touched.name && formik.errors.name} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField fullWidth size="small" label="Phone" name="phone" value={formik.values.phone} onChange={formik.handleChange} error={formik.touched.phone && Boolean(formik.errors.phone)} helperText={formik.touched.phone && formik.errors.phone} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth size="small">
              <InputLabel>Product Category</InputLabel>
              <Select name="steelType" value={formik.values.steelType} onChange={(e) => { formik.setFieldValue("material", ""); formik.handleChange(e); }} label="Product Category">
                {categoryOptions.map((cat) => (
                  <MenuItem key={cat.label} value={cat.label}>{cat.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {formik.values.steelType && (
            <Grid size={{ xs: 12 }}>
              <FormControl fullWidth size="small">
                <InputLabel>Product Type</InputLabel>
                <Select name="material" value={formik.values.material} onChange={formik.handleChange} label="Product Type">
                  {subProducts.map((item) => (
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}
          <Grid size={{ xs: 12 }}>
            <TextField fullWidth size="small" label="Message" name="message" multiline rows={4} value={formik.values.message} onChange={formik.handleChange} error={formik.touched.message && Boolean(formik.errors.message)} helperText={formik.touched.message && formik.errors.message} />
          </Grid>
        </Grid>
        
        {loading && <LinearProgress sx={{ mt: 1, "& .MuiLinearProgress-bar": { backgroundColor: "#0B2343" } }} />}

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button type="submit" variant="contained" size="large" sx={{ px: 4, py: 1.5, borderRadius: "30px", background: "linear-gradient(to right, #0B2343 0%, #1a4d7a 100%)", color: "#fff", textTransform: "none", fontFamily: "Poppins" }}>
            Submit Request
          </Button>
        </Box>
      </form>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%", fontFamily: "Poppins" }}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}