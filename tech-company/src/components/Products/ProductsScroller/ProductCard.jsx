"use client";

import { useRef, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

// Sample Data
const products = [
  {
    id: 1,
    title: "Abhiram Nirman",
    description:
      "Premium real estate presentation website using rich visuals, modern layouts, and luxury color palette.",
    image: "https://himavarshabarla.vercel.app/assets/thumbnails/AbhiramNirman.png",
  },
  {
    id: 2,
    title: "Chalo Gaadi App",
    description:
      "Designed a new in-app section with ecommerce-ready UI using existing components, structure and branding.",
    image: "https://himavarshabarla.vercel.app/assets/thumbnails/ChaloGaadi.png",
  },
  {
    id: 3,
    title: "Email Template",
    description:
      "Responsive email template design in Figma. Balances visuals and text for clarity, ensuring effective brand communication, promotions, and engagement across devices and email clients.",
    image: "https://himavarshabarla.vercel.app/assets/thumbnails/EmailTemplate.png",
  },
  {
    id: 4,
    title: "GenAITools",
    description:
      "Responsive web app for exploring generative AI tools. Features categories, filters, and demos with clean UI, smooth UX, and strong performance.",
    image: "https://himavarshabarla.vercel.app/assets/thumbnails/GenAiTools.png",
  },
  {
    id: 5,
    title: "Inride Mobile App",
    description:
      "Mobile-first ride booking UI using MUI components with optimized flows, direct phone authentication, and intuitive navigation.",
    image: "https://himavarshabarla.vercel.app/assets/thumbnails/InrideApp.png",
  },
  {
    id: 6,
    title: "NapNGo",
    description:
      "A concept-driven website that highlights value proposition and booking flow with strong branding and visual appeal.",
    image: "https://himavarshabarla.vercel.app/assets/thumbnails/NapNGo.png",
  },
  {
    id: 7,
    title: "Nanddhan Steel Roofing",
    description:
      "A performance-focused company website designed to establish trust and increase customer reach in roofing and construction segments.",
    image: "https://himavarshabarla.vercel.app/assets/thumbnails/NsteelRoofing.png",
  },
  {
    id: 8,
    title: "Friend's Portfolio Design",
    description:
      "Modern portfolio design in Figma featuring bold visuals, structured layouts, and interactive elements. Highlights projects with clarity and improves user engagement across devices.",
    image: "https://himavarshabarla.vercel.app/assets/thumbnails/PortfolioFrnd.png",
  },
  {
    id: 9,
    title: "Result Insight Hub",
    description:
      "Clean academic dashboard design in Figma. Highlights grades, insights, and trends with structured layouts, improving comprehension, usability, and decision-making for students and educators.",
    image: "https://himavarshabarla.vercel.app/assets/thumbnails/RIH.png",
  },
  {
    id: 10,
    title: "Restaurant Menu App",
    description:
      "Interactive coffee shop menu card designed in Figma. Focused on usability, clarity, and modern aesthetics to simplify browsing, enhance navigation, and improve customer ordering experience.8",
    image: "https://himavarshabarla.vercel.app/assets/thumbnails/RestaurantMenu.png",
  },
  {
    id: 11,
    title: "Shopify",
    description:
      "Conversion-focused Shopify design with engaging visuals, intuitive navigation, and responsive layouts. Enhances product browsing, usability, and user experience across devices.",
    image: "https://himavarshabarla.vercel.app/assets/thumbnails/Shopify.png",
  },
  {
    id: 12,
    title: "Vishwanath Sports Club",
    description:
      "A complete UI overhaul with brand-aligned visuals and upgraded layout to support modern tourism and entertainment audiences.",
    image: "https://himavarshabarla.vercel.app/assets/thumbnails/VSportsClub.png",
  },
  {
    id: 13,
    title: "Vishwanath Sports Club",
    description:
      "Complete UI overhaul with brand-aligned visuals and modern layout.",
    image: "/products/p3.jpg",
  },
];

export default function ProductCarousel() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Dragging Logic
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Sensitivity
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Box sx={{ bgcolor: "#ffffff", py: 10 }}>
      {/* Container */}
      <Box
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          px: 4,
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </Box>
    </Box>
  );
}

function ProductCard({ product, index }) {
  return (
    <Box
      sx={{
        minWidth: 340,
        height: "85vh",
        position: "relative",
        overflow: "hidden",
        borderRadius: 1.5,
        backgroundColor: "#fff", // Main background white
        color: "#000",          // Default text color black
        flexShrink: 0,
        border: "1px solid #f0f0f0",
        transition: "0.3s ease",
        "&:hover .image": {
          opacity: 1,
          transform: "scale(1.1)",
        },
        "&:hover .content-text": {
          color: "#fff", // Hover chestunnappudu text white avthundi overlay valla
        },
      }}
    >
      {/* Background Image (Visible on Hover) */}
      <Box
        className="image"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${product.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0,
          transition: "0.5s ease",
          zIndex: 0,
        }}
      />

      {/* Hover Overlay (Dark gradient only on hover) */}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%)",
          opacity: 0,
          zIndex: 1,
          transition: "0.3s ease",
          ".MuiBox-root:hover &": { opacity: 1 },
        }}
      />

      {/* Content Text */}
      <Box
        className="content-text"
        sx={{
          position: "relative",
          zIndex: 2,
          p: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          pointerEvents: "none", // Allows dragging through text
        }}
      >
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: "5rem", 
            fontWeight: 800, 
            opacity: 0.1, 
            lineHeight: 1,
            mb: -2
          }}
        >
          {index + 1}
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {product.title}
        </Typography>
      </Box>
    </Box>
  );
}


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
//         backgroundColor: "#fff",      // 🔥 BG White
//         color: "#000",                // Default text Black (Professional look)
//         flexShrink: 0,
//         cursor: "pointer",
//         border: "1px solid #f0f0f0",  // Light border for white theme
//         "&:hover .image": {
//           opacity: 1,
//           transform: "scale(1.3)",
//         },
//         "&:hover .content-text": {
//           color: "#fff",              // Hover lo image vacchinappudu text White avvali
//         },
//         "&:hover .overlay": {
//           opacity: 1,                 // Hover lo gradient overlay visibility
//         },
//       }}
//     >
//       {/* Hover Image */}
//       <Box
//         className="image"
//         sx={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage: `url(${product.image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           opacity: 0,                 // Default ga image kanipinchadu
//           transition: "0.5s ease",
//           zIndex: 0,
//         }}
//       />

//       {/* Hover Overlay - Modern Gradient */}
//       <Box
//         className="overlay"
//         sx={{
//           position: "absolute",
//           inset: 0,
//           background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%)",
//           opacity: 0,                 // Default hide
//           transition: "0.3s ease",
//           zIndex: 1,
//         }}
//       />

//       {/* Text Content */}
//       <Box
//         className="content-text"
//         sx={{
//           position: "relative",
//           zIndex: 2,
//           p: 3,
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           transition: "color 0.3s ease", // Smooth color change
//         }}
//       >
//         {/* Background Big Number */}
//         <Typography 
//           variant="h1" 
//           sx={{ 
//             fontSize: "6rem", 
//             fontWeight: 900, 
//             opacity: 0.08,             // Very subtle professional feel
//             lineHeight: 0.8,
//             mb: -1
//           }}
//         >
//           {index + 1}
//         </Typography>

//         {/* Product Title */}
//         <Typography 
//           variant="h5" 
//           sx={{ 
//             fontWeight: 700,
//             letterSpacing: "-0.5px"
//           }}
//         >
//           {product.title}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }