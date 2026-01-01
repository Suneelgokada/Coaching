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

/* ================= COLORS (LOGO BASED) ================= */
const LOGO_GREEN = "#2D7D2D"; 
const LOGO_BLUE = "##00ED64";  

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
  { name: "Open Source", link: "/services/open-source" },
  { name: "e-Commerce Solutions", link: "/services/ecommerce-solutions" },
  { name: "Frontend Web Apps", link: "/services/frontend-web-apps" },
  { name: "AI Agents", link: "/services/ai-agents" },
]

export const navItems = [
  { name: "HOME", link: "/", dropDown: false },
  { name: "COMPANY", link: "/about-us", dropDown: true, subMenu: companyMenu },
  { name: "Services", link: "/categories", dropDown: true, subMenu: servicesMenu },
  { name: "TECHNOLOGIES", link: "/products", dropDown: false },
  { name: "PRODUCTS", link: "/products", dropDown: false },
  { name: "PORTFOLIO", link: "/portfolio", dropDown: false },
  { name: "CAREERS", link: "/careers", dropDown: false },
  { name: "CONTACT US", link: "/contact", dropDown: false },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});

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

            <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 4, }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <EmailIcon sx={{ color: LOGO_BLUE, fontSize: 26 }} />
                <Box>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: "#999", display: 'block', lineHeight: 1 }}>
                    EMAIL US
                  </Typography>
                  <Link href="mailto:codingroots.in@gmail.com" sx={{ textDecoration: "none", color: LOGO_BLUE, fontWeight: 600, fontSize: '0.9rem' }}>
                    codingroots.in@gmail.com
                  </Link>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <CallIcon sx={{ color: LOGO_GREEN, fontSize: 26 }} />
                <Box>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: "#999", display: 'block', lineHeight: 1 }}>
                    CALL NOW
                  </Typography>
                  <Link href="tel:+918639176137" sx={{ textDecoration: "none", color: LOGO_GREEN, fontWeight: 600, fontSize: '0.9rem' }}>
                    +91 8639176137
                  </Link>
                </Box>
              </Box>
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
                    <Popper open={hoveredCategory === item.name} anchorEl={anchorEl} transition disablePortal>
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={200}>
                          <Paper sx={{ mt: 0, borderRadius: "0 0 4px 4px", boxShadow: 5, borderTop: `3px solid ${LOGO_GREEN}` }}>
                            <List dense sx={{ py: 1, minWidth: 220 }}>
                              {item.subMenu.map((sub) => (
                                <ListItemButton
                                  key={sub.name}
                                  component={Link}
                                  href={sub.link}
                                  sx={dropdownItemStyles}
                                >
                                  <ListItemText primary={sub.name} primaryTypographyProps={{ fontSize: '0.9rem' }} />
                                </ListItemButton>
                              ))}
                            </List>
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

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280 }}>
          <Box sx={{ p: 2, backgroundColor: LOGO_BLUE, color: '#fff', textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>NAVIGATION</Typography>
          </Box>
          <List sx={{ p: 1 }}>
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  {item.dropDown ? (
                    <ListItemButton 
                      onClick={() => toggleMobileDropdown(item.name)}
                      sx={{ borderRadius: 1, color: LOGO_BLUE }}
                    >
                      <ListItemText primary={item.name} primaryTypographyProps={{ fontWeight: 700 }} />
                      {mobileDropdownOpen[item.name] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItemButton>
                  ) : (
                    <ListItemButton 
                      component={Link} 
                      href={item.link} 
                      onClick={() => setOpen(false)}
                      sx={{ borderRadius: 1, color: LOGO_BLUE }}
                    >
                      <ListItemText primary={item.name} primaryTypographyProps={{ fontWeight: 700 }} />
                    </ListItemButton>
                  )}
                </ListItem>

                {item.dropDown && (
                  <Collapse in={mobileDropdownOpen[item.name]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ backgroundColor: '#f9f9f9', borderRadius: 1, mx: 1 }}>
                      {item.subMenu.map((sub) => (
                        <ListItemButton 
                          key={sub.name} 
                          component={Link} 
                          href={sub.link}
                          onClick={() => setOpen(false)}
                          sx={{ pl: 4 }}
                        >
                          <ListItemText primary={sub.name} primaryTypographyProps={{ fontSize: '0.85rem', color: '#555' }} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
    </>
  );
};

export default Header;