/**
 * Utilities for extracting YouTube IDs and generating responsive, privacy-preserving embeds.
 */
export function extractYouTubeId(url?: string | null): string | null {
  if (!url) return null;
  // Support youtu.be/<id>, youtube.com/watch?v=<id>, youtube.com/embed/<id>, youtube.com/shorts/<id>
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

export function getYouTubeEmbedUrl(url?: string | null, autoplay = true): string | null {
  const id = extractYouTubeId(url);
  if (!id) return null;
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=${autoplay ? '1' : '0'}&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;
}

export function getYouTubeThumbnail(videoIdOrUrl?: string | null, quality: 'max' | 'hq' = 'hq'): string {
  if (!videoIdOrUrl) return '';
  const id = extractYouTubeId(videoIdOrUrl) || videoIdOrUrl;
  return quality === 'max'
    ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
    : `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
