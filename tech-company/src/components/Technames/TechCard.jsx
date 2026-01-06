  // import { Card, CardActionArea, Typography } from "@mui/material";

  // export default function TechCard({ tech, onClick }) {
  //   return (
  //     <Card sx={{ borderRadius: 3, textAlign: "center" }}>
  //       <CardActionArea onClick={onClick} sx={{ p: 3 }}>
  //         <img src={tech.icon} width={50} />
  //         <Typography mt={1} fontWeight={600}>
  //           {tech.name}
  //         </Typography>
  //       </CardActionArea>
  //     </Card>
  //   );
  // }


import { Card, CardActionArea, Box, Typography } from "@mui/material";

export default function TechCard({ tech, onClick }) {
  return (
    <Card
      sx={{
        borderRadius: 4,
        height: 150,
        width: 150,
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
        },
      }}
    >
      <CardActionArea
        onClick={onClick}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* 🔲 FIXED SQUARE LOGO BOX */}
        <Box
          sx={{
            width: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Box
            component="img"
            src={tech.icon}
            alt={tech.name}
            sx={{
              maxWidth: "170%",
              maxHeight: "170%",
              objectFit: "contain",
            }}
          />
        </Box>
      </CardActionArea>
    </Card>
  );
}

