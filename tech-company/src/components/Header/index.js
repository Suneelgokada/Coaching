"use client";
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Paper,
  Popper,
  ListItemButton,
  Collapse,
  Fade,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { servicesData } from "../service/servicedata";
import ServicesSection from "../service/ServicesSection";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
/* ================= COLORS (LOGO BASED) ================= */
const LOGO_GREEN = "#2D7D2D";
const LOGO_BLUE = "#00ED64";
const NAV_BLUE = "#085482";

/* ================= MENUS ================= */


const companyMenu = [
  { name: "About Us", link: "/about-us" },
  { name: "Methodology", link: "/methodology" },
  { name: "Our Clients", link: "/ourclients" },
  { name: "Our Mission", link: "/our-mission" },
  { name: "Testimonials", link: "/testimonials" },
];

const servicesMenu = [
  { name: "Web Application", link: "/services/web-application" },
  { name: "Mobile Application", link: "/services/mobile-application" },

];


export const navItems = [
  { name: "HOME", link: "/", dropDown: false },
  { name: "COMPANY", link: "/about-us", dropDown: true, subMenu: companyMenu },
  { name: "Services", link: "/services", dropDown: true, subMenu: servicesMenu },
  { name: "TECHNOLOGIES", link: "/technames", dropDown: false },
  { name: "PRODUCTS" },
  { name: "PORTFOLIO" },
  { name: "CAREERS", link: "/careers", dropDown: false },
  { name: "CONTACT US", link: "/contact", dropDown: false },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const [menuLevel, setMenuLevel] = useState("main");
  const [activeService, setActiveService] = useState(null);


  const toggleMobileDropdown = (name) =>
    setMobileDropdownOpen((prev) => ({ ...prev, [name]: !prev[name] }));

  const dropdownItemStyles = {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: 500,
    color: "#333",
    "&:hover": {
      backgroundColor: "rgba(45, 125, 45, 0.08)",
      color: LOGO_GREEN,
    },
  };

  return (
    <>
      {/* ================= TOP HEADER ================= */}
      <Box sx={{ position: "sticky", top: 0, zIndex: 1300, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <AppBar position="static" elevation={0} sx={{ backgroundColor: "#fff", borderBottom: "1px solid #f0f0f0" }}>
          <Container maxWidth="lg">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 1.5, px: "0 !important" }}>
              <Box
                component={Link}
                href="/"
                sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
              >
                <Box
                  component="img"
                  src="/assets/logo.png"
                  alt="Coding Roots Logo"
                  sx={{ height: { xs: 50, md: 70 }, cursor: "pointer" }}
                />
              </Box>

              {/* RIGHT SIDE GROUP */}
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  gap: { sm: 2, md: 3, lg: 4 },
                  ml: "auto",
                }}
              >
                {/* EMAIL */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EmailIcon sx={{ color: "#085482", fontSize: 22 }} />
                  <Box>
                    <Typography sx={{ fontSize: "12px", color: "#64748B", fontWeight: 600 }}>
                      EMAIL US
                    </Typography>
                    <Link
                      href="mailto:codingroots.in@gmail.com"
                      underline="none"
                      sx={{ fontSize: "14px", fontWeight: 700, color: "#085482" }}
                    >
                      codingroots.in@gmail.com
                    </Link>
                  </Box>
                </Box>

                {/* PHONE */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CallIcon sx={{ color: "#2D7D2D", fontSize: 22 }} />
                  <Box>
                    <Typography sx={{ fontSize: "12px", color: "#64748B", fontWeight: 600 }}>
                      CALL NOW
                    </Typography>
                    <Link
                      href="tel:+918639176137"
                      underline="none"
                      sx={{ fontSize: "14px", fontWeight: 700, color: "#2D7D2D" }}
                    >
                      +91 8639176137
                    </Link>
                  </Box>
                </Box>

                {/* CTA BUTTON */}
                <Button
                  component={Link}
                  href="/training"
                  sx={{
                    ml: { md: 2, lg: 3 },
                    backgroundColor: "#F5B700",
                    color: "#1F2937",
                    fontWeight: 700,
                    px: { xs: 2.5, md: 3.5 },
                    py: { xs: 0.8, md: 1 },
                    borderRadius: "999px",
                    textTransform: "none",
                    fontSize: { xs: "13px", md: "14px" },
                    boxShadow: "0 6px 15px rgba(245,183,0,0.4)",
                    "&:hover": {
                      backgroundColor: "#E0A800",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Courses
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* ================= NAV HEADER ================= */}
        <AppBar position="sticky" sx={{ top: 0, backgroundColor: '#085482', zIndex: 1200, elevation: 4 }}>
          <Container maxWidth="lg">
            <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
                {navItems.map((item) => (
                  <Box
                    key={item.name}
                    onMouseEnter={(e) => {
                      if (item.dropDown) {
                        setAnchorEl(e.currentTarget);
                        setHoveredCategory(item.name);
                      }
                    }}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <Button
                      component={item.dropDown ? "button" : Link}
                      href={item.dropDown ? undefined : item.link}
                      sx={{
                        color: "#fff",
                        fontWeight: 600,
                        px: 2,
                        py: 1.5,
                        fontSize: '0.85rem',
                        borderRadius: 0,
                        "&:hover": { backgroundColor: LOGO_GREEN }
                      }}
                    >
                      {item.name}
                      {item.dropDown && (hoveredCategory === item.name ? <ExpandLessIcon sx={{ fontSize: 18, ml: 0.5 }} /> : <ExpandMoreIcon sx={{ fontSize: 18, ml: 0.5 }} />)}
                    </Button>

                    {item.dropDown && (
                      <Popper
                        open={hoveredCategory === item.name}
                        anchorEl={anchorEl}
                        transition
                        disablePortal
                        // Services ki mathram pedda width set cheyyi
                        sx={{
                          zIndex: 1400,
                          width: item.name === "Services" ? '100vw' : 'auto',
                          left: item.name === "Services" ? '0 !important' : 'auto',
                          display: 'flex',
                          justifyContent: 'center'
                        }}
                      >
                        {({ TransitionProps }) => (
                          <Fade {...TransitionProps} timeout={item.name === "Services" ? 350 : 200}>
                            <Paper sx={{
                              mt: 1,
                              // Services ki 1200px maxWidth, verevatiki normal minWidth
                              width: item.name === "Services" ? '90vw' : 'auto',
                              maxWidth: item.name === "Services" ? '1200px' : '220px',
                              boxShadow: 10,
                              borderRadius: "0 0 12px 12px",
                              overflow: "hidden",
                              borderTop: `4px solid ${LOGO_BLUE}`
                            }}>

                              {/* CONDITION: Services click chesthe Mega Menu raavali */}
                              {item.name === "Services" ? (
                                <Box sx={{ p: 0, backgroundColor: '#fff' }}>
                                  <ServicesSection isPopUp={true} />
                                </Box>
                              ) : (
                                /* NORMAL DROPDOWN (COMPANY Menu etc.) */
                                <List dense sx={{ py: 1 }}>
                                  {item.subMenu.map((sub) => (
                                    <ListItemButton key={sub.name} component={Link} href={sub.link} sx={dropdownItemStyles}>
                                      <ListItemText primary={sub.name} primaryTypographyProps={{ fontSize: '0.9rem' }} />
                                    </ListItemButton>
                                  ))}
                                </List>
                              )}

                            </Paper>
                          </Fade>
                        )}
                      </Popper>
                    )}
                  </Box>
                ))}
              </Box>

              <IconButton
                onClick={() => setOpen(prev => !prev)}
                sx={{ display: { xs: "flex", md: "none" }, color: "#fff", ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
{/* ================= MOBILE DRAWER (FINAL SOLVED) ================= */}
   {/* ================= MOBILE DRAWER (UPDATED) ================= */}
        <Drawer 
          anchor="right" 
          open={open} 
          onClose={() => { setOpen(false); setMenuLevel("main"); setActiveService(null); }}
          PaperProps={{ sx: { width: 300 } }}
        >
          <Box sx={{ 
            height: "100vh", 
            display: "flex", 
            flexDirection: "column", 
            backgroundColor: "#fff",
            fontFamily: "'Montserrat', sans-serif" // Montserrat ఫాంట్ ఇక్కడ యాడ్ చేశాను
          }}>
            
            {/* 1. FIXED HEADER */}
            <Box sx={{ 
              py: 3, 
              px: 2, 
              backgroundColor: "#085482", 
              color: "#fff", 
              textAlign: "center",
              flexShrink: 0 
            }}>
              <Typography sx={{ 
                fontWeight: 800, 
                fontSize: "1.1rem", 
                letterSpacing: 1,
                fontFamily: "'Montserrat', sans-serif" 
              }}>
                {menuLevel === "main" ? "NAVIGATION" : menuLevel.toUpperCase()}
              </Typography>
            </Box>

            {/* 2. SCROLLABLE CONTENT AREA */}
            <Box sx={{ flex: 1, overflowY: "auto" }}>
              
              {/* BACK BUTTON SECTION - సబ్ మెనూలో స్పష్టంగా కిందికి దించాను */}
              {menuLevel !== "main" && (
                <Box sx={{ mt: 8, px: 2 }}> {/* mt: 5 ఇచ్చాను, ఇరుక్కుపోకుండా ఉంటుంది */}
                  <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={() => {
                      if (menuLevel === "serviceDetails") { setMenuLevel("services"); setActiveService(null); }
                      else { setMenuLevel("main"); }
                    }}
                    sx={{ 
                      color: "#085482", 
                      fontWeight: 700, 
                      textTransform: "none",
                      backgroundColor: "rgba(8, 84, 130, 0.1)",
                      width: "100%",
                      justifyContent: "flex-start",
                      py: 1.5,
                      borderRadius: "8px",
                      fontFamily: "'Montserrat', sans-serif",
                      "&:hover": { backgroundColor: "rgba(8, 84, 130, 0.2)" }
                    }}
                  >
                    Back to Previous
                  </Button>
                </Box>
              )}

              {/* LINKS AREA - కలర్ #085482 మరియు ఫాంట్ వెయిట్ 600 */}
              <Box sx={{ mt: menuLevel === "main" ? 8 : 3, px: 1 }}> 
                <List disablePadding>
                  
                  {/* LEVEL 1: MAIN MENU */}
                  {menuLevel === "main" && navItems.map((item) => (
                    <ListItem key={item.name} disablePadding sx={{ borderBottom: "1px solid #f0f0f0" }}>
                      <ListItemButton 
                        onClick={() => { 
                          if (item.dropDown) setMenuLevel(item.name.toLowerCase()); 
                          else window.location.href = item.link; 
                        }} 
                        sx={{ py: 2.5 }}
                      >
                        <ListItemText 
                          primary={item.name} 
                          primaryTypographyProps={{ 
                            fontWeight: 600, 
                            fontSize: "1rem", 
                            color: "#085482", // లింక్ కలర్ మార్చాను
                            fontFamily: "'Montserrat', sans-serif" 
                          }} 
                        />
                        {item.dropDown && <Typography sx={{ color: "#085482", fontWeight: 900 }}>{">"}</Typography>}
                      </ListItemButton>
                    </ListItem>
                  ))}

                  {/* LEVEL 2: COMPANY SUB-LINKS */}
                  {menuLevel === "company" && companyMenu.map((item) => (
                    <ListItem key={item.name} disablePadding sx={{ borderBottom: "1px solid #f0f0f0" }}>
                      <ListItemButton onClick={() => window.location.href = item.link} sx={{ py: 2.5 }}>
                        <ListItemText 
                          primary={item.name} 
                          primaryTypographyProps={{ 
                            fontWeight: 600, 
                            color: "#085482", 
                            fontFamily: "'Montserrat', sans-serif" 
                          }} 
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}

                  {/* LEVEL 2: SERVICES SUB-LINKS */}
                  {menuLevel === "services" && Object.keys(servicesData).map((service) => (
                    <ListItem key={service} disablePadding sx={{ borderBottom: "1px solid #f0f0f0" }}>
                      <ListItemButton 
                        onClick={() => { setActiveService(service); setMenuLevel("serviceDetails"); }} 
                        sx={{ py: 2.5 }}
                      >
                        <ListItemText 
                          primary={service} 
                          primaryTypographyProps={{ 
                            fontWeight: 600, 
                            color: "#085482", 
                            fontFamily: "'Montserrat', sans-serif" 
                          }} 
                        />
                        <Typography sx={{ color: "#085482", fontWeight: 900 }}>{">"}</Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}

                  {/* LEVEL 3: SERVICE DETAILS */}
                  {menuLevel === "serviceDetails" && servicesData[activeService]?.techs.map((tech) => (
                    <ListItem key={tech} disablePadding sx={{ borderBottom: "1px solid #f8f8f8" }}>
                      <ListItemButton sx={{ pl: 4, py: 2 }} onClick={() => setOpen(false)}>
                        <ListItemText 
                          primary={tech} 
                          primaryTypographyProps={{ 
                            fontSize: "0.95rem", 
                            fontWeight: 600, 
                            color: "#085482", 
                            fontFamily: "'Montserrat', sans-serif" 
                          }} 
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}

                </List>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Header;