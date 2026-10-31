import type { ReactNode } from "react";

// Page meta now lives in head() of each route in src/routes/.
// This placeholder keeps the old page markup compiling and renders nothing.
export function Helmet(_props: { children?: ReactNode }) {
  return null;
}
