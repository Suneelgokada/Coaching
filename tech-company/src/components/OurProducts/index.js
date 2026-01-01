// "use client";

// import React, { useState, useEffect } from "react";
// import { Box, Container, Typography, Avatar, Stack } from "@mui/material";

// const testimonials = [
//   {
//     quote: "Coding Roots has been exceptional in training our team in MERN stack development. Their practical approach and industry-focused curriculum prepared us perfectly for real-world projects. The placement support was outstanding!",
//     name: "RAHUL SHARMA | SOFTWARE ENGINEER",
//     company: "Tech Innovators Pvt Ltd",
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     rating: 5,
//   },
//   {
//     quote: "What makes Coding Roots different from other institutes is their commitment, patience, and dedication to student success. They provided comprehensive training in IoT and .NET, followed by placement in their own company based on performance. Highly recommend for anyone serious about a tech career!",
//     name: "PRIYA REDDY | FULL STACK DEVELOPER",
//     company: "Digital Solutions Inc",
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     rating: 5,
//   },
//   {
//     quote: "Working with Coding Roots has been a transformative experience. The trainers made genuine efforts in understanding our learning needs, and the hands-on projects surpassed all expectations. The opportunity to work in their company post-training based on performance is truly unique!",
//     name: "ADITYA KUMAR | IOT DEVELOPER",
//     company: "Smart Systems Pvt Ltd",
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     rating: 5,
//   },
//   {
//     quote: "Coding Roots has provided excellent training in .NET development and modern web technologies. The placement assistance and opportunity to join their team made all the difference. I highly recommend this institute to anyone seeking expertise in software development.",
//     name: "SNEHA PATEL | .NET DEVELOPER",
//     company: "Enterprise Tech Solutions",
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     rating: 5,
//   },
//   {
//     quote: "Training at Coding Roots was exceptional. The 6-month MERN stack program covered everything from basics to advanced concepts. Communication was excellent, deadlines were met, and the real-world project experience was invaluable. If you're looking for quality tech training with placement support, Coding Roots is the perfect choice!",
//     name: "VIKRAM SINGH | MERN STACK DEVELOPER",
//     company: "Web Dynamics",
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     rating: 5,
//   },
//   {
//     quote: "I completed my IoT and .NET training at Coding Roots and couldn't be happier. The trainers are extremely professional and delivered content that was both comprehensive and industry-relevant. The performance-based placement in their company is an excellent opportunity. Very satisfied with Coding Roots!",
//     name: "ANANYA KRISHNAN | IOT SPECIALIST",
//     company: "Connected Devices Ltd",
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     rating: 5,
//   },
// ];

// export default function TestimonialSection() {
//   const [activeStep, setActiveStep] = useState(0);

//   // Auto-play logic: Changes slide every 6 seconds for better readability of long quotes
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveStep((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <Box sx={{ py: 10, backgroundColor: "#fff", textAlign: "center" }}>
//       <Container maxWidth="md">
//         {/* Title */}
//         <Typography
//           variant="h4"
//           sx={{
//             fontWeight: 700,
//             mb: 4,
//             fontFamily: "Poppins",
//             color: "#0b2343",
//             textTransform: "uppercase",
//             letterSpacing: 1,
//           }}
//         >
//           WHAT <span style={{ color: "#17cfb6" }}>CLIENTS</span> SAY?
//         </Typography>

//         {/* Content Area */}
//         <Box sx={{ minHeight: "350px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           {/* Avatar */}
//           <Avatar
//             src={testimonials[activeStep].image}
//             sx={{
//               width: 100,
//               height: 100,
//               mb: 3,
//               border: "2px solid #e0e0e0",
//             }}
//           />

//           {/* Quote Text */}
//           <Typography
//             sx={{
//               fontSize: "16px",
//               fontStyle: "italic",
//               color: "#444",
//               lineHeight: 1.8,
//               mb: 4,
//               fontFamily: "Inter",
//               px: { xs: 2, md: 5 },
//             }}
//           >
//             "{testimonials[activeStep].quote}"
//           </Typography>

//           {/* Name & Company */}
//           <Typography
//             sx={{
//               fontWeight: 800,
//               fontSize: "15px",
//               color: "#0b2343",
//               fontFamily: "Poppins",
//               textTransform: "uppercase"
//             }}
//           >
//             — {testimonials[activeStep].name}
//           </Typography>
//           <Typography
//             sx={{
//               fontSize: "14px",
//               color: "#777",
//               mb: 4,
//               fontFamily: "Inter",
//             }}
//           >
//             {testimonials[activeStep].company}
//           </Typography>
//         </Box>

//         {/* Navigation Dots */}
//         <Stack direction="row" spacing={1.5} justifyContent="center" sx={{ mt: 2 }}>
//           {testimonials.map((_, index) => (
//             <Box
//               key={index}
//               onClick={() => setActiveStep(index)}
//               sx={{
//                 width: 10,
//                 height: 10,
//                 borderRadius: "50%",
//                 backgroundColor: activeStep === index ? "#17cfb6" : "#e0e0e0",
//                 cursor: "pointer",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                     backgroundColor: "#17cfb6"
//                 }
//               }}
//             />
//           ))}
//         </Stack>
//       </Container>
//     </Box>
//   );
// }

// "use client";

// import React, { useState, useEffect } from "react";
// import { Box, Container, Typography, Avatar, Stack, Chip } from "@mui/material";
// import { keyframes } from "@mui/system";
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// import SchoolIcon from '@mui/icons-material/School';
// import CodeIcon from '@mui/icons-material/Code';
// import WorkIcon from '@mui/icons-material/Work';

// // Animations
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const scaleIn = keyframes`
//   from { opacity: 0; transform: scale(0.8); }
//   to { opacity: 1; transform: scale(1); }
// `;

// const float = keyframes`
//   0%, 100% { transform: translateY(0px); }
//   50% { transform: translateY(-10px); }
// `;

// const testimonials = [
//   {
//     quote: "Coding Roots has been exceptional in training our team in MERN stack development. Their practical approach and industry-focused curriculum prepared us perfectly for real-world projects. The placement support was outstanding!",
//     name: "RAHUL SHARMA | SOFTWARE ENGINEER",
//     company: "Tech Innovators Pvt Ltd",
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     rating: 5,
//   },
//   {
//     quote: "What makes Coding Roots different from other institutes is their commitment, patience, and dedication to student success. They provided comprehensive training in IoT and .NET, followed by placement in their own company based on performance. Highly recommend for anyone serious about a tech career!",
//     name: "PRIYA REDDY | FULL STACK DEVELOPER",
//     company: "Digital Solutions Inc",
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     rating: 5,
//   },
//   {
//     quote: "Working with Coding Roots has been a transformative experience. The trainers made genuine efforts in understanding our learning needs, and the hands-on projects surpassed all expectations. The opportunity to work in their company post-training based on performance is truly unique!",
//     name: "ADITYA KUMAR | IOT DEVELOPER",
//     company: "Smart Systems Pvt Ltd",
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     rating: 5,
//   },
//   {
//     quote: "Coding Roots has provided excellent training in .NET development and modern web technologies. The placement assistance and opportunity to join their team made all the difference. I highly recommend this institute to anyone seeking expertise in software development.",
//     name: "SNEHA PATEL | .NET DEVELOPER",
//     company: "Enterprise Tech Solutions",
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     rating: 5,
//   },
//   {
//     quote: "Training at Coding Roots was exceptional. The 6-month MERN stack program covered everything from basics to advanced concepts. Communication was excellent, deadlines were met, and the real-world project experience was invaluable. If you're looking for quality tech training with placement support, Coding Roots is the perfect choice!",
//     name: "VIKRAM SINGH | MERN STACK DEVELOPER",
//     company: "Web Dynamics",
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     rating: 5,
//   },
//   {
//     quote: "I completed my IoT and .NET training at Coding Roots and couldn't be happier. The trainers are extremely professional and delivered content that was both comprehensive and industry-relevant. The performance-based placement in their company is an excellent opportunity. Very satisfied with Coding Roots!",
//     name: "ANANYA KRISHNAN | IOT SPECIALIST",
//     company: "Connected Devices Ltd",
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     rating: 5,
//   },
// ];

// export default function TestimonialSection() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setActiveStep((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//         setIsAnimating(false);
//       }, 300);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleDotClick = (index) => {
//     if (index !== activeStep) {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setActiveStep(index);
//         setIsAnimating(false);
//       }, 300);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         py: { xs: 8, md: 12 },
//         // ✅ Background రంగును కొంచెం తేలికగా (Light Blue Gradient) మార్చాను
//         background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
//         overflow: "hidden",
//       }}
//     >
//       {/* Decorative background blobs - Adjusted for light theme */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: "10%",
//           right: "10%",
//           width: "300px",
//           height: "300px",
//           background: "radial-gradient(circle, rgba(0, 77, 113, 0.1), transparent 70%)",
//           borderRadius: "50%",
//           filter: "blur(60px)",
//           animation: `${float} 8s ease-in-out infinite`,
//         }}
//       />

//       <Container maxWidth="lg">
//         {/* Header */}
//         <Box sx={{ textAlign: "center", mb: 8 }}>
//           <Chip
//             icon={<SchoolIcon sx={{ fontSize: 18, color: "#004D71 !important" }} />}
//             label="SUCCESS STORIES"
//             sx={{
//               mb: 3,
//               px: 2.5,
//               py: 2.5,
//               height: "auto",
//               background: "rgba(0, 77, 113, 0.1)",
//               border: "1px solid rgba(0, 77, 113, 0.2)",
//               borderRadius: "50px",
//               color: "#004D71",
//               fontWeight: 700,
//               letterSpacing: "1px",
//             }}
//           />

//           <Typography
//             variant="h2"
//             sx={{
//               fontSize: { xs: "32px", md: "48px" },
//               fontWeight: 900,
//               fontFamily: "Poppins, sans-serif",
//               mb: 2,
//               color: "#004D71", // Heading also changed to dark blue for readability
//             }}
//           >
//             WHAT OUR <span style={{ color: "#2D7D2D" }}>STUDENTS</span> SAY?
//           </Typography>

//           <Typography
//             sx={{
//               fontSize: { xs: "16px", md: "18px" },
//               color: "rgba(0, 0, 0, 0.6)",
//               maxWidth: "700px",
//               mx: "auto",
//               fontFamily: "Poppins, sans-serif",
//             }}
//           >
//             Real success stories from our students who transformed their careers with Coding Roots
//           </Typography>
//         </Box>

//         {/* Testimonial Card */}
//         <Box sx={{ position: "relative", maxWidth: "900px", mx: "auto", mb: 6 }}>
//           <Box
//             sx={{
//               // ✅ Card కు అదే Dark Blue రంగును (#004D71) ఉంచాను
//               background: "#004D71",
//               borderRadius: "24px",
//               p: { xs: 4, md: 6 },
//               position: "relative",
//               boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
//               transition: "all 0.5s ease",
//               opacity: isAnimating ? 0 : 1,
//               transform: isAnimating ? "translateY(20px)" : "translateY(0)",
//             }}
//           >
//             {/* Quote Icon */}
//             <Box sx={{ position: "absolute", top: 30, left: 30, opacity: 0.2 }}>
//               <FormatQuoteIcon sx={{ fontSize: 80, color: "#fff" }} />
//             </Box>

//             <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
//               <Box sx={{ position: "relative", mb: 2 }}>
//                 <Avatar
//                   src={testimonials[activeStep].image}
//                   sx={{
//                     width: 110,
//                     height: 110,
//                     border: "4px solid rgba(255, 255, 255, 0.2)",
//                   }}
//                 />
//               </Box>

//               <Stack direction="row" spacing={0.5} sx={{ mb: 1 }}>
//                 {[...Array(5)].map((_, i) => (
//                   <Typography key={i} sx={{ color: "#fbbf24", fontSize: "20px" }}>⭐</Typography>
//                 ))}
//               </Stack>
//             </Box>

//             <Typography sx={{ fontSize: "17px", fontStyle: "italic", color: "#fff", lineHeight: 2, mb: 4, textAlign: "center", px: { md: 4 } }}>
//               "{testimonials[activeStep].quote}"
//             </Typography>

//             <Box sx={{ textAlign: "center" }}>
//               <Typography sx={{ fontWeight: 800, color: "#4ade80", textTransform: "uppercase", fontSize: "18px", mb: 0.5 }}>
//                 {testimonials[activeStep].name}
//               </Typography>
//               <Typography sx={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}>
//                 {testimonials[activeStep].company}
//               </Typography>
//             </Box>
//           </Box>
//         </Box>

//         {/* Dots Navigation */}
//         <Stack direction="row" spacing={2} justifyContent="center">
//           {testimonials.map((_, index) => (
//             <Box
//               key={index}
//               onClick={() => handleDotClick(index)}
//               sx={{
//                 width: activeStep === index ? 40 : 12,
//                 height: 12,
//                 borderRadius: "10px",
//                 // Dot color adjusted for light background
//                 background: activeStep === index ? "#004D71" : "rgba(0, 77, 113, 0.2)",
//                 cursor: "pointer",
//                 transition: "all 0.4s ease",
//               }}
//             />
//           ))}
//         </Stack>

//         {/* Stats Section */}
//         <Box sx={{ display: "flex", justifyContent: "center", gap: 6, mt: 8, flexWrap: "wrap" }}>
//           {[
//             { number: "500+", label: "Students Trained" },
//             { number: "95%", label: "Placement Rate" },
//             { number: "50+", label: "Partner Companies" },
//           ].map((stat, index) => (
//             <Box key={index} sx={{ textAlign: "center", px: 4 }}>
//               <Typography variant="h3" sx={{ fontWeight: 900, color: "#004D71" }}>
//                 {stat.number}
//               </Typography>
//               <Typography sx={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.5)", fontWeight: 600, textTransform: "uppercase" }}>
//                 {stat.label}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Stack, Chip } from "@mui/material";
import { keyframes } from "@mui/system";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';

// స్లైడింగ్ యానిమేషన్
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const testimonials = [
  {
    quote: "We were looking for a web design company that could capture the essence of our brand and provide an exceptional user experience. Coding Roots did just that. They are a reliable partner who consistently delivers outstanding results.",
    name: "Megha Infra Projects",
    rating: 5,
  },
  {
    quote: "I commend the company for their excellent work service. They always go the extra mile to make sure that their customers are satisfied. I would highly recommend them to anyone in need of their services.",
    name: "DCCB",
    rating: 5,
  },
  {
    quote: "Working with Coding Roots has been a great experience. These guys made a genuine effort in understanding all our needs and requirements, and the end result was a product that surpassed all our initial expectations.",
    name: "Hibiscus Consulting",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [activeStep, setActiveStep] = useState(0);

  // ఆటోమేటిక్ స్క్రోలింగ్ లాజిక్ (ప్రతి 5 సెకన్లకు మారుతుంది)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        // background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            label="CLIENT TESTIMONIALS"
            sx={{
              mb: 3, px: 2, py: 2.5, height: "auto",
              background: "rgba(0, 77, 113, 0.1)",
              border: "1px solid rgba(0, 77, 113, 0.2)",
              borderRadius: "50px", color: "#004D71", fontWeight: 700,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 900,
              fontFamily: "Poppins, sans-serif",
              mb: 2, color: "#004D71",
            }}
          >
            TRUSTED BY <span style={{ color: "#2D7D2D" }}>LEADING</span> COMPANIES
          </Typography>
        </Box>

        {/* Testimonial Container with Animation */}
        <Box sx={{ position: "relative", maxWidth: "850px", mx: "auto", mb: 6 }}>
          {testimonials.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: activeStep === index ? "block" : "none",
                animation: `${fadeIn} 0.8s ease-in-out`,
                background: "#004D71",
                borderRadius: "24px",
                p: { xs: 4, md: 8 },
                position: "relative",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                textAlign: "center",
              }}
            >
              <FormatQuoteIcon sx={{ fontSize: 60, color: "rgba(255,255,255,0.2)", mb: 2 }} />
              
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  fontStyle: "italic",
                  color: "#fff",
                  lineHeight: 1.8,
                  mb: 4,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                "{item.quote}"
              </Typography>

              <Stack direction="row" spacing={0.5} justifyContent="center" sx={{ mb: 2 }}>
                {[...Array(item.rating)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: "#fbbf24", fontSize: "24px" }} />
                ))}
              </Stack>

              <Typography
                sx={{
                  fontWeight: 800,
                  color: "#4ade80",
                  fontSize: "22px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Navigation Dots */}
        <Stack direction="row" spacing={2} justifyContent="center">
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveStep(index)}
              sx={{
                width: activeStep === index ? 30 : 12,
                height: 12,
                borderRadius: "10px",
                background: activeStep === index ? "#004D71" : "rgba(0, 77, 113, 0.2)",
                cursor: "pointer",
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}