"use client";
import dynamic from "next/dynamic";

const Layouts = dynamic(() => import("./Layouts"), { ssr: false });

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layouts>{children}</Layouts>;
}
