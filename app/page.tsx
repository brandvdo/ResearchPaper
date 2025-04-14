"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

export default function Home() {
  const [random] = useState(() => Math.random() < 0.5 ? 0 : 1);


  const PageComponent = dynamic(() =>
    random === 1 ? import("./light") : import("./dark")
  );

  return <PageComponent />;
}
