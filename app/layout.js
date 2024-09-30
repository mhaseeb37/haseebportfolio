import localFont from "next/font/local";
import { GoogleTagManager } from '@next/third-parties/google' 
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Muhammad Haseeb",
  description: "Muhammad Haseeb's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-M475FC86" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M475FC86"
height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
        {children}
      </body>
    </html>
  );
}
