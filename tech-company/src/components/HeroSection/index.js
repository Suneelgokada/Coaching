// "use client";
// import { useEffect, useState } from "react";
// import { Box, Typography, Container } from "@mui/material";

// export default function HeroSection() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         minHeight: { xs: "520px", md: "650px" },
//         backgroundColor: "#1769d2", // exact  blue
//         overflow: "hidden",
//         color: "#fff",
//       }}
//     >
//       {/* ================= CONTENT ================= */}
//       <Container
//         maxWidth="lg"
//         sx={{
//           pt: { xs: 10, md: 14 }, // ⬅️ important fix
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         <Box sx={{ maxWidth: "640px" }}>
//           <Typography
//             sx={{
//               fontSize: { xs: "26px", md: "36px" },
//               fontWeight: 700,
//               mb: 2,
//             }}
//           >
//             IT Development Services
//           </Typography>

//           <Typography sx={{ lineHeight: 1.8, opacity: 0.95 }}>
//             Our offshore Web Development Services offer a range of solutions
//             over multiple platforms like custom website development,
//             design, mobile development, Windows, Web Services,
//             REST APIs, and e-commerce solutions designed to suit your needs.
//             <br /><br />
//             Providing our clients with optimum quality based solutions
//             to cater to the ever changing requirements is our priority.
//           </Typography>
//         </Box>
//       </Container>

//       {/* ================= RIGHT IMAGE ================= */}
//       <Box
//         component="img"
//         src="/assets/16-years-anniversary.png" 
//         alt="16 Years Anniversary"
//         sx={{
//           position: "absolute",
//           right: { xs: "-20px", md: "40px" },
//           top: { xs: "55%", md: "50%" },
//           transform: "translateY(-50%)",
//           width: { xs: "240px", md: "420px" },
//           zIndex: 2,
//           pointerEvents: "none",
//         }}
//       />

//       {/* ================= CURVE WITH PARALLAX ================= */}
//       <Box
//         sx={{
//           position: "absolute",
//           bottom: "-1px",
//           left: 0,
//           width: "100%",
//           transform: `translateY(${scrollY * 0.12}px)`, // ⬅️ subtle motion
//           transition: "transform 0.03s linear",
//           zIndex: 1,
//         }}
//       >
//         <svg
//           viewBox="0 0 1440 240"
//           preserveAspectRatio="none"
//           style={{ width: "100%", height: "520px", display: "block" }}
//         >
//           {/* MAIN WHITE CURVE */}
//           <path
//             fill="#ffffff"
//             d="
//               M0,150
//               C10,280 500,240 760,200
//               C1040,150 2000,120 1440,140
//               L1440,240
//               L0,500
//               Z
//             "
//           />
//         </svg>
//       </Box>
//     </Box>
//   );
// }

"use client";

import { Box, Typography, Container, Grid } from "@mui/material";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const servicesRef = useRef([]);

  useEffect(() => {
    // Stagger animation for service cards
    servicesRef.current.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) scale(1)";
        }, index * 150);
      }
    });
  }, []);

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      icon: "🎨",
      title: "Graphic Design",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      icon: "🌐",
      title: "Web Applications",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      icon: "⚡",
      title: "REST APIs",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      icon: "🛒",
      title: "E-Commerce",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 0 },
        color: "#fff",
        background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 108, 80, 0.2) 0%, transparent 50%)",
          animation: "pulse 8s ease-in-out infinite",
          zIndex: 1,
        },
        "@keyframes pulse": {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 0.8 },
        },
        "@keyframes float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "@keyframes glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 255, 255, 0.3)" },
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Content */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                px: { xs: 2, md: 4 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "32px", sm: "42px", md: "52px", lg: "62px" },
                  fontWeight: 800,
                  mb: 3,
                  lineHeight: 1.2,
                  fontFamily: "Poppins, sans-serif",
                  background: "linear-gradient(135deg, #ffffff 0%, #a8edea 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "fadeIn 1s ease-in",
                  "@keyframes fadeIn": {
                    from: { opacity: 0, transform: "translateY(30px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              >
                Premium IT Development Services
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "17px", md: "19px", lg: "21px" },
                  lineHeight: 1.8,
                  fontWeight: 400,
                  opacity: 0.95,
                  fontFamily: "Poppins, sans-serif",
                  mb: 2,
                  animation: "fadeIn 1s ease-in 0.3s both",
                }}
              >
                Transform your digital presence with our comprehensive offshore
                development solutions. We deliver cutting-edge web applications,
                stunning mobile experiences, and innovative design solutions.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "17px", lg: "18px" },
                  lineHeight: 1.7,
                  fontWeight: 300,
                  opacity: 0.85,
                  fontFamily: "Poppins, sans-serif",
                  animation: "fadeIn 1s ease-in 0.5s both",
                }}
              >
                Providing our clients with optimum quality-based solutions to
                cater to ever-changing requirements is our priority. Experience
                excellence in every line of code.
              </Typography>
            </Box>
          </Grid>

          {/* Right Side - Services Grid */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" },
                gap: 3,
                px: { xs: 2, md: 4 },
              }}
            >
              {services.map((service, index) => (
                <Box
                  key={index}
                  ref={(el) => (servicesRef.current[index] = el)}
                  sx={{
                    background: service.gradient,
                    borderRadius: "20px",
                    p: 3,
                    textAlign: "center",
                    cursor: "pointer",
                    opacity: 0,
                    transform: "translateY(30px) scale(0.9)",
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    animation: "float 3s ease-in-out infinite",
                    animationDelay: `${index * 0.2}s`,
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "-50%",
                      left: "-50%",
                      width: "200%",
                      height: "200%",
                      background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                      opacity: 0,
                      transition: "opacity 0.5s",
                    },
                    "&:hover": {
                      transform: "translateY(-10px) scale(1.05)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                      "&::before": {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "36px", sm: "42px", md: "48px" },
                      mb: 1.5,
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                    }}
                  >
                    {service.icon}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", sm: "13px", md: "14px" },
                      fontWeight: 600,
                      fontFamily: "Poppins, sans-serif",
                      textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                      lineHeight: 1.3,
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Floating Particles */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float 6s ease-in-out infinite",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245, 87, 108, 0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite",
          animationDelay: "2s",
          zIndex: 0,
        }}
      />
    </Box>
  );
}




// "use client"; 
// import { useEffect, useState } from "react";
// import { Box, Typography, Container } from "@mui/material";

// export default function HeroSection() {
//   const [offsetY, setOffsetY] = useState(0);

//   // Scroll effect kosam logic
//   useEffect(() => {
//     const handleScroll = () => setOffsetY(window.pageYOffset);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Branding Colors
//   const LOGO_BLUE = "#004D71";

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         height: "100vh",
//         width: "100%",
//         display: "flex",
//         alignItems: "flex-start",
//         pt: { xs: "120px", md: "180px" },
//         color: "#fff",
//         backgroundImage: `url('/assets/hero-bg.jpg')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center center",
//         backgroundRepeat: "no-repeat",
//         backgroundAttachment: "fixed", // Idi image ni stable ga unchi parallax look isthundi
//         m: 0,
//         p: 0,
//         overflow: "hidden",

//         // Premium Gradient Overlay (rgba(0,0,0,0.23) badulu idi vaadithe look bauntundi)
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: `linear-gradient(to right, ${LOGO_BLUE}CC, rgba(0,0,0,0.3))`, 
//           zIndex: 1,
//         },
//       }}
//     >
//       <Container
//         maxWidth="xl"
//         sx={{
//           position: "relative",
//           zIndex: 2,
//           // Scroll up chestunte text paiki move ayye dynamic transform
//           transform: `translateY(${offsetY * -0.3}px)`, 
//           transition: "transform 0.1s ease-out",
//         }}
//       >
//         <Box
//           sx={{
//             maxWidth: { xs: "100%", md: "800px" },
//             ml: { md: "5%", lg: "8%" },
//             px: { xs: 2, md: 0 },
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: { xs: "24px", md: "40px" },
//               fontWeight: 500,
//               mb: 3,
//               lineHeight: 1.1,
//               fontFamily: "Poppins, sans-serif",
//               textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
//             }}
//           >
//             IT Development Services
//           </Typography>

//           <Typography
//             sx={{
//               fontSize: { xs: "16px", md: "20px" },
//               lineHeight: 1.8,
//               fontWeight: 400,
//               opacity: 0.95,
//               fontFamily: "Poppins, sans-serif",
//               textShadow: "1px 1px 5px rgba(0,0,0,0.2)",
//             }}
//           >
//             Our offshore Web Development Services offer a range of solutions
//             over multiple platforms like custom website development,
//             design, mobile development, Windows, Web Services,
//             REST APIs, and e-commerce solutions designed to suit your needs.
//             <br />
//             <br />
//             Providing our clients with optimum quality based solutions
//             to cater to the ever changing requirements is our priority.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// }