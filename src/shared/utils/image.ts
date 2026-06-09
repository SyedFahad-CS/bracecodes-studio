import { urlFor } from '@/shared/services/sanity/client';

export function getOptimizedImageUrl(source: any, width: number, quality = 80) {
  if (!source) return '';
  return urlFor(source)
    .width(width)
    .format('webp')
    .quality(quality)
    .auto('format')
    .url();
}
