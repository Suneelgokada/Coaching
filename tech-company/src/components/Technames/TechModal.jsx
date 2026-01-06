import { Modal, Box, Typography, Grid } from "@mui/material";
import { techPopupData } from "./techPopupData";

export default function TechModal({ tech, onClose, closeTimerRef }) {
  if (!tech) return null;

  const data = techPopupData[tech.name];

  return (
    <Modal open={!!tech} onClose={onClose}>
      <Box
        onMouseEnter={() => clearTimeout(closeTimerRef.current)}
        onMouseLeave={onClose}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          bgcolor: "#fff",
          p: 4,
          borderRadius: 3,
          width: 380,
        }}
      >
        {/* ICON */}
        <Box sx={{ textAlign: "center" }}>
          <img src={tech.icon} width={70} />
        </Box>

        {/* TITLE */}
        <Typography mt={2} variant="h6" align="center">
          {tech.name}
        </Typography>

        {/* STATS */}
        {data?.stats && (
          <Grid container spacing={2} mt={2}>
            {data.stats.map((item, index) => (
              <Grid item xs={6} key={index}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography fontSize={22} fontWeight={700}>
                    {item.value}
                  </Typography>
                  <Typography fontSize={13}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}

        {/* DESCRIPTION */}
        <Typography mt={3} fontSize={14} align="center">
          {data?.description || "More details coming soon."}
        </Typography>
      </Box>
    </Modal>
  );
}
