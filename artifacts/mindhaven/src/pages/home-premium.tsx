import { useEffect, useState, type ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Compass, Focus, Menu, Moon, Waves, X } from 'lucide-react';
import { Link } from 'wouter';
import PlatformLinks from '@/components/platform-links';
import LeadCaptureMockForm from '@/components/lead-capture-mock-form';
import { trackSignupCtaClick } from '@/lib/analytics';

const ACCOUNT = 'https://www.mindhaven.club/my-account/';
const LEAD_FORM_ANCHOR = '#funnel';
const NAV = [
  { href: '#percorso', label: 'Percorsi' },
  { href: '#morning-routine', label: 'Morning Routine' },
  { href: '#pratica', label: 'Il metodo' },
  { href: '/ricerca-meditazione-guidata', label: 'La ricerca' },
];
const THEMES = [
  { n: '01', t: 'Focus', d: 'Meditazioni guidate per ritrovare attenzione e dedicarti allo studio o al lavoro.', img: '/images/moss.jpg', tone: 'Verde muschio', icon: Focus },
  { n: '02', t: 'Calma', d: 'Pratiche per rallentare nei giorni pieni e ritrovare un ritmo di respiro più gentile.', img: '/images/lake.jpg', tone: 'Lago al tramonto', icon: Waves },
  { n: '03', t: 'Sonno', d: 'Meditazioni guidate per accompagnare la sera e creare una routine di riposo più calma.', img: '/images/night.jpg', tone: 'Notte aperta', icon: Moon },
  { n: '04', t: 'Potenziale', d: 'Spazi di ascolto e visualizzazione per tornare a chiederti dove vuoi andare.', img: '/images/hero-forest.jpg', tone: 'Crinale all’alba', icon: Compass },
];
function Reveal({ children, delay = 0, className = '', id }: { children: ReactNode; delay?: number; className?: string; id?: string }) {
  const reduce = useReducedMotion();
  return <motion.div id={id} className={className} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
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
      <a href={LEAD_FORM_ANCHOR} className="mh-account" onClick={() => trackSignupCtaClick('homepage', 'homepage_header')}>Inizia gratis <ArrowRight size={14} /></a>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild><button className="mh-menu" aria-label="Apri il menu"><Menu size={20} /></button></Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="mh-menu-shade" />
          <Dialog.Content className="mh-mobile-menu">
            <div className="mh-mobile-head"><Logo /><Dialog.Close aria-label="Chiudi il menu" className="mh-close"><X size={19} /></Dialog.Close></div>
            <Dialog.Title className="sr-only">Menu Mind Haven</Dialog.Title>
            <Dialog.Description className="sr-only">Navigazione del sito</Dialog.Description>
            <nav aria-label="Mobile">{NAV.map((item, i) => <a href={item.href} key={item.href} onClick={() => setOpen(false)}><small>0{i + 1}</small>{item.label}<ArrowUpRight size={17} /></a>)}</nav>
            <a href={LEAD_FORM_ANCHOR} className="mh-mobile-account" onClick={() => { trackSignupCtaClick('homepage', 'homepage_mobile_menu'); setOpen(false); }}>Ricevi la meditazione gratuita <ArrowRight size={15} /></a>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  </header>;
}

function Hero() {
  const reduce = useReducedMotion();
  return <section id="top" className="mh-hero">
    <div className="mh-hero-inner">
      <Reveal className="mh-hero-copy">
        <p className="mh-eyebrow"><span /> Un rifugio per la mente · in italiano</p>
        <h1>Meditazioni guidate,<br />un momento alla volta.</h1>
        <p className="mh-hero-lede">Una voce ti accompagna a esplorare i tuoi schemi e coltivare nuove abitudini. Meditazioni guidate in italiano, non suoni binaurali.</p>
        <div className="mh-hero-links">
          <a href={LEAD_FORM_ANCHOR} className="mh-primary-link" onClick={() => trackSignupCtaClick('homepage', 'homepage_hero')}>Ricevi la meditazione gratuita <ArrowRight size={16} /></a>
          <a href="#pratica" className="mh-secondary-link">Scopri il metodo <ArrowDownRight size={15} /></a>
        </div>
        <div className="mh-hero-foot"><span className="mh-foot-mark">01</span><span>Una pratica alla volta · senza fretta</span></div>
      </Reveal>

      <motion.div className="mh-hero-visual" initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15 }}>
        <img src="/images/hero-forest.jpg" alt="Luce del mattino tra gli alberi" fetchPriority="high" />
        <div className="mh-hero-visual-shade" />
        <div className="mh-hero-visual-caption"><span>MIND HAVEN · PRATICA GUIDATA</span><strong>Change begins within.</strong></div>
      </motion.div>
    </div>
    <div className="mh-hero-bottomline"><span>MEDITAZIONE GUIDATA · CONSAPEVOLEZZA · RIPOSO</span><a href="#funnel">INIZIA CON L’AUDIO GRATUITO <ArrowDownRight size={13} /></a></div>
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
          <div className="mh-path-card-copy"><p>{theme.t}</p><h3>{theme.d}</h3><a href="#funnel">Ricevi una pratica gratuita <ArrowRight size={15} /></a></div>
          <div className="mh-path-card-marker">MH <i>·</i> {theme.n}</div>
        </div>
      </div>
    </div>
  </section>;
}

function LeadFunnel() {
  return <section id="funnel" className="mh-lead-funnel">
    <div className="mh-wrap mh-lead-layout">
      <Reveal className="mh-lead-copy">
        <p className="mh-kicker">01 · INIZIA GRATIS</p>
        <h2>Un risveglio più<br /><em>presente.</em></h2>
        <p>Ricevi via email una meditazione guidata in formato MP3 per la morning routine. Una voce ti accompagna: niente suoni binaurali.</p>
        <ul>
          <li>Una pratica mattutina guidata</li>
          <li>Da ascoltare al tuo ritmo</li>
          <li>Iscrizione gratuita, senza impegno</li>
        </ul>
        <LeadCaptureMockForm />
      </Reveal>
      <Reveal delay={.08} className="mh-first-pack" id="morning-routine">
        <p className="mh-first-pack-label">02 · IL PASSO SUCCESSIVO · IN PREPARAZIONE</p>
        <h3>Morning<br /><em>Routine</em></h3>
        <p className="mh-first-pack-duration">7 giorni · 7 meditazioni guidate</p>
        <p>Una pratica al mattino per costruire un rituale semplice e ripetibile, senza dover cambiare tutta la tua giornata.</p>
        <span className="mh-first-pack-price">€4,99 · prezzo lancio</span>
      </Reveal>
    </div>
  </section>;
}

function GuidedPractice() {
  return <section id="pratica" className="mh-sound">
    <div className="mh-wrap">
      <Reveal className="mh-sound-intro"><p className="mh-kicker">02 · IL METODO</p><h2>Una voce che guida.<br /><em>Tu che scegli il ritmo.</em></h2><p>La meditazione guidata ti invita a portare attenzione al respiro, ai pensieri e alle intenzioni. Quando parliamo di “riprogrammare il subconscio”, lo intendiamo come metafora per esplorare schemi e abitudini, non come promessa clinica.</p></Reveal>
      <div className="mh-waveform" aria-hidden="true">{Array.from({ length: 52 }, (_, i) => <span key={i} style={{ height: `${20 + ((i * 31) % 68)}%` }} />)}</div>
      <div className="mh-sound-topics">
        {[
          ['01', 'Segui una voce', 'Le indicazioni accompagnano l’attenzione verso il respiro, il corpo o un’immagine mentale.'],
          ['02', 'Osservi i pensieri', 'La pratica offre uno spazio per notare schemi e reazioni con più consapevolezza, senza giudicarti.'],
          ['03', 'Coltivi una routine', 'Ripetere la pratica può aiutarti a dedicare tempo alle tue intenzioni. Ogni esperienza è personale.'],
        ].map(([number, title, description]) => <Reveal key={number} className="mh-sound-topic"><span>{number}</span><h3>{title}</h3><p>{description}</p></Reveal>)}
      </div>
      <Link href="/ricerca-meditazione-guidata" className="mh-sound-article">Benefici, studi e limiti della ricerca <ArrowUpRight size={14} /></Link>
    </div>
  </section>;
}

function Guide() {
  return <section id="canali" className="mh-channel-strip">
    <div className="mh-wrap mh-channel-layout">
      <div><p className="mh-kicker">DOVE ASCOLTARE</p><h2>Mind Haven,<br /><em>anche qui.</em></h2></div>
      <PlatformLinks context="homepage" variant="light" />
    </div>
  </section>;
}

function Footer() {
  return <footer className="mh-footer">
    <div className="mh-wrap">
      <div className="mh-footer-main"><div><Logo footer /><p>Meditazioni guidate e benessere,<br />in italiano.</p></div><nav aria-label="Link utili"><Link href="/ricerca-meditazione-guidata">La ricerca <ArrowUpRight size={13} /></Link><a href={ACCOUNT} target="_blank" rel="noopener noreferrer">Il mio account <ArrowUpRight size={13} /></a></nav></div>
      <p className="mh-legal">Avvertenza: i contenuti di Mind Haven sono pratiche di benessere e non costituiscono diagnosi o trattamento medico o psicologico. Non sostituiscono il parere di un professionista della salute. Se la meditazione ti provoca disagio, interrompila e chiedi supporto. Non ascoltare alla guida.</p>
    </div>
  </footer>;
}

export default function Home() {
  const [activeTheme, setActiveTheme] = useState(0);
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
       .mh-intent-routes{padding:84px max(40px,calc((100% - 1200px)/2));background:#DCEEF1}.mh-intent-head{display:flex;justify-content:space-between;align-items:flex-end;gap:30px;margin-bottom:30px}.mh-intent-head h2{margin:13px 0 0;font-size:clamp(42px,5vw,62px);font-weight:500;line-height:.98;letter-spacing:-.07em}.mh-intent-head h2 em{font-weight:400;color:#0D6F7A}.mh-intent-head>p{max-width:290px;margin:0 0 5px;color:#526372;font-size:11px;line-height:1.8}.mh-intent-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.mh-intent-card{min-height:280px;position:relative;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;padding:19px;border-radius:12px;background-position:center;background-size:cover;color:#fff;text-decoration:none;transition:transform .25s}.mh-intent-card:hover{transform:translateY(-4px)}.mh-intent-card>span{font-size:8px;letter-spacing:.15em;color:rgba(255,255,255,.8)}.mh-intent-card>span i{color:var(--gold);font-style:normal}.mh-intent-card>div h3{margin:0 0 7px;font-size:25px;font-weight:500;letter-spacing:-.05em}.mh-intent-card>div p{margin:0;color:rgba(255,255,255,.75);font-size:10px}.mh-intent-card>svg{position:absolute;right:19px;bottom:19px;color:var(--gold)}
       .mh-home-membership{display:grid;grid-template-columns:.85fr 1.15fr;align-items:center;gap:70px;padding:92px max(40px,calc((100% - 1160px)/2));background:var(--midnight);color:var(--ice)}.mh-home-membership-copy .mh-kicker{color:var(--gold)}.mh-home-membership-copy h2{margin:16px 0;font-size:clamp(43px,5vw,63px);font-weight:500;letter-spacing:-.075em;line-height:.99}.mh-home-membership-copy h2 em{color:var(--cyan);font-weight:400}.mh-home-membership-copy>p:not(.mh-kicker){max-width:420px;color:rgba(236,247,249,.66);font-size:11px;line-height:1.9}.mh-home-membership-note{display:block;margin-top:20px;color:rgba(236,247,249,.45);font-size:8px;letter-spacing:.07em}.mh-home-membership .mh-platform-links{max-width:620px}
       @media(max-width:760px){.mh-intent-routes{padding:68px 20px}.mh-intent-head{display:block}.mh-intent-head>p{margin-top:16px}.mh-intent-grid{grid-template-columns:1fr;gap:10px}.mh-intent-card{min-height:210px}.mh-home-membership{grid-template-columns:1fr;gap:30px;padding:72px 20px}.mh-home-membership-copy h2{font-size:51px}.mh-home-membership .mh-platform-links{width:100%}.mh-platform-links{grid-template-columns:1fr}}
    `}</style>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-[#DAB564] focus:px-4 focus:py-3">Vai ai contenuti</a>
    <Header />
    <main id="main">
      <Hero />
      <LeadFunnel />
      <Pathway active={activeTheme} onSelect={setActiveTheme} />
      <GuidedPractice />
      <Guide />
    </main>
    <Footer />
  </div>;
}
