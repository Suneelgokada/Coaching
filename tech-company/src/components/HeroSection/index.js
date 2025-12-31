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
//         backgroundColor: "#1769d2", // exact Technoxis blue
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

// "use client";

// import { Box, Typography, Container } from "@mui/material";



// export default function HeroSection() {

//   return (

//     <Box

//       sx={{

//         position: "relative",

//         height: "100vh",

//         width: "100%",

//         display: "flex",

//         // alignItems: "center" nundi "flex-start" ki marchanu content paiki velladaniki

//         alignItems: "flex-start",

//         // Padding top add cheyadam valla content mari moolaki vellakunda adjust avthundi

//         pt: { xs: "120px", md: "180px" },

//         color: "#fff",

       

//         backgroundImage: `url('/assets/hero1.png')`,

//           backgroundImage: `url('/assets/hero-bg.jpg')`,

//         backgroundSize: "cover",

//         backgroundPosition: "center center",

//         backgroundRepeat: "no-repeat",

       

//         m: 0,

//         p: 0,

//         overflow: "hidden",



//         "&::before": {

//           content: '""',

//           position: "absolute",

//           top: 0,

//           left: 0,

//           right: 0,

//           bottom: 0,

//           backgroundColor: "rgba(0, 0, 0, 0)",

//           zIndex: 1,

//         },

//       }}

//     >

//       <Container

//         maxWidth="xl"

//         sx={{

//           position: "relative",

//           zIndex: 2,

//         }}

//       >

//         <Box

//           sx={{

//             maxWidth: { xs: "100%", md: "800px" },

//             ml: { md: "5%", lg: "8%" },

//             px: { xs: 2, md: 0 }

//           }}

//         >

//           <Typography

//             sx={{

//               fontSize: { xs: "32px", md: "56px" },

//               fontWeight: 800,

//               mb: 3,

//               lineHeight: 1.1,

//               fontFamily: "Poppins, sans-serif",

//             }}

//           >

//             IT Development Services

//           </Typography>



//           <Typography

//             sx={{

//               fontSize: { xs: "16px", md: "20px" },

//               lineHeight: 1.8,

//               fontWeight: 400,

//               opacity: 0.9,

//               fontFamily: "Poppins, sans-serif",

//             }}

//           >

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

//     </Box>

//   );

// }

"use client"; 
import { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  // Scroll effect kosam logic
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Branding Colors
  const LOGO_BLUE = "#004D71";

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        pt: { xs: "120px", md: "180px" },
        color: "#fff",
        backgroundImage: `url('/assets/hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Idi image ni stable ga unchi parallax look isthundi
        m: 0,
        p: 0,
        overflow: "hidden",

        // Premium Gradient Overlay (rgba(0,0,0,0.23) badulu idi vaadithe look bauntundi)
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(to right, ${LOGO_BLUE}CC, rgba(0,0,0,0.3))`, 
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          // Scroll up chestunte text paiki move ayye dynamic transform
          transform: `translateY(${offsetY * -0.3}px)`, 
          transition: "transform 0.1s ease-out",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "800px" },
            ml: { md: "5%", lg: "8%" },
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "40px" },
              fontWeight: 500,
              mb: 3,
              lineHeight: 1.1,
              fontFamily: "Poppins, sans-serif",
              textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            IT Development Services
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: 1.8,
              fontWeight: 400,
              opacity: 0.95,
              fontFamily: "Poppins, sans-serif",
              textShadow: "1px 1px 5px rgba(0,0,0,0.2)",
            }}
          >
            Our offshore Web Development Services offer a range of solutions
            over multiple platforms like custom website development,
            design, mobile development, Windows, Web Services,
            REST APIs, and e-commerce solutions designed to suit your needs.
            <br />
            <br />
            Providing our clients with optimum quality based solutions
            to cater to the ever changing requirements is our priority.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}