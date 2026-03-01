"use client";

import { useEffect, useState } from "react";

export function useMatchMediaSize(
  breakpoint: string,
  size: "max" | "min" = "max",
  axis: "width" | "height" = "width",
) {
  const query = `(${size}-${axis}: ${breakpoint})`;

  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
