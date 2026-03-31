"use client";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

interface CustomReusableDialogProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void | Promise<void>;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  showCloseIcon?: boolean;
  loading?: boolean;
}

export default function CustomReusableDialog({
  open,
  onClose,
  title,
  children,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  maxWidth = "sm",
  fullWidth = true,
  showCloseIcon = true,
  loading = false,
}: CustomReusableDialogProps) {
  const handleConfirm = async () => {
    if (!onConfirm) return onClose();
    try {
      await onConfirm();
    } catch (err) {
      // swallow — caller should handle errors
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth={maxWidth} fullWidth={fullWidth}>
      <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", pr: 1 }}>
        <Typography variant="h6">{title}</Typography>
        {showCloseIcon ? (
          <IconButton aria-label="close" onClick={onClose} size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        ) : null}
      </DialogTitle>

      <DialogContent dividers>{children}</DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} disabled={loading} variant="outlined">
          {cancelText}
        </Button>
        <Button onClick={handleConfirm} disabled={loading} variant="contained">
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
