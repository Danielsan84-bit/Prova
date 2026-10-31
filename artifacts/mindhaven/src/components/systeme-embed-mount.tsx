import { ArrowUpRight } from 'lucide-react';
import { trackSignupCtaClick, type SignupPath } from '@/lib/analytics';

type SystemeEmbedMountProps = {
  context: SignupPath;
  position: 'guide_section' | 'intent_membership';
  variant?: 'intent' | 'home';
};

export function getSystemeSignupUrl(context: string) {
  const url = new URL('https://mindhavenita.systeme.io/welcome');
  url.searchParams.set('utm_source', 'mindhaven');
  url.searchParams.set('utm_medium', 'website');
  url.searchParams.set('utm_campaign', 'free_meditation');
  url.searchParams.set('utm_content', context);
  return url.toString();
}

export default function SystemeEmbedMount({ context, position, variant = 'intent' }: SystemeEmbedMountProps) {
  return (
    <div className={`ih-embed ${variant === 'home' ? 'ih-embed-home' : ''}`} data-route={context}>
      <span className="ih-embed-status"><span /> Kit gratuito Mind Haven</span>
      <h3>Il primo passo è gratuito.</h3>
      <p>
        Ricevi il Kit Mind Haven dedicato a focus, sonno ed equilibrio. L’iscrizione si completa
        sulla pagina esterna di Mind Haven gestita da Systeme.io.
      </p>
      <a
        className={variant === 'home' ? 'mh-primary-link' : 'ih-button'}
        href={getSystemeSignupUrl(context)}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`link-systeme-kit-${context}`}
        onClick={() => trackSignupCtaClick(context, position)}
      >
        Ricevi il kit gratuito <ArrowUpRight size={15} />
      </a>
      <p className="ih-embed-note">La pagina di iscrizione si apre su Systeme.io.</p>
    </div>
  );
}
