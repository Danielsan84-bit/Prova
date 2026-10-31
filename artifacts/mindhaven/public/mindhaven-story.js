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
    #benefici .grid > div:nth-child(1) > div:first-child > span:nth-child(2).mh-benefit-icon,
    #benefici .grid > div:nth-child(2) > div:first-child > span:nth-child(2).mh-benefit-icon,
    #benefici .grid > div:nth-child(3) > div:first-child > span:nth-child(2).mh-benefit-icon {
      background: #07090e !important;
      border-color: rgba(255, 174, 52, .25) !important;
      box-shadow: 0 0 0 4px rgba(255, 174, 52, .04) !important;
      display: grid !important;
      place-items: center !important;
      width: 40px !important;
      height: 40px !important;
      padding: 0 !important;
    }
    #benefici .mh-benefit-icon::before {
      content: none !important;
      display: none !important;
      background: none !important;
    }
    #benefici .mh-benefit-icon img {
      display: block;
      width: 20px;
      height: 20px;
      object-fit: contain;
    }
    #chi-siamo > .mh-about-heading {
      max-width: 900px;
      margin: 0 auto 36px !important;
      text-align: center !important;
    }
    @media (max-width: 768px) {
      #chi-siamo .mh-origin-story {
        font-size: 13px;
        line-height: 1.8;
      }
      #chi-siamo > .mh-about-heading {
        margin-bottom: 28px !important;
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
    return new Set(matches.map((span) => span.textContent.trim())).size === values.size;
  };

  const applyBenefitIcons = () => {
    const icons = [
      { source: './images/benefit-heart-gold.svg', label: 'Cuore con tracciato ECG' },
      { source: './images/benefit-brain-gold.svg', label: 'Cervello a due emisferi' },
      { source: './images/benefit-moon-gold.svg', label: 'Luna crescente con stella' },
    ];
    const badges = [
      ...document.querySelectorAll(
        '#benefici > div:nth-child(2) > div > div:first-child > span:nth-child(2)',
      ),
    ];
    if (badges.length < icons.length) return false;

    icons.forEach((icon, index) => {
      const badge = badges[index];
      badge.classList.add('mh-benefit-icon');
      const image = badge.querySelector('img') || document.createElement('img');
      image.src = icon.source;
      image.alt = '';
      image.setAttribute('aria-hidden', 'true');
      image.loading = 'eager';
      image.decoding = 'async';
      if (!image.parentElement) badge.replaceChildren(image);
    });
    return true;
  };

  const applySectionOrder = () => {
    const benefits = document.querySelector('#benefici');
    const story = document.querySelector('#chi-siamo');
    if (!benefits || !story) return false;
    if (benefits.nextElementSibling !== story) benefits.after(story);
    return true;
  };

  const applyStoryHeading = () => {
    const section = document.querySelector('#chi-siamo');
    const reference = document.querySelector('#benefici h2');
    if (!section || !reference) return false;

    let heading = section.querySelector(':scope > .mh-about-heading');
    if (!heading) {
      heading = reference.cloneNode(false);
      heading.textContent = 'Chi siamo';
      heading.classList.add('mh-about-heading', 'text-center');
      section.insertBefore(heading, section.firstElementChild);
    }
    return true;
  };

  const applyNavigationOrder = () => {
    const chiButtons = [...document.querySelectorAll('header button')].filter(
      (button) => button.textContent.trim() === 'Chi Siamo',
    );
    if (!chiButtons.length) return false;

    const groups = new Set(chiButtons.map((button) => button.parentElement));
    for (const group of groups) {
      if (!group) return false;
      const buttons = [...group.children].filter((child) => child.tagName === 'BUTTON');
      const benefits = buttons.find((button) => button.textContent.trim() === 'Benefici');
      const chiSiamo = buttons.find((button) => button.textContent.trim() === 'Chi Siamo');
      const method = buttons.find((button) => button.textContent.trim() === 'Il Metodo');
      if (!benefits || !chiSiamo || !method) return false;
      benefits.after(chiSiamo);

      const ordered = [...group.children].filter((child) => child.tagName === 'BUTTON');
      if (
        ordered.indexOf(chiSiamo) !== ordered.indexOf(benefits) + 1 ||
        ordered.indexOf(method) !== ordered.indexOf(chiSiamo) + 1
      ) return false;
    }
    return true;
  };

  const applyPageUpdates = () =>
    applyStory() &&
    applyDanielePhoto() &&
    applyHeroStats() &&
    applyBenefitIcons() &&
    applySectionOrder() &&
    applyStoryHeading() &&
    applyNavigationOrder();

  if (applyPageUpdates()) return;

  const observer = new MutationObserver(() => {
    if (applyPageUpdates()) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
