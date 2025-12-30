"use client"
import Slider from "react-slick";
import { Box, Container, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "VTC Corporation has been our trusted partner for years. Their plumbing and sanitaryware products are consistently reliable and meet the highest industry standards.",
  },
  {
    text: "Their distribution network is exceptional. Whether it’s electricals or building materials, VTC always delivers on time with excellent service support.",
  },
  {
    text: "We appreciate VTC Corporation for their professionalism and product quality. Their wide range of branded materials has helped us maintain consistency across all our projects.",
  },
  {
    text: "Working with VTC has been a smooth experience. Their team is knowledgeable, responsive, and committed to customer satisfaction.",
  },
  {
    text: "VTC Corporation is one of the most dependable distributors we’ve worked with. Their pricing, product availability, and delivery timelines are always on point.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: true,
};

export default function TestimonialSlider() {
  return (
    <Box sx={{  py: 6, px: 2,   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url('https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/client-bg.jpg?updatedAt=1756113786603')`,
         backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      "& .slick-prev:before, & .slick-next:before": {
          color: "#fff!important",
        },
        "& .slick-dots li button:before": {
          color: "#fff!important",
          fontSize: "7px",
          opacity: 0.75,
        },
        "& .slick-dots li.slick-active button:before": {
          color: "#fff!important",
          opacity: 1,
        },}}>
      <Container maxWidth="md">
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        mb={4}
        color="#fff"
        fontFamily="Poppins"
      >
        What Our Clients Say?
      </Typography>

      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ px: 2 }}>
            <Typography
              variant="body1"
              fontSize={18}
              fontStyle="italic"
              fontFamily="Poppins"
              textAlign="center"
              sx={{ color: "#fff" }}
            >
              “{testimonial.text}”
            </Typography>
            <Typography
              variant="subtitle2"
              textAlign="center"
              mt={2}
              fontSize={14}
              fontFamily="Poppins"
              fontWeight="medium"
              sx={{ color: "#fff " }}
            >
              — {testimonial.author}
            </Typography>
          </Box>
        ))}
      </Slider>
      </Container>
    </Box>
  );
}
