"use client";

import dynamic from "next/dynamic";

const Viewer = dynamic(() => import("./viewer").then(m => m.Viewer), { ssr: false });

export default function ClientViewer() {
  return <Viewer />;
}
