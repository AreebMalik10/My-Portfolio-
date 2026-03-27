"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Terminal, Github } from "lucide-react";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Login failed");
      if (data?.data?.token) {
        if (remember) {
          localStorage.setItem("admin_token", data.data.token);
        } else {
          sessionStorage.setItem("admin_token", data.data.token);
        }
      }
      window.location.href = "/admin/dashboard";
    } catch (err: any) {
      setError(String(err?.message || "Login failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      {/* Corner accents */}
      <div style={{ ...styles.corner, top: 24, left: 24, borderTop: "2px solid rgba(0,255,255,0.5)", borderLeft: "2px solid rgba(0,255,255,0.5)" }} />
      <div style={{ ...styles.corner, bottom: 24, right: 24, borderBottom: "2px solid rgba(0,255,255,0.5)", borderRight: "2px solid rgba(0,255,255,0.5)" }} />

      <div style={styles.card}>
        {/* Terminal icon */}
        <div style={styles.iconWrap}>
          <Terminal size={22} color="#a78bfa" />
        </div>

        <h1 style={styles.title}>Welcome back</h1>
        <p style={styles.subtitle}>portfolio.admin</p>

        {/* Status badge */}
        <div style={styles.statusBadge}>
          <span style={styles.statusDot} />
          <span style={styles.statusText}>System online — auth.service running</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          {/* Email */}
          <div style={styles.fieldWrap}>
            <label style={styles.label}>EMAIL ADDRESS</label>
            <div style={styles.inputWrap}>
              <span style={styles.inputIcon}>✉</span>
              <input
                type="text"
                placeholder="alex@portfolio.dev"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                autoComplete="username"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div style={styles.fieldWrap}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label style={styles.label}>PASSWORD</label>
              <span style={styles.forgotLink}>Forgot password?</span>
            </div>
            <div style={styles.inputWrap}>
              <span style={styles.inputIcon}>🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ ...styles.input, flex: 1 }}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                style={styles.eyeBtn}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={15} color="#6b7280" /> : <Eye size={15} color="#6b7280" />}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div style={styles.checkboxRow}>
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              style={{ accentColor: "#7c3aed", width: 14, height: 14, cursor: "pointer" }}
            />
            <label htmlFor="remember" style={styles.checkLabel}>
              Keep me signed in for 30 days
            </label>
          </div>

          {error && <p style={styles.errorText}>{error}</p>}

          <button type="submit" style={styles.submitBtn} disabled={loading}>
            {loading ? "Signing in…" : "Sign In to Admin Panel  ›"}
          </button>
        </form>

        {/* Divider */}
        <div style={styles.divider}>
          <div style={styles.dividerLine} />
          <span style={styles.dividerText}>or continue with</span>
          <div style={styles.dividerLine} />
        </div>

        {/* GitHub */}
        <button style={styles.githubBtn} type="button">
          <Github size={15} style={{ marginRight: 8 }} />
          Sign in with GitHub
        </button>

        <p style={styles.footerText}>Secured by portfolio-auth v2.4</p>
      </div>
    </div>
  );
}

const inputWrapBase: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  background: "#ffffff0a",       // from inspect
  border: "0.91px solid #1ad8ff52", // from inspect
  borderRadius: 8,               // from inspect
  padding: "0 12px 0 16px",      // from inspect: padX=12, padLeft=40 with icon offset
};

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#060612",
    backgroundImage: `
      linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
    `,
    backgroundSize: "44px 44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    position: "relative",
    overflow: "hidden",
    fontFamily: "Inter, sans-serif",
  },
  corner: {
    position: "absolute",
    width: 20,
    height: 20,
  },
  card: {
    background: "rgba(10,10,18,0.92)",
    border: "1px solid rgba(99,102,241,0.18)",
    borderRadius: 16,
    padding: "40px 36px 28px",
    width: "100%",
    maxWidth: 420,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 12,
    background: "rgba(124,58,237,0.2)",
    border: "1px solid rgba(124,58,237,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  title: {
    color: "#f9fafb",
    fontSize: 22,
    fontWeight: 700,
    margin: "0 0 4px 0",
    letterSpacing: "-0.3px",
  },
  subtitle: {
    color: "#6b7280",
    fontSize: 12,
    margin: "0 0 20px 0",
    letterSpacing: "0.5px",
  },
  statusBadge: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(16,185,129,0.07)",
    border: "1px solid rgba(16,185,129,0.22)",
    borderRadius: 6,
    padding: "7px 14px",
    marginBottom: 24,
    width: "100%",
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#10b981",
    boxShadow: "0 0 6px #10b981",
    flexShrink: 0,
  },
  statusText: {
    color: "#10b981",
    fontSize: 12,
    fontFamily: "JetBrains Mono, monospace",
  },
  fieldWrap: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    display: "block",
    color: "#9ca3af",
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: "1.2px",
    marginBottom: 7,
  },
  inputWrap: inputWrapBase,
  inputIcon: {
    fontSize: 13,
    color: "#6b7280",
    marginRight: 10,
    flexShrink: 0,
    lineHeight: 1,
  },
  input: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#e5e7eb",
    fontSize: 14,
    padding: "13px 0",
    fontFamily: "inherit",
    width: "100%",
  },
  eyeBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0 0 0 8px",
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  },
  checkboxRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 22,
    width: "100%",
  },
  checkLabel: {
    color: "#9ca3af",
    fontSize: 13,
    cursor: "pointer",
    userSelect: "none",
  },
  forgotLink: {
    color: "#7c3aed",
    fontSize: 12,
    cursor: "pointer",
  },
  errorText: {
    color: "#ef4444",
    fontSize: 13,
    margin: "0 0 12px 0",
    width: "100%",
    textAlign: "center",
  },
  submitBtn: {
    width: "100%",
    padding: "13px 24px",
    background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    letterSpacing: "0.3px",
    marginBottom: 20,
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    width: "100%",
    marginBottom: 14,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    background: "rgba(255,255,255,0.07)",
  },
  dividerText: {
    color: "#6b7280",
    fontSize: 11,
    whiteSpace: "nowrap",
  },
  githubBtn: {
    width: "100%",
    padding: "11px 24px",
    background: "transparent",
    color: "#e5e7eb",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 8,
    fontSize: 14,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    fontFamily: "inherit",
  },
  footerText: {
    color: "#374151",
    fontSize: 11,
    margin: 0,
    textAlign: "center",
  },
};
