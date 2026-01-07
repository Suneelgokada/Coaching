// "use client";
// import { motion } from "framer-motion";

// import { Box, Typography } from "@mui/material";

// export default function StickyInfoPanel({ product }) {
//   if (!product) return null;

//   return (
//     <Box
//       sx={{
//         height: "100%",
//         p: 6,
//         color: "#272525ff",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage: `url(${product.image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           filter: "blur(12px)",
//           opacity: 0.25,
//           zIndex: 0,
//         }}
//       />

//       <Box
//         sx={{
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         <Typography variant="overline" sx={{ opacity: 0.7 }}>
//           Product
//         </Typography>

//         <Typography variant="h3" sx={{ my: 2, fontWeight: 700 }}>
//           {product.title}
//         </Typography>

//         <Typography variant="body1" sx={{ maxWidth: 420 }}>
//           {product.description}
//         </Typography>
//       </Box>
//       {/* <Box
//   sx={{
//     position: "absolute",
//     bottom: 24,
//     left: "50%",
//     transform: "translateX(-50%)",
//     px: 3,
//     py: 1,
//     borderRadius: "999px",
//     background: "rgba(255,255,255,0.75)",
//     backdropFilter: "blur(10px)",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
//     display: "flex",
//     alignItems: "center",
//     gap: 1,
//     zIndex: 2,
//     pointerEvents: "none",
//   }}
// >
//   <Typography
//     variant="caption"
//     sx={{
//       fontWeight: 600,
//       letterSpacing: "0.08em",
//       color: "#333",
//     }}
//   >
//     SCROLL FOR MORE ↓
//   </Typography>
// </Box> */}
// <motion.div
//   initial={{ opacity: 0, y: 8 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8, ease: "easeOut" }}
//   style={{
//     position: "absolute",
//     bottom: 24,
//     left: "50%",
//     transform: "translateX(-50%)",
//     zIndex: 2,
//     pointerEvents: "none",
//   }}
// >
//   <motion.div
//     animate={{ y: [0, 6, 0] }}
//     transition={{
//       duration: 1.6,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}
//   >
//     <Box
//       sx={{
//         px: 3,
//         py: 1,
//         borderRadius: "999px",
//         background: "rgba(255,255,255,0.75)",
//         backdropFilter: "blur(10px)",
//         boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       <Typography
//         variant="caption"
//         sx={{
//           fontWeight: 600,
//           letterSpacing: "0.08em",
//           color: "#333",
//         }}
//       >
//         SCROLL FOR MORE ↓
//       </Typography>
//     </Box>
//   </motion.div>
// </motion.div>

//     </Box>
//   );
// }


// "use client";
// import { motion } from "framer-motion";
// import { Box, Typography } from "@mui/material";

// export default function StickyInfoPanel({ product }) {
//   if (!product) return null;

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" }, // Split layout
//         backgroundColor: "#fff",
//         borderRadius: 2,
//         overflow: "hidden",
//         border: "1px solid #f0f0f0",
//       }}
//     >
//       {/* Left Side: Hero Image */}
//       <Box
//         sx={{
//           width: { xs: "100%", md: "50%" },
//           height: { xs: "50%", md: "100%" },
//           backgroundImage: `url(${product.image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* Right Side: Content */}
//       <Box
//         sx={{
//           width: { xs: "100%", md: "50%" },
//           p: { xs: 4, md: 8 },
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           backgroundColor: "#fff",
//         }}
//       >
//         <Typography variant="overline" sx={{ color: "#5142bf", fontWeight: 700, letterSpacing: 2 }}>
//           LATEST PROJECT
//         </Typography>

//         <Typography variant="h2" sx={{ my: 2, fontWeight: 800, color: "#000", fontSize: { xs: "2.5rem", md: "4rem" } }}>
//           {product.title}
//         </Typography>

//         <Typography variant="body1" sx={{ color: "#666", maxWidth: 500, lineHeight: 1.8, fontSize: "1.1rem" }}>
//           {product.description}
//         </Typography>

//         {/* Scroll Motion Hint */}
//         <motion.div
//           animate={{ x: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//           style={{ marginTop: "40px", display: "flex", alignItems: "center", gap: "10px" }}
//         >
//           <Box sx={{ width: 40, height: 2, bgcolor: "#5142bf" }} />
//           <Typography variant="caption" sx={{ fontWeight: 800, color: "#5142bf" }}>
//             SCROLL TO VIEW WORKS
//           </Typography>
//         </motion.div>
//       </Box>
//     </Box>
//   );
// }