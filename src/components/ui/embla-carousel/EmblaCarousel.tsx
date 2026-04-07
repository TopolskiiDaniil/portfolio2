'use client';

import useEmblaCarousel from "embla-carousel-react";
import styles from "./emblaCarousel.module.scss";
import { Certificates as CertificatesData } from "@/app/const/const";
import CertificateCard from "@/components/ui/certificate-card/CertificateCard";
import Autoplay from 'embla-carousel-autoplay';

export default function EmblaCaruosel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: true }, [Autoplay({ delay: 2000 })]);

  const handleClick = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }

  return (
    <div className={styles.certificates__container} ref={emblaRef}>
      <ul className={styles.certificates__list}>
        {CertificatesData.map((cert) => (
          <li className={styles.certificates__item} key={cert.id} onClick={() => handleClick(cert.id - 1)}>
            <CertificateCard
              imageSrc={cert.imageSrc}
              imageAlt={cert.imageAlt}
              pdfHref={cert.pdfHref} />
          </li>
        ))}
      </ul>
    </div>
  )
}