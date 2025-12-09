"use client";

import MuiProvider from "./theme/MuiProvider";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <MuiProvider>{children}</MuiProvider>;
}
