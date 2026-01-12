"use client";
import { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, Lightbulb, Layers, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    desc: "Understanding business goals, users and requirements.",
    icon: Search,
    color: "#22C55E"
  },
  {
    title: "Planning",
    desc: "Creating roadmap, strategy and architecture.",
    icon: Lightbulb,
    color: "#085482"
  },
  {
    title: "Designing",
    desc: "Designing intuitive, scalable and modern UI/UX.",
    icon: Layers,
    color: "#22C55E"
  },
  {
    title: "Development",
    desc: "Building secure, high-performance tech solutions.",
    icon: Code2,
    color: "#085482"
  },
  {
    title: "Maintenance",
    desc: "Deploying, monitoring and continuous improving.",
    icon: Rocket,
    color: "#22C55E"
  }
];

export default function PremiumSnakeProcess() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40
  });

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        bgcolor: "#ffffff",
        py: { xs: 6, sm: 8, md: 12 },
        overflow: "hidden"
      }}
    >
      {/* Subtle gradient orbs */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 40, md: 80 },
          left: { xs: 20, md: 40 },
          width: { xs: 200, sm: 280, md: 384 },
          height: { xs: 200, sm: 280, md: 384 },
          bgcolor: "#DBEAFE",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.3
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 40, md: 80 },
          right: { xs: 20, md: 40 },
          width: { xs: 200, sm: 280, md: 384 },
          height: { xs: 200, sm: 280, md: 384 },
          bgcolor: "#E9D5FF",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.3
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative" }}>
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 6, sm: 8, md: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.75rem", md: "0.875rem" },
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#2563EB",
                mb: 1.5
              }}
            >
              HOW WE DO IT
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 600,
              fontFamily: "Montserrat, sans-serif", // Montserrat spelling check cheskondi
              mb: 8,
              color: "#085482",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Our Process 
          </Typography>
          </motion.div>
        </Box>

        {/* Desktop/Tablet: Horizontal Snake Line */}
        <Box
          component="svg"
          sx={{
            display: { xs: "none", lg: "block" },
            position: "absolute",
            left: 0,
            right: 0,
            top: { lg: 280 },
            width: "100%",
            height: 400,
            pointerEvents: "none",
            zIndex: 1
          }}
          viewBox="0 0 1400 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="20%" stopColor="#085482" />
              <stop offset="40%" stopColor="#22C55E" />
              <stop offset="60%" stopColor="#085482" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
          </defs>

          <path
            d="M 80 100 L 240 100 Q 270 100 270 130 L 270 220 Q 270 250 300 250 L 460 250 Q 490 250 490 220 L 490 130 Q 490 100 520 100 L 680 100 Q 710 100 710 130 L 710 220 Q 710 250 740 250 L 900 250 Q 930 250 930 220 L 930 130 Q 930 100 960 100 L 1120 100 Q 1150 100 1150 130 L 1150 220 Q 1150 250 1180 250 L 1320 250"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="3"
            strokeDasharray="8 8"
          />

          <motion.path
            d="M 80 100 L 240 100 Q 270 100 270 130 L 270 220 Q 270 250 300 250 L 460 250 Q 490 250 490 220 L 490 130 Q 490 100 520 100 L 680 100 Q 710 100 710 130 L 710 220 Q 710 250 740 250 L 900 250 Q 930 250 930 220 L 930 130 Q 930 100 960 100 L 1120 100 Q 1150 100 1150 130 L 1150 220 Q 1150 250 1180 250 L 1320 250"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            style={{
              pathLength: pathLength,
              filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.5))"
            }}
          />
        </Box>

        {/* Tablet: 2-Column Snake Line */}
        <Box
          component="svg"
          sx={{
            display: { xs: "none", sm: "block", lg: "none" },
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: 200,
            width: 600,
            height: 1000,
            pointerEvents: "none",
            zIndex: 1
          }}
          viewBox="0 0 600 1000"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="lineGradientTablet" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="25%" stopColor="#085482" />
              <stop offset="50%" stopColor="#22C55E" />
              <stop offset="75%" stopColor="#085482" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
          </defs>

          {/* 2x2 + 1 Grid Pattern Snake */}
          <path
            d="M 150 80 L 150 180 Q 150 210 180 210 L 420 210 Q 450 210 450 240 L 450 340 Q 450 370 420 370 L 180 370 Q 150 370 150 400 L 150 500 Q 150 530 180 530 L 300 530"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="3"
            strokeDasharray="8 8"
          />

          <motion.path
            d="M 150 80 L 150 180 Q 150 210 180 210 L 420 210 Q 450 210 450 240 L 450 340 Q 450 370 420 370 L 180 370 Q 150 370 150 400 L 150 500 Q 150 530 180 530 L 300 530"
            fill="none"
            stroke="url(#lineGradientTablet)"
            strokeWidth="4"
            strokeLinecap="round"
            style={{
              pathLength: pathLength,
              filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.5))"
            }}
          />
        </Box>

        {/* Mobile: Vertical Snake Line */}
        <Box
          component="svg"
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: 180,
            width: 200,
            height: "100%",
            pointerEvents: "none",
            zIndex: 1
          }}
          viewBox="0 0 200 2000"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="lineGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="25%" stopColor="#085482" />
              <stop offset="50%" stopColor="#22C55E" />
              <stop offset="75%" stopColor="#085482" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
          </defs>

          <path
            d="M 100 0 L 100 200 Q 100 230 70 230 L 70 320 Q 70 350 100 350 L 100 550 Q 100 580 130 580 L 130 670 Q 130 700 100 700 L 100 900 Q 100 930 70 930 L 70 1020 Q 70 1050 100 1050 L 100 1250 Q 100 1280 130 1280 L 130 1370 Q 130 1400 100 1400 L 100 1600"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="3"
            strokeDasharray="8 8"
          />

          <motion.path
            d="M 100 0 L 100 200 Q 100 230 70 230 L 70 320 Q 70 350 100 350 L 100 550 Q 100 580 130 580 L 130 670 Q 130 700 100 700 L 100 900 Q 100 930 70 930 L 70 1020 Q 70 1050 100 1050 L 100 1250 Q 100 1280 130 1280 L 130 1370 Q 130 1400 100 1400 L 100 1600"
            fill="none"
            stroke="url(#lineGradientMobile)"
            strokeWidth="4"
            strokeLinecap="round"
            style={{
              pathLength: pathLength,
              filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.5))"
            }}
          />
        </Box>

        {/* Cards Container - Responsive Layout */}
        <Box
          sx={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(5, 1fr)"
            },
            gap: { xs: 8, sm: 4, md: 3, lg: 4 },
            zIndex: 2,
            // Ensure proper spacing on tablet sizes
            px: { xs: 0, sm: 2, md: 0 }
          }}
        >
          {steps.map((step, i) => (
            <ProcessCard key={i} step={step} index={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function ProcessCard({ step, index }) {
  const Icon = step.icon;
  const isUp = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Box
        sx={{
          position: "relative",
          mt: { 
            xs: 0,
            sm: index >= 4 ? 0 : (index % 2 === 0 ? 0 : 8),
            lg: isUp ? 0 : 15 
          },
          height: "100%",
          "&:hover": {
            "& .card": {
              transform: { 
                xs: "translateY(-4px)", 
                md: "translateY(-8px) scale(1.02)" 
              },
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
            },
            "& .accent-line": {
              transform: "scaleX(1)"
            },
            "& .icon-box": {
              transform: "scale(1.1)"
            }
          }
        }}
      >
        {/* Connection dot - Desktop (5 cols) */}
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            position: "absolute",
            top: isUp ? "auto" : -60,
            bottom: isUp ? -60 : "auto",
            left: "50%",
            transform: "translateX(-50%)",
            width: 16,
            height: 16,
            borderRadius: "50%",
            bgcolor: step.color,
            boxShadow: `0 0 20px ${step.color}80`,
            zIndex: 10
          }}
        />

        {/* Connection dot - Tablet (2 cols grid) */}
        <Box
          sx={{
            display: { xs: "none", sm: "block", lg: "none" },
            position: "absolute",
            top: index === 0 ? -40 : "auto",
            right: index === 0 || index === 2 ? -40 : "auto",
            left: index === 1 || index === 3 ? -40 : "auto",
            bottom: index === 4 ? -40 : "auto",
            width: 14,
            height: 14,
            borderRadius: "50%",
            bgcolor: step.color,
            boxShadow: `0 0 20px ${step.color}80`,
            zIndex: 10
          }}
        />

        {/* Connection dot - Mobile (side) */}
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            position: "absolute",
            left: index % 2 === 0 ? -50 : "auto",
            right: index % 2 === 1 ? -50 : "auto",
            top: "50%",
            transform: "translateY(-50%)",
            width: 14,
            height: 14,
            borderRadius: "50%",
            bgcolor: step.color,
            boxShadow: `0 0 20px ${step.color}80`,
            zIndex: 10
          }}
        />

              {/* Card */}
              <Box
                  className="card"
                  sx={{
                      position: "relative",
                      bgcolor: "white",
                      borderRadius: { xs: 3, md: 4 },
                      p: { xs: 3, sm: 3.5, md: 4 },

                      /* 🔥 IMPORTANT PART */
                      minHeight: { xs: 260, sm: 280, md: 320 },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",

                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      border: "1px solid #F3F4F6",
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      overflow: "hidden"
                  }}
              >

          {/* Gradient background on hover */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg, ${step.color}20, transparent)`,
              opacity: 0,
              transition: "opacity 0.5s",
              ".card:hover &": { opacity: 0.08 }
            }}
          />

          {/* Step Number Badge */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: 16, md: 24 },
              right: { xs: 16, md: 24 },
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: step.color,
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "1rem", md: "1.125rem" },
              boxShadow: `0 4px 14px ${step.color}40`
            }}
          >
            {index + 1}
          </Box>

          {/* Icon Box */}
          <Box
            className="icon-box"
            sx={{
              width: { xs: 56, md: 64 },
              height: { xs: 56, md: 64 },
              borderRadius: { xs: 2.5, md: 3 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: `${step.color}15`,
              boxShadow: `0 4px 14px ${step.color}20`,
              mb: { xs: 2.5, md: 3 },
              transition: "transform 0.3s"
            }}
          >
            <Icon 
              size={window.innerWidth < 768 ? 28 : 32} 
              color={step.color} 
              strokeWidth={2} 
            />
          </Box>

          {/* Content */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#111827",
              mb: { xs: 1, md: 1.5 },
              fontSize: { xs: "1.25rem", md: "1.5rem" }
            }}
          >
            {step.title}
          </Typography>
          <Typography
            sx={{
              color: "#6B7280",
              lineHeight: 1.6,
              fontSize: { xs: "0.875rem", md: "0.938rem" }
            }}
          >
            {step.desc}
          </Typography>

          {/* Bottom Accent Line */}
          <Box
            className="accent-line"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: { xs: 3, md: 4 },
              bgcolor: step.color,
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.5s"
            }}
          />
        </Box>
      </Box>
    </motion.div>
  );
}
