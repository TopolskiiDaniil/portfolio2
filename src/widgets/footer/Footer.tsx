import styles from './footer.module.scss';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo/Logo';
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { SocialLinks } from '@/components/ui/social-links/SocialLinks';

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
          <SocialLinks align='end' gap='sm' size={24} />
        </div>
      </div>
    </footer>
  );
}