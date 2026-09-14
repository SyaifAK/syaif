export function getYouTubeVideoId(videoUrl: string) {
  try {
    const url = new URL(videoUrl)
    if (url.hostname.includes('youtu.be')) return url.pathname.split('/').filter(Boolean)[0] ?? null
    if (!url.hostname.includes('youtube.com')) return null
    return url.searchParams.get('v') ?? url.pathname.split('/').filter(Boolean).pop() ?? null
  } catch {
    return null
  }
}

export function toYouTubeEmbedUrl(videoUrl: string, autoplay = false) {
  const videoId = getYouTubeVideoId(videoUrl)
  if (!videoId) return videoUrl
  return `https://www.youtube.com/embed/${videoId}?playsinline=1&rel=0${autoplay ? '&autoplay=1' : ''}`
}

export function toYouTubeThumbnailUrl(videoUrl: string) {
  const videoId = getYouTubeVideoId(videoUrl)
  return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : ''
}
