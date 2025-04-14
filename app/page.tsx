import dynamic from "next/dynamic";

export default function Home() {
  const random = Math.random() < .5;
  const PageComponent = dynamic(() =>
    random ? import("./light") : import("./dark")
  );

  return <PageComponent />;
}