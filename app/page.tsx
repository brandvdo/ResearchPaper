"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export default function Home() {
  const [random, setRandom] = useState<number | null>(null);
  const [PageComponent, setPageComponent] = useState<any>(null);

  useEffect(() => {
    const value = Math.random() < 0.5 ? 0 : 1;
    setRandom(value);

    const loadComponent = async () => {
      const mod = value === 1 ? await import("./light") : await import("./dark");
      setPageComponent(() => mod.default);
    };

    loadComponent();
  }, []);

  if (random === null || PageComponent === null) return <p>Loading...</p>;

  return (
    <>
      <p>Random value: {random}</p>
      <PageComponent />
    </>
  );
}