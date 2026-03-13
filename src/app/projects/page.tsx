import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <section className={styles.projects__container}>
          <h2 className={styles.projects__title}>Мои последние работы.</h2>
          <ul className={styles.projects__list}>

            <li className={styles.projects__item}>
              <article className={styles.projects__card}>
                <header className={styles.project__header}>
                  <h3 className={styles.project__title}>Личный проект «Шесть городов»</h3>
                </header>
                <figure className={styles.project__figure}>
                  <Image
                    className={styles.project__image}
                    src='/images/projects/six-cities.jpg'
                    width={465}
                    height={219}
                    alt="проект «Шесть городов»" />
                </figure>
                <div className={styles.project__description}>
                  <p className={styles.project__appointment}>Веб-приложение для размещения и поиска объявлений аренды жилья с интерактивной картой и фильтрацией.</p>
                  <h4 className={styles[`project__title-list`]}>Функциональность:</h4>
                  <ul className={styles.project__list}>
                    <li>интерактивная карта объявлений</li>
                    <li>фильтрация по городам</li>
                    <li>сортировка по цене и рейтингу</li>
                    <li>форма авторизации</li>
                    <li>создание отзывов и их валидация</li>
                    <li>работа с «избранными» объявлениями</li>
                  </ul>
                  <h4 className={styles[`project__title-list`]}>Технологии:</h4>
                  <ul className={styles.project__list}>
                    <li>React/TS</li>
                    <li>Redux/RTK</li>
                    <li>Leaflet</li>
                    <li>Axios</li>
                    <li>Vitest</li>
                    <li>React-testing-library</li>
                    <li>Vite</li>
                  </ul>
                </div>
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
                    target="_blank"
                    rel="noopener noreferrer">
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
                <figure className={styles.project__figure}>
                  <Image
                    className={styles.project__image}
                    src='/images/projects/big-trip.webp'
                    width={465}
                    height={219}
                    alt="Интерфейс приложения Big Trip — планировщик путешествий" />
                </figure>
                <div className={styles.project__description}>
                  <p className={styles.project__appointment}>Big Trip — планировщик путешествий. На данном проекте разбирал принципы ООП и строил самописную flux-архитектуру.</p>
                  <h4 className={styles[`project__title-list`]}>Функциональность:</h4>
                  <ul className={styles.project__list}>
                    <li>управление маршрутами</li>
                    <li>добавление и редактирование событий</li>
                    <li>фильтрация поездок</li>
                    <li>синхронизация с API</li>
                  </ul>
                  <h4 className={styles[`project__title-list`]}>Технологии:</h4>
                  <ul className={styles.project__list}>
                    <li>JavaScript</li>
                    <li>MVP архитектура</li>
                    <li>REST API</li>
                    <li>Webpack</li>
                    <li>date libraries</li>
                  </ul>
                </div>
                <footer className={styles.project__footer}>
                  <Link
                    className={styles.project__button}
                    href='https://github.com/TopolskiiDaniil/586815-big-trip-2'
                    target="_blank"
                    rel="noopener noreferrer">
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
                <figure className={styles.project__figure}>
                  <Image
                    className={styles.project__image}
                    src='/images/projects/keksogram.jpg'
                    width={400}
                    height={300}
                    alt="проект «Кекстаграм»" />
                </figure>
                <div className={styles.project__description}>
                  <p className={styles.project__appointment}>Веб-приложение — галерея изображений</p>
                  <h4 className={styles[`project__title-list`]}>Функциональность:</h4>
                  <ul className={styles.project__list}>
                    <li>загрузка фото</li>
                    <li>просмотр в модальном окне</li>
                    <li>комментарии</li>
                    <li>фильтрация изображений</li>
                  </ul>
                  <h4 className={styles[`project__title-list`]}>Технологии:</h4>
                  <ul className={styles.project__list}>
                    <li>JavaScript (ES6+)</li>
                    <li>Vite</li>
                  </ul>
                </div>
                <footer className={styles.project__footer}>
                  <Link
                    className={styles.project__button}
                    href='https://github.com/TopolskiiDaniil/586815-kekstagram-33'
                    target="_blank"
                    rel="noopener noreferrer">
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
                <figure className={styles.project__figure}>
                  <Image
                    className={styles.project__image}
                    src='/images/projects/cat-energy.jpg'
                    width={465}
                    height={219}
                    alt="проект «Кэт энерджи»" />
                </figure>
                <div className={styles.project__description}>
                  <p className={styles.project__appointment}>Cайт фитнес-питания для котов 🐱</p>
                  <h4 className={styles[`project__title-list`]}>Функциональность:</h4>
                  <ul className={styles.project__list}>
                    <li>адаптивная верстка (mobile-first)</li>
                    <li>интерактивный слайдер сравнения</li>
                    <li>оптимизированная графика</li>
                  </ul>
                  <h4 className={styles[`project__title-list`]}>Технологии:</h4>
                  <ul className={styles.project__list}>
                    <li>HTML5</li>
                    <li>SCSS</li>
                    <li>BEM</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Gulp</li>
                  </ul>
                </div>
                <footer className={styles.project__footer}>
                  <Link
                    className={styles.project__button}
                    href='https://github.com/TopolskiiDaniil/586815-cat-energy-32'
                    target="_blank"
                    rel="noopener noreferrer">
                    Код проекта
                  </Link>
                  <Link
                    className={styles.project__button}
                    href='https://topolskiidaniil.github.io/586815-cat-energy-32/'
                    target="_blank"
                    rel="noopener noreferrer">
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
                <figure className={styles.project__figure}>
                  <Image
                    className={styles.project__image}
                    src='/images/projects/sedona.jpg'
                    width={400}
                    height={300}
                    alt="проект «Седона»" />
                </figure>
                <div className={styles.project__description}>
                  <p className={styles.project__appointment}>Многостраничный адаптивный сайт с каталогом гостиниц.</p>
                  <h4 className={styles[`project__title-list`]}>Функциональность:</h4>
                  <ul className={styles.project__list}>
                    <li>семантичная верстка</li>
                    <li>сайд-эффекты</li>
                  </ul>
                  <h4 className={styles[`project__title-list`]}>Технологии:</h4>
                  <ul className={styles.project__list}>
                    <li>HTML5</li>
                    <li>CSS3</li>
                  </ul>
                </div>
                <footer className={styles.project__footer}>
                  <Link
                    className={styles.project__button}
                    href='https://github.com/TopolskiiDaniil/586815-sedona-40'
                    target="_blank"
                    rel="noopener noreferrer">
                    Код проекта
                  </Link>
                  <Link
                    className={styles.project__button}
                    href='https://topolskiidaniil.github.io/586815-sedona-40/'
                    target="_blank"
                    rel="noopener noreferrer">
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
