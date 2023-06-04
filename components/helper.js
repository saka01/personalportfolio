// "use client";
import { useEffect, useState } from "react";

function randomGreeting() {
  const GREET_TIME = 600;
  const greetings = [
    "Hello!",
    "¡Hola!",
    "Bonjour",
    "你好",
    "こんにちは",
    "Здравствуйте",
    "ٱلسَّلَامُ عَلَيْكُمْ",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const greetf = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, GREET_TIME);

    return () => clearInterval(greetf);
  }, [greetings.length]);

  return <h3>{greetings[currentIndex]}</h3>;
}

export default randomGreeting;
