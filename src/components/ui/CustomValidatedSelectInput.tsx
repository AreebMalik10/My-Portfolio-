"use client";

import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import { Controller, Control, FieldValues, RegisterOptions, Path } from "react-hook-form";

interface Option {
  value: string | number;
  label: string;
}

interface CustomValidatedSelectInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  options: Option[];
  rules?: RegisterOptions<T, Path<T>>;
  defaultValue?: string | number;
  fullWidth?: boolean;
}

export function CustomValidatedSelectInput<T extends FieldValues>({
  name,
  control,
  label,
  options,
  rules,
  defaultValue = "",
  fullWidth = true,
}: CustomValidatedSelectInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue as any}
      rules={rules}
      render={({ field, fieldState }) => (
        <FormControl fullWidth={fullWidth} error={!!fieldState.error}>
          {label && <InputLabel>{label}</InputLabel>}
          <Select label={label} {...field}>
            {options.map((opt) => (
              <MenuItem key={String(opt.value)} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
          {fieldState.error ? (
            <FormHelperText>{String(fieldState.error.message)}</FormHelperText>
          ) : null}
        </FormControl>
      )}
    />
  );
}

export default CustomValidatedSelectInput;
