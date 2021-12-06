import React from "react";
import { Box, Typography } from "@mui/material";

export default function Display() {
  return (
    <div style={{ width: "100%" }} className="fixed-bottom">
      <Box
        sx={{
          display: "grid",
          bgcolor: "primary.main",
          color: "white",
        }}
      >
        <Typography
          variant="subtitle1"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          MERAJ SHEKH . GitHub Search APP with Firebase
        </Typography>
      </Box>
    </div>
  );
}
