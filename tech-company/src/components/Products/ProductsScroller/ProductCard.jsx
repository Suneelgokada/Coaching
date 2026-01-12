// "use client";

// import { Box, Typography } from "@mui/material";

// export default function ProductCard({ product, index }) {
//   return (
//     <Box
//       sx={{
//         minWidth: 340,
//         height: "85vh",
//         position: "relative",
//         overflow: "hidden",
//         borderRadius: 1.5,
//         backgroundColor: "#fff",      // 🔥 Bright White Background
//         boxShadow: "0 4px 20px rgba(0,0,0,0.05)", // Card elevation kosam light shadow
//         cursor: "pointer",
//         flexShrink: 0,
//         border: "1px solid #f0f0f0",  // White card border
//         transition: "all 0.3s ease",

//         "&:hover .image": {
//           opacity: 1,
//           transform: "scale(1.2)",    // Smooth zoom
//         },
//         "&:hover .overlay": {
//           opacity: 1,
//         },
//         "&:hover .text-content": {
//           color: "#fff",              // Hover chesthe text White avthundi
//         }
//       }}
//     >
//       {/* Background Image (Visible only on Hover) */}
//       <Box
//         className="image"
//         sx={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage: `url(${product.image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           opacity: 0,
//           transition: "0.5s ease",
//           zIndex: 0,
//         }}
//       />

//       {/* Dark Overlay (Hover lo brightness adjust chesi text ni highlight chestundi) */}
//       <Box
//         className="overlay"
//         sx={{
//           position: "absolute",
//           inset: 0,
//           background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)",
//           opacity: 0,
//           transition: "0.3s ease",
//           zIndex: 1,
//         }}
//       />

//       {/* Text Section (Top lo display avvadaniki) */}
//       <Box
//         className="text-content"
//         sx={{
//           position: "relative",
//           zIndex: 2,
//           p: 4,
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-start", // 🔥 Text ni Card paina (Top) ki move chesanu
//           color: "#000",                // 🔥 Default text Black
//           transition: "color 0.3s ease",
//         }}
//       >
//         {/* Card Number */}
//         <Typography 
//           variant="h1" 
//           sx={{ 
//             fontSize: "4.5rem", 
//             fontWeight: 900, 
//             opacity: 0.1,               // Normal ga light ga background la untundi
//             lineHeight: 1,
//             mb: 1
//           }}
//         >
//           {index + 1 < 10 ? `0${index + 1}` : index + 1}
//         </Typography>

//         {/* Product Title */}
//         <Typography 
//           variant="h5" 
//           sx={{ 
//             fontWeight: 700,
//             textTransform: "uppercase",
//             letterSpacing: "1px"
//           }}
//         >
//           {product.title}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
// "use client";
// import { Box, Typography } from "@mui/material";

// export default function ProductCard({ product, index }) {
//   return (
//     <Box
//       sx={{
//         minWidth: { xs: 320, md: 400 }, 
//         maxWidth: { xs: 320, md: 400 }, 
//         height: "85vh",
//         position: "relative",
//         overflow: "hidden",
//         borderRadius: 2,
//         backgroundColor: "#fff",
//         boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//         cursor: "pointer",
//         flexShrink: 0,
//         border: "1px solid #f0f0f0",
//         transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",

//         "&:hover .image": { opacity: 1, transform: "scale(1.15)" },
//         "&:hover .overlay": { opacity: 1 },
//         "&:hover .text-content": { color: "#ffffff" }, // 🔥 Pure Bright White on Hover
//         "&:hover .desc-text": { color: "#ffffff", opacity: 0.9 } // 🔥 Bright White Desc
//       }}
//     >
//       {/* Background Image */}
//       <Box
//         className="image"
//         sx={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage: `url(${product.image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           opacity: 0,
//           transition: "0.6s ease",
//           zIndex: 0,
//         }}
//       />

//       {/* Darker Overlay for Text Clarity on Hover */}
//       <Box
//         className="overlay"
//         sx={{
//           position: "absolute",
//           inset: 0,
//           background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%)",
//           opacity: 0,
//           transition: "0.4s ease",
//           zIndex: 1,
//         }}
//       />

//       {/* Text Section */}
//       <Box
//         className="text-content"
//         sx={{
//           position: "relative",
//           zIndex: 2,
//           p: 4,
//           mt: 40, // 🔥 Text ni koncham kindhaki dhinchanu (Top Margin)
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-start",
//           color: "#1a1a1a", // Stronger black for better normal visibility
//           transition: "all 0.3s ease",
//           boxSizing: "border-box", 
//         }}
//       >
//         {/* Index Number */}
//         <Typography 
//           variant="h1" 
//           sx={{ 
//             fontSize: "5rem", 
//             fontWeight: 900, 
//             opacity: 0.12, // Subtle increase in visibility
//             lineHeight: 1, 
//             mb: 1 
//           }}
//         >
//           {index + 1 < 10 ? `0${index + 1}` : index + 1}
//         </Typography>

//         {/* Title */}
//         <Typography 
//           variant="h5" 
//           sx={{ 
//             fontWeight: 800, // Extra bold for professional look
//             textTransform: "uppercase", 
//             letterSpacing: "1px",
//             mb: 2,
//             whiteSpace: "normal",
//             wordBreak: "break-word",
//             lineHeight: 1.3
//           }}
//         >
//           {product.title}
//         </Typography>

//         {/* Description */}
//         {product.description && (
//           <Typography
//             className="desc-text"
//             variant="body2"
//             sx={{
//               fontWeight: 500, // Slightly heavier weight for brightness
//               lineHeight: 1.6,
//               color: "#444", 
//               whiteSpace: "normal",
//               overflow: "hidden",
//               display: "-webkit-box",
//               WebkitLineClamp: 6, // 6 lines allowed
//               WebkitBoxOrient: "vertical",
//               transition: "all 0.3s ease",
//               textAlign: "left",
//               fontSize: "0.95rem"
//             }}
//           >
//             {product.description}
//           </Typography>
//         )}
//       </Box>
//     </Box>
//   );
// }

// "use client";

// import { Box, Typography } from "@mui/material";
// import Rating from "@mui/material/Rating";

// export default function ProductCard({ product, index }) {
//   return (
//     <Box
//       sx={{
//         width: 480,
//         height: 700,
//         flexShrink: 0,
//         position: "relative",
//         // borderRadius: 4,
//         overflow: "hidden",
//         backgroundColor: "#ffffff",
//         boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
//         cursor: "pointer",

//         "&:hover .imageLayer": {
//           opacity: 1,
//           transform: "scale(1)",
//         },
//         "&:hover .overlay": {
//           opacity: 1,
//         },
//         "&:hover .defaultContent": {
//           opacity: 0,
//         },
//       }}
//     >
//       {/* DEFAULT CONTENT */}
//       <Box
//         className="defaultContent"
//         sx={{
//           height: "100%",
//           p: 4,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           transition: "opacity 0.4s ease",
//           zIndex: 2,
//           position: "relative",
//         }}
//       >
//         {/* BIG NUMBER */}
//         <Typography
//           sx={{
//             fontSize: "140px",
//             fontWeight: 700,
//             lineHeight: 1,
//             color: "rgba(0,0,0,0.08)",
//             position: "absolute",
//             top: 24,
//             left: 24,
//           }}
//         >
//           {index + 1}
//         </Typography>

//         {/* TITLE */}
//         <Typography variant="h6" fontWeight={600}>
//           {product.title}
//         </Typography>

//         {/* ⭐ RATING */}
//         <Rating
//           value={product.rating || 4.5}
//           precision={0.5}
//           readOnly
//           size="small"
//           sx={{ mt: 0.8 }}
//         />

//         {/* DESCRIPTION */}
//         <Typography
//           variant="body2"
//           color="text.secondary"
//           sx={{ mt: 1 }}
//         >
//           {product.description}
//         </Typography>
//       </Box>

//       {/* IMAGE */}
//       <Box
//         className="imageLayer"
//         sx={{
//           position: "absolute",
//           inset: 0,
//           opacity: 0,
//           transform: "scale(1.05)",
//           transition: "all 0.5s ease",
//           zIndex: 1,
//         }}
//       >
//         <img
//           src={product.image}
//           alt={product.title}
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//           }}
//         />
//       </Box>

//       {/* OVERLAY */}
//       <Box
//         className="overlay"
//         sx={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.25))",
//           opacity: 0,
//           transition: "opacity 0.4s ease",
//           zIndex: 3,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           p: 4,
//         }}
//       >
//         <Typography variant="h6" fontWeight={600} sx={{ color: "#fff" }}>
//           {product.title}
//         </Typography>

//         {/* ⭐ RATING (HOVER) */}
//         <Rating
//           value={product.rating || 4.5}
//           precision={0.5}
//           readOnly
//           size="small"
//           sx={{
//             mt: 0.6,
//             "& .MuiRating-iconFilled": { color: "#FFD700" },
//           }}
//         />

//         <Typography
//           variant="body2"
//           sx={{ color: "rgba(255,255,255,0.85)", mt: 1 }}
//         >
//           {product.description}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }


// "use client";

// import { Box, Typography, Rating } from "@mui/material";

// export default function ProductCard({ product, index, isMobile }) {
//   return (
//     <Box
//       sx={{
//         // 🔥 Responsive Width: Mobile lo full width, Desktop lo fixed
//         width: { xs: "100%", md: 480 },
//         // 🔥 Responsive Height: Desktop lo 90% of screen height
//         height: { xs: "500px", md: "90vh" }, 
        
//         flexShrink: 0,
//         position: "relative",
//         overflow: "hidden",
//         backgroundColor: "#ffffff",
//         boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
//         cursor: "pointer",
//         borderRadius: isMobile ? 4 : 0,

//         "&:hover .imageLayer": { opacity: 1, transform: "scale(1)" },
//         "&:hover .overlay": { opacity: 1 },
//         "&:hover .defaultContent": { opacity: { md: 0 } },
//       }}
//     >
//       {/* DEFAULT CONTENT */}
//       <Box
//         className="defaultContent"
//         sx={{
//           height: "100%",
//           p: 4,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           transition: "opacity 0.4s ease",
//           zIndex: 2,
//           position: "relative",
//           // Mobile lo content eppudu black text clarity undali kabatti background
//           background: isMobile ? "rgba(255,255,255,0.8)" : "transparent",
//         }}
//       >
//         <Typography
//           sx={{
//             fontSize: { xs: "80px", md: "140px" },
//             fontWeight: 700,
//             lineHeight: 1,
//             color: "rgba(0,0,0,0.08)",
//             position: "absolute",
//             top: 24,
//             left: 24,
//           }}
//         >
//           {index + 1}
//         </Typography>

//         <Typography variant="h6" fontWeight={700} color="#000">
//           {product.title}
//         </Typography>

//         <Rating value={product.rating || 4.5} precision={0.5} readOnly size="small" sx={{ mt: 0.8 }} />

//         <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//           {product.description}
//         </Typography>
//       </Box>

//       {/* IMAGE LAYER */}
//       <Box
//         className="imageLayer"
//         sx={{
//           position: "absolute",
//           inset: 0,
//           opacity: isMobile ? 1 : 0, // Mobile lo image default ga kanapadali
//           transform: isMobile ? "none" : "scale(1.05)",
//           transition: "all 0.5s ease",
//           zIndex: 1,
//         }}
//       >
//         <img
//           src={product.image}
//           alt={product.title}
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//       </Box>

//       {/* OVERLAY (Hover for Desktop, Static for Mobile text clarity) */}
//       <Box
//         className="overlay"
//         sx={{
//           position: "absolute",
//           inset: 0,
//           background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3))",
//           opacity: isMobile ? 1 : 0,
//           transition: "opacity 0.4s ease",
//           zIndex: 3,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           p: 4,
//         }}
//       >
//         <Typography variant="h5" fontWeight={700} sx={{ color: "#fff" }}>
//           {product.title}
//         </Typography>
//         <Rating value={product.rating || 4.5} precision={0.5} readOnly size="small" sx={{ mt: 1, "& .MuiRating-iconFilled": { color: "#FFD700" } }} />
//         <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", mt: 1 }}>
//           {product.description}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }


// "use client";

// import { Box, Typography } from "@mui/material";
// import Rating from "@mui/material/Rating";

// export default function ProductCard({ product, index }) {
//   return (
//     <Box
//       sx={{
//         /* DESKTOP (UNCHANGED) */
//         width: 480,
//         height: 600,
//         flexShrink: 0,
//         position: "relative",
//         overflow: "hidden",
//         backgroundColor: "#ffffff",
//         boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
//         cursor: "pointer",

//         "&:hover .imageLayer": {
//           opacity: 1,
//           transform: "scale(1)",
//         },
//         "&:hover .overlay": {
//           opacity: 1,
//         },
//         "&:hover .defaultContent": {
//           opacity: 0,
//         },

//         /* 📱 MOBILE (<=600px) */
//         "@media (max-width:600px)": {
//           width: "92vw",
//           height: 540,
//           margin: "24px auto",
//           cursor: "default",
//         },

//         /* 📱 TABLET (<=768px) */
//         "@media (max-width:768px)": {
//           width: "100%",   // ✅ full width like CompanyIntroCard image
//           height: 320,     // ✅ same height as CompanyIntroCard image
//           margin: "24px auto",
//           cursor: "default",
//         },
//       }}
//     >

//   {/* ⭐ LOGO TOP-RIGHT POSITION ⭐ */}
// {product.logo && (
//   <Box
//     sx={{
//       position: "absolute",
//       top: 24,
//       right: 24,
//       zIndex: 4,
//       // 1. Size ni ikkada penchutunnam (50 nundi 80-100 ki try cheyandi)
//       width: 90,  
//       height: 90,
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
      
//       /* Optional: Mobile lo koncham size thaggali anukunte */
//       "@media (max-width:600px)": {
//         width: 70,
//         height: 70,
//         top: 16,
//         right: 16,
//       },
//     }}
//   >
//     <img
//       src={product.logo}
//       alt="brand logo"
//       style={{ 
//         maxWidth: "100%", 
//         maxHeight: "100%", 
//         objectFit: "contain",
//         // 2. Inkochem zoom kavali ante 'scale' use cheyandi
//         transform: "scale(1.2)", 
//         filter: "drop-shadow(0px 6px 12px rgba(0,0,0,0.25))" 
//       }}
//     />
//   </Box>
// )}
//       {/* DEFAULT CONTENT */}
//       <Box
//         className="defaultContent"
//         sx={{
//           height: "100%",
//           p: 4,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         <Typography
//           sx={{
//             fontSize: "140px",
//             fontWeight: 700,
//             lineHeight: 1,
//             color: "rgba(0,0,0,0.08)",
//             position: "absolute",
//             top: 24,
//             left: 24,
//           }}
//         >
//           {index + 1}
//         </Typography>

//         <Typography variant="h6" fontWeight={600}>
//           {product.title}
//         </Typography>

//         <Rating value={product.rating || 4.5} readOnly size="small" sx={{ mt: 0.8 }} />

//         <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//           {product.description}
//         </Typography>
//       </Box>

//       {/* IMAGE */}
//       <Box
//         className="imageLayer"
//         sx={{
//           position: "absolute",
//           inset: 0,
//           opacity: 0,
//           transform: "scale(1.05)",
//           transition: "all 0.5s ease",
//           zIndex: 1,

//           "@media (max-width:600px)": {
//             opacity: 1,
//             transform: "scale(1)",
//           },
//           "@media (max-width:768px)": {
//             opacity: 1,
//             transform: "scale(1)",
//           },
//         }}
//       >
//         <img
//           src={product.image}
//           alt={product.title}
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//       </Box>

//       {/* OVERLAY */}
//       <Box
//         className="overlay"
//         sx={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.25))",
//           opacity: 0,
//           zIndex: 3,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           p: 4,

//           "@media (max-width:600px)": {
//             opacity: 1,
//           },
//           "@media (max-width:768px)": {
//             opacity: 1,
//           },
//         }}
//       >
//         <Typography variant="h6" fontWeight={600} sx={{ color: "#fff" }}>
//           {product.title}
//         </Typography>

//         <Rating value={product.rating || 4.5} readOnly size="small" />

//         <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", mt: 1 }}>
//           {product.description}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }


"use client";

import { Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        /* DESKTOP */
        width: 480,
        height: 600,
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        borderRadius: 3,
        boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",

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
          opacity: 0,
          transition: "opacity 0.4s ease",
          zIndex: 5,
        },

        "&:hover": {
          boxShadow: "0 30px 80px rgba(99, 102, 241, 0.25)",
          transform: "translateY(-8px)",
        },

        "&:hover::before": {
          opacity: 1,
        },

        "&:hover .imageLayer": {
          opacity: 1,
          // ✅ removed transform - no scaling, no blur
        },
        "&:hover .overlay": {
          opacity: 1,
        },
        "&:hover .defaultContent": {
          opacity: 0,
        },

        /* 📱 MOBILE (<=600px) */
        "@media (max-width:600px)": {
          width: "92vw",
          height: 540,
          margin: "24px auto",
          cursor: "default",
          "&:hover": {
            transform: "none",
          },
        },

        /* 📱 TABLET (<=768px) */
        "@media (max-width:768px)": {
          width: "100%",
          height: 320,
          margin: "24px auto",
          cursor: "default",
          "&:hover": {
            transform: "none",
          },
        },
      }}
    >
      {/* ⭐ PREMIUM LOGO WITH GLASSMORPHISM ⭐ */}
      {product.logo && (
        <Box
          component={motion.div}
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? [0, -5, 5, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
          sx={{
            position: "absolute",
            top: 24,
            right: 24,
            zIndex: 6,
            width: 90,
            height: 90,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.95)", // ✅ increased opacity
            border: "2px solid rgba(255, 255, 255, 0.8)", // ✅ more visible border
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)", // ✅ stronger shadow
            transition: "all 0.3s ease",

            "@media (max-width:600px)": {
              width: 70,
              height: 70,
              top: 16,
              right: 16,
            },
          }}
        >
          <img
            src={product.logo}
            alt="brand logo"
            style={{
              maxWidth: "75%",
              maxHeight: "75%",
              objectFit: "contain",
              filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.2))", // ✅ stronger shadow
            }}
          />
        </Box>
      )}

      {/* DEFAULT CONTENT WITH GRADIENT NUMBER */}
      <Box
        className="defaultContent"
        sx={{
          height: "100%",
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          zIndex: 2,
          transition: "opacity 0.4s ease",
        }}
      >
        {/* Premium gradient number */}
        <Typography
          component={motion.div}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          sx={{
            fontSize: "140px",
            fontWeight: 800,
            lineHeight: 1,
            background: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.15) 100%)", // ✅ increased from 0.1 to 0.15
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            position: "absolute",
            top: 24,
            left: 24,
            transition: "all 0.3s ease",
          }}
        >
          {index + 1}
        </Typography>

        {/* Title with gradient on hover */}
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            background: isHovered
              ? "linear-gradient(135deg, #1e293b 0%, #6366f1 100%)"
              : "#1e293b",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: isHovered ? "transparent" : "#1e293b",
            transition: "all 0.3s ease",
          }}
        >
          {product.title}
        </Typography>

        {/* Premium Rating */}
        <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 1 }}>
          <Rating
            value={product.rating || 4.5}
            readOnly
            size="small"
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#fbbf24",
              },
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: "#64748b",
              fontWeight: 600,
              fontSize: "0.75rem",
            }}
          >
            {product.rating || 4.5}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "#64748b",
            mt: 1.5,
            lineHeight: 1.6,
          }}
        >
          {product.description}
        </Typography>

        {/* Premium CTA Badge */}
        <Box
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          sx={{
            mt: 2,
            px: 2,
            py: 0.8,
            borderRadius: "999px",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            color: "white",
            fontSize: "0.75rem",
            fontWeight: 600,
            display: "inline-block",
            alignSelf: "flex-start",
            boxShadow: "0 4px 14px rgba(99, 102, 241, 0.3)",
            cursor: "pointer",
          }}
        >
          View Details →
        </Box>
      </Box>

      {/* IMAGE WITH OVERLAY EFFECT - ✅ FULL HD QUALITY */}
      <Box
        className="imageLayer"
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0,
          transform: "scale(1)", // ✅ removed scale to prevent blur
          transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)", // ✅ only opacity transition
          zIndex: 1,

          /* ✅ Removed overlay gradient completely for full HD clarity */
          
          "@media (max-width:600px)": {
            opacity: 1,
            transform: "scale(1)",
          },
          "@media (max-width:768px)": {
            opacity: 1,
            transform: "scale(1)",
          },
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            imageRendering: "-webkit-optimize-contrast", // ✅ crisp image rendering
            backfaceVisibility: "hidden", // ✅ prevents blur during animation
            transform: "translateZ(0)", // ✅ GPU acceleration for sharp rendering
          }}
        />
      </Box>

      {/* PREMIUM OVERLAY WITH GLASSMORPHISM - ✅ SHARP TEXT, NO BLUR */}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2))", // ✅ darker for text readability
          opacity: 0,
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 4,
          transition: "opacity 0.4s ease",

          "@media (max-width:600px)": {
            opacity: 1,
          },
          "@media (max-width:768px)": {
            opacity: 1,
          },
        }}
      >
        {/* Decorative gradient line - ✅ BRIGHTER */}
        <Box
          sx={{
            width: 60,
            height: 4,
            borderRadius: 2,
            background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
            mb: 2,
            boxShadow: "0 2px 8px rgba(99, 102, 241, 0.5)", // ✅ added glow
          }}
        />

        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            color: "#fff",
            textShadow: "0 2px 12px rgba(0,0,0,0.5)", // ✅ stronger shadow for readability
          }}
        >
          {product.title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <Rating
            value={product.rating || 4.5}
            readOnly
            size="small"
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#fbbf24",
                filter: "drop-shadow(0 2px 4px rgba(251, 191, 36, 0.5))", // ✅ added glow to stars
              },
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.95)", // ✅ increased from 0.9 to 0.95
              fontWeight: 600,
              textShadow: "0 1px 2px rgba(0,0,0,0.3)", // ✅ added text shadow
            }}
          >
            {product.rating || 4.5}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.95)", // ✅ increased from 0.9 to 0.95
            mt: 1.5,
            lineHeight: 1.6,
            textShadow: "0 1px 3px rgba(0,0,0,0.3)", // ✅ added text shadow for readability
          }}
        >
          {product.description}
        </Typography>

        {/* Premium CTA on hover - ✅ MORE VISIBLE */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ delay: 0.2 }}
          sx={{
            mt: 2,
            px: 3,
            py: 1,
            borderRadius: "999px",
            background: "rgba(255,255,255,0.98)", // ✅ increased from 0.95 to 0.98
            color: "#1e293b",
            fontSize: "0.85rem",
            fontWeight: 600,
            display: "inline-block",
            alignSelf: "flex-start",
            boxShadow: "0 4px 20px rgba(255,255,255,0.4)", // ✅ stronger shadow
            cursor: "pointer",
            border: "1px solid rgba(255,255,255,0.5)", // ✅ more visible border
          }}
        >
          Explore Product →
        </Box>
      </Box>
    </Box>
  );
}