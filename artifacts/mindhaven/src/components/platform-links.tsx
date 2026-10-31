import { ArrowUpRight } from 'lucide-react';

type PlatformLinksProps = {
  context: string;
  variant?: 'dark' | 'light';
};

const channels = [
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@mindhavenita/videos',
  },
  {
    id: 'spotify',
    label: 'Spotify',
    href: 'https://open.spotify.com/show/7FguYf5NWdRwEUitBeAR6d?si=YOOnTXgnR3OqtTDwDOmaSg&nd=1&dlsi=22a067f79d214302',
  },
  {
    id: 'amazon-music',
    label: 'Amazon Music',
    href: 'https://music.amazon.it/podcasts/273525a2-815f-4e38-a29d-d00b4d8f75d5/mind-haven-italia',
  },
] as const;

export default function PlatformLinks({ context, variant = 'dark' }: PlatformLinksProps) {
  return (
    <nav
      className={`mh-platform-links ${variant === 'light' ? 'mh-platform-links-light' : ''}`}
      aria-label="Canali Mind Haven"
      data-route={context}
    >
      {channels.map((channel) => (
        <a
          key={channel.id}
          href={channel.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Apri il canale Mind Haven su ${channel.label}`}
          data-testid={`link-channel-${channel.id}-${context}`}
        >
          <span>{channel.label}</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
