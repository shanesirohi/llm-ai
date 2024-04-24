import type { Metadata, Viewport } from "next";
import "./globals.css";
import Swap from "@/components/Swap";

export const metadata: Metadata = {
  title: "Gem LLM AI",
  description: "",
  manifest: "/manifest.json",
  metadataBase: new URL("https://llmdemoGem.vercel.app/"),
  openGraph: {
    type: "website",
    url: "https://llmdemoGem.vercel.app//",
    title: "LLM Gem Model DEMO",

    description: "",
    images: [
      {
        url: "/geminis.jpg",
        width: 192,
        height: 192,
        alt: "Gem LLM",
      },
      {
        url: "/geminis.jpg",
        width: 512,
        height: 512,
        alt: "GEMLLM",
      },
    ],
  },
  icons: {
    icon: "/geminis.jpg",
    apple: "/apple-touch-icon.png",
  },
};
export const viewport: Viewport = {
  themeColor: "#5261ea",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Swap />
        {children}
      </body>
    </html>
  );
}
