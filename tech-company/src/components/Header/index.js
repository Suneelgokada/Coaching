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
  Fade,
  Collapse,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

/* ================= COLORS ================= */
const HEADER_BLUE = "#1769d2";

/* ================= MENUS ================= */
const companyMenu = [
  { name: "About Us", link: "/company/about-us" },
  { name: "Methodology", link: "/company/methodology" },
  { name: "Our Clients", link: "/company/our-clients" },
  { name: "Our Mission", link: "/company/our-mission" },
  { name: "Testimonials", link: "/company/testimonials" },
];

const servicesMenu = [
  { name: "Web Applications", link: "/services/web-applications" },
  { name: "Mobile Applications", link: "/services/mobile-applications" },
  { name: "Open Source", link: "/services/open-source" },
  { name: "E-commerce Solutions", link: "/services/e-commerce-solutions" },
  { name: "Front End Web Apps", link: "/services/front-end-web-apps" },
  { name: "AI Agents", link: "/services/ai-agents" },
];

export const navItems = [
  { name: "HOME", link: "/", dropDown: false },
  { name: "CompaNY", link: "/about-us", dropDown: true, subMenu: companyMenu },
  { name: "Services", link: "/categories", dropDown: true, subMenu: servicesMenu },
  { name: "TECHNOLOGIES", link: "/products", dropDown: false },
  { name: "Products", link: "", dropDown: false },
  { name: "Portfolio", link: "", dropDown: false },
  { name: "careers", link: "", dropDown: false },
  { name: "contact us", link: "", dropDown: false },
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
  };

  return (
    <>
      {/* ================= TOP HEADER (UNCHANGED) ================= */}
      <AppBar position="static" elevation={1} sx={{ backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "block", py: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "space-between" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box component={Link} href="/">
                <Box
                  component="img"
                  src="/assets/logo-removebg-preview.png"
                  alt="Buildex Logo"
                  sx={{ height: 80, cursor: "pointer" }}
                />
              </Box>

              <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EmailIcon sx={{ color: "#0B2343", fontSize: 30 }} />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      Email us now
                    </Typography>
                    <Link href="mailto:vtc_corporation@yahoo.com">
                      vtc_corporation@yahoo.com
                    </Link>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CallIcon sx={{ color: "#0B2343", fontSize: 30 }} />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      Call us now
                    </Typography>
                    <Link href="tel:+918367388088">+91 8367388088</Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ================= NAV HEADER ================= */}
      <AppBar position="sticky" sx={{ top: 0, backgroundColor: HEADER_BLUE, zIndex: 1200 }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ minHeight: 56, justifyContent: "space-between" }}>
            {/* DESKTOP NAV */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, mx: "auto" }}>
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
                  <Button sx={{ color: "#fff", fontWeight: 500 }}>
                    {item.name}
                    {item.dropDown &&
                      (hoveredCategory === item.name ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      ))}
                  </Button>

                  {item.dropDown && (
                    <Popper open={hoveredCategory === item.name} anchorEl={anchorEl}>
                      <Paper>
                        <List dense>
                          {item.subMenu.map((sub) => (
                            <ListItemButton
                              key={sub.name}
                              component={Link}
                              href={sub.link}
                              sx={dropdownItemStyles}
                            >
                              {sub.name}
                            </ListItemButton>
                          ))}
                        </List>
                      </Paper>
                    </Popper>
                  )}
                </Box>
              ))}
            </Box>

            {/* MOBILE MENU ICON (≤768px) */}
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <List>
            {navItems.map((item) => (
              <Box key={item.name}>
                <ListItem
                  onClick={() => item.dropDown && toggleMobileDropdown(item.name)}
                  component={!item.dropDown ? Link : "div"}
                  href={!item.dropDown ? item.link : undefined}
                >
                  <ListItemText primary={item.name} />
                  {item.dropDown &&
                    (mobileDropdownOpen[item.name] ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                </ListItem>

                {item.dropDown && (
                  <Collapse in={mobileDropdownOpen[item.name]}>
                    {item.subMenu.map((sub) => (
                      <ListItemButton key={sub.name} component={Link} href={sub.link}>
                        {sub.name}
                      </ListItemButton>
                    ))}
                  </Collapse>
                )}
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
