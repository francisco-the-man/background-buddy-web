import { ImageLoaderProps } from 'next/image';

export default function imageLoader({ src }: ImageLoaderProps) {
  // Check if the src already includes the base path
  if (src.startsWith('/background-buddy-web/')) {
    return src;
  }
  // If not, add it
  return `/background-buddy-web${src}`;
} 