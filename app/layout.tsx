import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Put your .woff2 / .woff / .ttf / .otf file in app/fonts/ and update the path below.
// For multiple weights: src: [{ path: './fonts/MyFont-Regular.woff2', weight: '400' }, { path: './fonts/MyFont-Bold.woff2', weight: '700' }]
const localSans = localFont({
  src: "./fonts/Sofia Pro Bold Az.otf",
  variable: "--font-local-sans",
  display: "swap",
});

const sofiaMedium = localFont({
  src: "./fonts/Sofia Pro Medium Az.otf",
  variable: "--font-sofia-medium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pause",
  description: "Pause",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${localSans.variable} ${sofiaMedium.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
