import type { Metadata } from "next";

import EmotionProvider from "./components/provider/EmotionProvider";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import QueryProvider from "./components/provider/QueryProvider";
import PageLayout from "./components/layout/PageLayout";

export const metadata: Metadata = {
  title: "상품 리스트 렌더 페이지",
  description: "더미 상품 리스트를 렌더링하기 위한 서비스입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en">
      <body>
        <EmotionProvider>
          <QueryProvider dehydratedState={dehydratedState}>
            <PageLayout>{children}</PageLayout>
          </QueryProvider>
        </EmotionProvider>
      </body>
    </html>
  );
}
