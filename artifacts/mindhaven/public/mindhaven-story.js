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
    :root {
      --mh-midnight: #08111D;
      --mh-navy: #152743;
      --mh-cyan: #45C6CF;
      --mh-ice: #EDF7F9;
      --mh-white: #FFFFFF;
      --mh-gold: #D9B968;
    }
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
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box {
      width: 100% !important;
      max-width: 380px !important;
      margin-left: auto !important;
      margin-right: auto !important;
      padding: 24px !important;
      border: 1px solid rgba(0, 242, 254, .25) !important;
      border-radius: 28px !important;
      background:
        radial-gradient(ellipse at 52% -2%, rgba(0, 242, 254, .1), transparent 38%),
        linear-gradient(168deg, rgba(14, 23, 40, .94) 0%, rgba(8, 13, 24, .98) 100%) !important;
      box-shadow:
        inset 0 0 0 1px rgba(255, 255, 255, .04),
        0 24px 65px -12px rgba(0, 0, 0, .85),
        0 0 40px -8px rgba(0, 242, 254, .15) !important;
      -webkit-backdrop-filter: blur(28px);
      backdrop-filter: blur(28px);
      transition: border-color .3s ease, box-shadow .3s ease;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box:hover {
      border-color: rgba(0, 242, 254, .48) !important;
      box-shadow:
        inset 0 0 0 1px rgba(255, 255, 255, .05),
        0 24px 65px -12px rgba(0, 0, 0, .85),
        0 0 44px -8px rgba(0, 242, 254, .23) !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-specular {
      background: linear-gradient(
        90deg,
        transparent 5%,
        rgba(0, 242, 254, .85) 45%,
        rgba(215, 179, 110, .9) 60%,
        transparent 95%
      ) !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-box-header {
      padding-bottom: 12px;
      margin-bottom: 16px !important;
      border-bottom: 1px solid rgba(26, 35, 58, .8);
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-launch-pill {
      display: inline-flex !important;
      align-items: center;
      gap: 6px;
      background: rgba(215, 179, 110, .1) !important;
      border-color: rgba(215, 179, 110, .3) !important;
      color: #d7b36e !important;
      font-weight: 800 !important;
      letter-spacing: .14em !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-launch-pill::before {
      content: "";
      width: 6px;
      height: 6px;
      flex: 0 0 6px;
      border-radius: 50%;
      background: #d7b36e;
      box-shadow: 0 0 8px rgba(215, 179, 110, .55);
      animation: mh-morning-gold-pulse 2s ease-in-out infinite;
    }
    @keyframes mh-morning-gold-pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: .5; transform: scale(1.16); }
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-availability {
      color: rgba(232, 236, 243, .64) !important;
      font-size: 10px !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-title {
      margin-bottom: 4px !important;
      color: #fff !important;
      font-size: 23px !important;
      font-weight: 800 !important;
      letter-spacing: -.02em !important;
      line-height: 1.15 !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-title-accent {
      background: linear-gradient(90deg, #fff 0%, #e8ecf3 54%, #00f2fe 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent !important;
      -webkit-text-fill-color: transparent;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-subtitle {
      margin-bottom: 16px !important;
      color: #8a94b0 !important;
      font-size: 12.5px !important;
      line-height: 1.5 !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-preview {
      border: 1px solid rgba(0, 242, 254, .16) !important;
      border-radius: 18px !important;
      background: linear-gradient(168deg, rgba(7, 9, 14, .92), rgba(8, 13, 24, .96)) !important;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .025);
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-preview-heading {
      color: #8a94b0 !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-preview-heading > :first-child {
      color: #00f2fe !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-preview-heading > :last-child {
      color: #d7b36e !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-audio-bar {
      background: #00f2fe !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-price {
      color: #fff !important;
      font-size: 28px !important;
      font-weight: 900 !important;
      text-shadow: 0 2px 12px rgba(0, 242, 254, .25);
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-original-price {
      color: rgba(138, 148, 176, .58) !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-discount {
      border: 1px solid rgba(0, 242, 254, .3);
      background: rgba(0, 242, 254, .1) !important;
      color: #00f2fe !important;
      font-size: 9px !important;
      font-weight: 800 !important;
      letter-spacing: .08em;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-feature-icon {
      color: #d7b36e !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-primary {
      height: 48px !important;
      border-radius: 999px !important;
      background: linear-gradient(100deg, #edf8fa, #d8f5f8) !important;
      color: #07090e !important;
      font-weight: 800 !important;
      box-shadow: 0 4px 22px rgba(0, 242, 254, .3) !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-primary:hover {
      box-shadow: 0 6px 30px rgba(0, 242, 254, .48) !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-secondary {
      height: 48px !important;
      border-radius: 999px !important;
      border-color: rgba(0, 242, 254, .28) !important;
      background: rgba(7, 9, 14, .35);
      color: #e8ecf3 !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-secondary:hover {
      border-color: rgba(0, 242, 254, .55) !important;
      background: rgba(0, 242, 254, .07) !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-payment-note {
      color: rgba(138, 148, 176, .82) !important;
    }
    .mh-footer-socials {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      margin-top: 24px;
      padding-top: 18px;
      border-top: 1px solid rgba(236, 247, 249, .12);
    }
    .mh-footer-socials > p {
      margin: 0;
      color: rgba(236, 247, 249, .58);
      font-size: 9px;
      letter-spacing: .15em;
      text-transform: uppercase;
    }
    .mh-footer-socials nav {
      display: flex;
      flex-wrap: wrap;
      gap: 9px;
    }
    .mh-footer-socials a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 12px;
      border: 1px solid rgba(65, 186, 205, .22);
      border-radius: 999px;
      background: rgba(22, 39, 67, .34);
      color: rgba(236, 247, 249, .86);
      font-size: 10px;
      text-decoration: none;
      transition: border-color .2s ease, color .2s ease, background .2s ease, transform .2s ease;
    }
    .mh-footer-socials a:hover {
      transform: translateY(-1px);
      border-color: rgba(218, 181, 100, .62);
      background: rgba(22, 39, 67, .62);
      color: #DAB564;
    }
    .mh-footer-socials a:focus-visible {
      outline: 2px solid #41BACD;
      outline-offset: 3px;
    }
    .mh-footer-socials a span {
      color: #41BACD;
      font-size: 13px;
      line-height: 1;
    }
    #chi-siamo > .mh-about-heading {
      max-width: 900px;
      margin: 0 auto 36px !important;
      text-align: center !important;
    }
    #chi-siamo .mh-founder-name-row {
      display: flex !important;
      align-items: center !important;
      flex-wrap: wrap;
      gap: 10px !important;
      margin-bottom: 4px !important;
    }
    #chi-siamo .mh-founder-name-row > .mh-founder-role {
      color: #DAB564 !important;
      background: rgba(218, 181, 100, .08) !important;
      border-color: rgba(218, 181, 100, .38) !important;
      white-space: nowrap;
    }
    #benefici [data-mh-scroll-reveal],
    #chi-siamo [data-mh-scroll-reveal] {
      opacity: 0;
      transform: translateY(18px);
      transition:
        opacity .7s cubic-bezier(.22, 1, .36, 1),
        transform .7s cubic-bezier(.22, 1, .36, 1);
    }
    #benefici [data-mh-scroll-reveal].mh-scroll-visible,
    #chi-siamo [data-mh-scroll-reveal].mh-scroll-visible {
      opacity: 1;
      transform: translateY(0);
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
    @media (max-width: 640px) {
      .mh-footer-socials {
        align-items: flex-start;
        flex-direction: column;
        gap: 12px;
      }
      .mh-footer-socials nav {
        width: 100%;
        gap: 8px;
      }
      .mh-footer-socials a {
        padding: 9px 10px;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      #benefici [data-mh-scroll-reveal],
      #chi-siamo [data-mh-scroll-reveal] {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
    }
  `;
  if (!document.getElementById(style.id)) document.head.appendChild(style);

  const scrollRevealObserver =
    typeof window.IntersectionObserver === 'function'
      ? new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add('mh-scroll-visible');
              observer.unobserve(entry.target);
            });
          },
          { threshold: 0.15 },
        )
      : null;

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

  const applyMorningRoutineBox = () => {
    const title = [...document.querySelectorAll('h3')].find((heading) =>
      heading.textContent.includes('Morning Routine'),
    );
    const box = title?.parentElement;
    if (!box || !box.classList.contains('overflow-hidden')) return false;

    box.classList.add('mh-morning-premium-box');
    box.firstElementChild?.classList.add('mh-morning-specular');

    const header = box.children[1];
    header?.classList.add('mh-morning-box-header');
    header?.children[0]?.classList.add('mh-morning-launch-pill');
    header?.children[1]?.classList.add('mh-morning-availability');

    title.classList.add('mh-morning-title');
    title.querySelector('span')?.classList.add('mh-morning-title-accent');
    title.nextElementSibling?.classList.add('mh-morning-subtitle');

    const preview = [...box.children].find((child) =>
      child.textContent.toLowerCase().includes('preview traccia'),
    );
    if (preview) {
      preview.classList.add('mh-morning-preview');
      preview.firstElementChild?.classList.add('mh-morning-preview-heading');
      [...preview.querySelectorAll('div.flex-1.rounded-full')].forEach((bar) =>
        bar.classList.add('mh-morning-audio-bar'),
      );
    }

    [...box.querySelectorAll('span')].forEach((span) => {
      const value = span.textContent.trim();
      if (value === '€4,99') span.classList.add('mh-morning-price');
      if (value === '€19,99') span.classList.add('mh-morning-original-price');
      if (value.toLowerCase().includes('75%')) span.classList.add('mh-morning-discount');
    });

    box.querySelectorAll('ul li').forEach((item) => {
      item.firstElementChild?.classList.add('mh-morning-feature-icon');
    });
    const buttons = [...box.querySelectorAll('button')];
    buttons[0]?.classList.add('mh-morning-primary');
    buttons[1]?.classList.add('mh-morning-secondary');
    box.lastElementChild?.classList.add('mh-morning-payment-note');
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

  const applyScrollReveal = () => {
    const targets = [
      ...document.querySelectorAll('#benefici > div:nth-child(2) > div'),
      ...document.querySelectorAll('#chi-siamo > .mh-about-heading, #chi-siamo > div'),
    ];
    if (!targets.length) return false;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    targets.forEach((target) => {
      if (target.hasAttribute('data-mh-scroll-reveal')) return;
      target.setAttribute('data-mh-scroll-reveal', '');

      if (!scrollRevealObserver || reducedMotion) {
        target.classList.add('mh-scroll-visible');
      } else {
        scrollRevealObserver.observe(target);
      }
    });
    return true;
  };

  const applyFooterChannels = () => {
    const footer = document.querySelector('#root footer');
    const footerBottom = footer?.querySelector(':scope > div:last-child');
    if (!footerBottom) return false;
    if (footerBottom.querySelector('[data-mh-footer-channels]')) return true;

    const channels = [
      {
        label: 'YouTube',
        href: 'https://www.youtube.com/@mindhavenita/videos',
      },
      {
        label: 'Spotify',
        href: 'https://open.spotify.com/show/7FguYf5NWdRwEUitBeAR6d?si=YOOnTXgnR3OqtTDwDOmaSg&nd=1&dlsi=22a067f79d214302',
      },
      {
        label: 'Amazon Music',
        href: 'https://music.amazon.it/podcasts/273525a2-815f-4e38-a29d-d00b4d8f75d5/mind-haven-italia',
      },
    ];
    const section = document.createElement('div');
    section.className = 'mh-footer-socials';
    section.dataset.mhFooterChannels = '';

    const heading = document.createElement('p');
    heading.textContent = 'Canali Mind Haven';
    const nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Canali ufficiali Mind Haven');

    channels.forEach(({ label, href }) => {
      const link = document.createElement('a');
      link.href = href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `Apri il canale Mind Haven su ${label}`);
      link.append(document.createTextNode(label));

      const arrow = document.createElement('span');
      arrow.textContent = '↗';
      arrow.setAttribute('aria-hidden', 'true');
      link.append(arrow);
      nav.append(link);
    });

    section.append(heading, nav);
    footerBottom.append(section);
    return true;
  };

  const applyFounderPresentation = () => {
    const section = document.querySelector('#chi-siamo');
    if (!section) return false;

    section
      .querySelector('.mt-8.grid.grid-cols-3.gap-3.text-center')
      ?.remove();

    const founders = ['Daniele', 'Luca'];
    for (const founder of founders) {
      const name = [...section.querySelectorAll('h4')].find(
        (heading) => heading.textContent.trim() === founder,
      );
      const role = name?.nextElementSibling;
      if (!name || !role || role.textContent.trim().toLowerCase() !== 'co-founder') {
        return false;
      }
      name.parentElement?.classList.add('mh-founder-name-row');
      role.classList.add('mh-founder-role');
    }
    return true;
  };

  const paletteHex = new Map([
    ['#081110', '#08111D'],
    ['#07090e', '#08111D'],
    ['#162743', '#152743'],
    ['#0e1320', '#152743'],
    ['#0c1524', '#152743'],
    ['#080d18', '#08111D'],
    ['#10201f', '#152743'],
    ['#41bacd', '#45C6CF'],
    ['#16899a', '#45C6CF'],
    ['#00f2fe', '#45C6CF'],
    ['#ecf7f9', '#EDF7F9'],
    ['#e8ecf3', '#EDF7F9'],
    ['#edf8fa', '#EDF7F9'],
    ['#d8f5f8', '#EDF7F9'],
    ['#e1f4f6', '#EDF7F9'],
    ['#dab564', '#D9B968'],
    ['#d7b36e', '#D9B968'],
    ['#ffae34', '#D9B968'],
  ]);
  const paletteRgb = new Map([
    ['8,17,16', '8,17,29'],
    ['22,39,67', '21,39,67'],
    ['65,186,205', '69,198,207'],
    ['22,137,154', '69,198,207'],
    ['0,242,254', '69,198,207'],
    ['236,247,249', '237,247,249'],
    ['232,236,243', '237,247,249'],
    ['225,244,246', '237,247,249'],
    ['218,181,100', '217,185,104'],
    ['215,179,110', '217,185,104'],
    ['255,174,52', '217,185,104'],
  ]);
  const recolorPalette = (value) => {
    if (typeof value !== 'string' || !value) return value;
    let recolored = value;
    paletteHex.forEach((newColor, oldColor) => {
      recolored = recolored.replace(new RegExp(oldColor, 'gi'), newColor);
    });
    paletteRgb.forEach((mapped, original) => {
      const [red, green, blue] = original.split(',');
      const [nextRed, nextGreen, nextBlue] = mapped.split(',');
      recolored = recolored
        .replace(
          new RegExp(`(rgba?\\(\\s*)${red}\\s*,\\s*${green}\\s*,\\s*${blue}\\b`, 'gi'),
          (_match, prefix) => `${prefix}${nextRed}, ${nextGreen}, ${nextBlue}`,
        )
        .replace(
          new RegExp(`(rgba?\\(\\s*)${red}\\s+${green}\\s+${blue}\\b`, 'gi'),
          (_match, prefix) => `${prefix}${nextRed} ${nextGreen} ${nextBlue}`,
        );
    });
    return recolored;
  };

  const applyPaletteToElement = (element) => {
    if (!(element instanceof Element)) return;
    if (element.tagName === 'STYLE') {
      const originalCss = element.textContent;
      const recoloredCss = recolorPalette(originalCss);
      if (recoloredCss !== originalCss) element.textContent = recoloredCss;
      return;
    }

    const originalClass = element.getAttribute('class');
    if (originalClass) {
      const recoloredClass = recolorPalette(originalClass);
      if (recoloredClass !== originalClass) element.setAttribute('class', recoloredClass);
    }
    const inlineStyle = element.getAttribute('style');
    if (inlineStyle) {
      const recoloredStyle = recolorPalette(inlineStyle);
      if (recoloredStyle !== inlineStyle) element.setAttribute('style', recoloredStyle);
    }
    ['fill', 'stroke', 'stop-color'].forEach((attribute) => {
      const original = element.getAttribute(attribute);
      if (!original) return;
      const recolored = recolorPalette(original);
      if (recolored !== original) element.setAttribute(attribute, recolored);
    });

    const computed = window.getComputedStyle(element);
    [
      ['color', 'color'],
      ['backgroundColor', 'background-color'],
      ['backgroundImage', 'background-image'],
      ['borderColor', 'border-color'],
      ['outlineColor', 'outline-color'],
      ['boxShadow', 'box-shadow'],
      ['fill', 'fill'],
      ['stroke', 'stroke'],
      ['caretColor', 'caret-color'],
      ['textDecorationColor', 'text-decoration-color'],
    ].forEach(([property, cssProperty]) => {
      const original = computed[property];
      const recolored = recolorPalette(original);
      if (recolored !== original) {
        element.style.setProperty(cssProperty, recolored, 'important');
      }
    });
  };

  const applyPaletteToSubtree = (node) => {
    if (!(node instanceof Element)) return;
    applyPaletteToElement(node);
    node.querySelectorAll('*').forEach(applyPaletteToElement);
  };

  const applyBrandPalette = () => {
    const root = document.querySelector('#root');
    if (!root) return false;

    document.querySelectorAll('style').forEach(applyPaletteToElement);
    applyPaletteToSubtree(root);

    if (!document.documentElement.hasAttribute('data-mh-palette-observer')) {
      const paletteObserver = new MutationObserver((records) => {
        records.forEach((record) => {
          if (record.type === 'attributes') {
            applyPaletteToElement(record.target);
            return;
          }
          if (record.target instanceof HTMLStyleElement) {
            applyPaletteToElement(record.target);
          }
          record.addedNodes.forEach(applyPaletteToSubtree);
        });
      });
      paletteObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class', 'style'],
        childList: true,
        subtree: true,
      });
      document.documentElement.setAttribute('data-mh-palette-observer', '');
    }
    return true;
  };

  const applyPageUpdates = () =>
    applyStory() &&
    applyDanielePhoto() &&
    applyHeroStats() &&
    applyBenefitIcons() &&
    applyMorningRoutineBox() &&
    applyFooterChannels() &&
    applyFounderPresentation() &&
    applySectionOrder() &&
    applyStoryHeading() &&
    applyNavigationOrder() &&
    applyScrollReveal() &&
    applyBrandPalette();

  if (applyPageUpdates()) return;

  const observer = new MutationObserver(() => {
    if (applyPageUpdates()) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
