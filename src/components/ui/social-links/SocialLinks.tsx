import Link from "next/link";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import styles from "./socialLinks.module.scss";
import { Socials } from "@/app/const/const";

type Props = {
  align?: "center" | "end";
  size?: number;
  gap?: "sm" | "md";
};

export function SocialLinks({
  align = "center",
  size = 24,
  gap = "sm",
}: Props) {
  return (
    <ul className={`
    ${styles.contacts__list}
    ${styles[`contacts__list--${align}`]}
    ${styles[`contacts__list--gap-${gap}`]}
    `}>
      {Socials.map(({ href, label, icon: IconType }) => (
        <li key={label} className={styles.contacts__item}>
          <Link
            className={styles.contacts__link}
            href={href}
            target="_blank"
            aria-label={label}
          >
            <IconType size={size} />
          </Link>
        </li>
      ))}
    </ul>
  );
}