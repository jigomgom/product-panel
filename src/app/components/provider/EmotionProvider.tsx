"use client";

import { CacheProvider, Global, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ReactNode } from "react";
import globalStyles from "@/styles/globalStyles";
import { theme } from "@/styles/theme";

const cache = createCache({ key: "css", prepend: true });

const EmotionProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default EmotionProvider;
