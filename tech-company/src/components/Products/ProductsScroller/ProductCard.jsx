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


"use client";

import { Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

export default function ProductCard({ product, index }) {
  return (
    <Box
      sx={{
        /* DESKTOP (UNCHANGED) */
        width: 480,
        height: 600,
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
        cursor: "pointer",

        "&:hover .imageLayer": {
          opacity: 1,
          transform: "scale(1)",
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
        },

        /* 📱 TABLET (<=768px) */
        "@media (max-width:768px)": {
          width: "100%",   // ✅ full width like CompanyIntroCard image
          height: 320,     // ✅ same height as CompanyIntroCard image
          margin: "24px auto",
          cursor: "default",
        },
      }}
    >
      {/* DEFAULT CONTENT */}
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
        }}
      >
        <Typography
          sx={{
            fontSize: "140px",
            fontWeight: 700,
            lineHeight: 1,
            color: "rgba(0,0,0,0.08)",
            position: "absolute",
            top: 24,
            left: 24,
          }}
        >
          {index + 1}
        </Typography>

        <Typography variant="h6" fontWeight={600}>
          {product.title}
        </Typography>

        <Rating value={product.rating || 4.5} readOnly size="small" sx={{ mt: 0.8 }} />

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {product.description}
        </Typography>
      </Box>

      {/* IMAGE */}
      <Box
        className="imageLayer"
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0,
          transform: "scale(1.05)",
          transition: "all 0.5s ease",
          zIndex: 1,

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
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      {/* OVERLAY */}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.25))",
          opacity: 0,
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 4,

          "@media (max-width:600px)": {
            opacity: 1,
          },
          "@media (max-width:768px)": {
            opacity: 1,
          },
        }}
      >
        <Typography variant="h6" fontWeight={600} sx={{ color: "#fff" }}>
          {product.title}
        </Typography>

        <Rating value={product.rating || 4.5} readOnly size="small" />

        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", mt: 1 }}>
          {product.description}
        </Typography>
      </Box>
    </Box>
  );
}
