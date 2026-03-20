"use client";

import React from "react";
import TextField from "@mui/material/TextField";
import { Controller, Control, FieldValues, RegisterOptions, Path } from "react-hook-form";

interface CustomValidatedTextAreaProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  rules?: RegisterOptions<T, Path<T>>;
  defaultValue?: string;
  rows?: number;
  fullWidth?: boolean;
  variant?: "outlined" | "filled" | "standard";
}

export function CustomValidatedTextArea<T extends FieldValues>({
  name,
  control,
  label,
  rules,
  defaultValue = "",
  rows = 5,
  fullWidth = true,
  variant = "outlined",
}: CustomValidatedTextAreaProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue as any}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          multiline
          rows={rows}
          fullWidth={fullWidth}
          variant={variant}
          error={!!fieldState.error}
          helperText={fieldState.error ? String(fieldState.error.message) : undefined}
        />
      )}
    />
  );
}

export default CustomValidatedTextArea;
