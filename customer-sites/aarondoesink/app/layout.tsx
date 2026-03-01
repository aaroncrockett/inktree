import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";

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
    <html data-theme="adi" lang="en">
      <body className={`antialiased`}>
        {<LayoutWrapper>{children}</LayoutWrapper>}
      </body>
    </html>
  );
}
