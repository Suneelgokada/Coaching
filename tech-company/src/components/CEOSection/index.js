"use client";
import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CEOSection = () => {
  const teamImages = ["/assets/vtcteam1.png", "/assets/vtcteam2.png", "/assets/vtcteam3.png"];
  const [teamIndex, setTeamIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTeamIndex((prev) => (prev + 1) % teamImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [teamImages.length]);

  const handleTeamDotClick = (index) => {
    setTeamIndex(index);
  };

  return (
    <Box sx={{ bgcolor: '#eef7fb', overflow: 'hidden' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>

        {/* ================= 1. CEO SECTION (Aligned & Responsive) ================= */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 6, lg: 8 },
            mb: { xs: 10, md: 15 },
            // Standard padding for safety
            px: { xs: 2, md: 4 } 
          }}
        >
          {/* 📸 CEO IMAGE AREA */}
          <Box sx={{ flex: { xs: '1', lg: '0 0 50%' }, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ width: '100%', maxWidth: '550px' }}>
              <Box sx={{ position: 'relative', width: '100%', height: { xs: '350px', sm: '450px', md: '500px', lg: '520px' }, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.12)', '& img': { transition: 'transform 0.5s ease-in-out' }, '&:hover img': { transform: 'scale(1.05)' } }}>
                <Image src="/assets/Vtcsir.png" alt="Mr. Sushil Kumar Patwari" fill style={{ objectFit: 'cover', objectPosition: 'top' }} priority />
              </Box>
            </motion.div>
          </Box>

          {/* ✍️ CEO TEXT AREA - FIXED FOR 1440px+ Screens */}
          <Box
            sx={{
              flex: { xs: '1', lg: '0 0 50%' },
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', lg: 'flex-start' },
              // XL (1440px+) lo content cut avvakunda padding right set cheshanu
              pl: { xs: 0, lg: 10, xl: 12 }, 
              pr: { xs: 0, xl: 8 }, 
              textAlign: { xs: 'center', lg: 'left' },
              // Large screens lo text melliga left ki spread avthundi
              maxWidth: { xl: '650px' },
              mx: { xl: 'auto' }
            }}
          >
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} style={{ width: '100%' }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem', lg: '2.8rem' }, fontWeight: 700, color: '#1a2332', mb: 3, lineHeight: 1.2, textAlign: { xs: 'center', lg: 'left' } }}>
                Mr. Sushil Kumar Patwari
              </Typography>

              <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.1rem', lg: '1.15rem' }, color: '#4a5568', lineHeight: 1.8, mb: 3, textAlign: { xs: 'center', lg: 'justify' } }}>
                As the CEO of <Box component="span" sx={{ fontWeight: 700, color: '#1a2332' }}>VTC Corporation</Box>,
                Mr. Sushil Kumar Patwari has guided the company with visionary leadership and strategic expertise.
              </Typography>

              <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.1rem', lg: '1.15rem' }, color: '#4a5568', lineHeight: 1.8, textAlign: { xs: 'center', lg: 'justify' } }}>
                Under his direction, the organization has achieved exceptional growth and success.
              </Typography>
            </motion.div>
          </Box>
        </Box>

        {/* ================= 2. THE VTC TEAM SECTION (Exactly Symmetrical & Responsive) ================= */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 6, lg: 8 },
            mb: 10,
            px: { xs: 2, md: 4 }
          }}
        >
          {/* 📸 TEAM IMAGE AREA */}
          <Box sx={{ flex: { xs: '1', lg: '0 0 50%' }, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ width: '100%', maxWidth: '550px' }}>
              <Box sx={{ position: 'relative', width: '100%', height: { xs: '300px', sm: '400px', md: '450px', lg: '520px' }, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.15)', bgcolor: 'white' }}>
                <Box sx={{ display: 'flex', width: '100%', height: '100%', transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)', transform: `translateX(-${teamIndex * 100}%)` }}>
                  {teamImages.map((img, i) => (
                    <Box key={i} sx={{ minWidth: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
                      <motion.div animate={{ x: ['0%', '-10%', '0%'] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ width: '115%', height: '100%', position: 'relative' }}>
                        <Image src={img} alt={`Team ${i + 1}`} fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 50vw" />
                      </motion.div>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1.5, zIndex: 5 }}>
                  {teamImages.map((_, i) => (
                    <Box key={i} onClick={() => handleTeamDotClick(i)} sx={{ width: i === teamIndex ? 25 : 10, height: 10, borderRadius: '10px', cursor: 'pointer', bgcolor: i === teamIndex ? '#0b2343' : 'rgba(255,255,255,0.6)', transition: '0.4s' }} />
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Box>

          {/* ✍️ TEAM TEXT AREA - FIXED FOR 1440px+ Screens */}
          <Box
            sx={{
              flex: { xs: '1', lg: '0 0 50%' },
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', lg: 'flex-start' },
              // 1440px daggara alignment fix kosam:
              pl: { xs: 0, lg: 10, xl: 12 }, 
              pr: { xs: 0, xl: 8 },
              textAlign: { xs: 'center', lg: 'left' },
              maxWidth: { xl: '650px' },
              mx: { xl: 'auto' }
            }}
          >
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ width: '100%' }}>
              <Typography variant="h3" sx={{ fontSize: { xs: '2rem', md: '2.2rem', lg: '2.5rem' }, fontWeight: 700, color: '#1a2332', mb: 3, fontFamily: "'Playfair Display', serif", textAlign: { xs: 'center', lg: 'left' } }}>
                The VTC Team
              </Typography>
              <Typography sx={{ fontSize: { xs: '1rem', md: '1.05rem', lg: '1.1rem' }, color: '#4a5568', lineHeight: 1.8, mb: 3, textAlign: { xs: 'center', lg: 'justify' } }}>
                Our skilled professionals form the foundation of VTC Corporation. The team collaborates across corporate, sales, and technical divisions to deliver excellence.
              </Typography>
              <Typography sx={{ fontSize: { xs: '1rem', md: '1.05rem', lg: '1.1rem' }, color: '#4a5568', lineHeight: 1.8, fontWeight: 500, textAlign: { xs: 'center', lg: 'justify' } }}>
                Driven by passion, building strong client relationships globally.
              </Typography>
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* WHY CHOOSE VTC SECTION */}
     <Box
  component="section"
  sx={{
    py: { xs: 8, md: 12 },
    background: 'linear-gradient(to bottom right, #0b2343, #1a3a5c)',
    color: 'white',
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    // 🚀 కంటెంట్ కట్ అవ్వకుండా ఉండేలా చూస్తుంది
    overflow: 'hidden' 
  }}
>
  <Container maxWidth="lg">
    {/* Title Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ textAlign: 'center', marginBottom: '64px' }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2.25rem', md: '3rem' },
          fontWeight: 700,
          mb: 2,
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Why Choose VTC Corporation?
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontSize: '1.25rem', color: '#d1d5db', fontWeight: 400 }}
      >
        Experience the difference that quality and service make
      </Typography>
    </motion.div>

    {/* 🚀 FIXED RESPONSIVE GRID 🚀 */}
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',           // 425px మరియు మొబైల్ లో 1 కాలమ్ (అన్నీ కనిపిస్తాయి)
          sm: '1fr 1fr',       // 768px Tablet లో 2 కాలమ్స్
          md: '1fr 1fr 1fr'    // Desktop లో 3 కాలమ్స్
        },
        columnGap: { xs: '24px', md: '48px' },
        rowGap: { xs: '32px', md: '40px' },
        mt: 4,
        px: { xs: 3, md: 0 },
        // 🚀 Height ఆటోమేటిక్‌గా పెరిగేలా సెట్ చేశాను
        height: 'auto',
        minHeight: 'fit-content'
      }}
    >
      {[
        'Authorized distributor for 40+ premium brands',
        'Competitive pricing with flexible payment options',
        'Expert technical consultation and product guidance', 
        'Timely delivery across Andhra Pradesh',
        'Comprehensive after-sales support',
        'Quality assurance and genuine products guarantee',
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px'
          }}
        >
          {/* ICON AREA */}
          <Box sx={{ display: 'flex', mt: '4px', flexShrink: 0 }}>
            <CheckCircleIcon
              sx={{
                width: 24,
                height: 24,
                color: '#bba14f',
              }}
            />
          </Box>

          {/* TEXT AREA */}
          <Typography
            sx={{
              flex: 1,
              fontSize: { xs: '1rem', md: '1.05rem' },
              color: '#e5e7eb',
              lineHeight: 1.5,
              fontWeight: 400,
              textAlign: 'left',
              wordWrap: 'break-word',
            }}
          >
            {feature}
          </Typography>
        </motion.div>
      ))}
    </Box>
  </Container>
</Box>
    </Box>
  );
};

export default CEOSection;