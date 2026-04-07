import styles from "./page.module.scss";
import Hero from "@/components/sections/hero/Hero";
import { SocialLinks } from "@/components/ui/social-links/SocialLinks";


export default function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <section className={styles.contacts__container}>
          <h2 className={styles.contacts__title}>Найдите меня в социальных сетях</h2>
          <div className={styles.contacts__links}>
            <SocialLinks align="center" gap="md" size={32} />
          </div>
        </section>
      </main>
    </div>
  );
}
