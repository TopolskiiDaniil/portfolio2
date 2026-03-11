'use client';

import styles from './heroLineWritter.module.scss';
import Typewriter from "typewriter-effect";

export default function HeroLineWriter() {
  return (
    <div className={styles.writter__container}>
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
    </div>
  );
}
