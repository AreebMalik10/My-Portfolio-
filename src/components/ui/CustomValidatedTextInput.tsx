"use client";

import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Controller, Control, FieldValues, RegisterOptions, Path } from "react-hook-form";

interface CustomValidatedTextInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  rules?: RegisterOptions<T, Path<T>>;
  defaultValue?: string;
  type?: string;
  fullWidth?: boolean;
  variant?: "outlined" | "filled" | "standard";
  /**
   * Additional props to pass to the underlying MUI TextField (start/end adornments, sx, etc.)
   */
  textFieldProps?: TextFieldProps;
}

export function CustomValidatedTextInput<T extends FieldValues>({
  name,
  control,
  label,
  rules,
  defaultValue = "",
  type = "text",
  fullWidth = true,
  variant = "outlined",
  textFieldProps,
}: CustomValidatedTextInputProps<T>) {
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
          type={type}
          fullWidth={fullWidth}
          variant={variant}
          error={!!fieldState.error}
          helperText={fieldState.error ? String(fieldState.error.message) : undefined}
          {...textFieldProps}
        />
      )}
    />
  );
}

export default CustomValidatedTextInput;
