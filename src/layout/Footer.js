import React from "react";
import { Box, Typography } from "@mui/material";

export default function Display() {
  return (
    <div style={{ width: "100%" }} className="fixed-bottom">
      <Box
        sx={{
          display: "grid",
          p: 1,
          bgcolor: "primary.main",
          color: "white",
        }}
      >
        <Typography
          variant="subtitle1"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          GITHUB SEARCH APP WITH FIREBASE
        </Typography>
      </Box>
    </div>
  );
}
