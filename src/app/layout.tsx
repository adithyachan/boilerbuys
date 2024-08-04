import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "BoilerBuys",
  description: "Basically FB Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            primaryColor: "old-gold",
            colors: {
              "old-gold": [
                "#fef5e7",
                "#f3ebd9",
                "#e2d5b8",
                "#d2be92",
                "#c4aa71",
                "#bc9d5c",
                "#b79751",
                "#a18341",
                "#907437",
                "#7d642a",
              ],
            },
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
