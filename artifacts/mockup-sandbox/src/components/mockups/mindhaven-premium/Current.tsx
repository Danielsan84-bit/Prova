import { useEffect, useRef, useState, type ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Download, Menu, Play, X } from 'lucide-react';
import './_group.css';

const YT = 'https://www.youtube.com/@mindhavenita/videos';
const SUB = 'https://www.youtube.com/@mindhavenita?sub_confirmation=1';
const ACCOUNT = 'https://www.mindhaven.club/my-account/';
const BLOG = 'https://www.mindhaven.club/blog-classic/';
const ARTICLE = 'https://www.mindhaven.club/deep-work-il-segreto-dei-battiti-bineurali/';

const NAV = [
  { href: '#temi', label: 'Percorsi' },
  { href: '#respiro', label: 'Respiro' },
  { href: '#sessioni', label: 'Sessioni' },
  { href: '#suono', label: 'Il suono' },
  { href: '#guida', label: 'Guida' },
  { href: '#blog', label: 'Blog' },
];

const THEMES = [
  { n: '01', t: 'Focus', d: 'Sessioni sonore pensate per accompagnare lo studio e il lavoro profondo, senza distrazioni.', img: '/__mockup/images/mindhaven/moss.jpg', tone: 'Verde muschio' },
  { n: '02', t: 'Calma', d: 'Pratiche per rallentare nei giorni pieni e ritrovare un ritmo di respiro più gentile.', img: '/__mockup/images/mindhaven/lake.jpg', tone: 'Lago al tramonto' },
  { n: '03', t: 'Sonno', d: 'Suoni e meditazioni guidate per costruire una sera più morbida e una routine di riposo.', img: '/__mockup/images/mindhaven/night.jpg', tone: 'Notte aperta' },
  { n: '04', t: 'Potenziale', d: 'Spazi di ascolto e visualizzazione per tornare a chiederti dove vuoi andare.', img: '/__mockup/images/mindhaven/hero-forest.jpg', tone: 'Crinale all’alba' },
];

const VIDEOS = ['JSdTubLRVUk', 'csPmohULrRU', 'XA6G4Wg3bxY', 'qBbf98KGa9s', 'uC2RjTVEAXc', 'ivrpDCngxAg'];

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Mind Haven, torna all'inizio" data-testid="link-logo">
      <img src="/__mockup/images/mindhaven/favicon.png" alt="" width={36} height={36} className="rounded-full" />
      <span className={`display text-xl ${light ? 'text-mist' : 'text-fir'}`}>Mind Haven</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 60);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? 'bg-fir/90 backdrop-blur-md' : ''}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Logo light />
        <nav aria-label="Principale" className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} data-testid={`link-nav-${n.label.toLowerCase()}`} className="group relative text-sm text-mist/85 hover:text-mist">
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ember transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={ACCOUNT} target="_blank" rel="noopener noreferrer" data-testid="link-account" className="hidden rounded-full border border-mist/30 px-5 py-2 text-sm text-mist transition hover:bg-mist hover:text-fir sm:block">
            Il mio account
          </a>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button className="p-2 text-mist lg:hidden" aria-label="Apri il menu" data-testid="button-menu"><Menu /></button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[70] bg-fir/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-[80] flex w-[85%] max-w-sm flex-col bg-fir p-8 text-mist data-[state=open]:animate-in data-[state=open]:slide-in-from-right">
                <Dialog.Title className="sr-only">Menu</Dialog.Title>
                <Dialog.Description className="sr-only">Navigazione del sito</Dialog.Description>
                <Dialog.Close className="mb-10 self-end p-2" aria-label="Chiudi il menu" data-testid="button-menu-close"><X /></Dialog.Close>
                <nav aria-label="Mobile" className="flex flex-col gap-5">
                  {NAV.map((n) => (
                    <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="display text-4xl" data-testid={`link-mobile-${n.label.toLowerCase()}`}>{n.label}</a>
                  ))}
                </nav>
                <a href={ACCOUNT} target="_blank" rel="noopener noreferrer" className="mt-auto rounded-full bg-ember px-6 py-3 text-center font-medium text-fir" data-testid="link-mobile-account">Il mio account</a>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%']);
  const words = ['Il', 'cambiamento', 'inizia', 'dentro.'];
  return (
    <section id="top" ref={ref} className="relative flex min-h-[100dvh] items-end overflow-hidden bg-fir">
      <motion.img src="/__mockup/images/mindhaven/hero-forest.jpg" alt="Foresta di pini avvolta dalla nebbia all'alba" style={{ y }} className="absolute inset-0 h-[115%] w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-fir via-fir/50 to-fir/20" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-10 md:pb-24">
        <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1.2 }} className="mb-6 text-sm uppercase tracking-[0.25em] text-lichen">
          Rifugio per la mente · in italiano
        </motion.p>
        <h1 className="display max-w-5xl text-[clamp(3.2rem,10vw,9rem)] leading-[0.95] text-mist">
          {words.map((w, i) => (
            <motion.span key={w} initial={reduce ? false : { opacity: 0, y: 40, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.3 + i * 0.18, duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className={`mr-[0.25em] inline-block ${i === 3 ? 'italic text-ember' : ''}`}>
              {w}
            </motion.span>
          ))}
        </h1>
        <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1 }} className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-mist/85">
            Meditazioni gratuite, suoni immersivi e piccole routine di riposo. Un posto dove fermarti cinque minuti, o un’ora.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#respiro" data-testid="button-hero-breath" className="group inline-flex items-center gap-2 rounded-full bg-ember px-7 py-4 font-medium text-fir transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_#ea84c2]">
              Respira con noi <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#sessioni" data-testid="button-hero-sessions" className="rounded-full border border-mist/40 px-7 py-4 text-mist transition hover:bg-mist/10">Ascolta una sessione</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ['Focus', 'Calma', 'Sonno', 'Potenziale', 'Respiro', 'Silenzio'];
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden bg-ember py-4 text-fir" aria-hidden="true">
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="display flex items-center gap-10 text-3xl italic">
            {t}
            <span className="size-2 rounded-full bg-fir" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Themes() {
  const [active, setActive] = useState(0);
  const th = THEMES[active];
  return (
    <section id="temi" className="mx-auto max-w-7xl scroll-mt-10 px-5 py-28 md:px-10 md:py-40">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.25em] text-moss">Quattro sentieri</p>
        <h2 className="display mt-4 max-w-3xl text-5xl leading-[1.02] md:text-7xl">Scegli dove vuoi arrivare, <em className="text-moss">non cosa devi fare.</em></h2>
      </Reveal>
      <div className="mt-16 grid gap-10 lg:grid-cols-12">
        <div role="tablist" aria-label="Percorsi" className="flex flex-col lg:col-span-5">
          {THEMES.map((t, i) => (
            <button key={t.t} role="tab" id={`tab-${i}`} aria-selected={active === i} aria-controls="theme-panel" onClick={() => setActive(i)} data-testid={`tab-theme-${t.t.toLowerCase()}`} className={`group flex items-baseline gap-5 border-t border-mist/20 py-6 text-left transition last:border-b ${active === i ? 'text-lichen' : 'text-mist/45 hover:text-mist/80'}`}>
              <span className="font-mono text-sm">{t.n}</span>
              <span className="display text-5xl md:text-6xl">{t.t}</span>
              <span className={`ml-auto h-px bg-ember transition-all duration-700 ${active === i ? 'w-12' : 'w-0'}`} />
            </button>
          ))}
        </div>
        <div id="theme-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-fir">
            {THEMES.map((t, i) => (
              <img key={t.t} src={t.img} alt={`Paesaggio: ${t.tone}`} loading="lazy" className={`absolute inset-0 size-full object-cover transition-all duration-[1400ms] ease-out ${i === active ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fir/90 to-transparent p-8 pt-24 text-mist">
              <p className="text-xs uppercase tracking-[0.25em] text-lichen">{th.tone}</p>
              <p className="mt-3 max-w-md text-lg leading-relaxed" aria-live="polite">{th.d}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PHASES = [
  { label: 'Inspira', secs: 4, scale: 1 },
  { label: 'Trattieni', secs: 2, scale: 1 },
  { label: 'Espira', secs: 6, scale: 0.55 },
];

function Breath() {
  const reduce = useReducedMotion();
  const [running, setRunning] = useState(false);
  const [idx, setIdx] = useState(2);
  const [cycles, setCycles] = useState(0);
  useEffect(() => {
    if (!running) return;
    setIdx(0);
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const step = () => {
      t = setTimeout(() => {
        i = (i + 1) % 3;
        if (i === 0) setCycles((c) => c + 1);
        setIdx(i);
        step();
      }, PHASES[i].secs * 1000);
    };
    step();
    return () => clearTimeout(t);
  }, [running]);
  const p = PHASES[idx];
  return (
    <section id="respiro" className="relative scroll-mt-0 overflow-hidden bg-fir-2 py-28 text-mist md:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.25em] text-ember">Un minuto con te</p>
          <h2 className="display mt-4 text-5xl leading-[1.02] md:text-7xl">Prima di tutto, <em className="text-lichen">respira.</em></h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-mist/75">
            Un respiro guidato: quattro secondi per inspirare, due di pausa, sei per lasciare andare. Segui il cerchio, senza obiettivi. Fermati quando vuoi.
          </p>
          <button onClick={() => { setRunning((r) => !r); if (running) { setIdx(2); } else setCycles(0); }} data-testid="button-breath-toggle" aria-pressed={running} className="mt-10 rounded-full bg-ember px-8 py-4 font-medium text-fir transition hover:-translate-y-0.5">
            {running ? 'Fermati' : 'Inizia'}
          </button>
          <p className="mt-4 h-5 text-sm text-mist/50" aria-live="polite">{running && cycles > 0 ? `${cycles} ${cycles === 1 ? 'ciclo completato' : 'cicli completati'}` : ''}</p>
        </Reveal>
        <div className="flex items-center justify-center">
          <div className="relative flex aspect-square w-full max-w-md items-center justify-center">
            {[1, 0.78, 0.58].map((s, k) => (
              <div key={k} className="absolute rounded-full border border-lichen/25" style={{ width: `${s * 100}%`, height: `${s * 100}%` }} />
            ))}
            <div
              className="flex size-[78%] items-center justify-center rounded-full bg-gradient-to-br from-moss to-fir"
              style={{ transform: reduce ? 'none' : `scale(${running ? p.scale : 0.55})`, transition: reduce ? 'none' : `transform ${running ? p.secs : 1.5}s ${idx === 1 ? 'linear' : 'ease-in-out'}`, boxShadow: '0 0 80px -20px #45d0bd' }}
            >
            </div>
            <div className="absolute text-center">
              <p className="display text-4xl md:text-5xl" aria-live="polite">{running ? p.label : 'Pronto'}</p>
              {running && <p className="mt-1 text-sm text-lichen/70">{p.secs} secondi</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sessions({ onPlay }: { onPlay: (id: string) => void }) {
  return (
    <section id="sessioni" className="mx-auto max-w-7xl scroll-mt-10 px-5 py-28 md:px-10 md:py-40">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.25em] text-moss">Dal canale YouTube</p>
          <h2 className="display mt-4 text-5xl leading-[1.02] md:text-7xl">Sessioni da <em className="text-moss">ascoltare ora.</em></h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a href={YT} target="_blank" rel="noopener noreferrer" data-testid="link-youtube-all" className="inline-flex items-center gap-2 border-b border-fir pb-1 hover:text-moss">Tutti i video <ArrowUpRight className="size-4" /></a>
        </Reveal>
      </div>
      <ul className="mt-16 grid gap-6 md:grid-cols-6">
        {VIDEOS.map((id, i) => {
          const wide = i === 0 || i === 3;
          return (
            <li key={id} className={wide ? 'md:col-span-4' : 'md:col-span-2'}>
              <Reveal delay={(i % 3) * 0.08}>
                <button onClick={() => onPlay(id)} data-testid={`button-play-${id}`} aria-label={`Riproduci la sessione ${i + 1}`} className="group relative block aspect-video w-full overflow-hidden rounded-3xl bg-fir text-left md:aspect-auto md:h-72">
                  <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" className="size-full object-cover opacity-80 transition duration-[1200ms] group-hover:scale-105 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-fir/80 via-transparent to-transparent" />
                  <span className="absolute bottom-5 left-6 text-sm uppercase tracking-[0.2em] text-mist">Sessione {String(i + 1).padStart(2, '0')}</span>
                  <span className="absolute bottom-4 right-5 flex size-14 items-center justify-center rounded-full bg-ember text-fir transition duration-500 group-hover:scale-110"><Play className="ml-0.5 size-5 fill-current" /></span>
                </button>
              </Reveal>
            </li>
          );
        })}
      </ul>
      <Reveal className="mt-12 flex flex-wrap items-center gap-4">
        <a href={SUB} target="_blank" rel="noopener noreferrer" data-testid="link-subscribe" className="rounded-full bg-fir px-7 py-4 font-medium text-mist transition hover:-translate-y-0.5 hover:bg-fir-2">Iscriviti al canale</a>
        <span className="text-sm text-fir/60">Gratis, su YouTube.</span>
      </Reveal>
    </section>
  );
}

function Sound() {
  const bars = Array.from({ length: 48 });
  return (
    <section id="suono" className="relative scroll-mt-0 overflow-hidden bg-fir py-28 text-mist md:py-40">
      <img src="/__mockup/images/mindhaven/night.jpg" alt="" aria-hidden="true" className="absolute inset-0 size-full object-cover opacity-25" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.25em] text-ember">Il suono, spiegato semplice</p>
          <h2 className="display mt-4 max-w-4xl text-5xl leading-[1.02] md:text-7xl">Onde che il cervello <em className="text-lichen">impara a seguire.</em></h2>
        </Reveal>
        <div className="mt-8 flex h-24 items-center gap-[3px]" aria-hidden="true">
          {bars.map((_, i) => (
            <span key={i} className="bar block w-full rounded-full bg-lichen/60" style={{ height: `${30 + ((i * 37) % 70)}%`, animationDelay: `${(i % 12) * 0.2}s` }} />
          ))}
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-mist/15 md:grid-cols-3">
          {[
            ['Battiti binaurali', 'Due toni leggermente diversi, uno per orecchio. Con le cuffie, la mente percepisce un terzo ritmo, la differenza tra i due.'],
            ['Toni isocronici', 'Impulsi regolari di un singolo suono, accesi e spenti a ritmo costante. Funzionano anche senza cuffie.'],
            ['Entrainment', 'L’idea è che il ritmo dell’ascolto possa accompagnare un certo stato di attenzione o di rilassamento. È un supporto, non una terapia.'],
          ].map(([t, d]) => (
            <Reveal key={t} className="bg-fir-2/90 p-8 md:p-10">
              <h3 className="display text-3xl text-lichen">{t}</h3>
              <p className="mt-4 leading-relaxed text-mist/75">{d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <a href={ARTICLE} target="_blank" rel="noopener noreferrer" data-testid="link-article-deepwork" className="inline-flex items-center gap-2 border-b border-ember pb-1 text-ember">Approfondisci: deep work e battiti binaurali <ArrowUpRight className="size-4" /></a>
        </Reveal>
      </div>
    </section>
  );
}

const GUIDE = `MIND HAVEN — PICCOLA PRATICA DI AVVIO (circa 10 minuti)

Non è un trattamento medico: è un invito a rallentare.

1. Prepara lo spazio (1 min)
   Siediti o sdraiati comodo. Abbassa le luci. Metti il telefono in modalità silenziosa.

2. Arrivare (2 min)
   Appoggia una mano sul petto, una sull'addome. Nota dove senti il respiro, senza cambiarlo.

3. Respiro 4-2-6 (3 min)
   Inspira per 4 secondi, pausa di 2, espira lentamente per 6.
   Se perdi il conto, ricomincia. Va bene così.

4. Scansione del corpo (3 min)
   Porta l'attenzione a fronte, mandibola, spalle, mani, pancia, gambe.
   Ad ogni espirazione, lascia cadere un po' di tensione.

5. Chiudere (1 min)
   Prima di aprire gli occhi, scegli una parola per il resto della giornata.

Per ascoltare le sessioni gratuite in italiano:
https://www.youtube.com/@mindhavenita/videos

Nota: Mind Haven offre contenuti di benessere e rilassamento a scopo informativo.
Non sostituisce il parere di un medico o di un professionista della salute.
`;

function Guide() {
  const download = () => {
    const url = URL.createObjectURL(new Blob([GUIDE], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mind-haven-pratica-di-avvio.txt';
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <section id="guida" className="mx-auto grid max-w-7xl scroll-mt-10 items-center gap-14 px-5 py-28 md:px-10 md:py-40 lg:grid-cols-2">
      <Reveal className="relative">
        <img src="/__mockup/images/mindhaven/lake.jpg" alt="Lago calmo al tramonto" loading="lazy" className="aspect-[4/5] w-full rounded-t-full object-cover" />
        <div className="absolute -bottom-6 right-4 rotate-3 rounded-2xl bg-ember p-5 text-fir md:right-[-1.5rem]">
          <p className="display text-3xl">10 min</p>
          <p className="text-sm">una pratica, nessun obbligo</p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-sm uppercase tracking-[0.25em] text-moss">Guida da portare con te</p>
        <h2 className="display mt-4 text-5xl leading-[1.02] md:text-6xl">Una pratica di avvio, <em className="text-moss">da tenere in tasca.</em></h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-fir/75">Un breve file di testo con una sequenza di dieci minuti: respiro, scansione del corpo, chiusura. Si scarica subito, senza registrazione.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={download} data-testid="button-download-guide" className="inline-flex items-center gap-2 rounded-full bg-fir px-7 py-4 font-medium text-mist transition hover:-translate-y-0.5"><Download className="size-4" /> Scarica la guida</button>
          <a href={ACCOUNT} target="_blank" rel="noopener noreferrer" data-testid="link-kit" className="rounded-full border border-fir/30 px-7 py-4 transition hover:bg-fir/5">Kit introduttivo nel tuo account</a>
        </div>
      </Reveal>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="scroll-mt-10 bg-fir-2 py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-sm uppercase tracking-[0.25em] text-moss">Dal blog</p>
          <h2 className="display mt-4 text-5xl leading-[1.02] md:text-6xl">Per capire <em>cosa stai ascoltando.</em></h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <a href={ARTICLE} target="_blank" rel="noopener noreferrer" data-testid="link-article" className="group block overflow-hidden rounded-3xl bg-fir text-mist">
            <img src="/__mockup/images/mindhaven/moss.jpg" alt="Felci e muschio con gocce di rugiada" loading="lazy" className="h-64 w-full object-cover transition duration-[1200ms] group-hover:scale-105" />
            <div className="p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-ember">Focus</p>
              <h3 className="display mt-3 text-3xl md:text-4xl">Deep work: il segreto dei battiti binaurali</h3>
              <span className="mt-6 inline-flex items-center gap-2 text-lichen">Leggi l’articolo <ArrowUpRight className="size-4 transition group-hover:translate-x-1" /></span>
            </div>
          </a>
          <a href={BLOG} target="_blank" rel="noopener noreferrer" data-testid="link-blog" className="mt-6 inline-flex items-center gap-2 border-b border-fir pb-1">Tutti gli articoli <ArrowUpRight className="size-4" /></a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-fir px-5 pb-10 pt-24 text-mist md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="display text-[clamp(2.6rem,8vw,7rem)] leading-none">Ti aspettiamo, <em className="text-ember">quando vuoi.</em></p>
        </Reveal>
        <div className="mt-16 flex flex-col justify-between gap-10 md:flex-row">
          <div className="space-y-4"><Logo light /><p className="max-w-xs text-sm text-mist/60">Meditazione, suono e riposo, in italiano.</p></div>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href={YT} target="_blank" rel="noopener noreferrer" className="hover:text-ember" data-testid="link-footer-youtube">Canale YouTube</a></li>
            <li><a href={SUB} target="_blank" rel="noopener noreferrer" className="hover:text-ember" data-testid="link-footer-subscribe">Iscriviti</a></li>
            <li><a href={BLOG} target="_blank" rel="noopener noreferrer" className="hover:text-ember" data-testid="link-footer-blog">Blog</a></li>
            <li><a href={ACCOUNT} target="_blank" rel="noopener noreferrer" className="hover:text-ember" data-testid="link-footer-account">Il mio account</a></li>
          </ul>
        </div>
        <p className="mt-14 border-t border-mist/15 pt-6 text-xs leading-relaxed text-mist/55">
          Avvertenza: i contenuti di Mind Haven hanno scopo di benessere e rilassamento e non costituiscono consulto, diagnosi o trattamento medico o psicologico. Non sostituiscono il parere di un professionista della salute. Se soffri di epilessia o sei sensibile agli stimoli sonori ritmici, chiedi prima al tuo medico. Non ascoltare alla guida.
        </p>
      </div>
    </footer>
  );
}

export function Current() {
  const [video, setVideo] = useState<string | null>(null);
  useEffect(() => {
    document.documentElement.lang = 'it';
  }, []);
  return (
    <div className="grain">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded focus:bg-ember focus:px-4 focus:py-2">Vai ai contenuti</a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Themes />
        <Breath />
        <Sessions onPlay={setVideo} />
        <Sound />
        <Guide />
        <Blog />
      </main>
      <Footer />
      <Dialog.Root open={!!video} onOpenChange={(o) => !o && setVideo(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[90] bg-fir/85 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[100] w-[92vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
            <Dialog.Title className="sr-only">Sessione video Mind Haven</Dialog.Title>
            <Dialog.Description className="sr-only">Riproduzione della sessione da YouTube</Dialog.Description>
            <div className="aspect-video overflow-hidden rounded-2xl bg-black">
              {video && <iframe className="size-full" src={`https://www.youtube-nocookie.com/embed/${video}?autoplay=1&rel=0`} title="Sessione Mind Haven" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />}
            </div>
            <div className="mt-4 flex items-center justify-between text-mist">
              {video && <a href={`https://www.youtube.com/watch?v=${video}`} target="_blank" rel="noopener noreferrer" data-testid="link-video-external" className="inline-flex items-center gap-2 text-sm underline">Se non parte, aprila su YouTube <ArrowUpRight className="size-4" /></a>}
              <Dialog.Close className="rounded-full border border-mist/40 px-5 py-2 text-sm hover:bg-mist/10" data-testid="button-video-close">Chiudi</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
