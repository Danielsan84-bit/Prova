(() => {
  const paragraphs = [
    '<p><strong>Quindici anni fa pensavo che lo stress fosse il prezzo obbligatorio da pagare</strong> per lavorare, produrre, andare avanti.</p>',
    "<p>Credevo di poter reggere qualsiasi carico, poi <strong>senza preavviso il mio corpo ha premuto il freno a mano d'emergenza</strong>: un attacco epilettico scatenato dallo stress.</p>",
    "<p>In un secondo ti ritrovi a terra e capisci che <strong>il limite non è un'idea astratta, è un muro.</strong></p>",
    '<p>Quella cicatrice è tornata a farsi sentire lo scorso anno, vedendo mia madre spegnersi per problematiche derivate da anni di stress cronico.</p>',
    "<p>La sensazione più devastante non è la rabbia, è <strong>l'impotenza totale di guardarla logorarsi giorno dopo giorno</strong> senza avere tra le mani uno strumento semplice, immediato e accessibile per aiutarla a fermarsi in tempo.</p>",
    '<p>Chi è sotto pressione non ha tempo o energia per corsi complessi o teorie new-age, <strong>mancava un rifugio pratico, qualcosa da mettere nelle orecchie per tirare il fiato subito.</strong></p>',
    '<p>Non esistono bacchette magiche o scorciatoie istantanee, ma <strong>il corpo e la mente rispondono a leggi biologiche precise.</strong></p>',
    '<p><strong>Lo stress non si elimina con la forza di volontà, si disinnesca giorno dopo giorno.</strong></p>',
    "<p>Bastano <strong>8 o 10 minuti di pausa autentica</strong> per togliere il piede dall'acceleratore del sistema nervoso e impedire che il carico di oggi si accumuli su quello di domani.</p>",
    "<p><strong>Mind Haven è nato come risposta a quell'impotenza</strong>, è lo strumento che avrei voluto avere 15 anni fa per me e che avrei voluto far ascoltare a mia madre.</p>",
    "<p>Insieme a Luca lo abbiamo trasformato in una missione pulita e concreta: <strong>un protocollo audio da indossare con un semplice paio di cuffie</strong>, uno spazio sicuro per staccare il loop dei pensieri, proteggere la propria mente e ricordarsi che <strong>fermarsi per dieci minuti non è una debolezza</strong>, ma l'unico modo per non crollare.</p>",
  ];

  const style = document.createElement('style');
  style.id = 'mh-origin-story-style';
  style.textContent = `
    #chi-siamo .mh-origin-story {
      max-width: 60ch;
      color: #ECF7F9;
      font-size: 14px;
      line-height: 1.85;
    }
    #chi-siamo .mh-origin-story p {
      margin: 0 0 1.15em;
    }
    #chi-siamo .mh-origin-story p:last-child {
      margin-bottom: 1.8em;
    }
    #chi-siamo .mh-origin-story strong {
      color: #FFFFFF;
      font-weight: 700;
    }
    #chi-siamo .mh-daniele-avatar {
      overflow: hidden !important;
      border-color: rgba(65, 186, 205, .42) !important;
    }
    #chi-siamo .mh-daniele-avatar img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      object-fit: cover;
      object-position: center 32%;
    }
    #hero-form .mh-gold-stat,
    #hero-form .mh-gold-stat span {
      color: #DAB564 !important;
    }
    @media (max-width: 768px) {
      #chi-siamo .mh-origin-story {
        font-size: 13px;
        line-height: 1.8;
      }
    }
  `;
  if (!document.getElementById(style.id)) document.head.appendChild(style);

  const applyStory = () => {
    const quote = document.querySelector('#chi-siamo blockquote');
    if (quote) {
      const oldCopy = quote.nextElementSibling;
      const story = document.createElement('div');
      story.className = 'mh-origin-story';
      story.innerHTML = paragraphs.join('');

      quote.replaceWith(story);
      if (oldCopy?.tagName === 'P') oldCopy.remove();
    }
    return Boolean(document.querySelector('#chi-siamo .mh-origin-story'));
  };

  const applyDanielePhoto = () => {
    const name = [...document.querySelectorAll('#chi-siamo h4')].find(
      (heading) => heading.textContent.trim() === 'Daniele',
    );
    const avatar = name?.closest('div.flex.gap-4')?.querySelector('div.rounded-full');
    if (!avatar) return Boolean(document.querySelector('#chi-siamo .mh-daniele-avatar img'));
    if (avatar.querySelector('img')) return true;

    const image = document.createElement('img');
    image.src = './images/daniele-profile.jpg';
    image.alt = 'Daniele, co-founder di Mind Haven';
    image.loading = 'eager';
    image.decoding = 'async';
    avatar.classList.add('mh-daniele-avatar');
    avatar.replaceChildren(image);
    return true;
  };

  const applyHeroStats = () => {
    const values = new Set(['12.000+', '4.9/5', '100%']);
    const matches = [...document.querySelectorAll('#hero-form span')].filter((span) =>
      values.has(span.textContent.trim()),
    );
    matches.forEach((span) => span.parentElement?.classList.add('mh-gold-stat'));
    return matches.length === values.size;
  };

  const applyPageUpdates = () => applyStory() && applyDanielePhoto() && applyHeroStats();

  if (applyPageUpdates()) return;

  const observer = new MutationObserver(() => {
    if (applyPageUpdates()) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
