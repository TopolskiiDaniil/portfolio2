'use client';

import { useEffect, useRef, useState } from "react";
import styles from "./navmenu.module.scss";
import Link from "next/link";
import BurgerButton from "@/components/ui/burger-button/BurgerButton";
import { RxHome, RxIdCard, RxBackpack, RxFileText } from "react-icons/rx";
import SourceCodeButton from "@/components/ui/source-code-button/SourceCodeButton";

const NAV_LINKS = [
  { href: "/", label: "Главная", icon: <RxHome /> },
  { href: "/about", label: "Обо мне", icon: <RxIdCard /> },
  { href: "/projects", label: "Проекты", icon: <RxBackpack /> },
  // { href: "/resume", label: "Резюме", icon: <RxFileText /> },
];

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={menuRef}>
      <BurgerButton onClick={toggleMenu} isOpen={isOpen} />

      <div className={`${styles.navmenu} ${isOpen ? styles['navmenu--open'] : ''}`}>
        <ul className={styles.navmenu__list}>
          {NAV_LINKS.map((link) => (
            <li key={link.href} className={styles.navmenu__item}>
              <Link
                href={link.href}
                className={styles.navmenu__link}
                onClick={closeMenu}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </li>
          ))}

          <li className={styles.navmenu__item}>
            <SourceCodeButton />
          </li>
        </ul>
      </div>
    </div>
  );
}