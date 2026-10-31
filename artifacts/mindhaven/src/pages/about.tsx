import { useEffect } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, AudioLines, CircleHelp, Compass, Moon, Waves } from 'lucide-react';
import { Link } from 'wouter';

const TITLE = 'Chi siamo | Mind Haven, meditazione guidata in italiano';
const DESCRIPTION =
  'Mind Haven è un progetto di meditazione guidata in italiano: pratiche brevi, accompagnate dalla voce, per fare spazio a calma, attenzione e nuove abitudini.';

const intents = [
  { number: '01', title: 'Rallentare', copy: 'Una pausa guidata per tornare al respiro e concederti un momento di quiete.', icon: Waves },
  { number: '02', title: 'Ritrovare il focus', copy: 'Un tempo breve per raccogliere l’attenzione prima di un’attività o tra un impegno e l’altro.', icon: Compass },
  { number: '03', title: 'Prepararsi al riposo', copy: 'La voce accompagna una pratica serale, senza fretta e senza dover fare tutto nel modo giusto.', icon: Moon },
];

export default function About() {
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
    <div className="intent-page mh-about-page">
      <style>{`
        .mh-about-page{--about-line:rgba(22,39,67,.17);--about-muted:#526372;position:relative;background:var(--mh-ice);color:var(--mh-midnight)}
        .mh-about-page .ih-header{position:absolute}
        .mh-about-page .about-back{display:flex;align-items:center;gap:8px;color:rgba(236,247,249,.76);font-size:10px;text-decoration:none;transition:color .2s}
        .mh-about-page .about-back:hover{color:var(--mh-gold)}
        .about-hero{position:relative;display:grid;grid-template-columns:1fr .83fr;align-items:center;gap:clamp(35px,8vw,120px);min-height:690px;padding:145px max(40px,calc((100% - 1220px)/2)) 88px;overflow:hidden;background:radial-gradient(ellipse at 79% 43%,rgba(65,186,205,.13),transparent 32%),linear-gradient(120deg,#081110 0%,#10201f 50%,#162743 100%);color:var(--mh-ice)}
        .about-hero-copy{position:relative;z-index:1;max-width:650px}
        .about-eyebrow,.about-kicker{margin:0;color:#62c3d1;font-size:9px;font-weight:600;letter-spacing:.19em;text-transform:uppercase}
        .about-eyebrow{display:flex;align-items:center;gap:11px}.about-eyebrow:before{content:'';width:22px;height:1px;background:var(--mh-gold)}
        .about-hero h1{max-width:660px;margin:27px 0 23px;font-size:clamp(57px,7.2vw,92px);font-weight:500;letter-spacing:-.078em;line-height:.94}
        .about-hero h1 em{color:var(--mh-cyan);font-weight:400}
        .about-lede{max-width:520px;margin:0;color:rgba(236,247,249,.72);font-size:13px;line-height:1.95}
        .about-scroll{display:inline-flex;align-items:center;gap:10px;margin-top:32px;color:var(--mh-gold);font-size:10px;text-decoration:none}
        .about-scroll svg{transition:transform .2s}.about-scroll:hover svg{transform:translateY(3px)}
        .about-hero-art{position:relative;display:grid;place-items:center;min-height:385px}
        .about-orbit{position:absolute;width:min(100%,370px);aspect-ratio:1;border:1px solid rgba(65,186,205,.26);border-radius:50%}
        .about-orbit:before,.about-orbit:after{content:'';position:absolute;inset:10%;border:1px solid rgba(218,181,100,.21);border-radius:50%}
        .about-orbit:after{inset:24%;border-color:rgba(65,186,205,.25)}
        .about-mark{position:relative;z-index:1;width:min(42%,150px);aspect-ratio:1;object-fit:contain;filter:drop-shadow(0 0 28px rgba(65,186,205,.18))}
        .about-art-note{position:absolute;right:1%;bottom:10%;max-width:170px;padding:12px 14px;border-left:1px solid var(--mh-gold);color:rgba(236,247,249,.65);font-size:9px;line-height:1.7}
        .about-art-note b{display:block;margin-bottom:4px;color:var(--mh-ice);font-size:8px;letter-spacing:.14em;font-weight:500}
        .about-hero-foot{position:absolute;right:max(40px,calc((100% - 1220px)/2));bottom:25px;color:rgba(236,247,249,.43);font:9px ui-monospace,monospace;letter-spacing:.13em}
        .about-manifesto{display:grid;grid-template-columns:.42fr 1.58fr;gap:55px;padding:104px max(40px,calc((100% - 1120px)/2)) 110px;background:var(--mh-ice)}
        .about-side-label{padding-top:12px;color:#0D6F7A;font-size:9px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}
        .about-manifesto blockquote{max-width:850px;margin:0;font-size:clamp(31px,4.4vw,55px);font-weight:400;letter-spacing:-.065em;line-height:1.14}
        .about-manifesto blockquote em{color:#0D6F7A;font-weight:400}
        .about-manifesto p{max-width:650px;margin:26px 0 0;color:var(--about-muted);font-size:12px;line-height:1.95}
        .about-practices{padding:86px max(40px,calc((100% - 1120px)/2)) 96px;background:#DCEEF1}
        .about-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:30px;margin-bottom:36px}
        .about-section-head h2{max-width:590px;margin:14px 0 0;font-size:clamp(40px,5vw,63px);font-weight:500;letter-spacing:-.075em;line-height:.98}
        .about-section-head h2 em{color:#0D6F7A;font-weight:400}
        .about-section-head>p{max-width:280px;margin:0 0 4px;color:var(--about-muted);font-size:11px;line-height:1.85}
        .about-intent-list{border-top:1px solid var(--about-line)}
        .about-intent{display:grid;grid-template-columns:54px 44px minmax(190px,.7fr) 1fr;align-items:center;gap:20px;min-height:114px;border-bottom:1px solid var(--about-line)}
        .about-intent-no{color:#0D6F7A;font:10px ui-monospace,monospace}
        .about-intent-icon{display:grid;width:36px;height:36px;place-items:center;border:1px solid rgba(13,111,122,.3);border-radius:50%;color:#0D6F7A}
        .about-intent h3{margin:0;font-size:22px;font-weight:500;letter-spacing:-.05em}
        .about-intent p{max-width:430px;margin:0;color:var(--about-muted);font-size:11px;line-height:1.8}
        .about-voice{display:grid;grid-template-columns:.85fr 1.15fr;gap:clamp(45px,9vw,130px);align-items:center;padding:100px max(40px,calc((100% - 1120px)/2));background:#162743;color:var(--mh-ice)}
        .about-voice-symbol{position:relative;display:grid;place-items:center;min-height:300px;border:1px solid rgba(236,247,249,.14);border-radius:48% 48% 8px 8px;overflow:hidden;background:radial-gradient(ellipse at center,rgba(65,186,205,.2),transparent 58%)}
        .about-voice-symbol:before,.about-voice-symbol:after{content:'';position:absolute;width:190px;height:190px;border:1px solid rgba(65,186,205,.35);border-radius:50%}
        .about-voice-symbol:after{width:130px;height:130px;border-color:rgba(218,181,100,.42)}
        .about-voice-symbol svg{position:relative;z-index:1;color:var(--mh-gold)}
        .about-voice-symbol span{position:absolute;bottom:22px;color:rgba(236,247,249,.47);font:8px ui-monospace,monospace;letter-spacing:.16em}
        .about-voice-copy h2{max-width:530px;margin:16px 0 20px;font-size:clamp(42px,5.6vw,66px);font-weight:500;letter-spacing:-.075em;line-height:.98}
        .about-voice-copy h2 em{color:var(--mh-cyan);font-weight:400}
        .about-voice-copy>p:not(.about-kicker){max-width:490px;color:rgba(236,247,249,.68);font-size:12px;line-height:1.9}
        .about-voice-caption{display:flex;align-items:center;gap:10px;margin-top:25px;padding-top:17px;border-top:1px solid rgba(236,247,249,.16);color:rgba(236,247,249,.48);font-size:9px}
        .about-voice-caption svg{color:var(--mh-cyan)}
        .about-honesty{padding:88px max(40px,calc((100% - 1120px)/2)) 96px;background:var(--mh-ice)}
        .about-honesty-layout{display:grid;grid-template-columns:.62fr 1.38fr;gap:65px}
        .about-honesty h2{margin:14px 0 0;font-size:clamp(39px,5vw,60px);font-weight:500;letter-spacing:-.075em;line-height:.98}
        .about-honesty h2 em{color:#0D6F7A;font-weight:400}
        .about-honesty-copy>p{max-width:690px;margin:0;color:var(--about-muted);font-size:12px;line-height:1.95}
        .about-honesty-copy>p+p{margin-top:17px}
        .about-quote-note{display:flex;gap:15px;margin-top:27px;padding:19px 20px;border-left:2px solid #0D6F7A;background:rgba(220,238,241,.62)}
        .about-quote-note svg{flex:none;margin-top:2px;color:#0D6F7A}
        .about-quote-note p{margin:0;color:#435562;font-size:11px;line-height:1.8}
        .about-research{display:grid;grid-template-columns:1fr auto;align-items:center;gap:30px;padding:29px max(40px,calc((100% - 1120px)/2));background:#DCEEF1}
        .about-research p{max-width:680px;margin:0;color:var(--about-muted);font-size:11px;line-height:1.8}
        .about-research a{display:inline-flex;align-items:center;gap:9px;color:#081110;font-size:10px;text-decoration:none;border-bottom:1px solid rgba(8,17,16,.3);padding-bottom:7px;white-space:nowrap}
        .about-research a svg{color:#0D6F7A;transition:transform .2s}.about-research a:hover svg{transform:translate(2px,-2px)}
        .about-safety{padding:43px max(40px,calc((100% - 1120px)/2));background:#162743;color:var(--mh-ice)}
        .about-safety-inner{display:grid;grid-template-columns:44px 1fr;gap:18px;align-items:start}
        .about-safety-icon{display:grid;width:34px;height:34px;place-items:center;border:1px solid rgba(218,181,100,.55);border-radius:50%;color:var(--mh-gold)}
        .about-safety h2{margin:0 0 8px;font-size:16px;font-weight:500}
        .about-safety p{max-width:900px;margin:0;color:rgba(236,247,249,.64);font-size:10px;line-height:1.85}
        .about-footer{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:27px max(40px,calc((100% - 1120px)/2));background:#081110;color:var(--mh-ice)}
        .about-footer-brand{display:flex;align-items:center;gap:10px;color:inherit;text-decoration:none}
        .about-footer-brand img{width:30px;height:30px;object-fit:contain}
        .about-footer-brand span{font-size:9px;font-weight:600;letter-spacing:.16em}
        .about-footer-brand small{display:block;margin-top:3px;color:rgba(236,247,249,.48);font-size:6px;font-weight:400;letter-spacing:.15em}
        .about-footer>span{color:rgba(236,247,249,.43);font-size:8px}
        .about-footer-home{display:inline-flex;align-items:center;gap:8px;color:var(--mh-ice);font-size:9px;text-decoration:none}
        .about-footer-home svg{color:var(--mh-gold)}
        @media(max-width:760px){
          .mh-about-page .ih-header{width:calc(100% - 40px);height:68px}
          .mh-about-page .about-back{font-size:9px}
          .about-hero{display:flex;min-height:760px;align-items:flex-end;padding:105px 25px 77px}
          .about-hero-copy{max-width:600px}
          .about-hero h1{font-size:clamp(54px,13vw,76px);margin:20px 0 17px}
          .about-lede{font-size:11px}
          .about-hero-art{position:absolute;inset:90px 3% auto;height:360px;min-height:0;opacity:.62}
          .about-orbit{width:min(82vw,320px)}
          .about-mark{width:112px}
          .about-art-note{display:none}
          .about-hero-foot{right:25px;bottom:22px;font-size:7px}
          .about-manifesto{grid-template-columns:1fr;gap:20px;padding:74px 25px 78px}
          .about-manifesto blockquote{font-size:clamp(31px,8vw,45px)}
          .about-manifesto p{font-size:11px}
          .about-practices{padding:72px 25px 77px}
          .about-section-head{display:block;margin-bottom:25px}
          .about-section-head h2{font-size:clamp(42px,11vw,58px)}
          .about-section-head>p{margin-top:16px}
          .about-intent{grid-template-columns:34px 36px 1fr;gap:11px;min-height:105px}
          .about-intent-icon{width:32px;height:32px}
          .about-intent h3{font-size:19px}
          .about-intent p{grid-column:3;margin-top:-20px;padding-bottom:14px;font-size:10px}
          .about-voice{grid-template-columns:1fr;gap:32px;padding:74px 25px}
          .about-voice-symbol{min-height:250px;width:85%;margin:auto}
          .about-voice-copy h2{font-size:clamp(45px,11vw,60px)}
          .about-honesty{padding:73px 25px 78px}
          .about-honesty-layout{grid-template-columns:1fr;gap:23px}
          .about-honesty h2{font-size:clamp(42px,10vw,56px)}
          .about-honesty-copy>p{font-size:11px}
          .about-research{grid-template-columns:1fr;gap:16px;padding:24px 25px}
          .about-research a{width:fit-content}
          .about-safety{padding:33px 25px}
          .about-footer{align-items:flex-start;flex-direction:column;padding:25px;gap:13px}
        }
        @media(prefers-reduced-motion:reduce){.mh-about-page *{scroll-behavior:auto!important;transition-duration:.01ms!important}}
      `}</style>
      <header className="ih-header">
        <Link href="/" className="ih-brand" aria-label="Mind Haven, torna alla homepage" data-testid="link-about-brand">
          <img src="/images/mind-haven-mark.png" alt="" width="38" height="38" />
          <span>MIND HAVEN<small>CHANGE BEGINS WITHIN</small></span>
        </Link>
        <Link href="/" className="about-back" data-testid="link-about-home-top"><ArrowLeft size={14} /> Torna alla homepage</Link>
      </header>
      <main>
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-hero-copy">
            <p className="about-eyebrow">UN PROGETTO DI MEDITAZIONE GUIDATA</p>
            <h1 id="about-title">Uno spazio per<br />ascoltarti <em>davvero.</em></h1>
            <p className="about-lede">
              Mind Haven nasce da un’idea semplice: una voce in italiano può accompagnarti
              in una pausa breve, quando senti il bisogno di ritrovare calma, attenzione
              o un modo più consapevole di stare nelle tue abitudini.
            </p>
            <a className="about-scroll" href="#il-progetto" data-testid="link-about-scroll">
              Scopri il progetto <ArrowDown size={14} />
            </a>
          </div>
          <div className="about-hero-art" aria-hidden="true">
            <div className="about-orbit" />
            <img className="about-mark" src="/images/mind-haven-mark.png" alt="" width="150" height="150" />
            <div className="about-art-note"><b>UNA PAUSA, NON UNA PRESTAZIONE</b>Non serve arrivare da nessuna parte. Puoi iniziare da qui.</div>
          </div>
          <span className="about-hero-foot">MIND HAVEN · CHANGE BEGINS WITHIN</span>
        </section>

        <section className="about-manifesto" id="il-progetto">
          <div className="about-side-label">01 / Il progetto</div>
          <div>
            <blockquote>La pratica non è diventare qualcun altro.<br />È fare <em>spazio a ciò che noti.</em></blockquote>
            <p>
              Mind Haven raccoglie meditazioni guidate in italiano, pensate per entrare
              con naturalezza nella giornata. La voce offre un filo da seguire: tu puoi
              ascoltare, fermarti, tornare quando vuoi. Non c’è un modo giusto di
              meditare e non c’è un risultato da dimostrare.
            </p>
          </div>
        </section>

        <section className="about-practices" aria-labelledby="about-practices-title">
          <div className="about-section-head">
            <div>
              <p className="about-kicker">PRATICHE BREVI, MOMENTI REALI</p>
              <h2 id="about-practices-title">Un piccolo spazio<br />per <em>quello che serve.</em></h2>
            </div>
            <p>Non un’altra cosa da fare bene. Un invito ad accorgerti di come stai, nel momento che hai.</p>
          </div>
          <div className="about-intent-list">
            {intents.map(({ number, title, copy, icon: Icon }) => (
              <article className="about-intent" key={number} data-testid={`card-about-intent-${number}`}>
                <span className="about-intent-no">{number}</span>
                <span className="about-intent-icon"><Icon size={17} strokeWidth={1.6} /></span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-voice" aria-labelledby="about-voice-title">
          <div className="about-voice-symbol" aria-hidden="true">
            <AudioLines size={54} strokeWidth={1.1} />
            <span>ASCOLTA · RESPIRA · NOTA</span>
          </div>
          <div className="about-voice-copy">
            <p className="about-kicker">IL FILO DELLA VOCE</p>
            <h2 id="about-voice-title">Guidata, ma<br /><em>sempre tua.</em></h2>
            <p>
              La voce accompagna l’attenzione, senza chiederti di svuotare la mente o
              seguire una formula. Puoi accogliere le indicazioni con curiosità e
              adattare la pratica a come ti senti. Anche scegliere di interrompere è
              parte dell’ascolto.
            </p>
            <div className="about-voice-caption"><AudioLines size={15} /> Meditazioni guidate in italiano</div>
          </div>
        </section>

        <section className="about-honesty" aria-labelledby="about-honesty-title">
          <div className="about-honesty-layout">
            <div>
              <p className="about-kicker">PAROLE CHIARE</p>
              <h2 id="about-honesty-title">Cosa intendiamo<br />quando diciamo <em>“cambiare”.</em></h2>
            </div>
            <div className="about-honesty-copy">
              <p>
                A volte usiamo l’espressione “riprogrammare il subconscio” come una
                metafora: un modo per parlare di schemi che riconosciamo, di maggiore
                consapevolezza e della possibilità di coltivare abitudini diverse.
              </p>
              <p>
                Non descrive un meccanismo letterale, né promette che una pratica
                produca un cambiamento. Le esperienze sono personali; Mind Haven offre
                uno spazio di esplorazione, non una garanzia di risultato.
              </p>
              <div className="about-quote-note">
                <CircleHelp size={18} />
                <p>Preferiamo spiegare con chiarezza cosa intendiamo, invece di presentare una metafora come un fatto scientifico.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-research" aria-label="Ricerca e fonti">
          <p>Vuoi approfondire cosa suggeriscono gli studi sulla meditazione guidata e quali sono i limiti delle evidenze disponibili?</p>
          <Link href="/ricerca-meditazione-guidata" data-testid="link-about-research">Leggi la pagina sulla ricerca <ArrowUpRight size={15} /></Link>
        </section>

        <section className="about-safety" aria-labelledby="about-safety-title">
          <div className="about-safety-inner">
            <span className="about-safety-icon"><CircleHelp size={17} /></span>
            <div>
              <h2 id="about-safety-title">Un progetto di benessere, non una cura.</h2>
              <p>
                Le pratiche Mind Haven non sono trattamenti medici o psicologici e non
                sostituiscono il supporto di professionisti della salute. Se una pratica
                ti provoca disagio, interrompila e chiedi supporto. Non ascoltare alla guida.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="about-footer">
        <Link href="/" className="about-footer-brand" aria-label="Mind Haven, homepage" data-testid="link-about-footer-brand">
          <img src="/images/mind-haven-mark.png" alt="" width="30" height="30" />
          <span>MIND HAVEN<small>CHANGE BEGINS WITHIN</small></span>
        </Link>
        <span>Una pausa, alla volta.</span>
        <Link href="/#funnel" className="about-footer-home" data-testid="link-about-free-meditation">Ricevi la meditazione gratuita <ArrowRight size={14} /></Link>
      </footer>
    </div>
  );
}
