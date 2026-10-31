import { useEffect, useState, type ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Compass, Download, Focus, Menu, Moon, Pause, Play, Waves, X } from 'lucide-react';

const YT = 'https://www.youtube.com/@mindhavenita/videos';
const SUB = 'https://www.youtube.com/@mindhavenita?sub_confirmation=1';
const ACCOUNT = 'https://www.mindhaven.club/my-account/';
const BLOG = 'https://www.mindhaven.club/blog-classic/';
const ARTICLE = 'https://www.mindhaven.club/deep-work-il-segreto-dei-battiti-bineurali/';
const NAV = [
  { href: '#percorso', label: 'Scegli un percorso' },
  { href: '#sessioni', label: 'Sessioni' },
  { href: '#respiro', label: 'Respiro' },
  { href: '#suono', label: 'Il suono' },
  { href: '#guida', label: 'Guida' },
  { href: '#blog', label: 'Dal blog' },
];
const THEMES = [
  { n: '01', t: 'Focus', d: 'Sessioni sonore pensate per accompagnare lo studio e il lavoro profondo, senza distrazioni.', img: '/images/moss.jpg', tone: 'Verde muschio', icon: Focus },
  { n: '02', t: 'Calma', d: 'Pratiche per rallentare nei giorni pieni e ritrovare un ritmo di respiro più gentile.', img: '/images/lake.jpg', tone: 'Lago al tramonto', icon: Waves },
  { n: '03', t: 'Sonno', d: 'Suoni e meditazioni guidate per costruire una sera più morbida e una routine di riposo.', img: '/images/night.jpg', tone: 'Notte aperta', icon: Moon },
  { n: '04', t: 'Potenziale', d: 'Spazi di ascolto e visualizzazione per tornare a chiederti dove vuoi andare.', img: '/images/hero-forest.jpg', tone: 'Crinale all’alba', icon: Compass },
];
const VIDEOS = ['JSdTubLRVUk', 'csPmohULrRU', 'XA6G4Wg3bxY', 'qBbf98KGa9s', 'uC2RjTVEAXc', 'ivrpDCngxAg'];
const PHASES = [
  { label: 'Inspira', secs: 4, scale: 1 },
  { label: 'Trattieni', secs: 2, scale: 1 },
  { label: 'Espira', secs: 6, scale: 0.55 },
];
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
Non sostituisce il parere di un medico o di un professionista della salute.`;

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function Logo({ footer = false }: { footer?: boolean }) {
  return <a href="#top" className={`mh-logo ${footer ? 'mh-logo-footer' : ''}`} aria-label="Mind Haven, torna all'inizio">
    {footer
      ? <img src="/images/mind-haven-lockup.png" alt="Mind Haven — Change begins within" />
      : <><img src="/images/mind-haven-mark.png" alt="" /><span>MIND HAVEN<small>UN RIFUGIO PER LA MENTE</small></span></>}
  </a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <header className={`mh-header ${solid ? 'is-solid' : ''}`}>
    <div className="mh-header-inner">
      <Logo />
      <nav className="mh-nav" aria-label="Principale">{NAV.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <a href={ACCOUNT} target="_blank" rel="noopener noreferrer" className="mh-account">Il mio account <ArrowUpRight size={14} /></a>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild><button className="mh-menu" aria-label="Apri il menu"><Menu size={20} /></button></Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="mh-menu-shade" />
          <Dialog.Content className="mh-mobile-menu">
            <div className="mh-mobile-head"><Logo /><Dialog.Close aria-label="Chiudi il menu" className="mh-close"><X size={19} /></Dialog.Close></div>
            <Dialog.Title className="sr-only">Menu Mind Haven</Dialog.Title>
            <Dialog.Description className="sr-only">Navigazione del sito</Dialog.Description>
            <nav aria-label="Mobile">{NAV.map((item, i) => <a href={item.href} key={item.href} onClick={() => setOpen(false)}><small>0{i + 1}</small>{item.label}<ArrowUpRight size={17} /></a>)}</nav>
            <a href={ACCOUNT} target="_blank" rel="noopener noreferrer" className="mh-mobile-account">Il mio account <ArrowUpRight size={15} /></a>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  </header>;
}

function Hero({ active, onSelect }: { active: number; onSelect: (index: number) => void }) {
  const reduce = useReducedMotion();
  const theme = THEMES[active];
  return <section id="top" className="mh-hero">
    <div className="mh-hero-inner">
      <Reveal className="mh-hero-copy">
        <p className="mh-eyebrow"><span /> Un rifugio per la mente · in italiano</p>
        <h1>Un momento<br />alla volta.</h1>
        <p className="mh-hero-lede">Meditazioni gratuite, suoni immersivi e piccole routine di riposo. Parti da ciò che ti serve oggi.</p>
        <div className="mh-hero-links">
          <a href="#sessioni" className="mh-primary-link">Esplora le sessioni <ArrowRight size={16} /></a>
          <a href="#respiro" className="mh-secondary-link">Oppure fai una pausa <ArrowDownRight size={15} /></a>
        </div>
        <div className="mh-hero-foot"><span className="mh-foot-mark">01</span><span>Ascolto guidato, al tuo ritmo</span></div>
      </Reveal>

      <motion.div className="mh-finder" initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15 }}>
        <div className="mh-finder-top">
          <div><span className="mh-finder-label">Da cosa vuoi partire?</span><h2>Scegli il tuo spazio.</h2></div>
          <span className="mh-finder-count">01 <i>/</i> 04</span>
        </div>
        <div className="mh-finder-image">
          {THEMES.map((item, i) => <img key={item.t} src={item.img} alt={i === active ? `Paesaggio: ${item.tone}` : ''} aria-hidden={i !== active} className={i === active ? 'active' : ''} />)}
          <div className="mh-finder-image-shade" />
          <div className="mh-finder-caption"><span>IL TUO PERCORSO</span><b>{theme.tone}</b></div>
        </div>
        <div className="mh-finder-options" role="tablist" aria-label="Scegli un percorso">
          {THEMES.map((item, i) => {
            const Icon = item.icon;
            return <button key={item.t} role="tab" aria-selected={i === active} aria-controls="finder-description" onClick={() => onSelect(i)} className={i === active ? 'active' : ''}>
              <Icon size={16} strokeWidth={1.6} /><span>{item.t}</span>
            </button>;
          })}
        </div>
        <p className="mh-finder-description" id="finder-description" aria-live="polite">{theme.d}</p>
        <a href="#percorso" className="mh-finder-next">Scopri il percorso <ArrowRight size={15} /></a>
      </motion.div>
    </div>
    <div className="mh-hero-bottomline"><span>MINDFULNESS · SUONO · RIPOSO</span><span>SCORRI PER ESPLORARE <ArrowDownRight size={13} /></span></div>
  </section>;
}

function Pathway({ active, onSelect }: { active: number; onSelect: (index: number) => void }) {
  const theme = THEMES[active];
  return <section id="percorso" className="mh-pathway">
    <div className="mh-wrap">
      <Reveal className="mh-path-heading">
        <div><p className="mh-kicker">Trova il tuo punto di partenza</p><h2>Quattro modi<br />di <em>esserci.</em></h2></div>
        <p>Non c’è un ordine giusto. Scegli un tema e prenditi il tempo che hai.</p>
      </Reveal>
      <div className="mh-path-layout">
        <div className="mh-path-list" role="tablist" aria-label="Quattro percorsi">
          {THEMES.map((item, i) => {
            const Icon = item.icon;
            return <button key={item.t} id={`path-tab-${i}`} role="tab" aria-selected={active === i} aria-controls="path-panel" onClick={() => onSelect(i)} className={`mh-path-option ${active === i ? 'active' : ''}`}>
              <span className="mh-path-index">{item.n}</span><span className="mh-path-icon"><Icon size={17} strokeWidth={1.5} /></span>
              <span className="mh-path-title">{item.t}</span><ArrowUpRight className="mh-path-arrow" size={17} />
            </button>;
          })}
          <p className="mh-path-footnote">Puoi cambiare strada in qualsiasi momento.</p>
        </div>
        <div className="mh-path-card" id="path-panel" role="tabpanel" aria-labelledby={`path-tab-${active}`}>
          {THEMES.map((item, i) => <img key={item.t} src={item.img} alt={i === active ? `Paesaggio: ${item.tone}` : ''} aria-hidden={i !== active} className={active === i ? 'active' : ''} loading="lazy" />)}
          <div className="mh-path-overlay" />
          <div className="mh-path-card-meta"><span>PERCORSO {theme.n}</span><span>{theme.tone}</span></div>
          <div className="mh-path-card-copy"><p>{theme.t}</p><h3>{theme.d}</h3><a href="#sessioni">Vai alle sessioni disponibili <ArrowRight size={15} /></a></div>
          <div className="mh-path-card-marker">MH <i>·</i> {theme.n}</div>
        </div>
      </div>
    </div>
  </section>;
}

function Sessions({ onPlay }: { onPlay: (id: string) => void }) {
  return <section id="sessioni" className="mh-sessions">
    <div className="mh-wrap">
      <div className="mh-session-head">
        <Reveal><p className="mh-kicker">Ascolta quando vuoi</p><h2>Sessioni guidate,<br /><em>qui e ora.</em></h2></Reveal>
        <Reveal delay={.08} className="mh-session-aside"><span className="mh-youtube-chip"><span /> DAL CANALE YOUTUBE</span><p>Esplora le sessioni gratuite in italiano. Scegli una copertina per aprirla.</p><a href={YT} target="_blank" rel="noopener noreferrer">Tutti i video <ArrowUpRight size={14} /></a></Reveal>
      </div>
      <div className="mh-session-grid">
        {VIDEOS.map((id, i) => <Reveal key={id} delay={(i % 3) * .05} className={`mh-session-card ${i === 0 ? 'featured' : ''}`}>
          <button onClick={() => onPlay(id)} aria-label={`Apri la sessione ${i + 1}`} className="mh-session-play">
            <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
            <span className="mh-session-shade" />
            <span className="mh-session-no">SESSIONE <b>{String(i + 1).padStart(2, '0')}</b></span>
            <span className="mh-play-button"><Play size={15} fill="currentColor" /></span>
            <span className="mh-session-open">ASCOLTA <ArrowUpRight size={12} /></span>
          </button>
          <div className="mh-card-caption"><span>Mind Haven · YouTube</span><span>{String(i + 1).padStart(2, '0')} / 06</span></div>
        </Reveal>)}
      </div>
      <div className="mh-session-bottom"><span>Una sessione alla volta. Nessuna fretta.</span><a href={SUB} target="_blank" rel="noopener noreferrer">Iscriviti al canale <ArrowUpRight size={14} /></a></div>
    </div>
  </section>;
}

function Breath() {
  const reduce = useReducedMotion();
  const [running, setRunning] = useState(false);
  const [idx, setIdx] = useState(2);
  const [cycles, setCycles] = useState(0);
  useEffect(() => {
    if (!running) return;
    setIdx(0);
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const step = () => {
      timer = setTimeout(() => {
        i = (i + 1) % PHASES.length;
        if (i === 0) setCycles(c => c + 1);
        setIdx(i);
        step();
      }, PHASES[i].secs * 1000);
    };
    step();
    return () => clearTimeout(timer);
  }, [running]);
  const phase = PHASES[idx];
  return <section id="respiro" className="mh-breath">
    <div className="mh-wrap mh-breath-layout">
      <Reveal className="mh-breath-copy"><p className="mh-kicker">Una pratica semplice · 4—2—6</p><h2>Rientra<br />nel <em>ritmo.</em></h2><p>Inspira per quattro secondi, fai una pausa di due, espira per sei. Segui il cerchio, senza obiettivi. Fermati quando vuoi.</p><button onClick={() => { if (running) setIdx(2); else setCycles(0); setRunning(r => !r); }} aria-pressed={running} className="mh-breath-toggle">{running ? <><Pause size={15} /> Ferma la pratica</> : <><Play size={15} /> Inizia a respirare</>}</button><span className="mh-cycle-note" aria-live="polite">{running && cycles > 0 ? `${cycles} ${cycles === 1 ? 'ciclo completato' : 'cicli completati'}` : 'Nessun obiettivo. Fermati quando vuoi.'}</span></Reveal>
      <div className="mh-breath-visual" aria-label={running ? `${phase.label}, ${phase.secs} secondi` : 'Pratica di respirazione 4-2-6'}>
        {[1, .76, .53].map((scale, i) => <span key={i} className={`mh-breath-ring ring-${i}`} style={{ width: `${scale * 100}%`, height: `${scale * 100}%` }} />)}
        <div className="mh-breath-orb" style={{ transform: reduce ? 'none' : `scale(${running ? phase.scale : .56})`, transition: reduce ? 'none' : `transform ${running ? phase.secs : 1.4}s ${idx === 1 ? 'linear' : 'ease-in-out'}` }} />
        <div className="mh-breath-label"><b aria-live="polite">{running ? phase.label : 'Pronto'}</b>{running && <small>{phase.secs} secondi</small>}</div>
        <div className="mh-breath-notation"><span>04</span><i /> <span>02</span><i /> <span>06</span></div>
      </div>
    </div>
  </section>;
}

function Sound() {
  return <section id="suono" className="mh-sound">
    <div className="mh-wrap">
      <Reveal className="mh-sound-intro"><p className="mh-kicker">Una piccola guida all’ascolto</p><h2>Capire il suono,<br /><em>senza formule magiche.</em></h2><p>Due tipi di ritmo sonoro e un’idea da conoscere. Un supporto, non una terapia.</p></Reveal>
      <div className="mh-waveform" aria-hidden="true">{Array.from({ length: 52 }, (_, i) => <span key={i} style={{ height: `${20 + ((i * 31) % 68)}%` }} />)}</div>
      <div className="mh-sound-topics">
        {[
          ['01', 'Battiti binaurali', 'Due toni leggermente diversi, uno per orecchio. Con le cuffie, la mente percepisce un terzo ritmo, la differenza tra i due.'],
          ['02', 'Toni isocronici', 'Impulsi regolari di un singolo suono, accesi e spenti a ritmo costante. Funzionano anche senza cuffie.'],
          ['03', 'Entrainment', 'L’idea è che il ritmo dell’ascolto possa accompagnare un certo stato di attenzione o di rilassamento. È un supporto, non una terapia.'],
        ].map(([number, title, description]) => <Reveal key={number} className="mh-sound-topic"><span>{number}</span><h3>{title}</h3><p>{description}</p></Reveal>)}
      </div>
      <a href={ARTICLE} target="_blank" rel="noopener noreferrer" className="mh-sound-article">Approfondisci: deep work e battiti binaurali <ArrowUpRight size={14} /></a>
    </div>
  </section>;
}

function Guide() {
  const download = () => {
    const url = URL.createObjectURL(new Blob([GUIDE], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'mind-haven-pratica-di-avvio.txt';
    link.click();
    URL.revokeObjectURL(url);
  };
  return <section id="guida" className="mh-guide">
    <div className="mh-wrap mh-guide-layout">
      <Reveal className="mh-guide-image"><img src="/images/lake.jpg" alt="Lago calmo al tramonto" loading="lazy" /><span>UNA PRATICA, NESSUN OBBLIGO</span><b>10<small>MIN</small></b></Reveal>
      <Reveal className="mh-guide-copy" delay={.08}><p className="mh-kicker">Un foglio da portare con te</p><h2>Dieci minuti.<br /><em>Solo tuoi.</em></h2><p>Una sequenza breve: arrivare, respirare, fare una scansione del corpo e chiudere. Si scarica subito, senza registrazione.</p><button onClick={download} className="mh-download"><Download size={16} /> Scarica la guida <ArrowDownRight size={14} /></button><a href={ACCOUNT} target="_blank" rel="noopener noreferrer" className="mh-guide-account">Kit introduttivo nel tuo account <ArrowUpRight size={14} /></a></Reveal>
    </div>
  </section>;
}

function Blog() {
  return <section id="blog" className="mh-blog">
    <div className="mh-wrap mh-blog-layout">
      <Reveal><p className="mh-kicker">Dalle pagine del blog</p><h2>Curiosità<br />per <em>ascoltare.</em></h2><p className="mh-blog-note">Parole semplici per conoscere meglio i suoni che scegli.</p><a href={BLOG} target="_blank" rel="noopener noreferrer" className="mh-blog-all">Tutti gli articoli <ArrowUpRight size={14} /></a></Reveal>
      <Reveal delay={.08}><a href={ARTICLE} target="_blank" rel="noopener noreferrer" className="mh-article">
        <img src="/images/moss.jpg" alt="Felci e muschio con gocce di rugiada" loading="lazy" />
        <div><span>FOCUS · APPROFONDIMENTO</span><h3>Deep work: il segreto dei battiti binaurali</h3><b>Leggi l’articolo <ArrowUpRight size={14} /></b></div>
      </a></Reveal>
    </div>
  </section>;
}

function Footer() {
  return <footer className="mh-footer">
    <div className="mh-wrap">
      <Reveal><div className="mh-footer-opening"><span>IL TUO SPAZIO RESTA QUI</span><h2>Ti aspettiamo,<br /><em>quando vuoi.</em></h2></div></Reveal>
      <div className="mh-footer-main"><div><Logo footer /><p>Meditazione, suono e riposo,<br />in italiano.</p></div><nav aria-label="Link utili"><a href={YT} target="_blank" rel="noopener noreferrer">Canale YouTube <ArrowUpRight size={13} /></a><a href={SUB} target="_blank" rel="noopener noreferrer">Iscriviti <ArrowUpRight size={13} /></a><a href={BLOG} target="_blank" rel="noopener noreferrer">Blog <ArrowUpRight size={13} /></a><a href={ACCOUNT} target="_blank" rel="noopener noreferrer">Il mio account <ArrowUpRight size={13} /></a></nav></div>
      <p className="mh-legal">Avvertenza: i contenuti di Mind Haven hanno scopo di benessere e rilassamento e non costituiscono consulto, diagnosi o trattamento medico o psicologico. Non sostituiscono il parere di un professionista della salute. Se soffri di epilessia o sei sensibile agli stimoli sonori ritmici, chiedi prima al tuo medico. Non ascoltare alla guida.</p>
    </div>
  </footer>;
}

export default function Home() {
  const [activeTheme, setActiveTheme] = useState(0);
  const [video, setVideo] = useState<string | null>(null);
  useEffect(() => { document.documentElement.lang = 'it'; }, []);
  return <div className="grain mh-premium">
    <style>{`
      .mh-premium{--midnight:#081110;--navy:#162743;--cyan:#41BACD;--ice:#ECF7F9;--white:#FFFFFF;--gold:#DAB564;background:var(--ice);color:var(--midnight);font-family:'Montserrat',system-ui,sans-serif;overflow:hidden}
      .mh-premium *{box-sizing:border-box}.mh-wrap{width:min(1200px,calc(100% - 80px));margin-inline:auto}
      .mh-logo{display:flex;align-items:center;gap:10px;color:var(--ice);text-decoration:none;flex:none}.mh-logo>img{width:39px;height:39px;object-fit:contain}.mh-logo>span{font-size:11px;font-weight:600;letter-spacing:.2em}.mh-logo small{display:block;margin-top:4px;font-size:7px;font-weight:500;letter-spacing:.17em;opacity:.58}
      .mh-header{position:fixed;inset:0 0 auto;z-index:50;color:var(--ice);transition:background .3s,box-shadow .3s}.mh-header.is-solid{background:rgba(8,17,16,.95);box-shadow:0 1px 0 rgba(236,247,249,.12);backdrop-filter:blur(16px)}.mh-header-inner{height:78px;width:min(1400px,calc(100% - 80px));margin:auto;display:flex;align-items:center;justify-content:space-between;gap:24px}.mh-nav{display:flex;align-items:center;gap:clamp(14px,2.1vw,30px)}.mh-nav a,.mh-account{color:rgba(236,247,249,.78);font-size:10px;text-decoration:none;transition:color .2s}.mh-nav a:hover,.mh-account:hover{color:var(--gold)}.mh-account{display:flex;align-items:center;gap:7px;padding:11px 15px;border:1px solid rgba(236,247,249,.32);border-radius:99px}.mh-menu{display:none;color:var(--ice);border:1px solid rgba(236,247,249,.3);border-radius:50%;width:40px;height:40px;background:transparent}
      .mh-hero{background:var(--midnight);color:var(--ice);padding:128px 0 0;position:relative;isolation:isolate}.mh-hero:before{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(ellipse at 74% 42%,rgba(65,186,205,.13),transparent 39%),linear-gradient(120deg,#081110,#10201f 58%,#162743)}.mh-hero-inner{width:min(1400px,calc(100% - 80px));min-height:600px;margin:auto;display:grid;grid-template-columns:.9fr 1.1fr;align-items:center;gap:clamp(45px,8vw,130px);padding:38px 0 86px}.mh-hero-copy{max-width:570px}.mh-eyebrow,.mh-kicker{margin:0;color:#16899A;font-size:9px;font-weight:600;letter-spacing:.2em;text-transform:uppercase}.mh-eyebrow{display:flex;align-items:center;gap:10px;color:var(--cyan)}.mh-eyebrow span{display:inline-block;width:20px;height:1px;background:var(--gold)}.mh-hero h1{margin:32px 0 24px;font-size:clamp(57px,7.2vw,100px);font-weight:500;letter-spacing:-.075em;line-height:.93}.mh-hero-lede{max-width:415px;color:rgba(236,247,249,.72);font-size:14px;line-height:1.9}.mh-hero-links{display:flex;align-items:center;flex-wrap:wrap;gap:22px;margin-top:32px}.mh-primary-link{display:inline-flex;align-items:center;gap:12px;padding:15px 21px;border-radius:99px;background:var(--gold);color:var(--midnight);font-size:11px;font-weight:600;text-decoration:none;transition:transform .2s,background .2s}.mh-primary-link:hover{transform:translateY(-2px);background:var(--ice)}.mh-secondary-link{display:inline-flex;align-items:center;gap:8px;color:var(--ice);font-size:10px;text-decoration:none;border-bottom:1px solid rgba(236,247,249,.4);padding-bottom:7px}.mh-hero-foot{display:flex;align-items:center;gap:12px;margin-top:56px;color:rgba(236,247,249,.48);font-size:9px;letter-spacing:.08em}.mh-foot-mark{display:grid;width:28px;height:28px;place-items:center;border:1px solid rgba(65,186,205,.55);border-radius:50%;color:var(--cyan);font:9px monospace}
      .mh-finder{max-width:570px;width:100%;padding:22px;background:#ECF7F9;border-radius:22px;color:var(--midnight);box-shadow:0 28px 70px rgba(0,0,0,.2)}.mh-finder-top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;padding:1px 2px 17px}.mh-finder-label{font-size:9px;color:#526372;letter-spacing:.11em;text-transform:uppercase}.mh-finder-top h2{margin:6px 0 0;font-size:25px;font-weight:500;letter-spacing:-.05em}.mh-finder-count{font:10px monospace;color:#697b87}.mh-finder-count i{font-style:normal;color:var(--cyan);padding:0 3px}.mh-finder-image{height:220px;position:relative;overflow:hidden;border-radius:13px;background:var(--navy)}.mh-finder-image img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.025);transition:opacity .5s,transform .8s}.mh-finder-image img.active{opacity:1;transform:scale(1)}.mh-finder-image-shade{position:absolute;inset:0;background:linear-gradient(0deg,rgba(8,17,16,.72),transparent 56%)}.mh-finder-caption{position:absolute;left:18px;bottom:16px;display:grid;gap:5px;color:var(--white)}.mh-finder-caption span{font-size:8px;letter-spacing:.17em;color:rgba(255,255,255,.75)}.mh-finder-caption b{font-size:18px;font-weight:500;letter-spacing:-.04em}.mh-finder-options{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:13px}.mh-finder-options button{display:flex;flex-direction:column;align-items:flex-start;gap:9px;min-height:68px;padding:11px 10px;border:1px solid rgba(22,39,67,.12);border-radius:10px;background:transparent;color:#63737e;text-align:left;cursor:pointer;transition:background .2s,color .2s,border .2s}.mh-finder-options button span{font:500 10px 'Montserrat',sans-serif}.mh-finder-options button.active{border-color:var(--cyan);background:#E1F4F6;color:var(--midnight)}.mh-finder-options button.active svg{color:#16899A}.mh-finder-description{min-height:43px;margin:14px 0 11px;color:#53636e;font-size:10px;line-height:1.65}.mh-finder-next{display:flex;align-items:center;justify-content:space-between;border-top:1px solid rgba(22,39,67,.12);padding-top:13px;color:var(--midnight);font-size:10px;font-weight:600;text-decoration:none}.mh-finder-next svg{color:#16899A;transition:transform .2s}.mh-finder-next:hover svg{transform:translateX(4px)}.mh-hero-bottomline{width:min(1400px,calc(100% - 80px));margin:auto;display:flex;justify-content:space-between;border-top:1px solid rgba(236,247,249,.16);padding:16px 0 18px;color:rgba(236,247,249,.45);font-size:8px;letter-spacing:.18em}.mh-hero-bottomline span:last-child{display:flex;align-items:center;gap:7px}
      .mh-pathway{background:var(--ice);padding:105px 0 110px}.mh-path-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:28px}.mh-path-heading h2,.mh-session-head h2,.mh-breath-copy h2,.mh-sound-intro h2,.mh-guide-copy h2,.mh-blog h2{margin:16px 0 0;font-size:clamp(47px,6vw,76px);font-weight:500;letter-spacing:-.07em;line-height:.98}.mh-path-heading h2 em,.mh-session-head h2 em,.mh-breath-copy h2 em,.mh-sound-intro h2 em,.mh-guide-copy h2 em,.mh-blog h2 em{font-weight:400;color:#16899A}.mh-path-heading>p{max-width:280px;margin:0 0 4px;color:#566773;font-size:12px;line-height:1.8}.mh-path-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:48px;margin-top:45px}.mh-path-list{border-top:1px solid rgba(22,39,67,.16)}.mh-path-option{width:100%;display:grid;grid-template-columns:32px 30px 1fr 20px;align-items:center;gap:12px;padding:21px 4px;border:0;border-bottom:1px solid rgba(22,39,67,.16);background:transparent;text-align:left;color:#76828a;cursor:pointer;transition:color .2s}.mh-path-option.active,.mh-path-option:hover{color:var(--midnight)}.mh-path-index{font:10px monospace;color:#8a969b}.mh-path-icon{display:grid;width:29px;height:29px;place-items:center;border:1px solid rgba(22,39,67,.15);border-radius:50%}.mh-path-option.active .mh-path-icon{border-color:var(--cyan);background:#D9F0F3;color:#16899A}.mh-path-title{font-size:22px;font-weight:500;letter-spacing:-.05em}.mh-path-arrow{opacity:0;color:#16899A;transform:translate(-4px,4px);transition:all .2s}.mh-path-option.active .mh-path-arrow{opacity:1;transform:none}.mh-path-footnote{margin-top:17px;color:#819098;font-size:9px}.mh-path-card{height:420px;position:relative;overflow:hidden;border-radius:15px;background:var(--navy);color:var(--white)}.mh-path-card>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.035);transition:opacity .6s,transform .9s}.mh-path-card>img.active{opacity:1;transform:scale(1)}.mh-path-overlay{position:absolute;inset:0;background:linear-gradient(0deg,rgba(8,17,16,.85),rgba(8,17,16,.06) 72%)}.mh-path-card-meta{position:absolute;left:24px;right:24px;top:20px;display:flex;justify-content:space-between;color:rgba(255,255,255,.8);font-size:8px;letter-spacing:.16em}.mh-path-card-copy{position:absolute;left:30px;bottom:28px;max-width:440px}.mh-path-card-copy>p{margin:0 0 9px;color:var(--gold);font-size:10px;letter-spacing:.15em;text-transform:uppercase}.mh-path-card-copy h3{margin:0;font-size:19px;font-weight:400;line-height:1.6}.mh-path-card-copy a{display:inline-flex;align-items:center;gap:9px;margin-top:19px;color:var(--white);font-size:10px;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.5);padding-bottom:6px}.mh-path-card-copy a svg{color:var(--cyan)}.mh-path-card-marker{position:absolute;right:24px;bottom:26px;color:rgba(255,255,255,.54);font:9px monospace}.mh-path-card-marker i{color:var(--gold);font-style:normal}
      .mh-sessions{background:#fff;padding:105px 0 112px}.mh-session-head{display:flex;justify-content:space-between;align-items:flex-end;gap:32px}.mh-session-aside{width:260px;padding-bottom:5px}.mh-youtube-chip{display:inline-flex;align-items:center;gap:7px;color:#16899A;font-size:8px;letter-spacing:.16em}.mh-youtube-chip span{width:6px;height:6px;border-radius:50%;background:var(--gold)}.mh-session-aside p{margin:13px 0;color:#66747c;font-size:11px;line-height:1.7}.mh-session-aside>a,.mh-session-bottom>a{display:inline-flex;align-items:center;gap:8px;color:var(--midnight);font-size:10px;text-decoration:none;border-bottom:1px solid rgba(8,17,16,.35);padding-bottom:5px}.mh-session-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:17px;margin-top:42px}.mh-session-card.featured{grid-column:span 2}.mh-session-play{display:block;width:100%;height:220px;position:relative;overflow:hidden;padding:0;border:0;border-radius:13px;background:var(--navy);color:#fff;text-align:left;cursor:pointer}.mh-session-card.featured .mh-session-play{height:310px}.mh-session-play>img{width:100%;height:100%;object-fit:cover;opacity:.86;transition:transform .65s,opacity .3s}.mh-session-play:hover>img{transform:scale(1.04);opacity:1}.mh-session-shade{position:absolute;inset:0;background:linear-gradient(0deg,rgba(8,17,16,.62),transparent 66%)}.mh-session-no{position:absolute;left:18px;bottom:17px;color:rgba(255,255,255,.82);font-size:8px;letter-spacing:.17em}.mh-session-no b{margin-left:6px;color:#fff;font-size:14px;font-weight:500}.mh-play-button{position:absolute;right:17px;bottom:14px;display:grid;width:42px;height:42px;place-items:center;border-radius:50%;background:var(--gold);color:var(--midnight);transition:transform .2s}.mh-session-play:hover .mh-play-button{transform:scale(1.08)}.mh-session-open{position:absolute;right:17px;top:16px;display:flex;align-items:center;gap:5px;color:rgba(255,255,255,.85);font-size:7px;letter-spacing:.15em}.mh-card-caption{display:flex;justify-content:space-between;padding:10px 2px;color:#74828a;font-size:8px}.mh-session-bottom{display:flex;justify-content:space-between;align-items:center;gap:18px;margin-top:23px;padding-top:17px;border-top:1px solid rgba(22,39,67,.12)}.mh-session-bottom>span{color:#73818a;font-size:10px}
      .mh-breath{padding:105px 0;background:var(--navy);color:var(--ice);overflow:hidden}.mh-breath-layout{display:grid;grid-template-columns:.9fr 1.1fr;align-items:center;gap:90px}.mh-breath-copy .mh-kicker,.mh-sound .mh-kicker{color:var(--gold)}.mh-breath-copy h2{font-size:clamp(58px,7vw,86px)}.mh-breath-copy h2 em{color:var(--cyan)}.mh-breath-copy>p:not(.mh-kicker){max-width:420px;margin:21px 0 23px;color:rgba(236,247,249,.7);font-size:12px;line-height:1.9}.mh-breath-toggle{display:inline-flex;align-items:center;gap:10px;padding:14px 19px;border:0;border-radius:99px;background:var(--gold);color:var(--midnight);font:600 10px 'Montserrat',sans-serif;cursor:pointer;transition:background .2s,transform .2s}.mh-breath-toggle:hover{background:var(--ice);transform:translateY(-2px)}.mh-cycle-note{display:block;min-height:24px;margin-top:13px;color:rgba(236,247,249,.48);font-size:9px}.mh-breath-visual{position:relative;display:grid;place-items:center;width:min(100%,440px);aspect-ratio:1;margin:auto}.mh-breath-ring{position:absolute;border:1px solid rgba(65,186,205,.2);border-radius:50%}.mh-breath-ring.ring-1{border-color:rgba(65,186,205,.35)}.mh-breath-ring.ring-2{border-color:rgba(218,181,100,.3)}.mh-breath-orb{width:53%;height:53%;border-radius:50%;background:radial-gradient(circle at 36% 30%,rgba(236,247,249,.82),rgba(65,186,205,.63) 38%,rgba(22,39,67,.8) 76%);box-shadow:inset 0 0 35px rgba(65,186,205,.2),0 0 65px rgba(65,186,205,.16)}.mh-breath-label{position:absolute;text-align:center}.mh-breath-label b{font-size:26px;font-weight:500;letter-spacing:-.05em}.mh-breath-label small{display:block;margin-top:6px;color:var(--gold);font:10px monospace}.mh-breath-notation{position:absolute;bottom:2%;display:flex;align-items:center;gap:10px;color:rgba(236,247,249,.55);font:9px monospace;letter-spacing:.12em}.mh-breath-notation i{display:block;width:20px;height:1px;background:rgba(65,186,205,.5)}
      .mh-sound{padding:105px 0;background:var(--midnight);color:var(--ice)}.mh-sound-intro{max-width:720px}.mh-sound-intro h2{font-size:clamp(45px,5.8vw,72px)}.mh-sound-intro h2 em{color:var(--cyan)}.mh-sound-intro>p:last-child{max-width:440px;margin:19px 0 0;color:rgba(236,247,249,.6);font-size:12px;line-height:1.8}.mh-waveform{display:flex;align-items:center;gap:5px;height:78px;margin:34px 0 29px;border-bottom:1px solid rgba(236,247,249,.15);padding-bottom:18px}.mh-waveform span{flex:1;max-width:8px;border-radius:5px;background:linear-gradient(0deg,rgba(65,186,205,.35),var(--cyan));opacity:.66}.mh-sound-topics{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(236,247,249,.16);border-bottom:1px solid rgba(236,247,249,.16)}.mh-sound-topic{padding:24px 27px 27px 0}.mh-sound-topic+.mh-sound-topic{padding-left:27px;border-left:1px solid rgba(236,247,249,.14)}.mh-sound-topic>span{font:9px monospace;color:var(--gold)}.mh-sound-topic h3{margin:17px 0 10px;font-size:18px;font-weight:500;letter-spacing:-.04em}.mh-sound-topic p{margin:0;color:rgba(236,247,249,.62);font-size:10px;line-height:1.8}.mh-sound-article{display:inline-flex;align-items:center;gap:8px;margin-top:24px;color:var(--gold);font-size:10px;text-decoration:none}.mh-sound-article:hover{color:var(--ice)}
      .mh-guide{padding:105px 0;background:var(--ice)}.mh-guide-layout{display:grid;grid-template-columns:.9fr 1fr;gap:clamp(55px,9vw,125px);align-items:center}.mh-guide-image{height:490px;position:relative}.mh-guide-image>img{width:100%;height:100%;object-fit:cover;border-radius:48% 48% 8px 8px}.mh-guide-image>span{position:absolute;left:20px;top:21px;color:#fff;font-size:8px;letter-spacing:.15em}.mh-guide-image>b{position:absolute;right:-24px;bottom:25px;display:flex;align-items:center;justify-content:center;width:84px;height:84px;border-radius:50%;background:var(--gold);font-size:25px;font-weight:500;letter-spacing:-.06em}.mh-guide-image>b small{margin:11px 0 0 3px;font-size:8px;letter-spacing:.1em}.mh-guide-copy h2{font-size:clamp(50px,6vw,74px)}.mh-guide-copy h2 em{color:#16899A}.mh-guide-copy>p:not(.mh-kicker){max-width:430px;margin:21px 0 27px;color:#5c6a72;font-size:12px;line-height:1.9}.mh-download{display:inline-flex;align-items:center;gap:10px;padding:14px 18px;border:0;border-radius:99px;background:var(--midnight);color:var(--ice);font:600 10px 'Montserrat',sans-serif;cursor:pointer;transition:background .2s,transform .2s}.mh-download:hover{background:var(--navy);transform:translateY(-2px)}.mh-guide-account{display:flex;width:fit-content;align-items:center;gap:7px;margin-top:17px;color:var(--midnight);font-size:10px;text-decoration:none;border-bottom:1px solid rgba(8,17,16,.3);padding-bottom:6px}
      .mh-blog{padding:85px 0;background:#DCEEF1}.mh-blog-layout{display:grid;grid-template-columns:.7fr 1.3fr;gap:70px;align-items:center}.mh-blog h2{font-size:clamp(50px,6vw,76px)}.mh-blog h2 em{color:#16899A}.mh-blog-note{max-width:280px;margin:20px 0;color:#5d6d75;font-size:11px;line-height:1.8}.mh-blog-all{display:inline-flex;align-items:center;gap:8px;color:var(--midnight);font-size:10px;text-decoration:none;border-bottom:1px solid rgba(8,17,16,.35);padding-bottom:6px}.mh-article{display:grid;grid-template-columns:.83fr 1.17fr;min-height:295px;overflow:hidden;border-radius:14px;background:var(--midnight);color:var(--ice);text-decoration:none;transition:transform .25s}.mh-article:hover{transform:translateY(-3px)}.mh-article>img{width:100%;height:100%;min-height:295px;object-fit:cover;transition:transform .6s}.mh-article:hover>img{transform:scale(1.04)}.mh-article>div{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:28px}.mh-article>div>span{color:var(--cyan);font-size:8px;letter-spacing:.16em}.mh-article h3{margin:17px 0;font-size:clamp(22px,2.8vw,34px);font-weight:500;line-height:1.12;letter-spacing:-.05em}.mh-article b{display:flex;align-items:center;gap:7px;color:var(--gold);font-size:10px;font-weight:500}
      .mh-footer{padding:72px 0 24px;background:var(--midnight);color:var(--ice)}.mh-footer-opening{display:flex;align-items:flex-end;justify-content:space-between;gap:25px;border-bottom:1px solid rgba(236,247,249,.16);padding-bottom:35px}.mh-footer-opening>span{padding-bottom:9px;color:rgba(236,247,249,.52);font-size:8px;letter-spacing:.18em}.mh-footer-opening h2{margin:0;font-size:clamp(48px,7vw,82px);font-weight:500;line-height:.96;letter-spacing:-.07em}.mh-footer-opening h2 em{font-weight:400;color:var(--gold)}.mh-footer-main{display:flex;justify-content:space-between;gap:35px;padding:30px 0}.mh-logo-footer img{width:185px;height:auto}.mh-footer-main>div>p{margin:13px 0 0;color:rgba(236,247,249,.55);font-size:10px;line-height:1.8}.mh-footer-main nav{display:grid;grid-template-columns:repeat(2,auto);align-content:start;gap:13px 32px}.mh-footer-main nav a{display:flex;align-items:center;gap:6px;color:rgba(236,247,249,.75);font-size:9px;text-decoration:none}.mh-footer-main nav a:hover{color:var(--gold)}.mh-legal{margin:0;border-top:1px solid rgba(236,247,249,.13);padding-top:18px;color:rgba(236,247,249,.46);font-size:9px;line-height:1.8}
      .mh-menu-shade{position:fixed;inset:0;z-index:70;background:rgba(8,17,16,.65);backdrop-filter:blur(8px)}.mh-mobile-menu{position:fixed;inset:0 0 0 auto;z-index:80;display:flex;width:min(90vw,420px);flex-direction:column;padding:25px;background:var(--ice);color:var(--midnight)}.mh-mobile-head{display:flex;align-items:center;justify-content:space-between}.mh-mobile-head .mh-logo{color:var(--midnight)}.mh-mobile-head .mh-logo small{color:var(--navy)}.mh-close{display:grid;width:40px;height:40px;place-items:center;border:1px solid rgba(22,39,67,.2);border-radius:50%;background:transparent;color:var(--midnight)}.mh-mobile-menu nav{display:flex;flex-direction:column;margin-top:45px}.mh-mobile-menu nav a{display:grid;grid-template-columns:32px 1fr 20px;align-items:center;gap:8px;border-bottom:1px solid rgba(22,39,67,.15);padding:17px 0;color:var(--midnight);font-size:20px;font-weight:500;letter-spacing:-.04em;text-decoration:none}.mh-mobile-menu nav small{font:9px monospace;color:#16899A}.mh-mobile-account{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:auto;padding:14px;border-radius:99px;background:var(--midnight);color:var(--ice);font-size:11px;text-decoration:none}
      .mh-video-overlay{position:fixed;inset:0;z-index:90;background:rgba(8,17,16,.9);backdrop-filter:blur(10px)}.mh-video-dialog{position:fixed;left:50%;top:50%;z-index:100;width:min(92vw,1000px);transform:translate(-50%,-50%)}.mh-video-frame{width:100%;aspect-ratio:16/9;border:0;border-radius:12px;background:#081110}.mh-video-controls{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:13px;color:var(--ice)}.mh-video-controls a{display:flex;align-items:center;gap:7px;color:var(--ice);font-size:10px}.mh-video-controls button{padding:9px 17px;border:1px solid rgba(236,247,249,.4);border-radius:99px;background:transparent;color:var(--ice);font:10px 'Montserrat',sans-serif;cursor:pointer}
      @media(max-width:1000px){.mh-nav{gap:13px}.mh-nav a{font-size:9px}.mh-account{padding:10px 12px;font-size:9px}.mh-hero-inner{gap:38px}.mh-path-layout{gap:28px}.mh-breath-layout{gap:45px}.mh-guide-layout{gap:58px}}
      @media(max-width:760px){.mh-wrap,.mh-header-inner,.mh-hero-inner,.mh-hero-bottomline{width:calc(100% - 40px)}.mh-header-inner{height:68px}.mh-nav,.mh-account{display:none}.mh-menu{display:grid;place-items:center}.mh-hero{padding-top:86px}.mh-hero-inner{min-height:0;grid-template-columns:1fr;gap:34px;padding:40px 0 40px}.mh-hero-copy{max-width:600px}.mh-hero h1{margin:23px 0 17px;font-size:clamp(52px,12vw,79px)}.mh-hero-lede{max-width:500px;font-size:12px}.mh-hero-links{margin-top:24px}.mh-hero-foot{margin-top:27px}.mh-finder{max-width:none;padding:16px;border-radius:17px}.mh-finder-top h2{font-size:22px}.mh-finder-image{height:190px}.mh-finder-options button{min-height:62px;padding:9px 8px}.mh-finder-options button span{font-size:9px}.mh-finder-description{font-size:9px}.mh-hero-bottomline{font-size:7px}.mh-pathway,.mh-sessions,.mh-breath,.mh-sound,.mh-guide{padding:76px 0}.mh-path-heading{display:block}.mh-path-heading h2,.mh-session-head h2,.mh-breath-copy h2,.mh-sound-intro h2,.mh-guide-copy h2,.mh-blog h2{font-size:clamp(48px,11vw,67px)}.mh-path-heading>p{margin-top:16px}.mh-path-layout{grid-template-columns:1fr;gap:24px;margin-top:30px}.mh-path-option{padding:15px 3px}.mh-path-title{font-size:19px}.mh-path-card{height:345px}.mh-path-card-copy{left:20px;right:20px;bottom:22px}.mh-path-card-copy h3{font-size:15px}.mh-path-card-marker{display:none}.mh-session-head{display:block}.mh-session-aside{width:auto;margin-top:22px}.mh-session-aside p{max-width:360px}.mh-session-grid{grid-template-columns:repeat(2,1fr);gap:12px;margin-top:30px}.mh-session-card.featured{grid-column:span 2}.mh-session-play{height:auto;aspect-ratio:1.2}.mh-session-card.featured .mh-session-play{height:auto;aspect-ratio:1.75}.mh-session-no{left:12px;bottom:12px;font-size:7px}.mh-session-no b{font-size:12px}.mh-play-button{width:36px;height:36px;right:11px;bottom:9px}.mh-session-open{right:11px;top:11px;font-size:6px}.mh-session-bottom{align-items:flex-start;flex-direction:column}.mh-breath-layout{grid-template-columns:1fr;gap:24px}.mh-breath-visual{width:min(100%,360px)}.mh-breath-label b{font-size:23px}.mh-sound-topics{grid-template-columns:1fr}.mh-sound-topic,.mh-sound-topic+.mh-sound-topic{padding:19px 0;border-left:0}.mh-sound-topic+.mh-sound-topic{border-top:1px solid rgba(236,247,249,.14)}.mh-sound-topic h3{margin:10px 0 7px}.mh-waveform{height:57px;gap:3px}.mh-guide-layout{grid-template-columns:1fr;gap:39px}.mh-guide-image{width:88%;height:390px;margin:auto}.mh-guide-image>b{right:-20px;width:72px;height:72px;font-size:22px}.mh-blog{padding:76px 0}.mh-blog-layout{grid-template-columns:1fr;gap:30px}.mh-article{min-height:250px}.mh-article>img{min-height:250px}.mh-article>div{padding:20px}.mh-article h3{font-size:24px}.mh-footer{padding-top:56px}.mh-footer-opening{display:block}.mh-footer-opening>span{display:block;margin-bottom:20px}.mh-footer-main{flex-direction:column}.mh-video-dialog{width:94vw}}
      @media(max-width:390px){.mh-wrap,.mh-header-inner,.mh-hero-inner,.mh-hero-bottomline{width:calc(100% - 32px)}.mh-hero-links{align-items:flex-start;flex-direction:column;gap:17px}.mh-finder-options{gap:4px}.mh-finder-options button{padding:8px 6px}.mh-finder-options button span{font-size:8px}.mh-session-grid{gap:8px}.mh-article{grid-template-columns:1fr}.mh-article>img{height:190px;min-height:190px}.mh-article>div{padding:22px}}
      @media(prefers-reduced-motion:reduce){.mh-premium *, .mh-premium *::before,.mh-premium *::after{scroll-behavior:auto!important;animation-duration:.01ms!important;transition-duration:.01ms!important}}
      .mh-premium .mh-kicker,.mh-premium .mh-path-heading h2 em,.mh-premium .mh-session-head h2 em,.mh-premium .mh-guide-copy h2 em,.mh-premium .mh-blog h2 em,.mh-premium .mh-mobile-menu nav small,.mh-premium .mh-finder-options button.active svg,.mh-premium .mh-path-option.active .mh-path-icon,.mh-premium .mh-path-option.active .mh-path-arrow{color:#0D6F7A}
      .mh-premium .mh-path-card-copy a svg{color:var(--cyan)}
      .mh-premium .mh-finder-count,.mh-premium .mh-path-index,.mh-premium .mh-path-footnote,.mh-premium .mh-card-caption,.mh-premium .mh-session-bottom>span{color:#526372}
      .mh-premium .mh-path-option:not(.active){color:#566773}
    `}</style>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-[#DAB564] focus:px-4 focus:py-3">Vai ai contenuti</a>
    <Header />
    <main id="main">
      <Hero active={activeTheme} onSelect={setActiveTheme} />
      <Pathway active={activeTheme} onSelect={setActiveTheme} />
      <Sessions onPlay={setVideo} />
      <Breath />
      <Sound />
      <Guide />
      <Blog />
    </main>
    <Footer />
    <Dialog.Root open={!!video} onOpenChange={open => !open && setVideo(null)}>
      <Dialog.Portal>
        <Dialog.Overlay className="mh-video-overlay" />
        <Dialog.Content className="mh-video-dialog">
          <Dialog.Title className="sr-only">Sessione video Mind Haven</Dialog.Title>
          <Dialog.Description className="sr-only">Riproduzione della sessione da YouTube</Dialog.Description>
          {video && <iframe className="mh-video-frame" src={`https://www.youtube-nocookie.com/embed/${video}?autoplay=1&rel=0`} title="Sessione Mind Haven" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />}
          <div className="mh-video-controls">{video && <a href={`https://www.youtube.com/watch?v=${video}`} target="_blank" rel="noopener noreferrer">Se non parte, aprila su YouTube <ArrowUpRight size={14} /></a>}<Dialog.Close asChild><button>Chiudi</button></Dialog.Close></div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>;
}
