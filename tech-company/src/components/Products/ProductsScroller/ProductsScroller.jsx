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

  // ✅ Custom breakpoint: 768px
  const isBelow768 = useMediaQuery("(max-width:768px)");

  const [translateX, setTranslateX] = useState(0);
  const [scrollHeight, setScrollHeight] = useState("100vh");
  const [scrollProgress, setScrollProgress] = useState(0);

  /* =========================
     RESET STATES ON <=768px
  ========================= */
  useEffect(() => {
    if (isBelow768) {
      setTranslateX(0);
      setScrollProgress(0);
      setScrollHeight("auto");
    }
  }, [isBelow768]);

  /* =========================
     DESKTOP ONLY: SET SCROLL HEIGHT
  ========================= */
  useEffect(() => {
    if (isBelow768) return;
    if (!trackRef.current) return;

    const totalScrollWidth = trackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    const requiredScrollHeight =
      totalScrollWidth - viewportWidth + window.innerHeight;

    setScrollHeight(`${requiredScrollHeight}px`);
  }, [isBelow768]);

  /* =========================
     DESKTOP ONLY: SCROLL HANDLER
  ========================= */
  useEffect(() => {
    if (isBelow768) return;

    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const scrollTop = window.scrollY;
      const containerTop = containerRef.current.offsetTop;
      const scrollDistance = scrollTop - containerTop;

      if (scrollDistance < 0) return;

      const maxTranslate =
        trackRef.current.scrollWidth - window.innerWidth;

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

      {/* 📱 MOBILE + TABLET (<=768px) */}
      {isBelow768 ? (
        <Box sx={{ mt: 2 }}>
          <HorizontalTrack
            companyIntro={companyIntro}
            products={products}
            isColumn={true} // ✅ vertical layout
          />
        </Box>
      ) : (
        /* 🖥 DESKTOP ONLY (>768px) */
        <Box
          ref={containerRef}
          sx={{
            height: scrollHeight,
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "sticky",
              top: 0,
              height: "100vh",
              overflow: "clip",
            }}
          >
            <motion.div
              ref={trackRef}
              animate={{ x: translateX }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 30,
                mass: 0.3,
              }}
              style={{ willChange: "transform" }}
            >
              <HorizontalTrack
                companyIntro={companyIntro}
                products={products}
                isColumn={false} // ✅ horizontal layout
              />
            </motion.div>
          </Box>
        </Box>
      )}
    </>
  );
}
