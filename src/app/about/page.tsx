import Image from "next/image";
import styles from "./page.module.scss";
import dynamic from "next/dynamic";

const GithubCalendar = dynamic(
  () => import("@/components/github-calendar/GithubCalendar"),
  { ssr: false }
);

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <section className={styles.biography__container}>
          <h2 className={styles.biography__title}>Кто я?</h2>
          <div className={styles.biography__content}>
            <p className={styles.biography__text}>Привет всем! Меня зовут <span className={styles.accent}>Топольский Даниил,</span> я&nbsp;из&nbsp;<span className={styles.accent}>Москвы, Россия</span>.</p>
            <p className={styles.biography__text}>В&nbsp;настоящее время я&nbsp;занимаюсь <span className={styles.accent}>фриланс-разработкой</span>.</p>
            <p className={styles.biography__text}>Я&nbsp;прошеёл обучение в<span className={styles.accent}>&nbsp;HTML&nbsp;Academy</span>, где получил первичные навыки <span className={styles.accent}>вёрстки </span>и&nbsp;<span className={styles.accent}>програмирования</span>.</p>
            <br />
            <p className={styles.biography__text}>Помимо программирования, я&nbsp;люблю заниматься творческими и&nbsp;вдохновляющими делами:</p>
            <br />
            <ul>
              <li>Играть в&nbsp;игры 🎮</li>
              <li>Путешествовать и&nbsp;исследовать новые места 🌍</li>
            </ul>
          </div>
        </section>

        <section className={styles.skills__container}>
          <h2 className={styles.skills__title}> Профессиональные навыки</h2>
          <ul className={styles.skills__list}>
            <li className={styles.skills__item}>
              <Image src='/techicons/html-icon.min.svg' width={24} height={24} alt="HTML5" />
              <span>HTML5</span>
            </li>
            <li className={styles.skills__item}>
              <Image src='/techicons/css-icon.min.svg' width={24} height={24} alt="CSS3" />
              <span>CSS3</span>
            </li>
            <li className={styles.skills__item}>
              <Image src='/techicons/sass-icon.svg' width={24} height={24} alt="SASS" />
              <span>SASS</span>
            </li>
            <li className={styles.skills__item}>
              <Image src='/techicons/material-ui-icon.min.svg' width={24} height={24} alt="Material UI" />
              <span>Material UI</span>
            </li>
            <li className={styles.skills__item}>
              <Image src='/techicons/javascript-programming-language-icon.min.svg' width={24} height={24} alt="Javascript" />
              <span>Javascript</span>
            </li>
            <li className={styles.skills__item}>
              <Image src='/techicons/react-js-icon.min.svg' width={24} height={24} alt="React.js" />
              <span>React.js</span>
            </li>
            <li className={styles.skills__item}>
              <Image src='/techicons/nextjs-icon.min.svg' width={24} height={24} alt="Next.js" />
              <span>Next.js</span>
            </li>
            <li className={styles.skills__item}>
              <Image src='/techicons/redux-icon.min.svg' width={24} height={24} alt="Redux" />
              <span>Redux</span>
            </li>
            <li className={styles.skills__item}>
              <Image src='/techicons/jest-js-icon.min.svg' width={24} height={24} alt="Jest" />
              <span>Jest</span>
            </li>
            <li className={styles.skills__item}>
              <Image src='/techicons/api-code-file-black-icon.min.svg' width={24} height={24} alt="REST API" />
              <span>REST API</span>
            </li>
          </ul>
        </section>

        <section className={styles.tools__container}>
          <h2 className={styles.tools__title}> Я использую</h2>
          <ul className={styles.tools__list}>
            <li className={styles.tools__item}>
              <Image src='/techicons/vite-dev-icon.min.svg' width={24} height={24} alt="Vite" />
              <span>Vite</span>
            </li>
            <li className={styles.tools__item}>
              <Image src='/techicons/webpack-icon.min.svg' width={24} height={24} alt="Webpack" />
              <span>Webpack</span>
            </li>
            <li className={styles.tools__item}>
              <Image src='/techicons/visual-studio-code-icon.min.svg' width={24} height={24} alt="VS Code" />
              <span>VS Code</span>
            </li>
          </ul>
        </section>

        <section className={styles.activity__container}>
          <h2 className={styles.activity__title}> Моя активность</h2>
          <GithubCalendar />
        </section>

      </main>
    </div>
  );
}
