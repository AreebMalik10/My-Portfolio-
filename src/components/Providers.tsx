"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/lib/createEmotionCache";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/store/store";
import ToastProvider from "@/components/ui/ToastProvider";
import LoaderProvider from "@/components/ui/LoaderProvider";

const clientSideEmotionCache = createEmotionCache();

interface ProvidersProps {
  children: React.ReactNode;
  emotionCache?: any;
}

export default function Providers({ children, emotionCache = clientSideEmotionCache }: ProvidersProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReduxProvider store={store}>
          <ToastProvider>
            <LoaderProvider>{children}</LoaderProvider>
          </ToastProvider>
        </ReduxProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
