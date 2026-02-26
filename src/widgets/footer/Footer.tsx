import styles from './footer.module.scss';
import Link from 'next/link';
import { Logo } from '@/components/logo/Logo';
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__copyright}>Разработан Топольским Даниилом</div>
        <div className={styles.footer__branding}>
          <Link className={styles.footer__logoLink} href="/" aria-label="На главную">
            <Logo isFooter />
          </Link>
          <span className={styles.footer__year}>© {year}</span>
        </div>
        <div className={styles.footer__contacts}>
          <ul className={styles.footer__contact_list}>
            <li className={styles.footer__contact_item}>
              <Link href="https://t.me/Daniil_Topolskii"
                className={styles.footer__contact_link}
                type="button"
                target="_blank"
                aria-label="Telegram">
                <FaTelegram size={24} />
              </Link>
            </li>
            <li className={styles.footer__contact_item}>
              <Link href="https://github.com/TopolskiiDaniil"
                className={styles.footer__contact_link}
                type="button"
                target="_blank"
                aria-label="GitHub">
                <RxGithubLogo size={24} />
              </Link>
            </li>
            <li className={styles.footer__contact_item}>
              <Link href="https://www.linkedin.com/in/даниил-топольский-45b517360/" className={styles.footer__contact_link} type="button"
                target="_blank" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}