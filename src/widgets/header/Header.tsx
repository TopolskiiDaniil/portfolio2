import styles from "./header.module.scss";
import NavMenu from "../navmenu/NavMenu";
import Link from "next/link";
import { Logo } from "@/components/ui/logo/Logo";

export default function Header() {
  console.log(styles);

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <nav className={styles.header__nav}>
          <Link className={styles.header__logoLink} href="/" aria-label="На главную">
            <Logo />
          </Link>
          <NavMenu />
        </nav>
      </div>
    </header>
  );
};