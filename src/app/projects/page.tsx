import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <section className={styles.projects__container}>
          <h2 className={styles.projects__title}>Мои последние работы.</h2>
          <ul className={styles.project__list}>

            <li className={styles.projects__item}>
              <article className={styles.projects__card}>
                <header className={styles.project__header}>
                  <h3 className={styles.project__title}>Личный проект «Шесть городов»</h3>
                </header>
                <Image
                  className={styles.project__image}
                  src='/images/projects/six-cities.jpg'
                  width={465}
                  height={219}
                  alt="проект «Шесть городов»" />
                <p className={styles.project__description}>
                  Успешно выполненный проект в рамках интенсива «JavaScript. Разработка сложных клиентских приложений».
                </p>
                <footer className={styles.project__footer}>
                  <Link
                    className={styles.project__button}
                    href='https://github.com/TopolskiiDaniil/586815-six-cities-3'
                    type="button"
                    target="_blank">
                    Код проекта
                  </Link>
                  <Link
                    className={styles.project__button}
                    href='https://586815-six-cities-3.vercel.app/'
                    type="игеещт"
                    target="_blank">
                    Демо
                  </Link>
                </footer>
              </article>
            </li>

            <li className={styles.projects__item}>
              <article className={styles.projects__card}>
                <header className={styles.project__header}>
                  <h3 className={styles.project__title}>Личный проект «Большое путешествие»</h3>
                </header>
                <Image
                  className={styles.project__image}
                  src='/images/projects/big-trip.webp'
                  width={465}
                  height={219}
                  alt="проект «Большое путешествие»" />
                <p className={styles.project__description}>
                  Успешно выполненный проект в рамках интенсива «JavaScript. Архитектура клиентских приложений».
                </p>
                <footer className={styles.project__footer}>
                  <Link
                    className={styles.project__button}
                    href='https://github.com/TopolskiiDaniil/586815-big-trip-2'
                    type="button"
                    target="_blank">
                    Код проекта
                  </Link>
                </footer>
              </article>
            </li>

            <li className={styles.projects__item}>
              <article className={styles.projects__card}>
                <header className={styles.project__header}>
                  <h3 className={styles.project__title}>Личный проект «Кекстаграм»</h3>
                </header>
                <Image
                  className={styles.project__image}
                  src='/images/projects/keksogram.jpg'
                  width={400}
                  height={300}
                  alt="проект «Кекстаграм»" />
                <p className={styles.project__description}>
                  Успешно выполненный проект в рамках интенсива «JavaScript. Профессиональная разработка веб-интерфейсов».
                </p>
                <footer className={styles.project__footer}>
                  <Link
                    className={styles.project__button}
                    href='https://github.com/TopolskiiDaniil/586815-kekstagram-33'
                    type="button"
                    target="_blank">
                    Код проекта
                  </Link>
                </footer>
              </article>
            </li>

            <li className={styles.projects__item}>
              <article className={styles.projects__card}>
                <header className={styles.project__header}>
                  <h3 className={styles.project__title}>Личный проект «Кэт энерджи»</h3>
                </header>
                <Image
                  className={styles.project__image}
                  src='/images/projects/cat-energy.jpg'
                  width={465}
                  height={219}
                  alt="проект «Кэт энерджи»" />
                <p className={styles.project__description}>
                  Успешно выполненный проект в рамках интенсива «HTML и CSS. Адаптивная вёрстка и автоматизация».
                </p>
                <footer className={styles.project__footer}>
                  <Link
                    className={styles.project__button}
                    href='https://github.com/TopolskiiDaniil/586815-cat-energy-32'
                    type="button"
                    target="_blank">
                    Код проекта
                  </Link>
                  <Link
                    className={styles.project__button}
                    href='https://topolskiidaniil.github.io/586815-cat-energy-32/'
                    type="игеещт"
                    target="_blank">
                    Демо
                  </Link>
                </footer>
              </article>
            </li>

            <li className={styles.projects__item}>
              <article className={styles.projects__card}>
                <header className={styles.project__header}>
                  <h3 className={styles.project__title}>Личный проект «Седона»</h3>
                </header>
                <Image
                  className={styles.project__image}
                  src='/images/projects/sedona.jpg'
                  width={400}
                  height={300}
                  alt="проект «Седона»" />
                <p className={styles.project__description}>
                  Успешно выполненный проект в рамках интенсива «HTML и CSS. Профессиональная вёрстка сайтов».
                </p>
                <footer className={styles.project__footer}>
                  <Link
                    className={styles.project__button}
                    href='https://github.com/TopolskiiDaniil/586815-sedona-40'
                    type="button"
                    target="_blank">
                    Код проекта
                  </Link>
                  <Link
                    className={styles.project__button}
                    href='https://topolskiidaniil.github.io/586815-sedona-40/'
                    type="игеещт"
                    target="_blank">
                    Демо
                  </Link>
                </footer>
              </article>
            </li>
          </ul>
        </section>

      </main>
    </div>
  );
}
