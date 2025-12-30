// "use client"
// import React,{useState,useRef,useEffect} from 'react';
// import { Grid, Box, Typography, Paper, Container } from '@mui/material';
// import GroupsIcon from '@mui/icons-material/Groups';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import PublicIcon from '@mui/icons-material/Public';
// import CountUp from "react-countup";
//   const stats = [
//     {
//       label: 'No. of Clients Served',
//       value: 65,
//       icon: <GroupsIcon sx={{ fontSize: 50, color: '#029441' }} />,
//     },
//     {
//       label: 'No. of Pincodes Delivered',
//       value: 128,
//       icon: <LocalShippingIcon sx={{ fontSize: 50, color: '#029441' }} />,
//     },
//     {
//       label: 'No. of States',
//       value: 6,
//       icon: <PublicIcon sx={{ fontSize: 50, color: '#029441' }} />,
//     },
//   ];
// const StatsSection = () => {
//      const [inView, setInView] = useState(false);
//   const countRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (countRef.current) {
//       observer.observe(countRef.current);
//     }

//     return () => {
//       observer.disconnect();
//     };
//   }, []);


//   return (
//     <Box
//       sx={{
//         py:4,
//         backgroundColor: '#ffffff',
//         fontFamily: 'Poppins',
//         textAlign: 'center',
//       }}
//     >
//         <Container maxWidth="lg">
//               <Typography
//         variant="h4"
//         sx={{
//           fontWeight: 600,
//           color: '#333',
//           mb: 5,
//           fontFamily: 'Poppins',
//         }}
//       >
//         Our Reach Across India
//       </Typography>

//       <Grid container spacing={4} justifyContent="center">
//         {stats.map((stat, index) => (
//           <Grid size={{xs:12,sm:6,md:4}} key={index}>
//             <Paper
//               elevation={4}
//                 ref={index === 0 ? countRef : null}
//               sx={{
//                 py: 5,
//                 px: 3,
//                 border: '2px solid #029441',
//                 backgroundColor: '#ffffff',
//                 borderRadius: 4,
//                 transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 '&:hover': {
//                   transform: 'translateY(-8px)',
//                   boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
//                 },
//               }}
//             >
//               {stat.icon}
//               <Typography
//                 variant="h3"
//                 sx={{
//                   fontWeight: 600,
//                   color: '#333',
//                   mt: 2,
//                   fontFamily: 'Poppins',
//                 }}
//               >
//                 {index === 2 ? 0 : ''}
//                 {inView ? <CountUp end={stat.value} duration={2} /> : 0 }
//                  {index < 2 && <Box component="span" sx={{ fontWeight: 'bold', ml: 0.5 }}>
//                   +</Box>}
//               </Typography>
//               <Typography
//                 variant="subtitle1"
//                 sx={{
//                   color: '#4f4f4f',
//                   mt: 1,
//                   fontSize: '1.1rem',
//                   fontWeight: 500,
//                 }}
//               >
//                 {stat.label}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default StatsSection;


"use client";
import React, { useState, useRef, useEffect } from "react";
import { Grid, Box, Typography, Paper, Container } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BusinessIcon from "@mui/icons-material/Business";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CountUp from "react-countup";

const PRIMARY = "#142850";
const ACCENT = "#27496D";
const TEXT_SOFT = "#6B7A8F";
const CARD_BORDER = "#E6ECF2";
const BG_LIGHT = "#F8FAFC";

const stats = [
  {
    label: "Years of Excellence",
    value: 15,
    startValue: 0,
    icon: <WorkspacePremiumIcon sx={{ fontSize: { xs: 35, md: 50 }, color: PRIMARY }} />,
  },
  {
    label: "Brand Partners",
    value: 40,
    startValue: 30,
    icon: <BusinessIcon sx={{ fontSize: { xs: 35, md: 50 }, color: PRIMARY }} />,
  },
  {
    label: "Happy Clients",
    value: 2500,
    startValue: 2480,
    icon: <SentimentSatisfiedAltIcon sx={{ fontSize: { xs: 35, md: 50 }, color: PRIMARY }} />,
  },
  {
    label: "Projects Delivered",
    value: 5000,
    startValue: 4980,
    icon: <AssignmentTurnedInIcon sx={{ fontSize: { xs: 35, md: 50 }, color: PRIMARY }} />,
  },
];

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) observer.observe(countRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ 
      py: { xs: 6, sm: 8, md: 10 }, // Mobile lo white space tagginchanu
      backgroundColor: BG_LIGHT, 
      textAlign: "center" 
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mb: { xs: 4, md: 6 }, // Text kindha space optimize chesa
            fontFamily: "Poppins",
            color: PRIMARY,
            letterSpacing: "0.5px",
            fontSize: { xs: "1.75rem", sm: "2.125rem", md: "2.125rem" }
          }}
        >
          Our Remarkable Journey
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}> 
              {/* xs={6} pettadam valla mobile lo 2 cards side-by-side vasthayi, white space thagguthundi */}
              <Paper
                elevation={0}
                ref={index === 0 ? countRef : null}
                sx={{
                  py: { xs: 3, md: 6 }, // Mobile padding optimize chesa
                  px: { xs: 2, md: 3 },
                  borderRadius: { xs: 2, md: 4 },
                  border: `1px solid ${CARD_BORDER}`,
                  backgroundColor: "#fff",
                  transition: "all 0.35s ease",
                  height: "100%", // Cards alignment perfect ga undadaniki
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                    borderColor: PRIMARY,
                  },
                }}
              >
                <Box sx={{ mb: { xs: 1, md: 2 } }}>{stat.icon}</Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: PRIMARY,
                    fontFamily: "Poppins",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" } // Numbers size dynamic ga marchanu
                  }}
                >
                  {inView ? (
                    <CountUp
                      start={stat.startValue}
                      end={stat.value}
                      duration={3}
                      useEasing={true}
                      separator=","
                    />
                  ) : (
                    stat.startValue
                  )}
                  <Typography
                    component="span"
                    variant="h4"
                    sx={{
                      color: ACCENT,
                      ml: 0.5,
                      fontWeight: 900,
                      fontSize: { xs: "1.2rem", md: "2.125rem" }
                    }}
                  >
                    +
                  </Typography>
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: TEXT_SOFT,
                    mt: 1,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.85rem" }, // Labels font optimize chesa
                    letterSpacing: { xs: "0.4px", md: "0.8px" },
                    lineHeight: 1.2
                  }}
                >
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;