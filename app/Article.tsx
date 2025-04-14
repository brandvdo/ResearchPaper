"use client";

import { useEffect } from "react";

interface ArticleProps {
  darkMode: boolean;
}


export default function Article({ darkMode }: ArticleProps) {

  useEffect(() => {
    // Dynamically set the background color for the entire page
    document.documentElement.style.backgroundColor = darkMode ? "#121212" : "white";
    document.body.style.backgroundColor = darkMode ? "#121212" : "white";
    document.documentElement.style.color = darkMode ? "white" : "#1a202c";
    document.body.style.color = darkMode ? "white" : "#1a202c";
  }, [darkMode]);

  return (
    <div
      className={`max-w-3xl mx-auto p-6 ${
        darkMode ? "bg-[#121212] text-white" : "bg-white text-gray-900"
      }`}
      style={{marginTop: "100px", marginBottom: "100px"}}
    >
      <h1 className="text-3xl font-bold mb-4">Why Does Venus Spin Backwards?</h1>

      <p className="mb-4">
        Venus, often referred to as Earth's "twin" due to its similar size and composition,
        exhibits a peculiar rotational behavior that sets it apart from other planets in our solar system.
        Unlike most planets, Venus rotates on its axis in a clockwise direction, a phenomenon known as
        <span className="italic"> retrograde rotation</span>. This means that on Venus, the Sun rises in the west
        and sets in the east, opposite to the experience on Earth.
      </p>

      <p className="mb-4">
        Adding to its uniqueness, Venus has an exceptionally slow rotation. It takes approximately
        <span className="font-semibold"> 243 Earth days</span> to complete a single rotation on its axis,
        making a Venusian day longer than its year, which lasts about <span className="font-semibold"> 225 Earth days</span>.
        Interestingly, due to its retrograde rotation, the time from one sunrise to the next on Venus (its
        <span className="italic"> solar day</span>) is about <span className="font-semibold">117 Earth days</span>.
      </p>

      <p className="mb-4">
        The reasons behind Venus's unusual rotation remain a subject of scientific inquiry. One hypothesis
        suggests that Venus initially rotated in the same direction as other planets but was later flipped
        upside down, possibly due to gravitational interactions or collisions with other celestial bodies.
        Another theory proposes that Venus's rotation slowed to a standstill and then reversed direction,
        influenced by tidal forces from the Sun acting on its dense atmosphere. These atmospheric tides,
        combined with friction between Venus's mantle and core, could have contributed to the reversal of its spin.
      </p>

      <p className="mb-4">
        Understanding Venus's rotational dynamics not only deepens our knowledge of this fascinating planet,
        but also helps scientists explore the complexities of planetary formation and evolution throughout the solar system.
      </p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">📚 Sources</h2>
        <ul className="list-disc list-inside space-y-2 text-blue-400 dark:text-blue-300">
          <li>
            <a
              href="https://www.nasa.gov/wp-content/uploads/2009/12/venus_lithograph.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 dark:hover:text-blue-200"
            >
              NASA - Venus Fact Sheet
            </a>
          </li>
          <li>
            <a
              href="https://www.scientificamerican.com/article/why-venus-spins-the-wrong/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 dark:hover:text-blue-200"
            >
              Scientific American - Why Venus Spins the Wrong Way
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}