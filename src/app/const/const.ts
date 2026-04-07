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

type CertificatesDataType = {
  imageSrc: string;
  imageAlt: string;
  pdfHref: string;
  id: number;
};

const Certificates: CertificatesDataType[] = [
  {
    imageSrc: "/certificates/html1.webp",
    imageAlt: "сертификат «HTML и CSS. Профессиональная вёрстка сайтов»",
    pdfHref: "/certificates/html1.pdf",
    id: 1,
  },
  {
    imageSrc: "/certificates/html2.webp",
    imageAlt: "сертификат «HTML и CSS. Адаптивная вёрстка и автоматизация»",
    pdfHref: "/certificates/html2.pdf",
    id: 2,
  },
  {
    imageSrc: "/certificates/js1.webp",
    imageAlt: "сертификат «JavaScript. Профессиональная разработка веб-интерфейсов»",
    pdfHref: "/certificates/js1.pdf",
    id: 3,
  },
  {
    imageSrc: "/certificates/js2.webp",
    imageAlt: "сертификат «JavaScript. Архитектура клиентских приложений»",
    pdfHref: "/certificates/js2.pdf",
    id: 4,
  },
  {
    imageSrc: "/certificates/js3.webp",
    imageAlt: "сертификат «React. Разработка сложных клиентских приложений»",
    pdfHref: "/certificates/js3.pdf",
    id: 5,
  },
];

export { Socials, Certificates, type CertificatesDataType };