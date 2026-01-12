// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Box } from "@mui/material";
// import StickyInfoPanel from "./StickyinfoPanel";
// import HorizontalTrack from "./HorizontalTrack";

// const products = [
//   {
//     id: 1,
//     title: "Abhiram Nirman",
//     description:
//       "Premium real estate presentation website using rich visuals, modern layouts, and luxury color palette.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/AbhiramNirman.png",
//   },
//   {
//     id: 2,
//     title: "Chalo Gaadi App",
//     description:
//       "Designed a new in-app section with ecommerce-ready UI using existing components, structure and branding.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/ChaloGaadi.png",
//   },
//   {
//     id: 3,
//     title: "Email Template",
//     description:
//       "Responsive email template design in Figma. Balances visuals and text for clarity, ensuring effective brand communication, promotions, and engagement across devices and email clients.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/EmailTemplate.png",
//   },
//   {
//     id: 4,
//     title: "GenAITools",
//     description:
//       "Responsive web app for exploring generative AI tools. Features categories, filters, and demos with clean UI, smooth UX, and strong performance.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/GenAiTools.png",
//   },
//   {
//     id: 5,
//     title: "Inride Mobile App",
//     description:
//       "Mobile-first ride booking UI using MUI components with optimized flows, direct phone authentication, and intuitive navigation.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/InrideApp.png",
//   },
//   {
//     id: 6,
//     title: "NapNGo",
//     description:
//       "A concept-driven website that highlights value proposition and booking flow with strong branding and visual appeal.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/NapNGo.png",
//   },
//   {
//     id: 7,
//     title: "Nanddhan Steel Roofing",
//     description:
//       "A performance-focused company website designed to establish trust and increase customer reach in roofing and construction segments.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/NsteelRoofing.png",
//   },
//   {
//     id: 8,
//     title: "Friend's Portfolio Design",
//     description:
//       "Modern portfolio design in Figma featuring bold visuals, structured layouts, and interactive elements. Highlights projects with clarity and improves user engagement across devices.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/PortfolioFrnd.png",
//   },
//   {
//     id: 9,
//     title: "Result Insight Hub",
//     description:
//       "Clean academic dashboard design in Figma. Highlights grades, insights, and trends with structured layouts, improving comprehension, usability, and decision-making for students and educators.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/RIH.png",
//   },
//   {
//     id: 10,
//     title: "Restaurant Menu App",
//     description:
//       "Interactive coffee shop menu card designed in Figma. Focused on usability, clarity, and modern aesthetics to simplify browsing, enhance navigation, and improve customer ordering experience.8",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/RestaurantMenu.png",
//   },
//   {
//     id: 11,
//     title: "Shopify",
//     description:
//       "Conversion-focused Shopify design with engaging visuals, intuitive navigation, and responsive layouts. Enhances product browsing, usability, and user experience across devices.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/Shopify.png",
//   },
//   {
//     id: 12,
//     title: "Vishwanath Sports Club",
//     description:
//       "A complete UI overhaul with brand-aligned visuals and upgraded layout to support modern tourism and entertainment audiences.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/VSportsClub.png",
//   },
//   {
//     id: 13,
//     title: "Vishwanath Sports Club",
//     description:
//       "Complete UI overhaul with brand-aligned visuals and modern layout.",
//     image: "/products/p3.jpg",
//   },
// ];

// export default function ProductsScroller() {
//   const sectionRef = useRef(null);
//   const trackRef = useRef(null);
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       if (!sectionRef.current || !trackRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const scrollHeight =
//         sectionRef.current.offsetHeight - window.innerHeight;

//       const progress = Math.min(Math.max(-rect.top / scrollHeight, 0), 1);

//       const maxTranslate =
//         trackRef.current.scrollWidth - trackRef.current.clientWidth;

//       const translateX = progress * maxTranslate;

//       trackRef.current.style.transform = `translateX(-${translateX}px)`;

//       const cardWidth = maxTranslate / (products.length - 1 || 1);
//       setActive(Math.round(translateX / cardWidth));
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <Box
//   ref={sectionRef}
//   sx={{
//     height: `${products.length * 100}vh`, // reduced
//     position: "relative",
//     paddingTop: "56px", // 🔥 height of navbar
//   }}
// >

//       <Box
//         sx={{
//           position: "sticky",
//           top: 0,
//           height: "100vh",
//           display: "flex",
//           overflow: "hidden",
//           backgroundColor: "#f5f1f1ff",
//         }}
//       >
//         {/* LEFT PANEL */}
//         <Box sx={{ width: "40%" }}>
//           <StickyInfoPanel product={products[active]} />
//         </Box>

//         {/* RIGHT PANEL */}
//         <Box
//           sx={{
//             width: "60%",
//             position: "relative", // 🔥 IMPORTANT
//             overflow: "hidden",
//           }}
//         >
//           {/* 🔥 THIS WRAPPER LOCKS CARDS IN MIDDLE */}
//           <Box
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: 0,
//               width: "100%",
//               transform: "translateY(-50%)",
//             }}
//           >
//             <HorizontalTrack
//               products={products}
//               trackRef={trackRef}
//             />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Box } from "@mui/material";
// import StickyInfoPanel from "./StickyinfoPanel";
// import ProductCard from "./ProductCard"; // Directly importing card

// const products = [
//   {
//     id: 1,
//     title: "Abhiram Nirman",
//     description:
//       "Premium real estate presentation website using rich visuals, modern layouts, and luxury color palette.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/AbhiramNirman.png",
//   },
//   {
//     id: 2,
//     title: "Chalo Gaadi App",
//     description:
//       "Designed a new in-app section with ecommerce-ready UI using existing components, structure and branding.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/ChaloGaadi.png",
//   },
//   {
//     id: 3,
//     title: "Email Template",
//     description:
//       "Responsive email template design in Figma. Balances visuals and text for clarity, ensuring effective brand communication, promotions, and engagement across devices and email clients.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/EmailTemplate.png",
//   },
//   {
//     id: 4,
//     title: "GenAITools",
//     description:
//       "Responsive web app for exploring generative AI tools. Features categories, filters, and demos with clean UI, smooth UX, and strong performance.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/GenAiTools.png",
//   },
//   {
//     id: 5,
//     title: "Inride Mobile App",
//     description:
//       "Mobile-first ride booking UI using MUI components with optimized flows, direct phone authentication, and intuitive navigation.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/InrideApp.png",
//   },
//   {
//     id: 6,
//     title: "NapNGo",
//     description:
//       "A concept-driven website that highlights value proposition and booking flow with strong branding and visual appeal.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/NapNGo.png",
//   },
//   {
//     id: 7,
//     title: "Nanddhan Steel Roofing",
//     description:
//       "A performance-focused company website designed to establish trust and increase customer reach in roofing and construction segments.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/NsteelRoofing.png",
//   },
//   {
//     id: 8,
//     title: "Friend's Portfolio Design",
//     description:
//       "Modern portfolio design in Figma featuring bold visuals, structured layouts, and interactive elements. Highlights projects with clarity and improves user engagement across devices.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/PortfolioFrnd.png",
//   },
//   {
//     id: 9,
//     title: "Result Insight Hub",
//     description:
//       "Clean academic dashboard design in Figma. Highlights grades, insights, and trends with structured layouts, improving comprehension, usability, and decision-making for students and educators.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/RIH.png",
//   },
//   {
//     id: 10,
//     title: "Restaurant Menu App",
//     description:
//       "Interactive coffee shop menu card designed in Figma. Focused on usability, clarity, and modern aesthetics to simplify browsing, enhance navigation, and improve customer ordering experience.8",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/RestaurantMenu.png",
//   },
//   {
//     id: 11,
//     title: "Shopify",
//     description:
//       "Conversion-focused Shopify design with engaging visuals, intuitive navigation, and responsive layouts. Enhances product browsing, usability, and user experience across devices.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/Shopify.png",
//   },
//   {
//     id: 12,
//     title: "Vishwanath Sports Club",
//     description:
//       "A complete UI overhaul with brand-aligned visuals and upgraded layout to support modern tourism and entertainment audiences.",
//     image: "https://himavarshabarla.vercel.app/assets/thumbnails/VSportsClub.png",
//   },
// ];

// export default function ProductsScroller() {
//   const sectionRef = useRef(null);
//   const trackRef = useRef(null);

//   useEffect(() => {
//     const onScroll = () => {
//       if (!sectionRef.current || !trackRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const scrollHeight = sectionRef.current.offsetHeight - window.innerHeight;
//       const progress = Math.min(Math.max(-rect.top / scrollHeight, 0), 1);

//       // We translate the whole track (Info Panel + Cards)
//       const maxTranslate = trackRef.current.scrollWidth - window.innerWidth;
//       const translateX = progress * maxTranslate;

//       trackRef.current.style.transform = `translateX(-${translateX}px)`;
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <Box
//       ref={sectionRef}
//       sx={{
//         height: `${(products.length + 1) * 100}vh`, // Vertical height for scroll length
//         position: "relative",
//         backgroundColor: "#fff",
//       }}
//     >
//       <Box
//         sx={{
//           position: "sticky",
//           top: 0,
//           height: "100vh",
//           display: "flex",
//           alignItems: "center",
//           overflow: "hidden",
//         }}
//       >
//         <Box
//           ref={trackRef}
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             willChange: "transform",
//             px: { xs: 4, md: 10 },
//             gap: 4,
//           }}
//         >
//           {/* 1. Header Card (Info Panel) - Moves with the scroll */}
//           <Box sx={{ minWidth: "100vw", height: "85vh", flexShrink: 0 }}>
//              <StickyInfoPanel product={products[0]} />
//           </Box>

//           {/* 2. Portfolio Cards */}
//           {products.map((product, index) => (
//             <ProductCard key={product.id} product={product} index={index} />
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// }



// "use client";

// import { Box } from "@mui/material";
// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// import ProductsNavbar from "../ProductsNavbar";
// import HorizontalTrack from "./HorizontalTrack";
// import { companyIntro, products } from "./productData";

// export default function ProductsScroller() {
//   const containerRef = useRef(null);
//   const trackRef = useRef(null);

//   const [translateX, setTranslateX] = useState(0);
//   const [scrollHeight, setScrollHeight] = useState("100vh");
//   const [scrollProgress, setScrollProgress] = useState(0);

//   /* ---------------------------------------------------
//      SET SCROLL HEIGHT BASED ON CONTENT WIDTH
//      (DO NOT CHANGE – WORKING LOGIC)
//   --------------------------------------------------- */
//   useEffect(() => {
//     if (!trackRef.current) return;

//     const totalScrollWidth = trackRef.current.scrollWidth;
//     const viewportWidth = window.innerWidth;

//     const requiredScrollHeight =
//       totalScrollWidth - viewportWidth + window.innerHeight;

//     setScrollHeight(`${requiredScrollHeight}px`);
//   }, []);

//   /* ---------------------------------------------------
//      HANDLE SCROLL → TRANSLATE + PROGRESS
//      (DO NOT CHANGE – WORKING LOGIC)
//   --------------------------------------------------- */
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current || !trackRef.current) return;

//       const scrollTop = window.scrollY;
//       const containerTop = containerRef.current.offsetTop;
//       const scrollDistance = scrollTop - containerTop;

//       if (scrollDistance < 0) {
//         setScrollProgress(0);
//         return;
//       }

//       const maxTranslate =
//         trackRef.current.scrollWidth - window.innerWidth;

//       const clampedScroll = Math.min(scrollDistance, maxTranslate);

//       // 🔥 horizontal movement value (same as before)
//       setTranslateX(-clampedScroll);

//       // 🔥 progress value (0 → 1)
//       const progress = Math.min(
//         Math.max(clampedScroll / maxTranslate, 0),
//         1
//       );
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* ---------------------------------------------------
//      RENDER
//   --------------------------------------------------- */
//   return (
//     <>
//       {/* 🔥 NAVBAR (UNCHANGED) */}
//       <ProductsNavbar scrollProgress={scrollProgress} />

//       {/* 🔥 SCROLL CONTAINER */}
//       <Box
//         ref={containerRef}
//         sx={{
//           height: scrollHeight,
//           position: "relative",
//         }}
//       >
//         <Box
//           sx={{
//             position: "sticky",
//             top: 0,
//             height: "100vh",
//             overflow: "hidden",
//           }}
//         >
//           {/* 🔥 ONLY CHANGE: Framer Motion wrapper */}
//           <motion.div
//             ref={trackRef}
//             animate={{ x: translateX }}
//             transition={{
//               type: "spring",
//               stiffness: 90,
//               damping: 22,
//               mass: 0.6,
//             }}
//             style={{ willChange: "transform" }}
//           >
//             <HorizontalTrack
//               companyIntro={companyIntro}
//               products={products}
//             />
//           </motion.div>
//         </Box>
//       </Box>
//     </>
//   );
// }

// "use client";

// import { Box } from "@mui/material";
// import { useEffect, useRef, useState } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// import ProductsNavbar from "../ProductsNavbar";
// import HorizontalTrack from "./HorizontalTrack";
// import { companyIntro, products } from "./productData";

// export default function ProductsScroller() {
//   const containerRef = useRef(null);
//   const trackRef = useRef(null);
  
//   const [isMobile, setIsMobile] = useState(false);
//   const [scrollHeight, setScrollHeight] = useState("auto");
//   const [currentProgress, setCurrentProgress] = useState(0);

//   // 1. Check if Mobile or Laptop
//   useEffect(() => {
//     const checkRes = () => {
//       setIsMobile(window.innerWidth < 900);
//     };
//     checkRes();
//     window.addEventListener("resize", checkRes);
//     return () => window.removeEventListener("resize", checkRes);
//   }, []);

//   // 2. Set Scroll Height (Laptop only)
//   useEffect(() => {
//     if (isMobile || !trackRef.current) {
//       setScrollHeight("auto");
//       return;
//     }
//     const totalScrollWidth = trackRef.current.scrollWidth;
//     const viewportWidth = window.innerWidth;
//     const requiredScrollHeight = totalScrollWidth - viewportWidth + window.innerHeight;
//     setScrollHeight(`${requiredScrollHeight}px`);
//   }, [isMobile, products]);

//   // 3. Framer Motion Scroll Tracking
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   // 🔥 SMOOTHNESS REPAIR: Spring add chesthe cards and nav bar butter smooth ga move avvutayi
//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 60,
//     damping: 25,
//    mass: 0.5,       // Weight thagginchadam valla quick reaction untundi
//   restDelta: 0.001
//   });

//   // Nav Bar progression bar repair: 
//   // scrollYProgress object ni direct number ga marchi sync chestunnam
//   useEffect(() => {
//     return smoothProgress.onChange((latest) => {
//       setCurrentProgress(latest);
//     });
//   }, [smoothProgress]);

//   // Calculate translate for Laptop
//   const x = useTransform(
//     smoothProgress, 
//     [0, 1], 
//     [0, trackRef.current ? -(trackRef.current.scrollWidth - window.innerWidth) : 0]
//   );

//   return (
//     <>
//       {/* 🔥 REPAIRED: currentProgress (0 to 1 number) ni pampali */}
//       <ProductsNavbar scrollProgress={currentProgress} />

//       <Box
//         ref={containerRef}
//         sx={{
//           height: isMobile ? "auto" : scrollHeight,
//           position: "relative",
//           backgroundColor: "#fff",
//         }}
//       >
//         <Box
//           sx={{
//             position: isMobile ? "relative" : "sticky",
//             top: 0,
//             height: isMobile ? "auto" : "100vh",
//             overflow: "hidden",
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <motion.div
//             ref={trackRef}
//             style={{ 
//               x: isMobile ? 0 : x, 
//               display: "flex",
//               flexDirection: isMobile ? "column" : "row",
//               willChange: "transform",
//               width: isMobile ? "100%" : "max-content",
//             }}
//           >
//             <HorizontalTrack
//               companyIntro={companyIntro}
//               products={products}
//               isMobile={isMobile}
//             />
//           </motion.div>
//         </Box>
//       </Box>
//     </>
//   );
// }
// "use client";

// import { Box, useMediaQuery } from "@mui/material";
// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// import ProductsNavbar from "../ProductsNavbar";
// import HorizontalTrack from "./HorizontalTrack";
// import { companyIntro, products } from "./productData";

// export default function ProductsScroller() {
//   const containerRef = useRef(null);
//   const trackRef = useRef(null);

//   // ✅ Custom breakpoint: 768px
//   const isBelow768 = useMediaQuery("(max-width:768px)");

//   const [translateX, setTranslateX] = useState(0);
//   const [scrollHeight, setScrollHeight] = useState("100vh");
//   const [scrollProgress, setScrollProgress] = useState(0);

//   /* =========================
//      RESET STATES ON <=768px
//   ========================= */
//   useEffect(() => {
//     if (isBelow768) {
//       setTranslateX(0);
//       setScrollProgress(0);
//       setScrollHeight("auto");
//     }
//   }, [isBelow768]);

//   /* =========================
//      DESKTOP ONLY: SET SCROLL HEIGHT
//   ========================= */
//   useEffect(() => {
//     if (isBelow768) return;
//     if (!trackRef.current) return;

//     const totalScrollWidth = trackRef.current.scrollWidth;
//     const viewportWidth = window.innerWidth;

//     const requiredScrollHeight =
//       totalScrollWidth - viewportWidth + window.innerHeight;

//     setScrollHeight(`${requiredScrollHeight}px`);
//   }, [isBelow768]);

//   /* =========================
//      DESKTOP ONLY: SCROLL HANDLER
//   ========================= */
//   useEffect(() => {
//     if (isBelow768) return;

//     const handleScroll = () => {
//       if (!containerRef.current || !trackRef.current) return;

//       const scrollTop = window.scrollY;
//       const containerTop = containerRef.current.offsetTop;
//       const scrollDistance = scrollTop - containerTop;

//       if (scrollDistance < 0) return;

//       const maxTranslate =
//         trackRef.current.scrollWidth - window.innerWidth;

//       const clampedScroll = Math.min(scrollDistance, maxTranslate);

//       setTranslateX(-clampedScroll);

//       const progress = Math.min(clampedScroll / maxTranslate, 1);
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isBelow768]);

//   return (
//     <>
//       <ProductsNavbar scrollProgress={scrollProgress} />

//       {/* 📱 MOBILE + TABLET (<=768px) */}
//       {isBelow768 ? (
//         <Box sx={{ mt: 2 }}>
//           <HorizontalTrack
//             companyIntro={companyIntro}
//             products={products}
//             isColumn={true} // ✅ vertical layout
//           />
//         </Box>
//       ) : (
//         /* 🖥 DESKTOP ONLY (>768px) */
//         <Box
//           ref={containerRef}
//           sx={{
//             height: scrollHeight,
//             position: "relative",
//           }}
//         >
//           <Box
//             sx={{
//               position: "sticky",
//               top: 0,
//               height: "100vh",
//               overflow: "clip",
//             }}
//           >
//             <motion.div
//               ref={trackRef}
//               animate={{ x: translateX }}
//               transition={{
//                 type: "spring",
//                 stiffness: 40,
//                 damping: 30,
//                 mass: 0.3,
//               }}
//               style={{ willChange: "transform" }}
//             >
//               <HorizontalTrack
//                 companyIntro={companyIntro}
//                 products={products}
//                 isColumn={false} // ✅ horizontal layout
//               />
//             </motion.div>
//           </Box>
//         </Box>
//       )}
//     </>
//   );
// }


"use client";

import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import ProductsNavbar from "../ProductsNavbar";
import HorizontalTrack from "./HorizontalTrack";
import { companyIntro, products } from "./productData";

export default function ProductsScroller() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const isBelow768 = useMediaQuery("(max-width:768px)");

  const [translateX, setTranslateX] = useState(0);
  const [scrollHeight, setScrollHeight] = useState("100vh");
  const [scrollProgress, setScrollProgress] = useState(0);

  /* RESET ON MOBILE */
  useEffect(() => {
    if (isBelow768) {
      setTranslateX(0);
      setScrollProgress(0);
      setScrollHeight("auto");
    }
  }, [isBelow768]);

  /* DESKTOP: SET SCROLL HEIGHT */
  useEffect(() => {
    if (isBelow768) return;
    if (!trackRef.current) return;

    const totalScrollWidth = trackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    const requiredScrollHeight =
      totalScrollWidth - viewportWidth + window.innerHeight;

    setScrollHeight(`${requiredScrollHeight}px`);
  }, [isBelow768]);

  /* DESKTOP: SCROLL HANDLER */
  useEffect(() => {
    if (isBelow768) return;

    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const scrollTop = window.scrollY;
      const containerTop = containerRef.current.offsetTop;
      const scrollDistance = scrollTop - containerTop;

      if (scrollDistance < 0) return;

      const maxTranslate = trackRef.current.scrollWidth - window.innerWidth;
      const clampedScroll = Math.min(scrollDistance, maxTranslate);

      setTranslateX(-clampedScroll);

      const progress = Math.min(clampedScroll / maxTranslate, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBelow768]);

  return (
    <>
      <ProductsNavbar scrollProgress={scrollProgress} />

      {/* 📱 MOBILE + TABLET */}
      {isBelow768 ? (
        <Box
          sx={{
            mt: 2,
            background: "linear-gradient(180deg, #f5f7fa 0%, #ffffff 100%)",
            position: "relative",
            overflow: "hidden",
            
            /* Subtle animated background */
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)
              `,
              pointerEvents: "none",
            },
          }}
        >
          <HorizontalTrack
            companyIntro={companyIntro}
            products={products}
            isColumn={true}
          />
        </Box>
      ) : (
        /* 🖥 DESKTOP - PREMIUM SCROLL EXPERIENCE */
        <Box
          ref={containerRef}
          sx={{
            height: scrollHeight,
            position: "relative",
            background: "linear-gradient(180deg, #f5f7fa 0%, #ffffff 50%, #f5f7fa 100%)",
            
            /* Animated background pattern */
            "&::before": {
              content: '""',
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.03) 0%, transparent 50%)
              `,
              animation: "float 20s ease-in-out infinite",
              pointerEvents: "none",
              zIndex: 0,
            },
            
            "@keyframes float": {
              "0%, 100%": {
                transform: "translate(0, 0) scale(1)",
              },
              "33%": {
                transform: "translate(30px, -30px) scale(1.1)",
              },
              "66%": {
                transform: "translate(-20px, 20px) scale(0.9)",
              },
            },
          }}
        >
          {/* Progress indicator - premium thin line */}
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: 3,
              background: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(10px)",
              zIndex: 1000,
            }}
          >
            <motion.div
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)",
                transformOrigin: "left",
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
              }}
              animate={{ scaleX: scrollProgress }}
              transition={{ duration: 0.1 }}
            />
          </Box>

          {/* Sticky container with premium effects */}
          <Box
            sx={{
              position: "sticky",
              top: 0,
              height: "100vh",
              overflow: "clip",
              display: "flex",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            {/* Floating decorative elements */}
            <Box
              sx={{
                position: "absolute",
                top: "20%",
                left: "5%",
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
                filter: "blur(40px)",
                animation: "pulse 8s ease-in-out infinite",
                pointerEvents: "none",
                zIndex: 0,
                
                "@keyframes pulse": {
                  "0%, 100%": { transform: "scale(1)", opacity: 0.5 },
                  "50%": { transform: "scale(1.2)", opacity: 0.8 },
                },
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: "10%",
                right: "10%",
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
                filter: "blur(50px)",
                animation: "pulse 10s ease-in-out infinite",
                animationDelay: "2s",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* Main scrolling track with premium spring animation */}
            <motion.div
              ref={trackRef}
              animate={{ x: translateX }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 35,
                mass: 0.5,
                restDelta: 0.001,
              }}
              style={{
                willChange: "transform",
                position: "relative",
                zIndex: 1,
              }}
            >
              <HorizontalTrack
                companyIntro={companyIntro}
                products={products}
                isColumn={false}
              />
            </motion.div>
          </Box>

          {/* Scroll hint indicator - appears at start */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: scrollProgress > 0.1 ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              bottom: 40,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 100,
              pointerEvents: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                px: 3,
                py: 2,
                borderRadius: 3,
                backdropFilter: "blur(10px)",
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(255,255,255,0.5)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                animation: "bounce 2s ease-in-out infinite",
                
                "@keyframes bounce": {
                  "0%, 100%": { transform: "translateY(0)" },
                  "50%": { transform: "translateY(-10px)" },
                },
              }}
            >
              <Box
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#64748b",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Scroll to explore
              </Box>
              <Box
                sx={{
                  fontSize: "1.5rem",
                  color: "#6366f1",
                }}
              >
                ↓
              </Box>
            </Box>
          </motion.div>
        </Box>
      )}
    </>
  );
}