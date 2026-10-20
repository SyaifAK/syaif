export type Project = { id: number; title: string; category: string; description: string; tools: string[]; tone: string; videoUrl: string; featured?: boolean; type: 'editing' | 'ai' }

export const portfolio: Project[] = [
  {
    id: 1, title: 'AI Daily Life', category: 'AI Content Creator', description: 'A stylized AI-generated daily-life video that turns everyday moments into engaging social content.', tools: ['Seedance', 'Kling', 'Capcut'], tone: 'velocity', featured: true, type: 'ai',
    videoUrl: 'https://www.youtube.com/watch?v=BBsX1OuU7z0' // Paste link video proyek 1 di sini.
  },
  {
    id: 2, title: 'AI UGC Cooper', category: 'AI Product Commercial', description: 'An AI UGC-style commercial for Cooper, designed with a natural creator-led feel to highlight the product.', tools: ['Google Flow', 'Omni Flash', 'Capcut'], tone: 'move', type: 'editing',
    videoUrl: 'https://youtube.com/shorts/sc_VZ2ohZUY?feature=share' // Paste link video proyek 2 di sini.
  },
  {
    id: 3, title: 'AI Creation Jersey', category: 'AI Fashion', description: 'An AI fashion visual that showcases a jersey through bold styling, movement, and a modern editorial look.', tools: ['Google Veo', 'Google Flow', 'Capcut'], tone: 'future', type: 'ai',
    videoUrl: 'https://youtube.com/shorts/flx7d9eRzeg?feature=share' // Paste link video proyek 3 di sini.
  },
  {
    id: 4, title: 'Clips Ishowspeed', category: 'Clipping Video', description: 'A high-energy IShowSpeed clip edited with punchy pacing, clear captions, and a hook built for short-form viewers.', tools: ['Capcut', 'Seal'], tone: 'clip', type: 'editing',
    videoUrl: 'https://youtube.com/shorts/s3upg3LGZ1s?feature=share' // Paste link video proyek 4 di sini.
  },
  {
    id: 5, title: 'AI UGC Skincare', category: 'AI Product Commercial', description: 'An AI UGC skincare commercial that presents the product in a relatable routine with a fresh, clean visual style.', tools: ['Capcut', 'Kling'], tone: 'citrus', type: 'ai',
    videoUrl: 'https://youtube.com/shorts/efrMKIiRqiA?feature=share' // Paste link video proyek 5 di sini.
  },
  {
    id: 7, title: 'Chicken Raw', category: 'Cinematic Video', description: 'A cinematic food video for Chicken Raw, using appetizing close-ups and deliberate pacing to elevate the product.', tools: ['Capcut'], tone: 'dark', type: 'editing',
    videoUrl: 'https://youtube.com/shorts/-bTop422dN8?feature=share' // Paste link video proyek 6 di sini.
  },
  {
    id: 8, title: 'Explainer Video', category: 'Campaign Video', description: 'A concise campaign explainer that delivers the key message clearly through structured visuals and engaging pacing.', tools: ['Capcut'], tone: 'dark', type: 'editing',
    videoUrl: 'https://youtube.com/shorts/RlGfEQCgyEk?feature=share' // Paste link video proyek 6 di sini.
  },
  {
    id: 9, title: 'Company Profile Chicken Raw', category: 'Cinematic Video', description: 'A cinematic company profile for Chicken Raw that introduces the brand, its products, and its story with polished visuals.', tools: ['Capcut'], tone: 'dark', type: 'editing',
    videoUrl: 'https://youtube.com/shorts/d-Q0bdkuupM?feature=share' // Paste link video proyek 6 di sini.
  },
  {
    id: 10, title: 'Campaign Mouthguard', category: 'Cinematic Video', description: 'A cinematic mouthguard campaign that emphasizes protection, confidence, and product detail through dynamic visual storytelling.', tools: ['Capcut'], tone: 'dark', type: 'editing',
    videoUrl: 'https://youtube.com/shorts/TezGJxSW6jw?feature=share' // Paste link video proyek 6 di sini.
  },
  {
    id: 11, title: 'Clips Ishowspeed', category: 'Clipping Video', description: 'A fast-paced IShowSpeed highlight clipped for maximum impact, with captions and cuts that keep the momentum moving.', tools: ['Capcut'], tone: 'dark', type: 'editing',
    videoUrl: 'https://youtube.com/shorts/BAJI343Yqlk?feature=share' // Paste link video proyek 6 di sini.
  },
  {
    id: 11, title: 'Clips Dave Ramsey', category: 'Clipping Video', description: 'A focused Dave Ramsey short-form clip that distills financial advice into a clear, compelling, and easy-to-watch edit.', tools: ['Capcut'], tone: 'dark', type: 'editing',
    videoUrl: 'https://youtube.com/shorts/J00_eRsKJwY?feature=share' // Paste link video proyek 6 di sini.
  },
  {
    id: 12, title: 'AI Fashion Product', category: 'AI Product Commercial', description: 'An AI-generated fashion product commercial that spotlights the item with premium styling and attention-grabbing visuals.', tools: ['Capcut', 'Omni Flash'], tone: 'citrus', type: 'ai',
    videoUrl: 'https://youtube.com/shorts/z8en0YX_-3o?feature=share' // Paste link video proyek 5 di sini.
  },
  {
    id: 13, title: 'AI UGC Fashion', category: 'AI Product Commercial', description: 'An AI UGC fashion commercial that combines an authentic creator-style presentation with a polished product showcase.', tools: ['Capcut', 'Omni Flash', 'Google Flow'], tone: 'citrus', type: 'ai',
    videoUrl: 'https://youtube.com/shorts/otWNsUjCpJE?feature=share' // Paste link video proyek 5 di sini.
  },
  {
    id: 14, title: 'AI UGC Property', category: 'AI Real Estate Commercial', description: 'An AI UGC-style property commercial that presents the space through a natural, creator-led walkthrough with polished real-estate visuals.', tools: ['Capcut', 'Omni Flash', 'Google Flow'], tone: 'citrus', type: 'ai',
    videoUrl: 'https://youtube.com/shorts/tkK4wb03Z0g?feature=share' // Paste link video proyek 5 di sini.
  }
]

// Ganti kedua URL ini saat Anda memiliki video before dan after yang berbeda.
export const beforeAfterVideos = {
  beforeVideoUrl: 'https://www.youtube.com/watch?v=BBsX1OuU7z0',
  afterVideoUrl: 'https://www.youtube.com/watch?v=BBsX1OuU7z0'
}
