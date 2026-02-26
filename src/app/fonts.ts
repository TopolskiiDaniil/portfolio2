import { PT_Mono, Outfit } from 'next/font/google';

export const ptMono = PT_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-mono',
  weight: '400'
});

export const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  weight: '400'
});