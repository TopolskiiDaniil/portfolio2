import styles from './certificates.module.scss';
import EmblaCarousel from "@/components/ui/embla-carousel/EmblaCarousel";

export default function Certificates() {
  return (
    <section className={styles.certificates__wrapper}>
      <h2 className={styles.certificates__title}>Сертификаты</h2>
      <EmblaCarousel />
    </section>
  )
}