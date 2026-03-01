"use client";
import { useMatchMediaSize } from "@/hooks";
import { defaultTheme } from "../tailwind.config";
import LayoutDT from "./LayoutDT";
import LayoutMobile from "./LayoutMobile";

export default function Layouts({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isSmall = useMatchMediaSize(defaultTheme.screens.sm);
  return (
    <>
      {isSmall ? (
        <LayoutMobile>SMALL SCREEN {children}</LayoutMobile>
      ) : (
        <LayoutDT>{children}</LayoutDT>
      )}
    </>
  );
}
