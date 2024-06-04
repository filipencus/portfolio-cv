// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Bottombar from "@/components/shared/bottombar/Bottombar";

export const metadata: Metadata = {
  title: "Filip Enculescu",
  description: "Filip Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true}>
        <div className="app-container">
          <Navbar></Navbar>
          <main>{children}</main>
          {/* <footer>© 2024, Made with 🧡 by Filip Enc.</footer> */}
          <Bottombar></Bottombar>
        </div>
      </body>
    </html>
  );
}
