import Image from 'next/image';
import Link from 'next/link';
import styles from './certificateCard.module.scss';
import { PiFilePdfLight } from 'react-icons/pi';
import { RxEyeOpen } from 'react-icons/rx';

export default function CertificateCard({ imageSrc, imageAlt, pdfHref }: { imageSrc: string; imageAlt: string; pdfHref: string }) {
  return (
    <article className={styles.certificates__card}>
      <Image className={styles.certificates__image} src={imageSrc} alt={imageAlt} width={200} height={280} />
      <Link className={styles.certificates__link} href={pdfHref} target="_blank" rel="noopener noreferrer">
        <RxEyeOpen /> <PiFilePdfLight />
      </Link>
    </article>
  );
} 