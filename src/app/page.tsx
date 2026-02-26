import Image from "next/image";
import styles from "./page.module.scss";
import HeroLineWriter from "@/components/hero-line-writer/HeroLineWriter";
import Link from "next/link";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

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
        <section className={styles.about__container}>
          <h2 className={styles.about__title}>Позвольте представиться.</h2>
          <div className={styles.about__content}>
            <p className={styles.about__text}>
              Я - фронтенд-разработчик, которому нравится превращать идеи в удобные, быстрые и визуально приятные интерфейсы. Мне важно, чтобы продукт был не только функциональным, но и интуитивно понятным для пользователя. Стараюсь писать чистый, поддерживаемый код и продумывать архитектуру, а не просто «чтобы работало».<br />
            </p>
            <p className={styles.about__text}>
              Я работаю с <span className={styles.accent}>JavaScript</span> и <span className={styles.accent}>TypeScript,</span> активно использую <span className={styles.accent}>React</span> и <span className={styles.accent}>Next.js</span>, уделяю внимание качеству UI, производительности и пользовательскому опыту. Интересуюсь современными подходами к разработке, компонентным дизайном и построением масштабируемых фронтенд-приложений.<br />
            </p>
            <p className={styles.about__text}>
              Мои основные области интереса — <span className={styles.accent}>разработка веб-приложений</span>, <span className={styles.accent}>проектирование интерфейсов</span>, <span className={styles.accent}>архитектура фронтенда</span> и <span className={styles.accent}>создание переиспользуемых UI-компонентов</span>. Мне важно, чтобы интерфейс был не просто красивым, а логичным, доступным и удобным для реальных людей.<br />
            </p>
            <p className={styles.about__text}>
              В проектах предпочитаю использовать инструменты для поддержания качества кода и стабильности продукта. Люблю, когда в коде порядок, а в продукте - понятный пользовательский путь.
            </p>
          </div>
        </section>
        <section className={styles.contacts__container}>
          <h2 className={styles.contacts__title}>Найдите меня в социальных сетях</h2>
          <div className={styles.contacts__links}>
            <ul className={styles.contacts__list}>
              <li className={styles.contacts__item}>
                <Link href="https://t.me/Daniil_Topolskii"
                  className={styles.contacts__link}
                  type="button"
                  target="_blank"
                  aria-label="Telegram">
                  <FaTelegram size={28} />
                </Link>
              </li>
              <li className={styles.contacts__item}>
                <Link href="https://github.com/TopolskiiDaniil"
                  className={styles.contacts__link}
                  type="button"
                  target="_blank"
                  aria-label="GitHub">
                  <RxGithubLogo size={28} />
                </Link>
              </li>
              <li className={styles.contacts__item}>
                <Link href="https://www.linkedin.com/in/даниил-топольский-45b517360/"
                  className={styles.contacts__link}
                  type="button"
                  target="_blank" aria-label="LinkedIn">
                  <FaLinkedin size={28} />
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
