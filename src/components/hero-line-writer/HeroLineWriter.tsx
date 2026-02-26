'use client';

import Typewriter from "typewriter-effect";

export default function HeroLineWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Делаю интерфейсы на React",
          "Пишу на Next.js",
          "Люблю TypeScript",
          "Фронтенд с заботой о UX",
        ],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
      }}
    />
  );
}
