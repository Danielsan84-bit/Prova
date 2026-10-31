import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';

const TITLE = 'Meditazione guidata: benefici, studi e limiti | Mind Haven';
const DESCRIPTION =
  'Una guida basata su studi e fonti scientifiche sui benefici possibili della meditazione guidata, sui limiti delle prove e sul significato di “riprogrammare il subconscio”.';

export default function Evidence() {
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
    <div className="intent-page mh-evidence-page">
      <header className="ih-header">
        <Link href="/" className="ih-brand" aria-label="Mind Haven, torna alla homepage">
          <img src="/images/mind-haven-mark.png" alt="" />
          <span>MIND HAVEN<small>UN RIFUGIO PER LA MENTE</small></span>
        </Link>
        <Link href="/" className="ih-back"><ArrowLeft size={15} /> Torna alla homepage</Link>
      </header>
      <main>
        <section className="mh-evidence-hero">
          <div className="mh-evidence-hero-inner">
            <p className="ih-eyebrow">APPROFONDIMENTO · STUDI E FONTI</p>
            <h1>Meditazione guidata:<br /><em>benefici e limiti.</em></h1>
            <p>
              Mind Haven propone pratiche guidate dalla voce, non suoni binaurali.
              Qui trovi cosa suggeriscono gli studi, cosa resta da dimostrare e cosa
              intendiamo quando parliamo di “riprogrammare il subconscio”.
            </p>
            <a href="#evidenze" className="mh-evidence-jump">Vai agli studi <ArrowUpRight size={15} /></a>
          </div>
        </section>

        <section className="mh-evidence-section">
          <div className="mh-evidence-inner">
            <p className="ih-label">LA PRATICA</p>
            <h2>Una voce accompagna l’attenzione.</h2>
            <p className="mh-evidence-copy">
              In una meditazione guidata, una voce propone indicazioni per riportare
              l’attenzione al respiro, al corpo, ai pensieri o a un’immagine mentale.
              La persona ascolta e segue la pratica al proprio ritmo. I battiti
              binaurali sono invece una tecnica audio basata su due toni differenti
              inviati separatamente alle orecchie: non sono il metodo Mind Haven.
            </p>
          </div>
        </section>

        <section className="mh-evidence-section mh-evidence-section-tinted" id="evidenze">
          <div className="mh-evidence-inner">
            <p className="ih-label">COSA DICE LA RICERCA</p>
            <h2>Possibili benefici, senza promesse.</h2>
            <p className="mh-evidence-copy">
              Le prove riguardano programmi strutturati di meditazione e mindfulness,
              non ogni singola meditazione guidata e non le registrazioni Mind Haven
              in particolare.
            </p>
            <div className="mh-evidence-cards">
              <article className="mh-evidence-card">
                <span>REVISIONE SISTEMATICA · 2014</span>
                <h3>Ansia e depressione</h3>
                <p>
                  Una revisione di 47 studi randomizzati, con 3.515 partecipanti,
                  ha trovato prove di entità moderata per riduzioni piccole o moderate
                  dei sintomi di ansia e depressione dopo programmi di meditazione
                  mindfulness. Gli autori non hanno trovato che la meditazione fosse
                  superiore ai trattamenti attivi messi a confronto.
                </p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/24395196/" target="_blank" rel="noopener noreferrer">
                  Leggi lo studio su PubMed <ArrowUpRight size={14} />
                </a>
              </article>
              <article className="mh-evidence-card">
                <span>FONTE ISTITUZIONALE · NCCIH</span>
                <h3>Sonno, stress e limiti</h3>
                <p>
                  Il NCCIH riassume possibili benefici su ansia, depressione e qualità
                  del sonno, ma sottolinea che gli studi usano pratiche diverse e che
                  una parte delle prove è preliminare o non rigorosa. I risultati
                  non sono garantiti per ogni persona o formato.
                </p>
                <a href="https://www.nccih.nih.gov/health/meditation-and-mindfulness-what-you-need-to-know" target="_blank" rel="noopener noreferrer">
                  Approfondisci sul NCCIH <ArrowUpRight size={14} />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="mh-evidence-section">
          <div className="mh-evidence-inner mh-evidence-columns">
            <div>
              <p className="ih-label">IL NOSTRO LINGUAGGIO</p>
              <h2>Che cosa significa “riprogrammare il subconscio”?</h2>
            </div>
            <div>
              <p className="mh-evidence-copy">
                È una metafora per descrivere il lavoro intenzionale su consapevolezza,
                schemi di pensiero e abitudini. “Riprogrammare il subconscio” non è
                un esito clinico definito dagli studi citati: la ricerca non dimostra
                una riprogrammazione letterale o un cambiamento garantito prodotto
                da una singola traccia.
              </p>
              <p className="mh-evidence-copy">
                Per questo Mind Haven propone la pratica come uno spazio di ascolto
                e allenamento, non come terapia o sostituto del supporto professionale.
              </p>
            </div>
          </div>
        </section>

        <section className="mh-evidence-safety">
          <div className="mh-evidence-inner">
            <p className="ih-label">ASPETTATIVE REALISTICHE</p>
            <h2>Un supporto, non una cura.</h2>
            <p>
              I benefici, quando presenti, variano da persona a persona. Se la
              meditazione ti provoca disagio, interrompila; per sintomi persistenti
              o importanti, rivolgiti a un professionista della salute. Le pratiche
              Mind Haven non sostituiscono diagnosi o trattamenti.
            </p>
          </div>
        </section>
      </main>
      <footer className="ih-footer">
        <Link href="/"><img src="/images/mind-haven-lockup.png" alt="Mind Haven — Change begins within" /></Link>
        <p>Un rifugio per la mente · in italiano</p>
        <Link href="/" className="ih-footer-home">Torna alla homepage <ArrowLeft size={14} /></Link>
      </footer>
    </div>
  );
}
