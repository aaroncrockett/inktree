import { ComponentPropsWithoutRef } from "react";

export default function Header({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"header">) {
  return (
    <header className={`header-root ${className}`} {...props}>
      {children}
    </header>
  );
}
