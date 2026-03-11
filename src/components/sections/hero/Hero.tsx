import HeroLineWriter from "@/components/ui/hero-line/HeroLineWriter";
import Image from "next/image";
import styles from './hero.module.scss'
import PhotoContainer from "@/components/ui/photo-container/PhotoContainer";

export default function Hero() {
  return (
    <section className={styles.hero__container}>
      <div className={styles.hero__greeting}>
        <div className={styles['hero__title-wrapper']}>

          <h2 className={styles.hero__title}>Всем привет!</h2>
          <picture>
            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f423/512.webp" type="image/webp" />
            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f423/512.gif" alt="🐣" width="32" height="32" />
          </picture>
        </div>
        <p className={styles.hero__introducing}>Я&nbsp;—&nbsp;<span className='accent'>Топольский&nbsp;Даниил</span>, Frontend‑разработчик.</p>
        <span className={`accent ${styles['hero__line-wrapper']}`}>
          <HeroLineWriter />
        </span>
      </div>
      <PhotoContainer />
      {/* <Image src="/icons/hero.png" alt="Hero image" width={400} height={400} priority /> */}
    </section>
  )
}