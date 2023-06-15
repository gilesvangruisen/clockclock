"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

import Digit from "./components/Digit";

export default function Home() {
  const time = useTime();

  return (
    <main className="flex h-full">
      <svg className="mx-auto self-center" width="600" viewBox="0 0 1600 600">
        {time.map((t, i) => (
          <Digit key={String(i)} value={t} x={i} />
        ))}
      </svg>
    </main>
  );
}

function useTime() {
  // const [time, setTime] = useState([0, 9, 4, 2]);
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const i = setInterval(() => {
      // setTime([0, 9, 4, 3]);
      setTime(getTime());
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return time;
}

function getTime() {
  const now = new Date();
  const hours = String(now.getHours() % 12 || 12).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return [...hours.split("").map(String), ...minutes.split("").map(String)];
}
