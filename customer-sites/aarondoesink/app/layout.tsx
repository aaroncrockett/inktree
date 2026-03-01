import type { Metadata } from "next";
import LayoutWrapper from "./LayoutWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Does Ink",
  description: "Tattoo Artists in Portland Oregon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" data-theme="adi" lang="en">
      <body className={`antialiased h-full`}>
        {<LayoutWrapper>{children}</LayoutWrapper>}
      </body>
    </html>
  );
}
