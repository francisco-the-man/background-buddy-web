import { ImageLoaderProps } from 'next/image';

export default function imageLoader({ src }: ImageLoaderProps) {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? '/background-buddy-web' 
    : '';
  return `${baseUrl}${src}`;
} 