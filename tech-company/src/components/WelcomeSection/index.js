// "use client";

// import { Box, Container, Grid, Typography } from "@mui/material";
// import BrushIcon from "@mui/icons-material/Brush";
// import SettingsIcon from "@mui/icons-material/Settings";
// import AppsIcon from "@mui/icons-material/Apps";
// import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
// import CloudDoneIcon from "@mui/icons-material/CloudDone";
// import SmartToyIcon from "@mui/icons-material/SmartToy";
// import RouterIcon from "@mui/icons-material/Router";
// import CampaignIcon from "@mui/icons-material/Campaign";
// const services = [
//   {
//     icon: <BrushIcon />,
//     title: "UI/UX Design",
//     desc: "We design clean, intuitive interfaces using research, wireframes, and prototypes that improve usability and deliver consistent digital experiences.",
//   },
//   {
//     icon: <SettingsIcon />,
//     title: "Website & Web App Development",
//     desc: "We upgrade outdated systems with improved architecture, performance, security, and cloud readiness for long-term business growth.",
//   },
//   {
//     icon: <PhoneIphoneIcon />,
//     title: "Mobile Applications",
//     desc: "We develop high-performance mobile apps with intuitive UI, secure APIs, and smooth cross-platform experiences.",
//   },
//  { icon: <CampaignIcon />, title: "Digital Marketing", desc: "We deliver secure, scalable cloud environments with architecture, automated deployments and multi-cloud support.", },
//   {
//     icon: <SmartToyIcon />,
//     title: "",
//     desc: "We build intelligent AI agents that automate workflows, analyze data, integrate APIs, and handle tasks autonomously.",
//   },
//   {
//     icon: <RouterIcon />,
//     title: "IoT Solutions",
//     desc: "We create connected IoT ecosystems with sensors, dashboards, cloud sync, and automation to enable smarter operations.",
//   },
// ];

// // ... existing imports


// export default function ServicesCards() {
//   return (
//     <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#f9fbff", minHeight: "100vh" }}>
//       <Container maxWidth="lg">
//         {/* Heading Section */}
//         <Typography
//           align="center"
//           sx={{
//             fontSize: { xs: "26px", md: "36px" },
//             fontWeight: 800,
//             color: "#0b2343",
//             mb: { xs: 5, md: 8 },
//             fontFamily: "Poppins, sans-serif",
//           }}
//         >
//           Innovative Solutions for Modern Businesses
//         </Typography>

//         {/* Flexbox Container */}
//         <Box
//           sx={{
//             display: "flex",
//             flexWrap: "wrap",      // Next row ki cards wrap avvadaniki
//             gap: "32px",           // Cards madhyalo gap
//             justifyContent: "center", // Items center lo undadaniki
//           }}
//         >
//           {services.map((item, index) => (
//             <Box
//               key={index}
//               sx={{
//                 // Responsive Width Logic:
//                 // Desktop (>1024px): 3 cards (approx 30% each)
//                 // Tablet: 2 cards (approx 45% each)
//                 // Mobile: 1 card (100%)
//                 width: {
//                   xs: "100%",
//                   sm: "calc(50% - 32px)", 
//                   md: "calc(33.33% - 32px)" 
//                 },
//                 backgroundColor: "#fff",
//                 borderRadius: "20px",
//                 p: 4,
//                 boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
//                 border: "1px solid #eef3ff",
//                 display: "flex",
//                 flexDirection: "column",
//                 transition: "all 0.3s ease-in-out",
//                 "&:hover": {
//                   transform: "translateY(-8px)",
//                   boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
//                 },
//               }}
//             >
//               {/* Icon Container */}
//               <Box
//                 sx={{
//                   width: 60,
//                   height: 60,
//                   borderRadius: "15px",
//                   backgroundColor: "#eaf1ff",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#1769d2",
//                   mb: 3,
//                   "& svg": { fontSize: 30 },
//                 }}
//               >
//                 {item.icon}
//               </Box>

//               {/* Service Title */}
//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontSize: "20px",
//                   fontWeight: 700,
//                   color: "#0b2343",
//                   mb: 1.5,
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 {item.title}
//               </Typography>

//               {/* Service Description */}
//               <Typography
//                 sx={{
//                   fontSize: "15px",
//                   lineHeight: 1.7,
//                   color: "#5f6c80",
//                   fontFamily: "Inter, sans-serif",
//                 }}
//               >
//                 {item.desc}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// }


// "use client";

// import { Box, Container, Typography, Chip } from "@mui/material";
// import BrushIcon from "@mui/icons-material/Brush";
// import SettingsIcon from "@mui/icons-material/Settings";
// import AppsIcon from "@mui/icons-material/Apps";
// import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
// import CloudDoneIcon from "@mui/icons-material/CloudDone";
// import SmartToyIcon from "@mui/icons-material/SmartToy";
// import RouterIcon from "@mui/icons-material/Router";
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

// const services = [
//   {
//     icon: <BrushIcon />,
//     title: "UI/UX Design",
//     desc: "We design clean, intuitive interfaces using research, wireframes, and prototypes that improve usability.",
//   },
//   {
//     icon: <SettingsIcon />,
//     title: "Legacy Modernization",
//     desc: "We upgrade outdated systems with improved architecture, performance, security, and cloud readiness.",
//   },
//   {
//     icon: <AppsIcon />,
//     title: "Enterprise Applications",
//     desc: "We build scalable ERP, CRM, and workflow applications with secure integrations and automation.",
//   },
//   {
//     icon: <PhoneIphoneIcon />,
//     title: "Mobility",
//     desc: "We develop high-performance mobile apps with intuitive UI, secure APIs, and smooth cross-platform experiences.",
//   },
//   {
//     icon: <CloudDoneIcon />,
//     title: "Cloud Solutions",
//     desc: "We deliver secure, scalable cloud environments with architecture and automated deployments.",
//   },
//   {
//     icon: <SmartToyIcon />,
//     title: "AI Agents",
//     desc: "We build intelligent AI agents that automate workflows, analyze data, and handle tasks autonomously.",
//   },
//   {
//     icon: <RouterIcon />,
//     title: "IoT Solutions",
//     desc: "We create connected IoT ecosystems with sensors, dashboards, and automation for smarter operations.",
//   },
// ];

// export default function ServicesCards() {
//   return (
//     <Box 
//       sx={{ 
//         py: { xs: 8, md: 12 }, 
//         // ✅ మునుపటి సెక్షన్ తో మ్యాచ్ అయ్యే తేలికపాటి బ్యాక్‌గ్రౌండ్
//         background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)", 
//         position: "relative",
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Header Section */}
//         <Box sx={{ textAlign: "center", mb: 8 }}>
//           <Chip
//             icon={<RocketLaunchIcon sx={{ fontSize: 18, color: "#004D71 !important" }} />}
//             label="OUR SERVICES"
//             sx={{
//               mb: 3, px: 2, py: 2.5, height: "auto",
//               background: "rgba(0, 77, 113, 0.1)",
//               border: "1px solid rgba(0, 77, 113, 0.2)",
//               borderRadius: "50px", color: "#004D71", fontWeight: 700,
//             }}
//           />
//           <Typography
//             variant="h2"
//             sx={{
//               fontSize: { xs: "32px", md: "42px" },
//               fontWeight: 900,
//               color: "#004D71", // మీరు పంపిన ఇమేజ్ లోని డార్క్ బ్లూ
//               fontFamily: "Poppins, sans-serif",
//               mb: 2,
//             }}
//           >
//             Innovative Solutions for <span style={{ color: "#2D7D2D" }}>Modern Businesses</span>
//           </Typography>
//         </Box>

//         {/* Flex Grid Container */}
//         <Box
//           sx={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "24px",
//             justifyContent: "center",
//           }}
//         >
//           {services.map((item, index) => (
//             <Box
//               key={index}
//               sx={{
//                 width: { xs: "100%", sm: "calc(50% - 24px)", md: "calc(33.33% - 24px)" },
//                 // ✅ మీరు అడిగినట్లుగా కార్డ్స్ కి డార్క్ బ్లూ రంగు (#004D71)
//                 backgroundColor: "#004D71", 
//                 borderRadius: "20px",
//                 p: 4,
//                 boxShadow: "0 15px 35px rgba(0, 77, 113, 0.2)",
//                 display: "flex",
//                 flexDirection: "column",
//                 transition: "all 0.3s ease-in-out",
//                 border: "1px solid rgba(255, 255, 255, 0.1)",
//                 "&:hover": {
//                   transform: "translateY(-10px)",
//                   // ✅ Hover చేసినప్పుడు మీరు పంపిన రెండో ఇమేజ్ లోని బ్రైట్ బ్లూ రంగు (#1976D2)
//                   backgroundColor: "#1976D2",
//                   boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
//                 },
//               }}
//             >
//               {/* Icon Container */}
//               <Box
//                 sx={{
//                   width: 50,
//                   height: 50,
//                   borderRadius: "12px",
//                   backgroundColor: "rgba(255, 255, 255, 0.15)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#4ade80", // MongoDB Green style for icons
//                   mb: 3,
//                   "& svg": { fontSize: 26 },
//                 }}
//               >
//                 {item.icon}
//               </Box>

//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontSize: "19px",
//                   fontWeight: 700,
//                   color: "#ffffff",
//                   mb: 1.5,
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 {item.title}
//               </Typography>

//               <Typography
//                 sx={{
//                   fontSize: "14px",
//                   lineHeight: 1.6,
//                   color: "rgba(255, 255, 255, 0.75)",
//                   fontFamily: "Inter, sans-serif",
//                 }}
//               >
//                 {item.desc}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// "use client";

// import { Box, Container, Typography, Chip } from "@mui/material";
// import BrushIcon from "@mui/icons-material/Brush";
// import LanguageIcon from '@mui/icons-material/Language';
// import TabletMacIcon from '@mui/icons-material/TabletMac';
// import ColorLensIcon from '@mui/icons-material/ColorLens';
// import PsychologyIcon from '@mui/icons-material/Psychology';
// import MemoryIcon from '@mui/icons-material/Memory';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

// const services = [
//   {
//     icon: "/assets/graphic.png",
//     title: "UI / UX Design",
//     desc: "Designing intuitive, user-friendly interfaces that enhance user experience.",
//     img:"/assets/img1.jpeg"
//   },
//   {
//     icon: "/assets/ui.png",
//     title: "Graphic Designing",
//     desc: "Creating visually compelling designs that strengthen brand identity.",
//   },
//   {
//     icon: "/assets/web.png",
//     title: "Web & WebApp Development",
//     desc: "Building scalable, SEO-friendly, high-performance web applications.",
//   },
//   {
//     icon: "/assets/mobile.png",
//     title: "Mobile App Development",
//     desc: "Developing secure and high-performance mobile applications across platforms.",
//   },
//   {
//     icon: "/assets/ai.png",
//     title: "AI Agents",
//     desc: "Intelligent AI agents for automation, analytics, and smart workflows.",
//   },
//   {
//     icon: "/assets/iot.png",
//     title: "IoT Solutions",
//     desc: "Smart connected systems with real-time data processing and automation.",
//   },
// ];

// export default function ServicesCards() {
//   const PRIMARY_COLOR = "#085482";
//   const MONTSERRAT = "'Montserrat', sans-serif";

//   return (
//     <Box 
//       sx={{ 
//         py: { xs: 8, md: 12 }, 
//         bgcolor: "#F8FAFC", // స్వల్పమైన గ్రే బ్యాక్‌గ్రౌండ్ వైట్ కార్డ్స్ బాగా కనిపించడానికి
//         position: "relative",
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Header Section */}
//         <Box sx={{ textAlign: "center", mb: 8 }}>
//           <Chip
//             icon={<RocketLaunchIcon sx={{ fontSize: 18, color: `${PRIMARY_COLOR} !important` }} />}
//             label="TECH EXPERTISE"
//             sx={{
//               mb: 3, px: 2, py: 2.5, height: "auto",
//               background: "rgba(8, 84, 130, 0.1)",
//               border: `1px solid rgba(8, 84, 130, 0.2)`,
//               borderRadius: "50px", color: PRIMARY_COLOR, fontWeight: 700,
//               fontFamily: MONTSERRAT,
//             }}
//           />
//           <Typography
//             variant="h2"
//             sx={{
//               fontSize: { xs: "32px", md: "42px" },
//               fontWeight: 600,
//               color: PRIMARY_COLOR,
//               fontFamily: MONTSERRAT,
//               mb: 2,
//             }}
//           >
//             Innovative Solutions for <span style={{ color: "#2D7D2D" }}>Modern Businesses</span>
//           </Typography>
//           <Typography sx={{ color: "rgba(8, 84, 130, 0.7)", maxWidth: "700px", mx: "auto", fontSize: "16px", fontWeight:500, fontFamily: MONTSERRAT }}>
//             Delivering high-performance digital transformation services to accelerate your industry growth.
//           </Typography>
//         </Box>

//         {/* Flex Grid Container */}
//         <Box
//           sx={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "24px",
//             justifyContent: "center",
//           }}
//         >
//           {services.map((item, index) => (
//             <Box
//               key={index}
//               sx={{
//                 width: { xs: "100%", sm: "calc(50% - 24px)", md: "calc(33.33% - 24px)" },
//                 backgroundColor: "#ffffff", // వైట్ బ్యాక్‌గ్రౌండ్
//                 borderRadius: "20px",
//                 p: 4,
//                 boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center", // ఐకాన్ మరియు టెక్స్ట్ సెంటర్ చేయడానికి
//                 textAlign: "center", // టెక్స్ట్ సెంటర్ చేయడానికి
//                 transition: "all 0.3s ease-in-out",
//                 border: "1px solid rgba(0, 0, 0, 0.05)",
//                 minHeight: "350px",
//                 "&:hover": {
//                   transform: "translateY(-10px)",
//                   boxShadow: `0 20px 40px rgba(8, 84, 130, 0.15)`,
//                   borderColor: PRIMARY_COLOR,
//                 },
//               }}
//             >
//               {/* Icon Container */}
//                <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   mb: 3,
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={item.icon}
//                   alt={item.title}
//                   sx={{
//                     width:
//                       item.title === "Mobile App Development" || item.title === "UI / UX Design"
//                         ? "180px"
//                         : "140px",
//                     height:
//                       item.title === "Mobile App Development" || item.title === "UI / UX Design"
//                         ? "180px"
//                         : "140px",
//                     objectFit: "contain",
//                   }}
//                 />
//               </Box>

//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontSize: "22px",
//                   fontWeight: 700,
//                   color: PRIMARY_COLOR, // బ్లూ కలర్ టెక్స్ట్
//                   mb: 2,
//                   fontFamily: MONTSERRAT,
//                 }}
//               >
//                 {item.title}
//               </Typography>

//               <Typography
//                 sx={{
//                   fontSize: "15px",
//                   lineHeight: 1.7,
//                   color: "#54738c", // సాఫ్ట్ బ్లూ-గ్రే టెక్స్ట్ రీడబిలిటీ కోసం
//                   fontFamily: MONTSERRAT,
//                   flexGrow: 1,
//                 }}
//               >
//                 {item.desc}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// "use client";

// import { Box, Container, Typography, Chip } from "@mui/material";
// import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

// const services = [
//   {
//     bg: "/assets/ui.jpeg",
//     title: "UI / UX Design",
//     desc: "Modern, user-centric interfaces with smooth user experiences.",
//     icon: "/assets/ui-ux.png",
//   },
//   {
//     bg: "/assets/graphic.jpeg",
//     title: "Graphic Designing",
//     desc: "Creating visually compelling designs that strengthen brand identity.",
//     icon: "/assets/graphicicon.png",
//   },
//   {
//     bg: "/assets/web.jpeg",
//     title: "Web & WebApp Development",
//     desc: "Building scalable, SEO-friendly, high-performance web applications.",
//     icon: "/assets/web.png",
//   },
// {
//   bg: "/assets/mobile.jpeg",
//   title: "Mobile App Development",
//   desc: "Developing high-performance mobile applications with seamless user experiences.",
//   icon: "/assets/mobile.png",
// },
// {
//   bg: "/assets/ai.jpeg",
//   title: "AI Agents",
//   desc: "Building intelligent AI agents to automate processes and enhance decision-making.",
//   icon: "/assets/tabelulegs.png",
// },
// {
//   bg: "/assets/iot.jpeg",
//   title: "IoT Solutions",
//   desc: "Creating smart IoT solutions with real-time connectivity and automation.",
//   icon: "/assets/iot copy.png",
// },

// ];


// export default function ServicesCards() {
//   const PRIMARY_COLOR = "#085482";
//   const TEXT_COLOR="#00e676"
//   const FONT = "'Montserrat', sans-serif";

//   return (
//     <Box sx={{ py: 12, bgcolor: "#F8FAFC" }}>
//       <Container maxWidth="lg">

//         {/* HEADER */}
//         <Box sx={{ textAlign: "center", mb: 8 }}>
//           <Chip
//             icon={<RocketLaunchIcon sx={{ color: PRIMARY_COLOR }} />}
//             label="TECH EXPERTISE"
//             sx={{
//               mb: 3,
//               px: 3,
//               py: 1.5,
//               bgcolor: "rgba(8,84,130,0.1)",
//               border: "1px solid rgba(8,84,130,0.2)",
//               fontFamily: FONT,
//               fontWeight: 700,
//             }}
//           />
//           <Typography
//             sx={{
//               fontSize: { xs: 30, md: 42 },
//               fontWeight: 600,
//               fontFamily: FONT,
//               color: PRIMARY_COLOR,
//             }}
//           >
//             Innovative Solutions for{" "}
//             <span style={{ color: "#2D7D2D" }}>Modern Businesses</span>
//           </Typography>
//         </Box>

//         {/* CARDS */}
//         <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
//           {services.map((item, i) => (
//             <Box
//               key={i}
//               sx={{
//                 width: { xs: "100%", md: "calc(33.33% - 16px)" },
//                 height: 420,
//                 position: "relative",
//                 borderRadius: "24px",
//                 overflow: "hidden",
//                 cursor: "pointer",
//                 backgroundImage: `url(${item.bg})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 boxShadow: "0 20px 40px rgba(0,0,0,0.15)",

//                 "&:hover .glass": {
//                   transform: "translateY(0)",
//                   opacity: 1,
//                 },

//                 "&:hover .titleTop": {
//                   opacity: 0,
//                   transform: "translateY(-10px)",
//                 },
//               }}
//             >
//               {/* TOP LEFT TITLE (DEFAULT) */}
//               <Typography
//                 className="titleTop"
//                 sx={{
//                   position: "absolute",
//                   top: 24,
//                   left: 24,
//                   zIndex: 2,
//                   color: "#fff",
//                   fontSize: 22,
//                   fontWeight: 700,
//                   fontFamily: FONT,
//                   transition: "all 0.4s ease",
//                   textShadow: "0 4px 12px rgba(0,0,0,0.6)",
//                 }}
//               >
//                  {item.title.replace("Design", "")}
//               <span className="gradientText">Design</span>

//               </Typography>

//               {/* GLASS OVERLAY */}
//               <Box
//                 className="glass"
//                 sx={{
//                   position: "absolute",
//                   inset: 0,
//                   zIndex: 3,
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                   px: 4,

//                 background: "rgba(0,0,0,0.25)",

//                   backdropFilter: "blur(14px)",
//                   WebkitBackdropFilter: "blur(14px)",

//                   transform: "translateY(100%)",
//                   opacity: 0,
//                   transition: "all 0.5s ease",
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={item.icon}
//                   alt={item.title}
//                   sx={{
//                     width: 120,
//                     height: 120,
//                     mb: 2,
//                     objectFit: "contain",
//                     filter: "brightness(0) invert(1)",
//                     fontFamily: FONT,

//                   }}
//                 />
//                 <Typography
//   sx={{
//     fontSize: 26,
//     fontWeight: 700,
//     mb: 2,
//     fontFamily: FONT,
//     color: TEXT_COLOR, // UI / UX white


//     "& .designGradient": {
//       background: "linear-gradient(135deg, #00E676 0%, #66FFA6 100%)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       backgroundClip: "text",
//       fontWeight: 800,
//       textShadow: " 0 0 10px rgba(0,230,118,0.6), 0 0 25px rgba(0,230,118,0.4)",
//     //  background: linear-gradient("  135deg,#00E676 0%,#66FFA6 50%, #00E676 100%")

//     },
//   }}
// >
//   {item.title}
// </Typography>


//                 <Typography
//                   sx={{
//                     fontSize: 15,
//                     lineHeight: 1.6,
//                     color: "rgba(255,255,255,0.9)",
//                     fontFamily: FONT,
//                   }}
//                 >
//                   {item.desc}
//                 </Typography>
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// }

"use client";

import { Box, Container, Typography, Chip } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const services = [
  {
    bg: "/assets/ui.jpeg",
    title: "UI / UX Design",
    desc: "Modern, user-centric interfaces with smooth user experiences.",
    icon: "/assets/ui-ux.png",
  },
  {
    bg: "/assets/graphic.jpeg",
    title: "Graphic Designing",
    desc: "Creating visually compelling designs that strengthen brand identity.",
    icon: "/assets/graphicicon.png",
  },
  {
    bg: "/assets/web.jpeg",
    title: "Web & WebApp Development",
    desc: "Building scalable, SEO-friendly, high-performance web applications.",
    icon: "/assets/web.png",
  },
  {
    bg: "/assets/mobile.jpeg",
    title: "Mobile App Development",
    desc: "Developing high-performance mobile applications with seamless user experiences.",
    icon: "/assets/mobile.png",
  },
  {
    bg: "/assets/ai.jpeg",
    title: "AI Agents",
    desc: "Building intelligent AI agents to automate processes and enhance decision-making.",
    icon: "/assets/tabelulegs.png",
  },
  {
    bg: "/assets/iot.jpeg",
    title: "IoT Solutions",
    desc: "Creating smart IoT solutions with real-time connectivity and automation.",
    icon: "/assets/iot copy.png",
  },
];

export default function ServicesCards() {
  const PRIMARY_COLOR = "#085482";
  const FONT = "'Montserrat', sans-serif";

  // 🔥 ICON STYLES
  const getIconStyles = (title) => {
    switch (title) {
      case "UI / UX Design":
        return { width: 140, height: 140, filter: "brightness(0) invert(1) drop-shadow(0 0 20px rgba(0,230,118,0.6))" };
      case "Graphic Designing":
        return { width: 100, height: 100, filter: "brightness(0) invert(1)" };
      case "Mobile App Development":
        return { width: 150, height: 150, filter: "brightness(0) invert(1)" };
      case "AI Agents":
        return { width: 150, height: 150, filter: "brightness(0) invert(1) drop-shadow(0 0 25px rgba(0,230,118,0.5))" };
      default:
        return { width: 120, height: 120, filter: "brightness(0) invert(1)" };
    }
  };

  // 🔥 TITLE RENDERER
  const renderTitleWithAccent = (title) => {
    const words = title.split(" ");
    if (words.length === 1) return title;
    const lastWord = words.pop();
    return (
      <>
        {words.join(" ")}{" "}
        <span className="gradient">{lastWord}</span>
      </>
    );
  };

  return (
    <Box sx={{ py: 12, bgcolor: "#F8FAFC" }}>
      <Container maxWidth="lg">
        {/* HEADER */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            icon={<RocketLaunchIcon sx={{ color: PRIMARY_COLOR }} />}
            label="TECH EXPERTISE"
            sx={{
              mb: 3, px: 3, py: 1.5,
              bgcolor: "rgba(8,84,130,0.1)",
              border: "1px solid rgba(8,84,130,0.2)",
              fontFamily: FONT,
              fontWeight: 700,
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: 30, md: 42 },
              fontWeight: 600,
              fontFamily: FONT,
              color: PRIMARY_COLOR,
            }}
          >
            Innovative Solutions for <span style={{ color: "#2D7D2D" }}>Modern Businesses</span>
          </Typography>
        </Box>

        {/* CARDS */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {services.map((item, i) => (
            <Box
              key={i}
              sx={{
                width: { xs: "100%", md: "calc(33.33% - 16px)" },
                height: 420,
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                cursor: "pointer",
                backgroundImage: `url(${item.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",

                "&:hover .glass": { transform: "translateY(0)", opacity: 1 },
                "&:hover .titleButtonWrapper": { opacity: 0, transform: "translate(-50%, -10px)" },
              }}
            >
              {/* 🔥 TOP CENTER BUTTON (Visible before hover) */}
              <Box
                className="titleButtonWrapper"
                sx={{
                  position: "absolute",
                  bottom: 30,
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                  transition: "all 0.4s ease",
                  width: "fit-content",
                }}
              >
                <Box
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: "50px",
                    background: "rgba(8, 84, 130, 0.9)", // Dark Primary with high opacity
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 13, sm: 15 },
                      fontWeight: 700,
                      fontFamily: FONT,
                      color: "#fff",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>

              {/* GLASS OVERLAY (Visible on hover) */}
              <Box
                className="glass"
                sx={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  px: 4,
                  background: "rgba(0,0,0,0.35)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  transform: "translateY(100%)",
                  opacity: 0,
                  transition: "all 0.5s ease",
                }}
              >
                {/* ICON */}
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.title}
                  sx={{
                    mb: 2,
                    objectFit: "contain",
                    ...getIconStyles(item.title),
                  }}
                />

                {/* TITLE WITH LAST WORD ACCENT */}
                <Typography
                  sx={{
                    fontSize: 26,
                    fontWeight: 700,
                    mb: 2,
                    fontFamily: FONT,
                    color: "#ffffff",
                    "& .gradient": {
                      background: "linear-gradient(135deg, #00E676 0%, #66FFA6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 800,
                    },
                  }}
                >
                  {renderTitleWithAccent(item.title)}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.9)",
                    fontFamily: FONT,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}