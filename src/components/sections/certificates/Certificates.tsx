import Image from "next/image";
import Link from "next/link";
import styles from './certificates.module.scss';


export default function Certificates() {
  return (
    <section className={styles.certificates__container}>
      <h2 className={styles.certificates__title}>Сертификаты</h2>
      <div>
        <ul className={styles.certificates__list}>
          <li className={styles.certificates__item}>
            <article className={styles.certificates__card}>
              <Image className={styles.certificates__image} src='/certificates/html1.webp' alt='сертификат «HTML и CSS. Профессиональная вёрстка сайтов»' width={200} height={280} />
              <Link href="/certificates/html1.pdf" target="_blank" rel="noopener noreferrer">
                <span>View Certificate</span>
              </Link>
            </article>
          </li>
          <li className={styles.certificates__item}>
            <article className={styles.certificates__card}>
              <Image className={styles.certificates__image} src='/certificates/html2.webp' alt='сертификат «HTML и CSS. Адаптивная вёрстка и автоматизация»' width={200} height={280} />
              <Link href="/certificates/html2.pdf" target="_blank" rel="noopener noreferrer">
                <span>View Certificate</span>
              </Link>
            </article>
          </li>
          <li className={styles.certificates__item}>
            <article className={styles.certificates__card}>
              <Image className={styles.certificates__image} src='/certificates/js1.webp' alt='сертификат «JavaScript. Профессиональная разработка веб-интерфейсов»' width={200} height={280} />
              <Link href="/certificates/js1.pdf" target="_blank" rel="noopener noreferrer">
                <span>View Certificate</span>
              </Link>
            </article>
          </li>
          <li className={styles.certificates__item}>
            <article className={styles.certificates__card}>
              <Image className={styles.certificates__image} src='/certificates/js2.webp' alt='сертификат «JavaScript. Архитектура клиентских приложений»' width={200} height={280} />
              <Link href="/certificates/js2.pdf" target="_blank" rel="noopener noreferrer">
                <span>View Certificate</span>
              </Link>
            </article>
          </li>
          <li className={styles.certificates__item}>
            <article className={styles.certificates__card} >
              <Image className={styles.certificates__image} src='/certificates/js3.webp' alt='сертификат «React. Разработка сложных клиентских приложений»' width={200} height={280} />
              <Link href="/certificates/js3.pdf" target="_blank" rel="noopener noreferrer">
                <span>View Certificate</span>
              </Link>
            </article>
          </li>
        </ul>
      </div>
    </section>
  )
}