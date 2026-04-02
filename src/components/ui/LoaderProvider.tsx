"use client";
import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface LoaderDetail {
  action: "show" | "hide";
  message?: string;
}

const loaderEvent = new EventTarget();

export function handleAddLoader(message?: string) {
  loaderEvent.dispatchEvent(new CustomEvent("loader", { detail: { action: "show", message } }));
}

export function handleRemoveLoader() {
  loaderEvent.dispatchEvent(new CustomEvent("loader", { detail: { action: "hide" } }));
}

export default function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<LoaderDetail>).detail;
      if (detail.action === "show") {
        setMessage(detail.message);
        setOpen(true);
      } else {
        setOpen(false);
        setMessage(undefined);
      }
    };

    loaderEvent.addEventListener("loader", handler as EventListener);
    return () => loaderEvent.removeEventListener("loader", handler as EventListener);
  }, []);

  return (
    <>
      {children}
      <Backdrop open={open} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1200, color: "#fff", flexDirection: "column" }}>
        <CircularProgress color="inherit" />
        {message && <Box sx={{ mt: 2 }}>{message}</Box>}
      </Backdrop>
    </>
  );
}
