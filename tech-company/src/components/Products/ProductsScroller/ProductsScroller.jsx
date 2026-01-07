"use client";

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import StickyInfoPanel from "./StickyinfoPanel";
import HorizontalTrack from "./HorizontalTrack";

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

export default function ProductsScroller() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollHeight =
        sectionRef.current.offsetHeight - window.innerHeight;

      const progress = Math.min(Math.max(-rect.top / scrollHeight, 0), 1);

      const maxTranslate =
        trackRef.current.scrollWidth - trackRef.current.clientWidth;

      const translateX = progress * maxTranslate;

      trackRef.current.style.transform = `translateX(-${translateX}px)`;

      const cardWidth = maxTranslate / (products.length - 1 || 1);
      setActive(Math.round(translateX / cardWidth));
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
  ref={sectionRef}
  sx={{
    height: `${products.length * 100}vh`, // reduced
    position: "relative",
    paddingTop: "56px", // 🔥 height of navbar
  }}
>

      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          overflow: "hidden",
          backgroundColor: "#f5f1f1ff",
        }}
      >
        {/* LEFT PANEL */}
        <Box sx={{ width: "40%" }}>
          <StickyInfoPanel product={products[active]} />
        </Box>

        {/* RIGHT PANEL */}
        <Box
          sx={{
            width: "60%",
            position: "relative", // 🔥 IMPORTANT
            overflow: "hidden",
          }}
        >
          {/* 🔥 THIS WRAPPER LOCKS CARDS IN MIDDLE */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: "100%",
              transform: "translateY(-50%)",
            }}
          >
            <HorizontalTrack
              products={products}
              trackRef={trackRef}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}