"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Terminal, Github } from "lucide-react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import CustomValidatedTextInput from "@/components/ui/CustomValidatedTextInput";
import { adminLoginRequest } from "./authSlice";
import { useAppDispatch } from "@/store/store";

export default function LoginScreen() {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { control, handleSubmit } = useForm<{ username : string; password: string }>({
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = async (values: { username: string; password: string }) => {
    setError(null);
    setLoading(true);
    try {
      const payload = {
        username : values.username,
        password: values.password
      }
      const response = await dispatch(adminLoginRequest(payload)).unwrap();
      console.log("Login Request Response:", response);

    } catch (err: any) {
      setError(String(err?.error || err?.message || "Login failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        bgcolor: "#060612",
        backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
        backgroundSize: "44px 44px",
        position: "relative",
      }}
    >
      {/* Corner accents */}
      <Box sx={{ position: "absolute", width: 20, height: 20, top: 24, left: 24, borderTop: "2px solid rgba(0,255,255,0.5)", borderLeft: "2px solid rgba(0,255,255,0.5)" }} />
      <Box sx={{ position: "absolute", width: 20, height: 20, bottom: 24, right: 24, borderBottom: "2px solid rgba(0,255,255,0.5)", borderRight: "2px solid rgba(0,255,255,0.5)" }} />

      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: { xs: 3, sm: 4 },
          borderRadius: 2,
          bgcolor: "rgba(10,10,18,0.92)",
          border: "1px solid rgba(99,102,241,0.18)",
          color: "#f9fafb",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Box sx={{ width: 52, height: 52, borderRadius: 1.5, bgcolor: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Terminal size={22} color="#a78bfa" />
          </Box>
        </Box>

        <Typography variant="h5" component="h1" align="center" sx={{ fontWeight: 700, mb: 1 }}>
          Welcome back
        </Typography>


        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="caption" sx={{ color: '#9ca3af', fontWeight: 600 }}>Username</Typography>
          </Box>
          <CustomValidatedTextInput
            name="username"
            control={control}
            rules={{ required: "Username is required" }}
            textFieldProps={{
              placeholder: "alex@portfolio.dev",
              autoComplete: "username",
              InputProps: { startAdornment: <InputAdornment position="start">✉</InputAdornment> },
              sx: {
                my: 1.5,
                '& .MuiOutlinedInput-root': {
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: 1,
                  border: '0.9px solid rgba(26,216,255,0.32)'
                },
                input: { color: '#e5e7eb' },
                label: { color: '#9ca3af' }
              }
            }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="caption" sx={{ color: '#9ca3af', fontWeight: 600 }}>PASSWORD</Typography>
          </Box>

          <CustomValidatedTextInput
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            type={showPassword ? 'text' : 'password'}
            textFieldProps={{
              placeholder: '••••••••••••',
              autoComplete: 'current-password',
              InputProps: {
                startAdornment: <InputAdornment position="start">🔒</InputAdornment>,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword((v) => !v)} edge="end">
                      {showPassword ? <EyeOff size={16} color="#6b7280" /> : <Eye size={16} color="#6b7280" />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
              sx: {
                my: 1.5,
                '& .MuiOutlinedInput-root': {
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: 1,
                  border: '0.9px solid rgba(26,216,255,0.32)'
                },
                input: { color: '#e5e7eb' },
              }
            }}
          />

          {error && (
            <Typography color="error" sx={{ textAlign: 'center', mt: 1 }}>{error}</Typography>
          )}

          <Button type="submit" fullWidth disabled={loading} sx={{ mt: 2, mb: 1, py: 1.5, background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)', color: '#fff', '&:hover': { opacity: 0.95 } }}>
            {loading ? 'Signing in…' : 'Login'}
          </Button>

        </Box>
      </Paper>
    </Box>
  );
}

