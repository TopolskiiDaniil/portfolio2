'use client';

import { useEffect, useRef, useState } from "react";
import styles from "./navmenu.module.scss";
import Link from "next/link";
import BurgerButton from "@/components/burger-button/BurgerButton";
import { RxHome, RxIdCard, RxBackpack, RxFileText } from "react-icons/rx";
import SourceCodeButton from "@/components/source-code-button/SourceCodeButton";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div ref={menuRef}>
        <BurgerButton onClick={toggleMenu} isOpen={isOpen} />


        <div className={`${styles.navmenu} ${isOpen ? styles['navmenu--open'] : ''}`}>
          <ul className={styles.navmenu__list}>
            <li className={styles.navmenu__item}>
              <Link
                href="/"
                className={styles.navmenu__link}
                onClick={() => setIsOpen(false)}>
                <RxHome /><span>Главная</span>
              </Link>
            </li>
            <li className={styles.navmenu__item}>
              <Link
                href="/about"
                className={styles.navmenu__link}
                onClick={() => setIsOpen(false)}>
                <RxIdCard /><span>Обо мне</span>
              </Link>
            </li>
            <li className={styles.navmenu__item}>
              <Link
                href="/projects"
                className={styles.navmenu__link}
                onClick={() => setIsOpen(false)}>
                <RxBackpack /><span>Проекты</span>
              </Link>
            </li>
            <li className={styles.navmenu__item}>
              <Link
                href="/resume"
                className={styles.navmenu__link}
                onClick={() => setIsOpen(false)}>
                <RxFileText /><span>Резюме</span>
              </Link>
            </li>
            <li className={styles.navmenu__item}>
              <SourceCodeButton />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}