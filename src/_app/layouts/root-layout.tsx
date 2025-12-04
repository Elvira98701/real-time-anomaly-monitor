import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { inter } from "@/shared/config";

import { ReactQueryProvider } from "../providers";

import "../styles/index.scss";

export const metadata: Metadata = {
  title: "Real-time Anomaly Monitor",
  description: "Real-time Anomaly Monitor",
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Toaster
          toastOptions={{
            style: {
              borderRadius: "20px",
            },
          }}
        />
      </body>
    </html>
  );
};
