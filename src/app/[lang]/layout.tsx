import type { Metadata } from "next";
import { globalFont } from "@/config/fonts";
import { ServerProviders, ClientProviders } from "@/lib/providers";
import "@/globals.css";

interface RootLayoutProps extends Children {
  params: { lang: string };
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${globalFont.variable} antialiased`}>
        <ServerProviders>
          <ClientProviders>{children}</ClientProviders>
        </ServerProviders>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Home | Started Kit",
  description: "A started kit for Next.js by Dale",
};
