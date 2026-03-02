"use client";

import { Tilt } from 'react-next-tilt';
import Image from 'next/image';
import styles from './photoContainer.module.scss'

export default function PhotoContainer() {
  return (
    <Tilt scale={1.05} borderRadius={'50%'} >
      <div className={styles.photoWrapper}>
        <Image
          src="/images/my-photo.jpg"
          alt="Daniil Topolskii"
          width={400}
          height={400}
          priority
          className={styles.photoImage}
        />
      </div>
    </Tilt>
  )
}