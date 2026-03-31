"use client";
import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type Severity = "success" | "error" | "info" | "warning";

interface ToastDetail {
  message: string;
  severity?: Severity;
  duration?: number;
}

const toastEvent = new EventTarget();

export function openSuccessToast(message: string, duration = 4000) {
  toastEvent.dispatchEvent(new CustomEvent("toast", { detail: { message, severity: "success", duration } }));
}

export function openErrorToast(message: string, duration = 4000) {
  toastEvent.dispatchEvent(new CustomEvent("toast", { detail: { message, severity: "error", duration } }));
}

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<Severity>("info");
  const [duration, setDuration] = useState<number | null>(4000);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ToastDetail>).detail;
      setMessage(detail.message);
      setSeverity(detail.severity || "info");
      setDuration(detail.duration ?? 4000);
      setOpen(true);
    };

    toastEvent.addEventListener("toast", handler as EventListener);
    return () => toastEvent.removeEventListener("toast", handler as EventListener);
  }, []);

  return (
    <>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={duration ?? 4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={() => setOpen(false)} severity={severity} variant="filled" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
