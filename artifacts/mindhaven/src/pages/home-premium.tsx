import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Focus, Menu, Moon, Waves, X, Check } from 'lucide-react';
import PlatformLinks from '@/components/platform-links';
import LeadCaptureMockForm from '@/components/lead-capture-mock-form';
import { trackSignupCtaClick } from '@/lib/analytics';
import { Link } from 'wouter';

const LEAD_FORM_ANCHOR = '#funnel';
const NAV = [
  { href: '#benefici', label: 'Benefici' },
  { href: '#morning-routine', label: 'Il percorso' },
  { href: '#canali', label: 'Podcast & YouTube' },
  { href: '#filosofia', label: 'Filosofia' },
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '#contatti', label: 'Contatti' },
];
const THEMES = [
  { n: '01', t: 'Rilascio dello stress', d: 'Una pausa guidata può aiutarti a rallentare e allentare le tensioni della giornata, senza aspettarti di eliminarle subito.', icon: Waves },
  { n: '02', t: 'Chiarezza mentale', d: 'Portare l’attenzione al momento presente può offrire spazio per riordinare pensieri e intenzioni.', icon: Focus },
  { n: '03', t: 'Sonno profondo', d: 'Una pratica serale può favorire il rilassamento e diventare parte della tua routine prima del riposo. Ogni esperienza è personale.', icon: Moon },
];
function Reveal({ children, delay = 0, className = '', id }: { children: ReactNode; delay?: number; className?: string; id?: string }) {
  const reduce = useReducedMotion();
  return <motion.div id={id} className={className} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function Logo({ footer = false }: { footer?: boolean }) {
  return <a href="#top" className={`mh-logo ${footer ? 'mh-logo-footer' : ''}`} aria-label="Mind Haven, torna all'inizio">
    {footer
      ? <img src="/images/mind-haven-lockup.png" alt="Mind Haven — Change begins within" />
      : <><img src="/images/mind-haven-mark.png" alt="" /><span>MIND HAVEN<small>CHANGE BEGINS WITHIN</small></span></>}
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
      <nav className="mh-nav" aria-label="Principale">{NAV.map(item => item.href === '/chi-siamo'
        ? <Link key={item.href} href={item.href} data-testid="link-about-nav">{item.label}</Link>
        : <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <a href={LEAD_FORM_ANCHOR} className="mh-account" onClick={() => trackSignupCtaClick('homepage', 'homepage_header')}>Inizia gratis <ArrowRight size={14} /></a>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild><button className="mh-menu" aria-label="Apri il menu"><Menu size={20} /></button></Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="mh-menu-shade" />
          <Dialog.Content className="mh-mobile-menu">
            <div className="mh-mobile-head"><Logo /><Dialog.Close aria-label="Chiudi il menu" className="mh-close"><X size={19} /></Dialog.Close></div>
            <Dialog.Title className="sr-only">Menu Mind Haven</Dialog.Title>
            <Dialog.Description className="sr-only">Navigazione del sito</Dialog.Description>
            <nav aria-label="Mobile">{NAV.map((item, i) => item.href === '/chi-siamo'
              ? <Link href={item.href} key={item.href} onClick={() => setOpen(false)} data-testid="link-about-mobile"><small>0{i + 1}</small>{item.label}<ArrowUpRight size={17} /></Link>
              : <a href={item.href} key={item.href} onClick={() => setOpen(false)}><small>0{i + 1}</small>{item.label}<ArrowUpRight size={17} /></a>)}</nav>
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
        <p className="mh-eyebrow"><span /> Change begins within</p>
        <h1>Il tuo rifugio mentale<br />quotidiano,<br /><em>a portata di cuffie.</em></h1>
        <p className="mh-hero-lede">Ricevi una meditazione guidata in italiano. Una voce ti accompagna a fare spazio alla calma e alla concentrazione, pochi minuti al giorno.</p>
        <div className="mh-hero-links">
          <a href={LEAD_FORM_ANCHOR} className="mh-primary-link" onClick={() => trackSignupCtaClick('homepage', 'homepage_hero')}>Inizia Gratis <ArrowRight size={16} /></a>
          <a href="#benefici" className="mh-secondary-link">Scopri i benefici <ArrowDownRight size={15} /></a>
        </div>
        <div className="mh-hero-foot"><span className="mh-foot-mark">01</span><span>Una pratica alla volta · senza fretta</span></div>
      </Reveal>

      <motion.aside className="mh-hero-side" initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15 }}>
        <div id="funnel" className="mh-hero-form">
          <LeadCaptureMockForm />
        </div>
        <div className="mh-hero-program" id="morning-routine">
          <img src="/images/hero-forest.jpg" alt="Luce del mattino tra gli alberi" />
          <div className="mh-hero-program-copy">
            <p className="mh-first-pack-label">02 · OFFERTA NEWSLETTER</p>
            <h2>Morning <em>Routine</em></h2>
            <p className="mh-first-pack-duration">7 giorni · 7 meditazioni guidate</p>
            <p>Un rituale semplice per iniziare la giornata con più presenza.</p>
            <div className="mh-first-pack-price" aria-label="Prezzo speciale: 4,99 euro invece di 9,99">
              <del>€9,99</del><strong>€4,99</strong>
            </div>
            <p className="mh-first-pack-offer">Per chi si iscrive ora alla newsletter e acquista subito</p>
          </div>
        </div>
      </motion.aside>
    </div>
    <div className="mh-hero-bottomline"><span>MEDITAZIONE GUIDATA · CONSAPEVOLEZZA · RIPOSO</span><a href="#funnel">RICEVI LA MEDITAZIONE GRATUITA <ArrowDownRight size={13} /></a></div>
  </section>;
}

function Benefits() {
  return <section id="benefici" className="mh-pathway">
    <div className="mh-wrap">
      <Reveal className="mh-path-heading">
        <div><p className="mh-kicker">Piccoli spazi, ogni giorno</p><h2>Un momento per<br /><em>tornare a te.</em></h2></div>
        <p>Ogni esperienza è personale. La pratica non promette risultati: apre uno spazio da abitare con curiosità.</p>
      </Reveal>
      <div className="mh-benefit-grid">
        {THEMES.map(({ n, t, d, icon: Icon }, i) => <Reveal key={n} delay={i * .07} className="mh-benefit-card">
          <div className="mh-benefit-top"><span>{n}</span><Icon size={20} strokeWidth={1.4} aria-hidden="true" /></div>
          <h3>{t}</h3><p>{d}</p>
        </Reveal>)}
      </div>
      <Reveal className="mh-benefits-guide-row">
        <Link href="/benefici.html" className="mh-benefits-guide" data-testid="link-benefits-guide">
          <span aria-hidden="true">📚</span>
          <span>Scopri i benefici dalle origini millenarie agli studi neuroscientifici moderni</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </Reveal>
    </div>
  </section>;
}

function GuidedPractice() {
  return <section id="filosofia" className="mh-sound">
    <div className="mh-wrap">
      <Reveal className="mh-sound-intro"><p className="mh-kicker">LA FILOSOFIA</p><h2>Una voce che guida.<br /><em>Tu che scegli il ritmo.</em></h2><p>Crediamo nell’equilibrio di un gesto semplice: ascoltare, respirare, osservare. Voce e paesaggio sonoro sono curati per accompagnare la pratica e lasciarti spazio, senza sovrastarla.</p></Reveal>
      <div className="mh-waveform" aria-hidden="true">{Array.from({ length: 52 }, (_, i) => <span key={i} style={{ height: `${20 + ((i * 31) % 68)}%` }} />)}</div>
      <div className="mh-sound-topics">
        {[
          ['01', 'Segui una voce', 'Le indicazioni accompagnano l’attenzione verso il respiro, il corpo o un’immagine mentale.'],
          ['02', 'Osservi i pensieri', 'La pratica offre uno spazio per notare schemi e reazioni con più consapevolezza, senza giudicarti.'],
          ['03', 'Coltivi una routine', 'Ripetere la pratica può aiutarti a dedicare tempo alle tue intenzioni. Ogni esperienza è personale.'],
        ].map(([number, title, description]) => <Reveal key={number} className="mh-sound-topic"><span>{number}</span><h3>{title}</h3><p>{description}</p></Reveal>)}
      </div>
      <Link href="/ricerca-meditazione-guidata" className="mh-sound-article">Leggi studi, benefici e limiti <ArrowUpRight size={14} /></Link>
    </div>
  </section>;
}

function Guide() {
  return <section id="canali" className="mh-channel-strip">
    <div className="mh-wrap mh-channel-layout">
      <div><p className="mh-kicker">PODCAST &amp; YOUTUBE</p><h2>Scegli dove<br /><em>ascoltare.</em></h2></div>
      <PlatformLinks context="homepage" variant="light" />
    </div>
  </section>;
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }
  return <section id="contatti" className="mh-contact">
    <div className="mh-wrap mh-contact-layout">
      <Reveal className="mh-contact-copy"><p className="mh-kicker">CONTATTI</p><h2>Una parola,<br /><em>con calma.</em></h2><p>Per domande o semplicemente per salutarci, puoi lasciare un messaggio qui.</p></Reveal>
      <Reveal delay={.08}>
        <form className="mh-contact-form" onSubmit={handleSubmit} data-testid="mock-contact-form">
          {submitted ? <div className="mh-contact-success" role="status" aria-live="polite"><span><Check size={17} /></span><h3>Messaggio simulato.</h3><p>Questa è un’anteprima: il messaggio non è stato inviato né salvato.</p><button type="button" onClick={() => setSubmitted(false)}>Scrivi un altro messaggio</button></div> : <>
            <p className="mh-contact-demo">ANTEPRIMA · MODULO DIMOSTRATIVO</p>
            <label htmlFor="mh-contact-name">Nome</label><input id="mh-contact-name" name="name" autoComplete="name" required data-testid="input-contact-name" />
            <label htmlFor="mh-contact-email">Email</label><input id="mh-contact-email" name="email" type="email" autoComplete="email" required data-testid="input-contact-email" />
            <label htmlFor="mh-contact-message">Messaggio</label><textarea id="mh-contact-message" name="message" rows={4} required data-testid="input-contact-message" />
            <button type="submit" data-testid="button-contact-submit">Simula l’invio <ArrowRight size={15} /></button>
            <p className="mh-contact-note">Il modulo è solo dimostrativo. I dati non vengono inviati né conservati.</p>
          </>}
        </form>
      </Reveal>
    </div>
  </section>;
}

function Footer() {
  return <footer className="mh-footer">
    <div className="mh-wrap">
      <div className="mh-footer-main"><div><Logo footer /><p>Meditazioni guidate e benessere,<br />in italiano.</p></div><nav aria-label="Link utili"><Link href="/chi-siamo">Chi siamo</Link><Link href="/ricerca-meditazione-guidata">La ricerca <ArrowUpRight size={13} /></Link><a href="#benefici">Benefici <ArrowUpRight size={13} /></a><a href="#privacy-policy">Privacy Policy · in preparazione</a><a href="#cookie-policy">Cookie Policy · in preparazione</a></nav></div>
      <p className="mh-legal">Avvertenza: i contenuti di Mind Haven sono pratiche di benessere e non costituiscono diagnosi o trattamento medico o psicologico. Non sostituiscono il parere di un professionista della salute. Se la meditazione ti provoca disagio, interrompila e chiedi supporto. Non ascoltare alla guida.</p>
      <p className="mh-policy-placeholder"><span id="privacy-policy">Informativa Privacy in preparazione.</span><span id="cookie-policy">Informativa Cookie in preparazione.</span></p>
      <p className="mh-copyright">© {new Date().getFullYear()} Mind Haven · Change begins within</p>
    </div>
  </footer>;
}

export default function Home() {
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
       .mh-premium #benefici,.mh-premium #contatti,.mh-premium #canali,.mh-premium #filosofia{scroll-margin-top:92px}
       .mh-hero h1 em{color:var(--cyan);font-weight:400}
       .mh-benefit-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px;margin-top:45px}
       .mh-benefit-card{min-height:260px;padding:25px 24px 29px;border:1px solid rgba(22,39,67,.15);border-radius:11px;background:rgba(255,255,255,.52);transition:transform .25s,border-color .25s,background .25s}
       .mh-benefit-card:hover{transform:translateY(-3px);border-color:rgba(65,186,205,.65);background:rgba(255,255,255,.84)}
       .mh-benefit-top{display:flex;align-items:center;justify-content:space-between;color:#0D6F7A}
       .mh-benefit-top span{font:10px ui-monospace,monospace}
       .mh-benefit-card h3{max-width:230px;margin:54px 0 11px;font-size:23px;font-weight:500;letter-spacing:-.055em;line-height:1.08}
       .mh-benefit-card p{max-width:290px;margin:0;color:#526372;font-size:10px;line-height:1.85}
       .mh-contact{padding:98px 0;background:#DCEEF1}
       .mh-contact-layout{display:grid;grid-template-columns:.8fr 1.2fr;align-items:start;gap:clamp(40px,8vw,110px)}
       .mh-contact-copy h2{margin:16px 0;font-size:clamp(48px,6vw,74px);font-weight:500;letter-spacing:-.075em;line-height:.97}
       .mh-contact-copy h2 em{color:#0D6F7A;font-weight:400}
       .mh-contact-copy>p:last-child{max-width:330px;color:#526372;font-size:12px;line-height:1.85}
       .mh-contact-form{display:grid;gap:10px;padding:28px;border:1px solid rgba(22,39,67,.15);border-radius:12px;background:rgba(255,255,255,.7)}
       .mh-contact-demo{margin:0 0 8px;color:#0D6F7A;font-size:8px;font-weight:600;letter-spacing:.15em}
       .mh-contact-form label{margin-top:5px;color:#162743;font-size:9px;font-weight:600}
       .mh-contact-form input,.mh-contact-form textarea{width:100%;padding:12px 13px;border:1px solid rgba(22,39,67,.19);border-radius:7px;background:#fff;color:#081110;font:11px 'Montserrat',system-ui,sans-serif;resize:vertical}
       .mh-contact-form input:focus,.mh-contact-form textarea:focus{outline:2px solid rgba(65,186,205,.65);outline-offset:1px}
       .mh-contact-form>button{display:flex;align-items:center;justify-content:space-between;min-height:47px;margin-top:5px;padding:0 16px;border:0;border-radius:7px;background:#081110;color:#ECF7F9;font:600 10px 'Montserrat',system-ui,sans-serif;cursor:pointer;transition:background .2s,transform .2s}
       .mh-contact-form>button:hover{transform:translateY(-1px);background:#162743}
       .mh-contact-note{margin:2px 0 0;color:#65747c;font-size:8px;line-height:1.6}
       .mh-contact-success{display:grid;justify-items:start;align-content:center;gap:12px;min-height:360px}
       .mh-contact-success>span{display:grid;width:38px;height:38px;place-items:center;border:1px solid rgba(13,111,122,.3);border-radius:50%;color:#0D6F7A}
       .mh-contact-success h3{margin:0;font-size:25px;font-weight:500}
       .mh-contact-success p{max-width:360px;margin:0;color:#526372;font-size:10px;line-height:1.8}
       .mh-contact-success button{margin-top:5px;padding:0 0 5px;border:0;border-bottom:1px solid rgba(22,39,67,.3);background:none;color:#162743;font:600 9px 'Montserrat',system-ui,sans-serif;cursor:pointer}
       .mh-footer-main nav span{color:rgba(236,247,249,.42);font-size:9px}
       .mh-copyright{margin:20px 0 0;padding-top:15px;border-top:1px solid rgba(236,247,249,.1);color:rgba(236,247,249,.4);font-size:8px;letter-spacing:.05em}
       .mh-benefits-guide-row{display:flex;justify-content:center;margin-top:28px}
       .mh-benefits-guide{display:flex;align-items:center;gap:12px;max-width:780px;padding:15px 20px;border:1px solid rgba(22,39,67,.22);border-radius:999px;background:var(--navy);color:var(--ice);font-size:10px;font-weight:500;line-height:1.5;text-decoration:none;transition:transform .2s,border-color .2s}
       .mh-benefits-guide:hover{transform:translateY(-2px);border-color:var(--cyan)}
       .mh-benefits-guide>span:first-child{font-size:17px}
       .mh-benefits-guide>span:nth-child(2){flex:1}
       .mh-benefits-guide>svg{flex:none;color:var(--cyan)}
       .mh-hero-inner{min-height:0;gap:clamp(32px,5vw,70px);padding:38px 0 64px}
       .mh-hero h1{font-size:clamp(48px,5.3vw,76px);line-height:.98}
       .mh-hero-side{display:grid;align-content:center;gap:12px;min-width:0}
       .mh-hero-form .mh-mock-form{width:100%;max-width:100%}
       .mh-hero-program{display:grid;grid-template-columns:140px minmax(0,1fr);min-height:154px;overflow:hidden;border:1px solid rgba(236,247,249,.17);border-radius:13px;background:linear-gradient(145deg,rgba(22,39,67,.72),rgba(22,39,67,.28));color:var(--ice)}
       .mh-hero-program>img{width:100%;height:100%;min-height:154px;object-fit:cover}
       .mh-hero-program-copy{align-self:center;padding:15px 17px}
       .mh-hero-program-copy .mh-first-pack-label{margin:0;color:var(--gold);font-size:8px;line-height:1.5}
       .mh-hero-program-copy h2{margin:9px 0 5px;font-size:clamp(22px,2.4vw,30px);font-weight:500;letter-spacing:-.06em;line-height:1}
       .mh-hero-program-copy h2 em{color:var(--cyan);font-weight:400}
       .mh-hero-program-copy .mh-first-pack-duration{margin:0 0 6px;color:var(--ice);font-size:9px;font-weight:600}
       .mh-hero-program-copy>p:not(.mh-first-pack-duration){margin:0;color:rgba(236,247,249,.64);font-size:8px;line-height:1.55}
       .mh-first-pack-price{display:flex;align-items:baseline;gap:8px;margin-top:8px;line-height:1}
       .mh-first-pack-price del{color:rgba(236,247,249,.52);font-size:8px;letter-spacing:0}
       .mh-first-pack-price strong{color:var(--gold);font-size:13px;font-weight:600;letter-spacing:0}
       .mh-hero-program-copy>p.mh-first-pack-offer{margin:4px 0 0;color:rgba(236,247,249,.72);font-size:8px;line-height:1.5;letter-spacing:0;text-transform:none}
       .mh-policy-placeholder{display:flex;flex-wrap:wrap;gap:16px;margin:16px 0 0;color:rgba(236,247,249,.38);font-size:8px}
       @media(max-width:760px){.mh-benefit-grid{grid-template-columns:1fr;gap:10px;margin-top:30px}.mh-benefit-card{min-height:0;padding:21px}.mh-benefit-card h3{margin:30px 0 8px}.mh-contact{padding:72px 0}.mh-contact-layout{grid-template-columns:1fr;gap:22px}.mh-contact-copy h2{font-size:54px}.mh-contact-form{padding:21px}.mh-contact-success{min-height:270px}.mh-footer-main nav{grid-template-columns:1fr 1fr;gap:14px}}
       @media(max-width:760px){.mh-intent-routes{padding:68px 20px}.mh-intent-head{display:block}.mh-intent-head>p{margin-top:16px}.mh-intent-grid{grid-template-columns:1fr;gap:10px}.mh-intent-card{min-height:210px}.mh-home-membership{grid-template-columns:1fr;gap:30px;padding:72px 20px}.mh-home-membership-copy h2{font-size:51px}.mh-home-membership .mh-platform-links{width:100%}.mh-platform-links{grid-template-columns:1fr}}
       @media(max-width:760px){.mh-hero h1{font-size:clamp(42px,11vw,58px);line-height:.98;margin:24px 0 16px}.mh-hero-inner{padding:40px 0 42px}.mh-hero-program{grid-template-columns:104px minmax(0,1fr)}.mh-hero-program-copy{padding:13px}.mh-hero-program-copy h2{font-size:22px}.mh-hero-program-copy>p.mh-first-pack-offer{font-size:8px}.mh-policy-placeholder{flex-direction:column;gap:6px}}
       @media(max-width:760px){.mh-benefits-guide{width:100%;align-items:flex-start;border-radius:14px;padding:14px}.mh-benefits-guide>span:first-child{font-size:15px}}
    `}</style>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-[#DAB564] focus:px-4 focus:py-3">Vai ai contenuti</a>
    <Header />
    <main id="main">
      <Hero />
      <Benefits />
      <GuidedPractice />
      <Guide />
      <Contact />
    </main>
    <Footer />
  </div>;
}
