import PhotoContainer from "@/components/ui/photo-container/PhotoContainer";
import styles from './about.module.scss';

export default function About() {
  return (
    <section className={styles.about__container}>
      <h2 className={styles.about__title}>Позвольте представиться.</h2>
      <div className={`${styles['about__content-wrapper']}`}>
        <div className={styles.about__content}>
          <p className={styles.about__text}>
            Я&nbsp;&mdash; фронтенд-разработчик, которому нравится превращать идеи в&nbsp;удобные, быстрые и&nbsp;визуально приятные интерфейсы. Мне важно, чтобы продукт был не&nbsp;только функциональным, но&nbsp;и&nbsp;интуитивно понятным для пользователя. Стараюсь писать чистый, поддерживаемый код и&nbsp;продумывать архитектуру, а&nbsp;не&nbsp;просто &laquo;чтобы работало&raquo;.
          </p>
          <p className={styles.about__text}>
            Я&nbsp;работаю с&nbsp;<span className='accent'>JavaScript</span> и&nbsp;<span className='accent'>TypeScript,</span> активно использую <span className={styles.accent}>React</span> и&nbsp;<span className={styles.accent}>Next.js</span>, уделяю внимание качеству&nbsp;UI, производительности и&nbsp;пользовательскому опыту. Интересуюсь современными подходами к&nbsp;разработке, компонентным дизайном и&nbsp;построением масштабируемых фронтенд-приложений.
          </p>
          <p className={styles.about__text}>
            Мои основные области интереса&nbsp;&mdash; <span className='accent'>разработка веб-приложений</span>, <span className='accent'>проектирование интерфейсов</span>, <span className='accent'>архитектура фронтенда</span> и&nbsp;<span className='accent'>создание переиспользуемых UI-компонентов</span>. Мне важно, чтобы интерфейс был не&nbsp;просто красивым, а&nbsp;логичным, доступным и&nbsp;удобным для реальных людей.
          </p>
          <p className={styles.about__text}>
            В&nbsp;проектах предпочитаю использовать инструменты для поддержания качества кода и&nbsp;стабильности продукта. Люблю, когда в&nbsp;коде порядок, а&nbsp;в&nbsp;продукте&nbsp;&mdash; понятный пользовательский путь.
          </p>
        </div>
        <PhotoContainer />
      </div>
    </section>
  )
}