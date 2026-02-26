import Image from "next/image";
import styles from "./page.module.scss";
import HeroLineWriter from "@/components/hero-line-writer/HeroLineWriter";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero__container}>
          <div className={styles.hero__greeting}>
            <div className={styles['hero__title-wrapper']}>

              <h2 className={styles.hero__title}>Всем привет!</h2>
              <picture>
                <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f423/512.webp" type="image/webp" />
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f423/512.gif" alt="🐣" width="32" height="32" />
              </picture>
            </div>
            <p className={styles.hero__introducing}>Я — <span className={styles.accent}>Топольский Даня</span>, frontend‑разработчик.</p>
            <span className={`${styles.accent} ${styles['hero__line-wrapper']}`}>
              <HeroLineWriter />
            </span>
          </div>
          <Image src="/icons/hero.png" alt="Hero image" layout="fixed" width={325} height={325} />
        </section>

      </main>
    </div>
  );
}
