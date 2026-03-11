import { IconType } from "react-icons";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

// Find the icon in react-icons before editing
type SocialLinkData = { href: string; label: string; icon: IconType };

const Socials: SocialLinkData[] = [
  {
    href: "https://t.me/Daniil_Topolskii",
    label: "Telegram",
    icon: FaTelegram,
  },
  {
    href: "https://github.com/TopolskiiDaniil",
    label: "GitHub",
    icon: RxGithubLogo,
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
];

export { Socials }