"use client";
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface LoaderProps {
  open?: boolean;
  size?: number;
  text?: string;
}

export default function Loader({ open = true, size = 48, text }: LoaderProps) {
  return (
    <Backdrop open={open} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1200, color: '#fff' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <CircularProgress color="inherit" size={size} />
        {text ? (
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
            {text}
          </Typography>
        ) : null}
      </Box>
    </Backdrop>
  );
}
