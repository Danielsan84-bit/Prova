import { useEffect } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, AudioLines, CircleDot, ScanLine } from 'lucide-react';
import { Link } from 'wouter';

const TITLE = 'I Benefici della Meditazione: Dalle Origini alle Neuroscienze | Mind Haven';
const DESCRIPTION =
  'Dalle tradizioni contemplative alle neuroscienze: un percorso tra meditazione, attenzione e ricerca, con benefici possibili e limiti da conoscere.';

const sources = [
  ['Yoga philosophy', 'Encyclopaedia Britannica', 'https://www.britannica.com/topic/Yoga-philosophy'],
  ['Pranayama', 'Encyclopaedia Britannica', 'https://www.britannica.com/topic/pranayama'],
  ['Buddhist meditation', 'Encyclopaedia Britannica', 'https://www.britannica.com/topic/Buddhist-meditation'],
  ['Meditation and mindfulness: effectiveness and safety', 'NCCIH', 'https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety'],
  ['The neuroscience of mindfulness meditation', 'Nature Reviews Neuroscience, 2015', 'https://www.nature.com/articles/nrn3916'],
  ['Mindfulness related changes in grey matter: a systematic review and meta-analysis', 'Pernet et al., 2021', 'https://pubmed.ncbi.nlm.nih.gov/33624219/'],
  ['Is meditation associated with altered brain structure? A systematic review and meta-analysis of morphometric neuroimaging in meditation practitioners', 'Fox et al., 2014', 'https://pubmed.ncbi.nlm.nih.gov/24705269/'],
  ['Mindfulness-Based Interventions and the Hypothalamic-Pituitary-Adrenal Axis: A Systematic Review', '2024', 'https://pubmed.ncbi.nlm.nih.gov/39585074/'],
  ['Mindfulness meditation and the immune system: a systematic review of randomized controlled trials', 'Black & Slavich, 2016', 'https://pubmed.ncbi.nlm.nih.gov/26799456/'],
];

export default function Benefits() {
  useEffect(() => {
    document.documentElement.lang = 'it';
    document.title = TITLE;
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute('content', DESCRIPTION);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', TITLE);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', DESCRIPTION);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', TITLE);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', DESCRIPTION);
  }, []);

  return (
    <div className="mh-benefits-page">
      <style>{`
        .mh-benefits-page {
          --mb-bg: #07090e;
          --mb-card: #0e1320;
          --mb-cyan: #00f2fe;
          --mb-ink: #e9f0f5;
          --mb-muted: #a3afbd;
          --mb-line: rgba(190,213,232,.14);
          min-height: 100dvh;
          overflow: hidden;
          background: var(--mb-bg);
          color: var(--mb-ink);
          font-family: 'Montserrat', system-ui, sans-serif;
        }
        .mh-benefits-page * { box-sizing: border-box; }
        .mb-header {
          position: absolute; z-index: 3; top: 0; left: 50%; transform: translateX(-50%);
          display: flex; align-items: center; justify-content: space-between; gap: 20px;
          width: min(1160px, calc(100% - 64px)); height: 82px;
        }
        .mb-brand { display: inline-flex; align-items: center; gap: 10px; color: var(--mb-ink); text-decoration: none; }
        .mb-brand img { width: 37px; height: 37px; object-fit: contain; }
        .mb-brand span { font-size: 10px; font-weight: 600; letter-spacing: .19em; }
        .mb-brand small { display: block; margin-top: 4px; font-size: 7px; font-weight: 400; letter-spacing: .13em; opacity: .58; }
        .mb-back { display: inline-flex; align-items: center; gap: 8px; color: rgba(233,240,245,.65); font-size: 10px; text-decoration: none; transition: color .2s; }
        .mb-back:hover,.mb-source-list a:hover,.mb-footer a:hover { color: var(--mb-cyan); }
        .mb-hero {
          position: relative; display: flex; align-items: flex-end; min-height: 700px;
          padding: 150px max(32px,calc((100% - 1160px)/2)) 82px; isolation: isolate;
          background:
            radial-gradient(ellipse at 78% 42%, rgba(0,242,254,.105), transparent 31%),
            radial-gradient(ellipse at 15% 92%, rgba(40,76,128,.12), transparent 40%),
            var(--mb-bg);
        }
        .mb-hero::after {
          position: absolute; z-index: -1; right: max(5%,calc((100% - 1320px)/2)); top: 17%;
          width: min(34vw,430px); aspect-ratio: 1; border: 1px solid rgba(0,242,254,.15);
          border-radius: 50%; content: ''; box-shadow: inset 0 0 0 34px rgba(0,242,254,.018), inset 0 0 0 90px rgba(0,242,254,.018);
        }
        .mb-hero::before { position: absolute; z-index: -1; right: calc(max(5%,(100% - 1320px)/2) + 12%); top: 37%; width: 8px; height: 8px; border-radius: 50%; background: var(--mb-cyan); content: ''; box-shadow: 0 0 22px rgba(0,242,254,.7); }
        .mb-hero-content { width: 100%; max-width: 820px; }
        .mb-eyebrow,.mb-kicker { margin: 0; color: var(--mb-cyan); font-size: 9px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; }
        .mb-eyebrow { display: flex; align-items: center; gap: 11px; }
        .mb-eyebrow::before { width: 25px; height: 1px; background: var(--mb-cyan); content: ''; }
        .mb-hero h1 { max-width: 800px; margin: 27px 0 23px; font-size: clamp(55px,8.3vw,106px); font-weight: 500; letter-spacing: -.078em; line-height: .92; }
        .mb-hero h1 em { color: var(--mb-cyan); font-weight: 400; }
        .mb-hero-copy { max-width: 580px; margin: 0; color: rgba(233,240,245,.7); font-size: 13px; line-height: 1.95; }
        .mb-hero-meta { display: flex; align-items: center; gap: 12px; margin-top: 31px; color: rgba(233,240,245,.46); font: 9px ui-monospace,monospace; letter-spacing: .1em; text-transform: uppercase; }
        .mb-hero-meta span { display: flex; align-items: center; gap: 8px; }
        .mb-hero-meta svg { color: var(--mb-cyan); }
        .mb-down { position: absolute; right: max(32px,calc((100% - 1160px)/2)); bottom: 29px; display: inline-flex; align-items: center; gap: 9px; color: rgba(233,240,245,.55); font-size: 8px; letter-spacing: .15em; text-decoration: none; }
        .mb-down svg { color: var(--mb-cyan); }
        .mb-intro { padding: 92px 32px 94px; background: #0a0d14; }
        .mb-inner { width: min(100%, 1050px); margin-inline: auto; }
        .mb-intro-grid { display: grid; grid-template-columns: .55fr 1.45fr; gap: clamp(35px,8vw,120px); align-items: start; }
        .mb-index { position: sticky; top: 30px; padding-top: 8px; }
        .mb-index span { display: block; color: var(--mb-cyan); font: 11px ui-monospace,monospace; letter-spacing: .16em; }
        .mb-index p { max-width: 160px; margin: 13px 0 0; color: rgba(233,240,245,.47); font-size: 9px; line-height: 1.8; }
        .mb-intro h2,.mb-section h2 { margin: 0; font-size: clamp(34px,5vw,58px); font-weight: 400; letter-spacing: -.07em; line-height: 1.04; }
        .mb-intro h2 em,.mb-section h2 em { color: var(--mb-cyan); font-weight: 400; }
        .mb-intro-copy { max-width: 680px; margin: 23px 0 0; color: var(--mb-muted); font-size: 12px; line-height: 2; }
        .mb-contents { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
        .mb-contents a { padding: 9px 12px; border: 1px solid var(--mb-line); border-radius: 999px; color: rgba(233,240,245,.74); font-size: 9px; text-decoration: none; transition: border-color .2s,color .2s; }
        .mb-contents a:hover { border-color: var(--mb-cyan); color: var(--mb-cyan); }
        .mb-section { padding: 100px 32px; }
        .mb-section:nth-of-type(odd) { background: var(--mb-bg); }
        .mb-section:nth-of-type(even) { background: #090c13; }
        .mb-section-grid { display: grid; grid-template-columns: .6fr 1.4fr; gap: clamp(35px,8vw,120px); }
        .mb-section-aside { padding-top: 7px; }
        .mb-section-no { display: block; margin-bottom: 18px; color: var(--mb-cyan); font: 11px ui-monospace,monospace; letter-spacing: .15em; }
        .mb-section-aside p:last-child { max-width: 180px; margin: 14px 0 0; color: rgba(233,240,245,.45); font-size: 9px; line-height: 1.8; }
        .mb-prose { max-width: 720px; }
        .mb-prose h2 { margin-bottom: 23px; }
        .mb-prose>p { margin: 0 0 17px; color: var(--mb-muted); font-size: 12px; line-height: 2; }
        .mb-prose strong { color: var(--mb-ink); font-weight: 500; }
        .mb-prose a,.mb-inline-source { color: var(--mb-cyan); text-decoration-color: rgba(0,242,254,.45); text-underline-offset: 3px; }
        .mb-prose a { white-space: nowrap; }
        .mb-prose a svg { display: inline-block; margin-left: 2px; vertical-align: -2px; }
        .mb-note { display: grid; grid-template-columns: 34px 1fr; gap: 15px; margin-top: 31px; padding: 21px 22px; border: 1px solid var(--mb-line); background: var(--mb-card); }
        .mb-note svg { color: var(--mb-cyan); }
        .mb-note p { margin: 0; color: rgba(233,240,245,.68); font-size: 10px; line-height: 1.9; }
        .mb-stateline { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 1px; margin-top: 34px; border: 1px solid var(--mb-line); background: var(--mb-line); }
        .mb-stateline article { min-width: 0; padding: 18px 17px; background: var(--mb-card); }
        .mb-stateline span { display: block; margin-bottom: 11px; color: var(--mb-cyan); font: 9px ui-monospace,monospace; letter-spacing: .12em; }
        .mb-stateline h3 { margin: 0 0 8px; font-size: 13px; font-weight: 500; }
        .mb-stateline p { margin: 0; color: var(--mb-muted); font-size: 9px; line-height: 1.8; }
        .mb-system-map { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px; margin: 30px 0; }
        .mb-system-map div { display: flex; align-items: center; gap: 12px; min-height: 58px; padding: 12px 15px; border: 1px solid var(--mb-line); background: var(--mb-card); color: rgba(233,240,245,.84); font-size: 10px; }
        .mb-system-map svg { flex: none; color: var(--mb-cyan); }
        .mb-pubmed { padding: 82px 32px 88px; background: #07090e; }
        .mb-pubmed-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 30px; margin-bottom: 28px; }
        .mb-pubmed h2 { max-width: 620px; margin: 12px 0 0; font-size: clamp(30px,4.5vw,48px); font-weight: 400; letter-spacing: -.065em; line-height: 1.08; }
        .mb-pubmed-head>p { max-width: 330px; margin: 0; color: rgba(233,240,245,.5); font-size: 9px; line-height: 1.9; }
        .mb-study-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 13px; }
        .mb-study-card { display: flex; flex-direction: column; min-width: 0; min-height: 315px; padding: 26px; border: 1px solid var(--mb-line); background: var(--mb-card); }
        .mb-study-kicker { display: flex; align-items: center; gap: 9px; margin: 0; color: var(--mb-cyan); font: 9px ui-monospace,monospace; letter-spacing: .12em; text-transform: uppercase; }
        .mb-study-kicker svg { flex: none; }
        .mb-study-card h3 { margin: 23px 0 12px; font-size: clamp(17px,2vw,22px); font-weight: 400; letter-spacing: -.035em; line-height: 1.3; }
        .mb-study-card>p { margin: 0; color: var(--mb-muted); font-size: 10px; line-height: 1.9; }
        .mb-study-original { margin: -4px 0 14px !important; color: rgba(233,240,245,.44) !important; font-size: 8px !important; line-height: 1.7 !important; }
        .mb-study-meta { margin-top: 14px !important; color: rgba(233,240,245,.46) !important; font-size: 8px !important; letter-spacing: .03em; }
        .mb-study-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 16px; margin-top: auto; padding-top: 23px; }
        .mb-study-actions a { display: inline-flex; align-items: center; gap: 7px; color: var(--mb-cyan); font-size: 9px; font-weight: 500; text-decoration-color: rgba(0,242,254,.38); text-underline-offset: 4px; }
        .mb-study-actions a:first-child { min-height: 38px; padding: 0 12px; border: 1px solid rgba(0,242,254,.4); text-decoration: none; transition: background .2s,color .2s; }
        .mb-study-actions a:first-child:hover { background: var(--mb-cyan); color: var(--mb-bg); }
        .mb-study-note { margin: 16px 0 0; color: rgba(233,240,245,.42); font-size: 8px; line-height: 1.8; }
        .mb-sources { padding: 70px 32px 78px; background: #0b1019; }
        .mb-sources-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 30px; margin-bottom: 27px; }
        .mb-sources h2 { margin: 12px 0 0; font-size: clamp(28px,4vw,42px); font-weight: 400; letter-spacing: -.06em; }
        .mb-sources-head>p { max-width: 310px; margin: 0; color: rgba(233,240,245,.48); font-size: 9px; line-height: 1.8; }
        .mb-source-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 28px; border-top: 1px solid var(--mb-line); }
        .mb-source-list li { min-width: 0; border-bottom: 1px solid var(--mb-line); list-style: none; }
        .mb-source-list a { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding: 14px 0; color: rgba(233,240,245,.74); font-size: 9px; line-height: 1.7; text-decoration: none; transition: color .2s; }
        .mb-source-list a span { display: block; color: rgba(233,240,245,.42); font-size: 8px; }
        .mb-source-list svg { flex: none; margin-top: 3px; color: var(--mb-cyan); }
        .mb-cta { position: relative; display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 35px; padding: 74px max(32px,calc((100% - 1050px)/2)); overflow: hidden; background: var(--mb-card); }
        .mb-cta::after { position: absolute; right: 12%; top: -100px; width: 270px; height: 270px; border: 1px solid rgba(0,242,254,.13); border-radius: 50%; content: ''; box-shadow: 0 0 0 28px rgba(0,242,254,.018),0 0 0 58px rgba(0,242,254,.014); pointer-events: none; }
        .mb-cta-copy { position: relative; z-index: 1; }
        .mb-cta h2 { max-width: 620px; margin: 13px 0 12px; font-size: clamp(32px,4.5vw,51px); font-weight: 400; letter-spacing: -.07em; line-height: 1.05; }
        .mb-cta h2 em { color: var(--mb-cyan); font-weight: 400; }
        .mb-cta p:not(.mb-kicker) { max-width: 550px; margin: 0; color: var(--mb-muted); font-size: 10px; line-height: 1.9; }
        .mb-cta-link { position: relative; z-index: 1; display: inline-flex; align-items: center; justify-content: center; gap: 12px; min-height: 48px; padding: 0 19px; border: 1px solid var(--mb-cyan); color: var(--mb-cyan); font-size: 9px; font-weight: 600; letter-spacing: .06em; text-decoration: none; transition: background .2s,color .2s; white-space: nowrap; }
        .mb-cta-link:hover { background: var(--mb-cyan); color: var(--mb-bg); }
        .mb-footer { display: flex; align-items: center; justify-content: space-between; gap: 25px; padding: 25px max(32px,calc((100% - 1160px)/2)); border-top: 1px solid var(--mb-line); background: var(--mb-bg); }
        .mb-footer-brand { display: inline-flex; align-items: center; gap: 9px; color: var(--mb-ink); text-decoration: none; }
        .mb-footer-brand img { width: 30px; height: 30px; object-fit: contain; }
        .mb-footer-brand span { font-size: 8px; font-weight: 600; letter-spacing: .16em; }
        .mb-footer-brand small { display: block; margin-top: 3px; color: rgba(233,240,245,.42); font-size: 6px; font-weight: 400; letter-spacing: .13em; }
        .mb-footer p { margin: 0; color: rgba(233,240,245,.4); font-size: 8px; }
        .mb-footer a.mb-privacy { color: rgba(233,240,245,.6); font-size: 8px; text-decoration: none; }
        @media(max-width:720px) {
          .mb-header { width: calc(100% - 40px); height: 70px; }
          .mb-brand img { width: 33px; height: 33px; }
          .mb-back { font-size: 9px; }
          .mb-hero { min-height: 670px; padding: 135px 25px 76px; }
          .mb-hero::after { top: 19%; right: -26%; width: 78vw; }
          .mb-hero::before { top: 36%; right: 17%; }
          .mb-hero h1 { max-width: 590px; font-size: clamp(51px,12.7vw,76px); }
          .mb-hero-copy { font-size: 11px; }
          .mb-hero-meta { flex-wrap: wrap; font-size: 8px; }
          .mb-down { right: 25px; bottom: 22px; }
          .mb-intro,.mb-section { padding: 67px 25px; }
          .mb-intro-grid,.mb-section-grid { grid-template-columns: 1fr; gap: 27px; }
          .mb-index { position: static; }
          .mb-index p { max-width: none; }
          .mb-section-aside p:last-child { max-width: 300px; }
          .mb-section h2,.mb-intro h2 { font-size: clamp(34px,9vw,48px); }
          .mb-stateline { grid-template-columns: 1fr; }
          .mb-stateline article { padding: 16px; }
          .mb-system-map { grid-template-columns: 1fr; }
          .mb-pubmed { padding: 62px 25px; }
          .mb-pubmed-head { align-items: flex-start; flex-direction: column; gap: 12px; }
          .mb-study-grid { grid-template-columns: 1fr; }
          .mb-study-card { min-height: 0; padding: 21px; }
          .mb-study-card h3 { margin-top: 18px; font-size: 19px; }
          .mb-study-actions { padding-top: 20px; }
          .mb-sources { padding: 60px 25px; }
          .mb-sources-head { align-items: flex-start; flex-direction: column; gap: 12px; }
          .mb-source-list { grid-template-columns: 1fr; }
          .mb-cta { grid-template-columns: 1fr; gap: 23px; padding: 62px 25px; }
          .mb-cta-link { justify-self: start; white-space: normal; }
          .mb-cta::after { right: -145px; top: -70px; }
          .mb-footer { align-items: flex-start; flex-direction: column; gap: 13px; padding: 24px 25px; }
        }
        @media(prefers-reduced-motion:reduce) {
          .mh-benefits-page *, .mh-benefits-page *::before, .mh-benefits-page *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; }
        }
      `}</style>

      <header className="mb-header">
        <Link href="/" className="mb-brand" aria-label="Mind Haven, torna alla homepage">
          <img src="/images/mind-haven-mark.png" alt="" />
          <span>MIND HAVEN<small>CHANGE BEGINS WITHIN</small></span>
        </Link>
        <Link href="/" className="mb-back"><ArrowLeft size={14} /> Torna alla homepage</Link>
      </header>

      <main>
        <section className="mb-hero" id="inizio">
          <div className="mb-hero-content">
            <p className="mb-eyebrow">MEDITAZIONE · STORIA · RICERCA</p>
            <h1>L'Evoluzione<br /><em>della Mente</em></h1>
            <p className="mb-hero-copy">
              Dalle pratiche contemplative di culture diverse alle domande delle neuroscienze:
              un viaggio per osservare come la meditazione è stata interpretata, studiata e
              vissuta. Le evidenze sono in evoluzione, e ogni esperienza resta personale.
            </p>
            <div className="mb-hero-meta"><span><AudioLines size={14} /> Una guida, non una cura</span><span>·</span><span>Tempo di lettura: 7 minuti</span></div>
          </div>
          <a className="mb-down" href="#radici">ESPLORA IL PERCORSO <ArrowDown size={13} /></a>
        </section>

        <section className="mb-intro" aria-labelledby="intro-title">
          <div className="mb-inner mb-intro-grid">
            <aside className="mb-index"><span>UNA MAPPA, NON UNA LINEA RETTA</span><p>Tradizioni differenti, domande moderne, risultati da leggere con cautela.</p></aside>
            <div>
              <p className="mb-kicker">PRIMA DI COMINCIARE</p>
              <h2 id="intro-title">La meditazione non ha <em>una sola storia.</em></h2>
              <p className="mb-intro-copy">
                La parola raccoglie pratiche e intenzioni diverse: attenzione al respiro,
                contemplazione, visualizzazione, movimento consapevole. Le tradizioni non
                compongono un’unica sequenza di passaggi né coincidono con le pratiche guidate
                contemporanee. Qui distinguiamo le radici storiche dalle ipotesi e dai risultati
                della ricerca attuale.
              </p>
              <nav className="mb-contents" aria-label="Indice dell'articolo">
                <a href="#radici">01 · Radici antiche</a><a href="#neuroscienze">02 · Neuroscienze</a><a href="#pnei">03 · PNEI</a><a href="#studi-pubmed">Studi PubMed</a><a href="#fonti">Fonti</a>
              </nav>
            </div>
          </div>
        </section>

        <section className="mb-section" id="radici">
          <div className="mb-inner mb-section-grid">
            <aside className="mb-section-aside"><span className="mb-section-no">01 / LE RADICI</span><p>Pratiche nate in contesti culturali e spirituali differenti.</p></aside>
            <article className="mb-prose">
              <p className="mb-kicker">ORIGINI E TRADIZIONI</p>
              <h2>Un patrimonio antico, <em>molte vie.</em></h2>
              <p>
                Nell’India antica, testi e tradizioni vediche costituiscono alcuni dei contesti
                storici a cui si collegano pratiche contemplative. La filosofia dello yoga si è
                sviluppata attraverso scuole e interpretazioni diverse: non è un metodo unico né
                una semplice versione storica della meditazione moderna. <a href="https://www.britannica.com/topic/Yoga-philosophy" target="_blank" rel="noopener noreferrer">Approfondisci la filosofia dello yoga <ArrowUpRight size={12} /></a>.
              </p>
              <p>
                In alcuni percorsi yogici, il <strong>pranayama</strong> — pratiche di regolazione
                del respiro — è associato alla preparazione dell’attenzione e all’osservazione
                interiore. Il respiro può diventare un punto di riferimento concreto: si nota il
                suo ritmo, senza che ciò significhi doverlo controllare o ottenere un risultato
                specifico. Le modalità e i significati variano tra scuole e contesti. <a href="https://www.britannica.com/topic/pranayama" target="_blank" rel="noopener noreferrer">Leggi sul pranayama <ArrowUpRight size={12} /></a>.
              </p>
              <p>
                Anche nelle tradizioni buddhiste esistono forme molteplici di meditazione, con
                obiettivi e metodi distinti: dall’attenzione al respiro alla coltivazione di
                qualità mentali. Ridurle a una pratica universale cancellerebbe differenze
                importanti. <a href="https://www.britannica.com/topic/Buddhist-meditation" target="_blank" rel="noopener noreferrer">Una panoramica sulla meditazione buddhista <ArrowUpRight size={12} /></a>.
              </p>
              <div className="mb-note"><CircleDot size={20} aria-hidden="true" /><p><strong>Un passaggio importante.</strong> Le meditazioni guidate di oggi sono un formato audio contemporaneo: una voce propone indicazioni e lascia a chi ascolta la libertà di seguire, adattare o interrompere. Non sono una terapia né un trattamento clinico.</p></div>
            </article>
          </div>
        </section>

        <section className="mb-section" id="neuroscienze">
          <div className="mb-inner mb-section-grid">
            <aside className="mb-section-aside"><span className="mb-section-no">02 / IL CERVELLO</span><p>Immagini e modelli aiutano a formulare domande, non a promettere un esito.</p></aside>
            <article className="mb-prose">
              <p className="mb-kicker">NEUROSCIENZE CONTEMPORANEE</p>
              <h2>Il cervello in pratica: <em>che cosa sappiamo?</em></h2>
              <p>
                La risonanza magnetica funzionale (<strong>fMRI</strong>) e altre tecniche di
                neuroimaging permettono di studiare correlati dell’attività cerebrale durante o
                dopo pratiche contemplative. Le ricerche esplorano attenzione, consapevolezza
                corporea e regolazione emotiva; non mostrano però una risposta uguale per tutti.
                La revisione di Tang e colleghi sottolinea differenze nei metodi, nelle pratiche
                e nei campioni, oltre a limiti che rendono prudenti le interpretazioni
                <a href="https://www.nature.com/articles/nrn3916" target="_blank" rel="noopener noreferrer"> (2015) <ArrowUpRight size={12} /></a>.
              </p>
              <p>
                Si studiano, tra le altre, l’<strong>amigdala</strong>, coinvolta nell’elaborazione
                della rilevanza emotiva, e aree della corteccia prefrontale, associate a funzioni
                attentive e di controllo. Non è corretto dire che la fMRI dimostri una riduzione
                uniforme dell’attività dell’amigdala o un aumento prefrontale: i risultati
                dipendono dal disegno dello studio e sono variabili. Anche i possibili meccanismi
                restano in parte poco chiari.
              </p>
              <p>
                Una revisione e meta-analisi del 2021 sulle immagini MRI ha individuato la
                porzione anteriore ventrale destra dell’insula come unica regione con un effetto
                coerente nella propria analisi ALE: un risultato circoscritto, non la prova di
                una trasformazione cerebrale generale. Una meta-analisi del 2014 riportava
                inoltre bias di pubblicazione e limiti metodologici.
                <a href="https://pubmed.ncbi.nlm.nih.gov/33624219/" target="_blank" rel="noopener noreferrer"> (2021) <ArrowUpRight size={12} /></a>{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/24705269/" target="_blank" rel="noopener noreferrer">· (2014) <ArrowUpRight size={12} /></a>
              </p>
              <div className="mb-stateline" aria-label="Tre concetti da tenere distinti">
                <article><span>01 — OSSERVARE</span><h3>Correlato non significa causa</h3><p>Un’attività associata a una pratica non dimostra da sola che la pratica l’abbia provocata.</p></article>
                <article><span>02 — ADATTARSI</span><h3>Neuroplasticità possibile</h3><p>Il cervello può cambiare con l’esperienza; tempi, entità e significato variano e non sono garantiti.</p></article>
                <article><span>03 — INTERPRETARE</span><h3>La ricerca è in evoluzione</h3><p>Campioni, protocolli e confronti diversi possono produrre risultati diversi.</p></article>
              </div>
            </article>
          </div>
        </section>

        <section className="mb-section" id="pnei">
          <div className="mb-inner mb-section-grid">
            <aside className="mb-section-aside"><span className="mb-section-no">03 / PNEI</span><p>Una cornice di ricerca sulle interazioni, non una promessa di riequilibrio.</p></aside>
            <article className="mb-prose">
              <p className="mb-kicker">PSICHE, CORPO, CONTESTO</p>
              <h2>PNEI: sistemi in dialogo, <em>prove da interpretare.</em></h2>
              <p>
                La psiconeuroendocrinoimmunologia (PNEI) studia le relazioni tra dimensione
                psicologica, sistema nervoso, sistema endocrino e sistema immunitario. È una
                cornice interdisciplinare: non implica che ogni pensiero produca un effetto
                diretto e prevedibile sul corpo, né che una pratica meditativa possa sostituire
                cure o indicazioni professionali.
              </p>
              <div className="mb-system-map" aria-label="Sistemi considerati nella PNEI">
                <div><ScanLine size={17} aria-hidden="true" /> Psicologico · vissuti e attenzione</div>
                <div><ScanLine size={17} aria-hidden="true" /> Nervoso · segnali e regolazione</div>
                <div><ScanLine size={17} aria-hidden="true" /> Endocrino · ormoni, tra cui il cortisolo</div>
                <div><ScanLine size={17} aria-hidden="true" /> Immunitario · marcatori studiati</div>
              </div>
              <p>
                Il cortisolo partecipa a processi fisiologici e alla risposta allo stress. Una
                revisione sistematica del 2024 sugli interventi di meditazione ha trovato
                risultati eterogenei: 25 studi riportavano cambiamenti significativi, mentre 10
                non ne riportavano. Gli autori concludono che la debolezza dei disegni di studio
                non consente conclusioni causali. Perciò non possiamo affermare che meditare
                riduca sempre il cortisolo, elimini lo stress o ripristini l’omeostasi.
                <a href="https://pubmed.ncbi.nlm.nih.gov/39585074/" target="_blank" rel="noopener noreferrer"> Leggi la revisione del 2024 <ArrowUpRight size={12} /></a>.
              </p>
              <p>
                Anche gli studi sui marcatori immunitari sono preliminari: una revisione del 2016
                descrive risultati tentativi che richiedono repliche e metodi più solidi. Non
                sono una base per sostenere che la meditazione “rafforzi” l’immunità.
                <a href="https://pubmed.ncbi.nlm.nih.gov/26799456/" target="_blank" rel="noopener noreferrer"> Consulta la revisione del 2016 <ArrowUpRight size={12} /></a>.
              </p>
              <div className="mb-note"><CircleDot size={20} aria-hidden="true" /><p>Possibili effetti soggettivi — come una pausa, maggiore consapevolezza del respiro o uno spazio per riflettere sulle abitudini — non sono uguali per tutti, non sono garantiti e non equivalgono a un esito medico. Per una panoramica generale, il <a href="https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety" target="_blank" rel="noopener noreferrer">NCCIH riassume efficacia e sicurezza <ArrowUpRight size={12} /></a>.</p></div>
            </article>
          </div>
        </section>

        <section className="mb-pubmed" id="studi-pubmed" aria-labelledby="pubmed-title">
          <div className="mb-inner">
            <div className="mb-pubmed-head">
              <div>
                <p className="mb-kicker">EVIDENZE DA APPROFONDIRE</p>
                <h2 id="pubmed-title">Studi e Ricerche recenti su PubMed</h2>
              </div>
              <p>Due studi su pratiche guidate e costanza: risultati interessanti, da leggere nel contesto dei metodi e dei campioni coinvolti.</p>
            </div>
            <div className="mb-study-grid">
              <article className="mb-study-card">
                <p className="mb-study-kicker"><AudioLines size={13} aria-hidden="true" /> Rilassamento guidato · RCT · 2023</p>
                <h3>Mindfulness guidata via app e risposta allo stress</h3>
                <p className="mb-study-original">Studio: <em>App-Based Mindfulness for Attenuation of Subjective and Physiological Stress Reactivity in a Population With Elevated Stress</em></p>
                <p>
                  In uno studio randomizzato su 163 persone con stress percepito moderato o alto,
                  due programmi digitali guidati hanno mostrato miglioramenti pre-post sullo stress
                  percepito e sul sonno riferito; la reattività fisiologica allo stress è cambiata
                  in quei gruppi. Non tutti i programmi hanno dato gli stessi risultati. Lo studio
                  riguarda interventi via app, non Mind Haven né una terapia basata solo sui suoni.
                </p>
                <p className="mb-study-meta">Ulrich et al. · JMIR mHealth and uHealth · 163 partecipanti · 300 min · 20–30 giorni</p>
                <p className="mb-study-note">Nota: alcuni autori dichiarano rapporti di lavoro attuali o passati con Headspace.</p>
                <div className="mb-study-actions">
                  <a href="https://pubmed.ncbi.nlm.nih.gov/37831493/" target="_blank" rel="noopener noreferrer">Apri la scheda PubMed <ArrowUpRight size={13} aria-hidden="true" /></a>
                  <a href="https://doi.org/10.2196/47371" target="_blank" rel="noopener noreferrer">DOI 10.2196/47371 <ArrowUpRight size={12} aria-hidden="true" /></a>
                </div>
              </article>
              <article className="mb-study-card">
                <p className="mb-study-kicker"><CircleDot size={13} aria-hidden="true" /> Costanza · frequenza · RCT · 2024</p>
                <h3>Quanto spesso meditare, a parità di tempo totale?</h3>
                <p className="mb-study-original">Studio: <em>How often should I meditate? A randomized trial examining the role of meditation frequency when total amount of meditation is held constant</em></p>
                <p>
                  Uno studio randomizzato su 351 studenti con ansia o depressione elevate ha
                  confrontato, per due settimane, una sessione quotidiana di 20 minuti con due
                  sessioni da 10 minuti. Gli esiti sono migliorati complessivamente, ma non sono emerse differenze
                  significative tra i due schemi. Non c’era un gruppo senza meditazione: lo studio
                  non dimostra che una frequenza sia superiore né quanto i miglioramenti dipendano
                  dalla pratica stessa.
                </p>
                <p className="mb-study-meta">Riordan et al. · Journal of Counseling Psychology · 351 partecipanti · 2 settimane</p>
                <div className="mb-study-actions">
                  <a href="https://pubmed.ncbi.nlm.nih.gov/38376930/" target="_blank" rel="noopener noreferrer">Apri la scheda PubMed <ArrowUpRight size={13} aria-hidden="true" /></a>
                  <a href="https://doi.org/10.1037/cou0000725" target="_blank" rel="noopener noreferrer">DOI 10.1037/cou0000725 <ArrowUpRight size={12} aria-hidden="true" /></a>
                </div>
              </article>
            </div>
            <p className="mb-study-note">Questi studi non verificano le meditazioni Mind Haven. Tipologia di pratica, durata e partecipanti differiscono; i risultati non sono una promessa di effetto individuale.</p>
          </div>
        </section>

        <section className="mb-sources" id="fonti" aria-labelledby="sources-title">
          <div className="mb-inner">
            <div className="mb-sources-head">
              <div><p className="mb-kicker">PER APPROFONDIRE</p><h2 id="sources-title">Fonti e letture</h2></div>
              <p>Fonti divulgative e revisioni citate nel testo. Le interpretazioni scientifiche hanno limiti e possono aggiornarsi.</p>
            </div>
            <ol className="mb-source-list">
              {sources.map(([title, publisher, href], index) => (
                <li key={href}><a href={href} target="_blank" rel="noopener noreferrer"><span><span>{String(index + 1).padStart(2, '0')} · {publisher}</span>{title}</span><ArrowUpRight size={13} aria-hidden="true" /></a></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mb-cta" aria-labelledby="cta-title">
          <div className="mb-cta-copy">
            <p className="mb-kicker">UNA PAUSA, AL TUO RITMO</p>
            <h2 id="cta-title">Se vuoi, puoi iniziare <em>dal respiro.</em></h2>
            <p>Mind Haven propone meditazioni guidate in italiano da ascoltare con curiosità, senza obiettivi obbligati. Ogni esperienza è personale.</p>
          </div>
          <a className="mb-cta-link" href="/#funnel">Torna alla meditazione gratuita <ArrowRight size={15} /></a>
        </section>
      </main>

      <footer className="mb-footer">
        <Link href="/" className="mb-footer-brand" aria-label="Mind Haven, homepage">
          <img src="/images/mind-haven-mark.png" alt="" />
          <span>MIND HAVEN<small>CHANGE BEGINS WITHIN</small></span>
        </Link>
        <p>© {new Date().getFullYear()} Mind Haven. Tutti i diritti riservati.</p>
        <a className="mb-privacy" href="/#privacy-policy">Privacy Policy · in preparazione</a>
      </footer>
    </div>
  );
}
