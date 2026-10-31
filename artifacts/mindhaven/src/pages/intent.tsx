import { useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Headphones, Moon, Focus, Wind } from 'lucide-react';
import PlatformLinks from '@/components/platform-links';

const YOUTUBE = 'https://www.youtube.com/@mindhavenita/videos';
const paths = {
  '/sonno': {
    key: 'sonno', name: 'Sonno', seoTitle: 'Meditazioni guidate per dormire in italiano | Mind Haven', title: <>Meditazioni per dormire,<br /><em>senza fretta.</em></>,
    description: 'Meditazioni guidate in italiano per accompagnare il riposo e creare una routine serale più calma, senza fretta e con il tuo ritmo.',
    image: '/images/night.jpg', alt: 'Una notte quieta sopra un paesaggio scuro',
    eyebrow: 'Per la sera, per il riposo', intro: 'Non serve fare di più. Puoi semplicemente scegliere un ascolto e lasciare che la giornata rallenti.',
    practice: 'Apri la raccolta gratuita di Mind Haven e scegli una sessione che accompagni il tuo momento di pausa.',
    features: [['01', 'Un invito a rallentare', 'Una voce guida una pratica semplice da seguire, nel momento che preferisci.'], ['02', 'Il tuo ritmo', 'Puoi fermarti, cambiare sessione o tornare quando vuoi. Non c’è un percorso obbligato.'], ['03', 'Un rituale semplice', 'Una meditazione, una luce più bassa, qualche minuto per arrivare alla sera.']],
  },
  '/respiro': {
    key: 'respiro', name: 'Respiro e calma', seoTitle: 'Respirazione guidata in italiano per la calma | Mind Haven', title: <>Respirazione guidata,<br /><em>ritrova calma.</em></>,
    description: 'Trova esercizi di respirazione guidata in italiano e pratiche brevi per fare una pausa nella giornata. Ascolta quando vuoi, con calma e al tuo ritmo, oggi.',
    image: '/images/lake.jpg', alt: 'Un lago tranquillo nella luce del crepuscolo',
    eyebrow: 'Per respirare, per ritrovare calma', intro: 'A volte una pausa comincia notando semplicemente il respiro. Senza correggerlo. Senza dover arrivare da qualche parte.',
    practice: 'Inizia con una pratica gratuita in italiano: segui la voce, oppure resta in ascolto soltanto per il tempo che ti va.',
    features: [['01', 'Un passo alla volta', 'Una voce guida il momento, lasciando spazio al tuo modo di viverlo.'], ['02', 'Nessuna prestazione', 'Non c’è un risultato da raggiungere. Puoi interrompere in qualunque momento.'], ['03', 'Ascolto consapevole', 'Il respiro e le parole diventano un invito a essere qui, con delicatezza.']],
  },
  '/focus': {
    key: 'focus', name: 'Concentrazione', seoTitle: 'Meditazioni guidate per concentrarsi in italiano | Mind Haven', title: <>Meditazioni per concentrarti,<br /><em>con calma.</em></>,
    description: 'Meditazioni guidate in italiano per allenare l’attenzione e ritrovare il filo durante studio e lavoro. Una voce accompagna la pratica: non sono suoni binaurali.',
    image: '/images/moss.jpg', alt: 'Felci e muschio in un bosco silenzioso',
    eyebrow: 'Per studiare, per concentrarti', intro: 'Fai spazio a ciò che hai davanti. Una voce ti guida a riportare l’attenzione al momento presente.',
    practice: 'Apri una meditazione guidata gratuita e scegli una pratica che accompagni il tuo tempo di studio o lavoro.',
    features: [['01', 'Una voce che guida', 'Indicazioni semplici accompagnano l’attenzione, senza battiti binaurali.'], ['02', 'Attenzione, non prestazione', 'Non c’è un risultato da raggiungere. Puoi fermarti o riprendere quando vuoi.'], ['03', 'Un’intenzione alla volta', 'Una pratica ripetibile può aiutarti a coltivare consapevolezza e nuove abitudini.']],
  },
} as const;

export default function Intent() {
  const [location] = useLocation();
  const current = paths[location as keyof typeof paths] ?? paths['/sonno'];
  useEffect(() => {
    document.documentElement.lang = 'it';
    document.title = current.seoTitle;
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute('content', current.description);
    const setMeta = (selector: string, content: string) => {
      const meta = document.querySelector(selector);
      meta?.setAttribute('content', content);
    };
    setMeta('meta[property="og:title"]', current.seoTitle);
    setMeta('meta[property="og:description"]', current.description);
    setMeta('meta[name="twitter:title"]', current.seoTitle);
    setMeta('meta[name="twitter:description"]', current.description);
  }, [current]);

  const Icon = current.key === 'sonno' ? Moon : current.key === 'focus' ? Focus : Wind;
  return <div className="intent-page">
    <header className="ih-header">
      <Link href="/" className="ih-brand" aria-label="Mind Haven, torna alla homepage"><img src="/images/mind-haven-mark.png" alt="" /><span>MIND HAVEN<small>UN RIFUGIO PER LA MENTE</small></span></Link>
      <nav aria-label="Navigazione principale"><Link href="/sonno" className={current.key === 'sonno' ? 'selected' : ''}>Sonno</Link><Link href="/respiro" className={current.key === 'respiro' ? 'selected' : ''}>Respiro e calma</Link><Link href="/focus" className={current.key === 'focus' ? 'selected' : ''}>Concentrazione</Link></nav>
      <Link href="/" className="ih-back"><ArrowLeft size={15} /> Tutti i percorsi</Link>
    </header>
    <main>
      <section className="ih-hero">
        <div className="ih-hero-image"><img src={current.image} alt={current.alt} /><span className="ih-image-note">MIND HAVEN <i>·</i> {current.name.toUpperCase()}</span></div>
        <div className="ih-hero-copy">
          <p className="ih-eyebrow"><Icon size={15} strokeWidth={1.5} /> {current.eyebrow}</p>
          <h1>{current.title}</h1>
          <p className="ih-lede">{current.description}</p>
          <a className="ih-button" href={YOUTUBE} target="_blank" rel="noopener noreferrer">Inizia da una pratica gratuita <ArrowRight size={16} /></a>
          <p className="ih-free-note"><Headphones size={14} /> Ascolti gratuiti in italiano sul canale Mind Haven</p>
        </div>
        <a href="#il-percorso" className="ih-scroll">SCOPRI IL PERCORSO <ArrowDown size={13} /></a>
      </section>
      <section className="ih-intro" id="il-percorso">
        <p className="ih-label">IL TUO SPAZIO, OGGI</p>
        <h2>{current.intro}</h2>
        <div className="ih-features">{current.features.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>
      <section className="ih-practice">
        <div className="ih-practice-art"><img src={current.image} alt="" loading="lazy" /><span>01 <i>—</i> UNA PRATICA ALLA VOLTA</span></div>
        <div className="ih-practice-copy"><p className="ih-label">PARTI CON QUELLO CHE C’È</p><h2>Un primo ascolto.<br /><em>Nessun impegno.</em></h2><p>{current.practice}</p><a href={YOUTUBE} target="_blank" rel="noopener noreferrer">Vai alle sessioni gratuite <ArrowUpRight size={15} /></a></div>
      </section>
      <aside className="ih-reading"><span>LA RICERCA</span><p>Benefici, studi e limiti della meditazione guidata</p><Link href="/ricerca-meditazione-guidata">Leggi l’approfondimento <ArrowUpRight size={14} /></Link></aside>
      <section className="ih-membership">
        <div className="ih-membership-heading"><p className="ih-label">IL PROSSIMO PASSO, CON CALMA</p><h2>Un percorso audio<br />più <em>vicino a te.</em></h2><p>La membership audio di Mind Haven è in fase di pre-lancio. Stiamo preparando un luogo dedicato per continuare ad ascoltare, con il tuo ritmo.</p></div>
        <PlatformLinks context={current.key} />
      </section>
      <section className="ih-more"><div><p className="ih-label">PUOI CAMBIARE DIREZIONE</p><h2>Segui ciò che ti serve.</h2></div><div className="ih-more-links">{Object.entries(paths).filter(([path]) => path !== location).map(([path, item]) => <Link key={path} href={path}><span>{item.name}</span><ArrowUpRight size={16} /></Link>)}</div></section>
      <section className="ih-disclaimer"><p>Mind Haven propone pratiche di benessere e rilassamento, non diagnosi o trattamenti medici o psicologici. Non sostituisce il parere di un professionista della salute. Se la meditazione ti provoca disagio, interrompila e chiedi supporto. Non ascoltare alla guida.</p></section>
    </main>
    <footer className="ih-footer"><Link href="/"><img src="/images/mind-haven-lockup.png" alt="Mind Haven — Change begins within" /></Link><p>Un rifugio per la mente · in italiano</p><Link href="/" className="ih-footer-home">Torna alla homepage <ArrowRight size={14} /></Link></footer>
  </div>;
}
