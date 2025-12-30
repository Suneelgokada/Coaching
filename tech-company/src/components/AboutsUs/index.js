// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Container,
//   Typography,
//   Tabs,
//   Tab,
//   Grid,
//   Paper,
//   styled,
// } from "@mui/material";
// import Image from "next/image";
// import CEOSection from "../CEOSection/index";

// /* ---------------- CUSTOM TAB ---------------- */
// const CustomTab = styled(Tab)(() => ({
//   textTransform: "none",
//   fontSize: "1.1rem",
//   fontWeight: 600,
//   color: "#0B2343",
//   paddingBottom: "12px",
//   minWidth: "150px",
//   zIndex: 1,
//   transition: "color 0.3s ease",
//   "&.Mui-selected": {
//     color: "#0B2343",
//   },
//   "&:hover": {
//     color: "#0B2343",
//   },
// }));

// /* ---------------- VALUES DATA ---------------- */
// const values = [
//   {
//     title: "Integrity",
//     description: "We uphold honesty and transparency in all our actions.",
//     color: "linear-gradient(to bottom right, #0b2343, #1a3a5c)",
//     icon: "★",
//   },
//   {
//     title: "Innovation",
//     description: "We embrace creativity and forward-thinking solutions.",
//     color: "linear-gradient(to bottom right, #008c94, #00b8a9)",
//     icon: "⚡",
//   },
//   {
//     title: "Quality",
//     description: "We deliver products and services that exceed expectations.",
//     color: "linear-gradient(to bottom right, #bba14f, #d4c06a)",
//     icon: "✔",
//   },
//   {
//     title: "Sustainability",
//     description: "We are committed to building a greener future.",
//     color: "linear-gradient(to bottom right, #4a6cf7, #6b8df9)",
//     icon: "🌱",
//   },
// ];

// const milestones = [
//   { year: '1996', event: 'VTC Corporation Founded', description: 'Started with 5 brand partnerships' },
//   { year: '2004', event: 'Regional Expansion', description: 'Expanded operations across Andhra Pradesh' },
//   { year: '2012', event: 'Digital Transformation', description: 'Launched online ordering system' },
//   { year: '2020', event: '40+ Brand Partners', description: 'Became authorized distributor for 40+ brands' },
//   { year: '2025', event: 'Market Leader', description: '2500+ satisfied clients and growing' }
// ];


// const teamImages = [
//   "/assets/team1.jpg",
//   "/assets/team2.jpg",
//   "/assets/team3.jpg",
// ];

// /* ---------------- MAIN COMPONENT ---------------- */
// const AboutSection = () => {
//   const [tabValue, setTabValue] = useState(0);
//   const [hoverIndex, setHoverIndex] = useState(null);

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   const [ceoIndex, setCeoIndex] = useState(0);
//   const [teamIndex, setTeamIndex] = useState(0);

//   const handleTeamDotClick = (index) => {
//     setTeamIndex(index);
//   };

//   /* ---------------- TAB UNDERLINE ANIMATION ---------------- */
//   const getLineStyles = () => {
//     const active = hoverIndex !== null ? hoverIndex : tabValue;
//     const start = Math.min(tabValue, active);
//     const end = Math.max(tabValue, active);

//     return {
//       left: `${start * 50}%`,
//       width: `${(end - start + 1) * 50}%`,
//       transition: "all 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
//     };
//   };

//   return (
//     <Box sx={{ bgcolor: "#FFFFFF", pt: { xs: 4, md: 10 } }}>
//       <Container maxWidth="lg">

//         <Box sx={{ width: "100%", mb: 6, position: "relative" }}>
//           <Box sx={{ borderBottom: "1px solid #ddd", position: "relative" }}>
//             <Tabs
//               value={tabValue}
//               onChange={handleTabChange}
//               centered
//               variant="fullWidth"
//               TabIndicatorProps={{ style: { display: "none" } }}
//             >
//               {[0, 1].map((i) => (
//                 <CustomTab
//                   key={i}
//                   label={i === 0 ? "Our Mission" : "Our Vision"}
//                   onMouseEnter={() => setHoverIndex(i)}
//                   onMouseLeave={() => setHoverIndex(null)}
//                 />
//               ))}
//             </Tabs>

//             {/* underline */}
//             <Box
//               sx={{
//                 position: "absolute",
//                 bottom: 0,
//                 height: "3px",
//                 bgcolor: "#0B2343",
//                 borderRadius: "2px",
//                 ...getLineStyles(),
//               }}
//             />
//           </Box>
//         </Box>

//         {/* ---------------- CONTENT ---------------- */}
//         <Grid
//           container
//           spacing={4}
//           alignItems="center"
//           justifyContent="space-between"
//           sx={{ mb: 10 }}
//         >
//           {/* Left Image */}
//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 position: "relative",
//                 width: "100%",
//                 height: { xs: "260px", md: "420px" },
//                 borderRadius: "12px",
//                 overflow: "hidden",
//                 background: "#eee",
//                 boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
//               }}
//             >
//               <Image
//                 src="/assets/cera2.png"
//                 alt="About"
//                 fill
//                 style={{ objectFit: "cover" }}
//               />
//             </Box>
//           </Grid>

//           {/* Right Content */}
//           <Grid
//             item
//             xs={12}
//             md={6}
//             sx={{ display: "flex", justifyContent: "center" }}
//           >
//             <Box sx={{ maxWidth: "520px", textAlign: "left" }}>
//               <Typography
//                 variant="h3"
//                 sx={{
//                   fontWeight: 800,
//                   mb: 2,
//                   fontSize: { xs: "1.8rem", md: "2.6rem" },
//                   color: "#12141D",
//                 }}
//               >
//                 {tabValue === 0 ? "Our Mission" : "Our Vision"}
//               </Typography>

//               <Box
//                 sx={{
//                   width: "45px",
//                   height: "3px",
//                   bgcolor: "#0B2343",
//                   mb: 3,
//                   borderRadius: "2px",
//                 }}
//               />

//               <Typography
//                 sx={{
//                   color: "#475569",
//                   fontSize: "1.05rem",
//                   lineHeight: 1.75,
//                 }}
//               >
//                 {tabValue === 0
//                   ? "To provide high-quality building materials and home solutions at competitive prices, backed by expert guidance and reliable service. We aim to be the trusted partner for contractors, builders, and homeowners in creating spaces that last generations."
//                   : "To become South India's most trusted and innovative building materials distributor, setting industry standards in quality, service, and sustainability. We envision a future where every construction project has access to world-class materials."}
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>

//         <Box sx={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", bgcolor: "#eef7fb", py: { xs: 8, md: 12 }, mb: 10 }}>
//           <Container maxWidth="lg">
//             <Box sx={{ textAlign: "center", mb: 8 }}>
//               <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: { xs: "2.2rem", md: "3rem" }, color: "#0B2343", mb: 2 }}>
//                 Our Core Values
//               </Typography>
//               <Box sx={{ width: "60px", height: "4px", bgcolor: "#00a6a6", mx: "auto", mb: 2, borderRadius: "2px" }} />
//             </Box>
//             <Grid
//               container
//               spacing={3}
//               sx={{
//                 width: "100%",
//                 display: "flex",
//                 flexWrap: { xs: "nowrap", md: "nowrap", lg: "nowrap" },
//                 overflowX: { xs: "auto", md: "auto", lg: "visible" },
//                 justifyContent: { xs: "flex-start", md: "flex-start", lg: "center" },
//                 py: 4,
//                 px: { xs: 3, md: 4, lg: 0 },
//                 '&::-webkit-scrollbar': {
//                   height: { xs: '6px', lg: '0px' }
//                 },
//                 '&::-webkit-scrollbar-thumb': {
//                   backgroundColor: 'rgba(0,0,0,0.1)',
//                   borderRadius: '10px',
//                 },
//                 scrollbarWidth: { xs: 'thin', lg: 'none' },
//                 msOverflowStyle: 'none',
//               }}
//             >
//               {[
//                 { title: "Quality Assurance", bg: "linear-gradient(to bottom right, #0b2343, #1a3a5c)", icon: "🛡️", desc: "We guarantee authentic products from authorized manufacturers with proper certifications." },
//                 { title: "Customer First", bg: "linear-gradient(to bottom right, #c9b15b, #e0c56e)", icon: "👥", desc: "Dedicated support team ensuring your satisfaction from inquiry to after-sales service." },
//                 { title: "Trust & Transparency", bg: "linear-gradient(to bottom right, #00a6a6, #008c8c)", icon: "🤝", desc: "Honest pricing, clear communication, and reliable delivery commitments." },
//                 { title: "Continuous Innovation", bg: "linear-gradient(to bottom right, #004d5c, #003640)", icon: "📈", desc: "Staying updated with latest products and technologies in building materials." },
//               ].map((item, index) => (
//                 <Grid
//                   key={index}
//                   item
//                   component={motion.div}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   sx={{
//                     width: { xs: "280px", sm: "300px", lg: "25%" },
//                     minWidth: { xs: "280px", sm: "300px", lg: "25%" },
//                     display: "flex",
//                     flexShrink: 0,
//                   }}
//                 >
//                   <Paper
//                     elevation={0}
//                     sx={{
//                       p: 4,
//                       width: "100%",
//                       borderRadius: "16px",
//                       transition: "all 0.3s ease",
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "flex-start",
//                       textAlign: "left",
//                       minHeight: "320px",
//                       border: "1px solid rgba(0,0,0,0.05)",
//                       bgcolor: "#ffffff",
//                       boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
//                       "&:hover": {
//                         transform: "translateY(-8px)",
//                         boxShadow: "0 20px 40px rgba(11, 35, 67, 0.12)",
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         width: 56,
//                         height: 56,
//                         borderRadius: "12px",
//                         background: item.bg,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         mb: 3,
//                         fontSize: "1.8rem",
//                         color: "white",
//                         boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
//                       }}
//                     >
//                       {item.icon}
//                     </Box>

//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontWeight: 700,
//                         fontSize: "1.25rem",
//                         color: "#0B2343",
//                         mb: 2,
//                         lineHeight: 1.3,
//                       }}
//                     >
//                       {item.title}
//                     </Typography>

//                     <Typography
//                       sx={{
//                         color: "#637381",
//                         fontSize: "0.95rem",
//                         lineHeight: 1.7,
//                       }}
//                     >
//                       {item.desc}
//                     </Typography>
//                   </Paper>
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </Box>

//         <Box sx={{ bgcolor: "#fff", py: 10 }}>
//           <Container maxWidth="lg">
//             <Box
//               component={motion.div}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               sx={{ textAlign: "center", mb: 8 }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: { xs: "2rem", md: "2.25rem" },
//                   fontWeight: 700,
//                   color: "#0b2343",
//                   mb: 2,
//                   fontFamily: "'Playfair Display', serif",
//                 }}
//               >
//                 Our Journey
//               </Typography>
//               <Typography sx={{ fontSize: "1.25rem", color: "#6b7280" }}>
//                 15+ years of excellence and growth
//               </Typography>
//             </Box>

//             <Box sx={{ position: "relative" }}>
//               {/* 🚀 STICK (Vertical Line): 768px (md) nundi kachithamga kanipisthundi */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   height: "100%",
//                   width: "4px",
//                   background: "linear-gradient(to bottom, #0b2343, #008c94, #bba14f)",
//                   display: { xs: "none", md: "block" },
//                 }}
//               />

//               {milestones.map((m, i) => (
//                 <Box
//                   key={m.year}
//                   component={motion.div}
//                   initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8 }}
//                   viewport={{ once: true }}
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     mb: 6,
//                     /* 🚀 MOTION/ZIGZAG: md (768px) nundi row/row-reverse follow avthundi.
//                        Dheenivalla Tablet lo kooda stick meedha content zigzag ga vasthundi.
//                     */
//                     flexDirection: {
//                       xs: "column",
//                       md: i % 2 === 0 ? "row" : "row-reverse"
//                     },
//                   }}
//                 >
//                   {/* Card Content */}
//                   <Box
//                     sx={{
//                       width: { xs: "100%", md: "42%" },
//                       textAlign: { xs: "center", md: i % 2 === 0 ? "right" : "left" }
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: "inline-block",
//                         p: 3,
//                         bgcolor: "#fff",
//                         borderRadius: "12px",
//                         boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
//                         width: { xs: "90%", md: "auto" }
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           fontSize: "1.9rem",
//                           fontWeight: 700,
//                           color: "#bba14f",
//                           fontFamily: "'Playfair Display', serif"
//                         }}
//                       >
//                         {m.year}
//                       </Typography>
//                       <Typography
//                         sx={{
//                           fontSize: "1.25rem",
//                           fontWeight: 700,
//                           color: "#0b2343",
//                           mt: 1
//                         }}
//                       >
//                         {m.event}
//                       </Typography>
//                       <Typography sx={{ color: "#6b7280" }}>
//                         {m.description}
//                       </Typography>
//                     </Box>
//                   </Box>

//                   {/* 🚀 DOT: md (768px) nundi kachithamga stick meedha untundhi */}
//                   <Box
//                     sx={{
//                       width: "16%",
//                       display: { xs: "none", md: "flex" },
//                       justifyContent: "center"
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         width: 24,
//                         height: 24,
//                         bgcolor: "#bba14f",
//                         borderRadius: "50%",
//                         border: "4px solid #fff"
//                       }}
//                     />
//                   </Box>

//                   {/* Opposite Spacer: 768px nundi logic work avvadaniki */}
//                   <Box
//                     sx={{
//                       width: "42%",
//                       display: { xs: "none", md: "block" }
//                     }}
//                   />
//                 </Box>
//               ))}
//             </Box>
//           </Container>
//         </Box>

//         {/* 🚀 FIXED SPACING HERE: Meet Our Team section 🚀 */}
//         <Box
//           component={motion.div}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           sx={{
//             textAlign: "center",
//             width: "100vw",
//             position: "relative",
//             left: "50%",
//             right: "50%",
//             marginLeft: "-50vw",
//             marginRight: "-50vw",
//             bgcolor: "#eef7fb",
//             pt: { xs: -25, sm: 10, md: -40 },
//             pb: 0, // Removed extra padding at bottom
//             mb: -77.8  // Removed extra margin at bottom
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: { xs: "2rem", md: "2.25rem" },
//               fontWeight: 700,
//               color: "#0b2343",
//               mb: 2,
//               fontFamily: "'Playfair Display', serif",
//             }}
//           >
//             Meet Our Team
//           </Typography>

//           <Typography
//             sx={{
//               fontSize: { xs: "1.05rem", md: "1.25rem" },
//               color: "#6b7280",
//               mb: 6 // Spacing between title and content
//             }}
//           >
//             The dedicated team behind VTC Corporation&apos;s success
//           </Typography>

//           <CEOSection />

//           <Grid
//             container
//             spacing={{ xs: 6, md: 12 }}
//             alignItems="center"
//             sx={{
//               pb: { xs: 8, md: 10 }, // Last bit of padding for visual balance, then footer attaches
//               px: { xs: 2, md: 4 }
//             }}
//           >
//             <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
//               <Box
//                 sx={{
//                   position: "relative",
//                   overflow: "hidden",
//                   borderRadius: "24px",
//                   boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
//                   height: { xs: 320, sm: 420, md: 480 },
//                   width: "100%",
//                   maxWidth: "90%", // Center carousel slightly
//                   mx: "auto"
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     height: "100%",
//                     transform: `translateX(-${teamIndex * 100}%)`,
//                     transition: "transform 0.7s ease-in-out",
//                   }}
//                 >
//                   {teamImages.map((img, i) => (
//                     <Box key={i} sx={{ minWidth: "100%", position: "relative" }}>
//                       <Image
//                         src={img}
//                         alt={`Team ${i + 1}`}
//                         fill
//                         style={{ objectFit: "cover" }}
//                         sizes="(max-width: 768px) 100vw, 50vw"
//                       />
//                     </Box>
//                   ))}
//                 </Box>
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     bottom: 16,
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     display: "flex",
//                     gap: 2,
//                   }}
//                 >
//                   {teamImages.map((_, i) => (
//                     <Box
//                       key={i}
//                       onClick={() => handleTeamDotClick(i)}
//                       sx={{
//                         width: 12,
//                         height: 12,
//                         borderRadius: "50%",
//                         cursor: "pointer",
//                         bgcolor: i === teamIndex ? "#0b2343" : "rgba(255,255,255,0.6)",
//                         transition: "background-color 0.3s",
//                       }}
//                     />
//                   ))}
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Grid,
  Paper,
  styled,
} from "@mui/material";
import Image from "next/image";
import CEOSection from "../CEOSection/index";

/* ---------------- CUSTOM TAB ---------------- */
const CustomTab = styled(Tab)(() => ({
  textTransform: "none",
  fontSize: "1.1rem",
  fontWeight: 600,
  color: "#0B2343",
  paddingBottom: "12px",
  minWidth: "150px",
  zIndex: 1,
  transition: "color 0.3s ease",
  "&.Mui-selected": { color: "#0B2343" },
  "&:hover": { color: "#0B2343" },
}));

const milestones = [
  { year: '1996', event: 'VTC Corporation Founded', description: 'Started with 5 brand partnerships' },
  { year: '2004', event: 'Regional Expansion', description: 'Expanded operations across Andhra Pradesh' },
  { year: '2012', event: 'Digital Transformation', description: 'Launched online ordering system' },
  { year: '2020', event: '40+ Brand Partners', description: 'Became authorized distributor for 40+ brands' },
  { year: '2025', event: 'Market Leader', description: '2500+ satisfied clients and growing' }
];

const teamImages = ["/assets/team1.jpg", "/assets/team2.jpg", "/assets/team3.jpg"];

const AboutSection = () => {
  const [tabValue, setTabValue] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [teamIndex, setTeamIndex] = useState(0);

  const handleTabChange = (event, newValue) => setTabValue(newValue);
  const handleTeamDotClick = (index) => setTeamIndex(index);

  const getLineStyles = () => {
    const active = hoverIndex !== null ? hoverIndex : tabValue;
    const start = Math.min(tabValue, active);
    const end = Math.max(tabValue, active);
    return {
      left: `${start * 50}%`,
      width: `${(end - start + 1) * 50}%`,
      transition: "all 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
    };
  };

  return (
    <Box sx={{ bgcolor: "#FFFFFF", pt: { xs: 4, md: 10 } }}>
      <Container maxWidth="xl"> {/* Matches CEO/Team Container Width */}
        
{/* ================= 1. MISSION & VISION SECTION (PERFECT ALIGNMENT) ================= */}
<Box sx={{ width: "100%", mb: { xs: 8, md: 12 } }}>
  {/* TABS HEADER */}
  <Box sx={{ width: "100%", mb: 6, position: "relative" }}>
    <Box sx={{ borderBottom: "1px solid #ddd", position: "relative" }}>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        centered
        variant="fullWidth"
        TabIndicatorProps={{ style: { display: "none" } }}
      >
        {[0, 1].map((i) => (
          <CustomTab
            key={i} 
            label={i === 0 ? "Our Mission" : "Our Vision"}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          />
        ))}
      </Tabs>
      <Box sx={{ position: "absolute", bottom: 0, height: "3px", bgcolor: "#0B2343", borderRadius: "2px", ...getLineStyles() }} />
    </Box>
  </Box>

  {/* CONTENT GRID - Fixed for 1024px and 768px */}
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", lg: "row" },
      alignItems: "center",
      gap: { xs: 4, lg: 0 }, // Gap lg lo 0 unchi padding tho control cheshamu
      px: { xs: 2, md: 4, lg: 4 }
    }}
  >
    {/* 📸 LEFT SIDE: IMAGE (Exact match with CEO/Team size) */}
    <Box sx={{ flex: { xs: "1", lg: "0 0 50%" }, width: "100%", display: "flex", justifyContent: { xs: "center", lg: "flex-end" } }}>
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ width: "100%", maxWidth: "550px" }}>
        <Box sx={{ position: "relative", width: "100%", height: { xs: "300px", sm: "400px", md: "450px", lg: "520px" }, borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.12)" }}>
          <Image src="/assets/aboutus1.jpg" alt="Mission Vision" fill style={{ objectFit: "cover" }} />
        </Box>
      </motion.div>
    </Box>

    {/* ✍️ RIGHT SIDE: TEXT CONTENT (Moved Right for Alignment) */}
    <Box 
      sx={{ 
        flex: { xs: "1", lg: "0 0 50%" }, 
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", lg: "flex-start" },
        // 🚀 1024px+ lo content right ki move avvadaniki padding-left penchanu
        pl: { xs: 0, lg: 12, xl: 15 }, 
        textAlign: { xs: "center", lg: "left" },
        mt: { xs: 4, lg: 0 }
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={tabValue}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', maxWidth: '580px' }} // Width control for symmetry
        >
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: "2rem", md: "2.5rem", lg: "2.8rem" }, color: "#12141D", fontFamily: "'Playfair Display', serif", textAlign: { xs: 'center', lg: 'left' } }}>
            {tabValue === 0 ? "Our Mission" : "Our Vision"}
          </Typography>
          
          <Box sx={{ width: "45px", height: "4px", bgcolor: "#0B2343", mb: 4, borderRadius: "2px", mx: { xs: "auto", lg: 0 } }} />
          
          <Typography sx={{ color: "#475569", fontSize: "1.15rem", lineHeight: 1.8, textAlign: { xs: "center", lg: "justify" } }}>
            {tabValue === 0
              ? "To provide high-quality building materials and home solutions at competitive prices, backed by expert guidance and reliable service. We aim to be the trusted partner for contractors, builders, and homeowners in creating spaces that last generations."
              : "To become South India's most trusted and innovative building materials distributor, setting industry standards in quality, service, and sustainability. We envision a future where every construction project has access to world-class materials."}
          </Typography>
        </motion.div>
      </AnimatePresence>
    </Box>
  </Box>
</Box>

        {/* ================= 2. CORE VALUES SECTION ================= */}
        <Box sx={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", bgcolor: "#eef7fb", py: { xs: 8, md: 12 }, mb: 10 }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: { xs: "2.2rem", md: "3rem" }, color: "#0B2343", mb: 2 }}>Our Core Values</Typography>
              <Box sx={{ width: "60px", height: "4px", bgcolor: "#00a6a6", mx: "auto", mb: 2, borderRadius: "2px" }} />
            </Box>
            <Grid container spacing={3} sx={{ width: "100%", display: "flex", flexWrap: { xs: "nowrap", lg: "nowrap" }, overflowX: { xs: "auto", lg: "visible" }, justifyContent: { xs: "flex-start", lg: "center" }, py: 4, px: { xs: 3, lg: 0 } }}>
              {[
                { title: "Quality Assurance", bg: "linear-gradient(to bottom right, #0b2343, #1a3a5c)", icon: "🛡️", desc: "We guarantee authentic products from authorized manufacturers with proper certifications." },
                { title: "Customer First", bg: "linear-gradient(to bottom right, #c9b15b, #e0c56e)", icon: "👥", desc: "Dedicated support team ensuring your satisfaction from inquiry to after-sales service." },
                { title: "Trust & Transparency", bg: "linear-gradient(to bottom right, #00a6a6, #008c8c)", icon: "🤝", desc: "Honest pricing, clear communication, and reliable delivery commitments." },
                { title: "Continuous Innovation", bg: "linear-gradient(to bottom right, #004d5c, #003640)", icon: "📈", desc: "Staying updated with latest products and technologies in building materials." },
              ].map((item, index) => (
                <Grid key={index} item component={motion.div} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} sx={{ width: { xs: "280px", sm: "300px", lg: "25%" }, minWidth: { xs: "280px", lg: "25%" }, display: "flex", flexShrink: 0 }}>
                  <Paper elevation={0} sx={{ p: 4, width: "100%", borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", minHeight: "320px", border: "1px solid rgba(0,0,0,0.05)", bgcolor: "#ffffff", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", "&:hover": { transform: "translateY(-8px)", boxShadow: "0 20px 40px rgba(11, 35, 67, 0.12)" } }}>
                    <Box sx={{ width: 56, height: 56, borderRadius: "12px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", mb: 3, fontSize: "1.8rem", color: "white" }}>{item.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.25rem", color: "#0B2343", mb: 2 }}>{item.title}</Typography>
                    <Typography sx={{ color: "#637381", fontSize: "0.95rem", lineHeight: 1.7 }}>{item.desc}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* ================= 3. JOURNEY SECTION ================= */}
        <Box sx={{ bgcolor: "#fff", py: 10 }}>
          <Container maxWidth="lg">
            <Box component={motion.div} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} sx={{ textAlign: "center", mb: 8 }}>
              <Typography sx={{ fontSize: "2.25rem", fontWeight: 700, color: "#0b2343", mb: 2, fontFamily: "'Playfair Display', serif" }}>Our Journey</Typography>
              <Typography sx={{ fontSize: "1.25rem", color: "#6b7280" }}>15+ years of excellence and growth</Typography>
            </Box>
            <Box sx={{ position: "relative" }}>
              <Box sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)", height: "100%", width: "4px", background: "linear-gradient(to bottom, #0b2343, #008c94, #bba14f)", display: { xs: "none", md: "block" } }} />
              {milestones.map((m, i) => (
                <Box key={m.year} component={motion.div} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} sx={{ display: "flex", alignItems: "center", mb: 6, flexDirection: { xs: "column", md: i % 2 === 0 ? "row" : "row-reverse" } }}>
                  <Box sx={{ width: { xs: "100%", md: "42%" }, textAlign: { md: i % 2 === 0 ? "right" : "left" } }}>
                    <Box sx={{ display: "inline-block", p: 3, bgcolor: "#fff", borderRadius: "12px", boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}>
                      <Typography sx={{ fontSize: "1.9rem", fontWeight: 700, color: "#bba14f", fontFamily: "'Playfair Display', serif" }}>{m.year}</Typography>
                      <Typography sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#0b2343", mt: 1 }}>{m.event}</Typography>
                      <Typography sx={{ color: "#6b7280" }}>{m.description}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ width: "16%", display: { xs: "none", md: "flex" }, justifyContent: "center" }}><Box sx={{ width: 24, height: 24, bgcolor: "#bba14f", borderRadius: "50%", border: "4px solid #fff" }} /></Box>
                  <Box sx={{ width: "42%", display: { xs: "none", md: "block" } }} />
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ================= 4. MEET OUR TEAM & CEO (Integrated Component) ================= */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{
            textAlign: "center",
            width: "100vw",
            position: "relative",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            bgcolor: "#eef7fb",
            pt: { xs: 8, md: 12 },
            pb: 0,
            mb: -77.8
          }}
        >
          <Typography sx={{ fontSize: { xs: "2rem", md: "2.25rem" }, fontWeight: 700, color: "#0b2343", mb: 2, fontFamily: "'Playfair Display', serif" }}>Meet Our Team</Typography>
          <Typography sx={{ fontSize: { xs: "1.05rem", md: "1.25rem" }, color: "#6b7280", mb: 6 }}>The dedicated team behind VTC Corporation&apos;s success</Typography>
          
          <CEOSection />

          <Grid container spacing={{ xs: 6, md: 12 }} alignItems="center" sx={{ pb: { xs: 8, md: 10 }, px: { xs: 2, md: 4 } }}>
            <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
              <Box sx={{ position: "relative", overflow: "hidden", borderRadius: "24px", boxShadow: "0 10px 15px rgba(0,0,0,0.1)", height: { xs: 320, sm: 420, md: 480 }, width: "100%", maxWidth: "90%", mx: "auto" }}>
                <Box sx={{ display: "flex", height: "100%", transform: `translateX(-${teamIndex * 100}%)`, transition: "transform 0.7s ease-in-out" }}>
                  {teamImages.map((img, i) => (
                    <Box key={i} sx={{ minWidth: "100%", position: "relative" }}>
                      <Image src={img} alt={`Team ${i + 1}`} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
                    </Box>
                  ))}
                </Box>
                <Box sx={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 2 }}>
                  {teamImages.map((_, i) => (
                    <Box key={i} onClick={() => handleTeamDotClick(i)} sx={{ width: 12, height: 12, borderRadius: "50%", cursor: "pointer", bgcolor: i === teamIndex ? "#0b2343" : "rgba(255,255,255,0.6)", transition: "background-color 0.3s" }} />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;