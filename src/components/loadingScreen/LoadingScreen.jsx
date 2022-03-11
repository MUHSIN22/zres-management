import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./LoadingScreen.scss";
function LoadingScreen() {
  return (
    <div className="loading__screan">
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  );
}

export default LoadingScreen;
