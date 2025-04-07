import { ImageLoaderProps } from 'next/image';

export default function imageLoader({ src }: ImageLoaderProps) {
  // Always include the base path for GitHub Pages
  return `/background-buddy-web${src}`;
} 