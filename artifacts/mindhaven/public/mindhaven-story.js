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

  const audioChannelLinks = [
    {
      match: /\byoutube\b/i,
      href: 'https://www.youtube.com/@mindhavenita/videos',
    },
    {
      match: /\bspotify\b/i,
      href: 'https://open.spotify.com/show/7FguYf5NWdRwEUitBeAR6d?si=YOOnTXgnR3OqtTDwDOmaSg&nd=1&dlsi=22a067f79d214302',
    },
    {
      match: /\bamazon music\b/i,
      href: 'https://music.amazon.it/podcasts/273525a2-815f-4e38-a29d-d00b4d8f75d5/mind-haven-italia',
    },
  ];

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const button = target?.closest('button');
    if (!button) return;

    const label = (button.innerText || button.textContent || '')
      .replace(/\s+/g, ' ')
      .trim();
    const channel = audioChannelLinks.find(({ match }) => match.test(label));
    if (!channel) return;

    event.preventDefault();
    event.stopPropagation();
    window.open(channel.href, '_blank', 'noopener,noreferrer');
  }, true);

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
    #benefici .mh-benefit-number {
      color: #EDF7F9 !important;
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
      border: 1px solid rgba(69, 198, 207, .25) !important;
      border-radius: 28px !important;
      background:
        radial-gradient(ellipse at 52% -2%, rgba(69, 198, 207, .1), transparent 38%),
        linear-gradient(168deg, rgba(21, 39, 67, .94) 0%, rgba(8, 17, 29, .98) 100%) !important;
      box-shadow:
        inset 0 0 0 1px rgba(255, 255, 255, .04),
        0 24px 65px -12px rgba(0, 0, 0, .85),
        0 0 40px -8px rgba(69, 198, 207, .15) !important;
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding-bottom: 12px;
      margin-bottom: 16px !important;
      border-bottom: 1px solid rgba(237, 247, 249, .12);
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-launch-pill {
      display: inline-flex !important;
      align-items: center;
      gap: 6px;
      background: rgba(215, 179, 110, .1) !important;
      border-color: rgba(215, 179, 110, .3) !important;
      color: #d7b36e !important;
      border-style: solid;
      border-width: 1px;
      border-radius: 999px;
      padding: 2px 10px;
      line-height: 1.4;
      font-size: 8.5px;
      text-transform: uppercase;
      white-space: nowrap;
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
      color: rgba(237, 247, 249, .72) !important;
      font-size: 12.5px !important;
      line-height: 1.5 !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-preview {
      border: 1px solid rgba(69, 198, 207, .16) !important;
      border-radius: 18px !important;
      background: linear-gradient(168deg, rgba(8, 17, 29, .92), rgba(8, 17, 29, .96)) !important;
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
      color: rgba(237, 247, 249, .48) !important;
    }
    #hero > div > div:nth-child(2) > [class*="rounded-[24px]"].mh-morning-premium-box .mh-morning-discount {
      display: inline-flex;
      align-items: center;
      padding: 2px 9px;
      border-radius: 999px;
      line-height: 1.3;
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
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      height: 48px !important;
      padding: 0 16px;
      border-radius: 999px !important;
      background: linear-gradient(100deg, #EDF7F9, #FFFFFF) !important;
      color: #08111D !important;
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
      margin: 10px 0 0 !important;
      color: rgba(237, 247, 249, .68) !important;
      font-size: 10.5px !important;
      line-height: 1.45 !important;
      text-align: center !important;
    }
    #hero .mh-morning-premium-box .mh-morning-brand {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #EDF7F9;
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: .2em;
    }
    #hero .mh-morning-premium-box .mh-morning-specular {
      position: absolute;
      top: 0;
      left: 32px;
      right: 32px;
      height: 1px;
      pointer-events: none;
      background: linear-gradient(
        90deg,
        transparent 5%,
        rgba(69, 198, 207, .85) 45%,
        rgba(217, 185, 104, .9) 60%,
        transparent 95%
      );
    }
    #hero .mh-morning-premium-box .mh-morning-logo {
      width: 20px;
      height: 20px;
      flex: 0 0 20px;
      object-fit: contain;
    }
    #hero .mh-morning-premium-box .mh-morning-days {
      display: flex;
      flex-direction: column;
      gap: 0;
      margin: 0 0 8px;
    }
    #hero .mh-morning-premium-box .mh-morning-day-row {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 0 0 8px;
      margin: 0 0 8px;
      border-bottom: 1px solid rgba(237, 247, 249, .12);
      color: rgba(237, 247, 249, .88);
      font-size: 12px;
      line-height: 1.45;
    }
    #hero .mh-morning-premium-box .mh-morning-day-row:last-child {
      padding-bottom: 0;
      margin-bottom: 0;
      border-bottom: 0;
    }
    #hero .mh-morning-premium-box .mh-morning-day-number {
      min-width: 18px;
      margin-top: 1px;
      color: #EDF7F9 !important;
      font-size: 9.5px;
      font-weight: 700;
      font-variant-numeric: tabular-nums;
    }
    #hero .mh-morning-premium-box .mh-morning-day-copy {
      min-width: 0;
    }
    #hero .mh-morning-premium-box .mh-morning-day-copy strong {
      color: #FFFFFF;
      font-weight: 700;
    }
    #hero .mh-morning-premium-box .mh-morning-day-description {
      color: rgba(237, 247, 249, .62);
      font-weight: 400;
    }
    #hero .mh-morning-premium-box .mh-morning-days-extra[hidden] {
      display: none !important;
    }
    #hero .mh-morning-premium-box .mh-morning-drawer-toggle {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 2px 0 0;
      border: 0;
      background: transparent;
      color: #45C6CF;
      font: inherit;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
    }
    #hero .mh-morning-premium-box .mh-morning-drawer-icon {
      width: 11px;
      height: 11px;
      transition: transform .2s ease;
    }
    #hero .mh-morning-premium-box .mh-morning-drawer-toggle[aria-expanded="true"] .mh-morning-drawer-icon {
      transform: rotate(180deg);
    }
    #hero .mh-morning-premium-box .mh-morning-specs {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: 14px 0 16px;
    }
    #hero .mh-morning-premium-box .mh-morning-specs span {
      padding: 3px 8px;
      border: 1px solid rgba(237, 247, 249, .14);
      border-radius: 6px;
      background: rgba(21, 39, 67, .56);
      color: rgba(237, 247, 249, .72);
      font-size: 9.5px;
      font-weight: 600;
    }
    #hero .mh-morning-premium-box .mh-morning-price-row {
      display: flex;
      align-items: baseline;
      gap: 10px;
      margin-bottom: 14px;
    }
    #hero .mh-morning-premium-box .mh-morning-original-price {
      color: rgba(237, 247, 249, .48) !important;
      font-size: 13px;
      font-weight: 500;
    }
    #hero .mh-morning-premium-box .mh-morning-discount {
      margin-left: auto;
    }
    #hero .mh-morning-premium-box .mh-morning-primary {
      width: 100%;
      background: linear-gradient(100deg, #EDF7F9, #FFFFFF) !important;
      color: #08111D !important;
      font-size: 12px;
    }
    #hero .mh-morning-premium-box .mh-morning-primary:disabled {
      opacity: .92;
      cursor: default;
      transform: none;
    }
    #hero .mh-morning-premium-box .mh-morning-payment-note {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      color: rgba(237, 247, 249, .68) !important;
    }
    #hero .mh-morning-premium-box .mh-morning-guarantee-icon {
      color: #D9B968;
      font-size: 12px;
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
      justify-content: center;
      width: 48px;
      height: 48px;
      min-width: 48px;
      padding: 0;
      border: 1px solid rgba(65, 186, 205, .22);
      border-radius: 50%;
      background: rgba(22, 39, 67, .34);
      color: rgba(236, 247, 249, .86);
      text-decoration: none;
      transition: border-color .2s ease, color .2s ease, background .2s ease, transform .2s ease, box-shadow .2s ease;
    }
    .mh-footer-socials a:hover {
      transform: translateY(-1px);
      border-color: #45C6CF;
      background: rgba(69, 198, 207, .1);
      box-shadow: 0 0 0 3px rgba(217, 185, 104, .08);
      color: #45C6CF;
    }
    .mh-footer-socials a:focus-visible {
      outline: 2px solid #41BACD;
      outline-offset: 3px;
    }
    .mh-footer-socials a svg {
      display: block;
      width: 21px;
      height: 21px;
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
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;
      }
      .mh-footer-socials a {
        width: 48px;
        height: 48px;
        min-width: 48px;
        padding: 0;
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
    const cards = [...document.querySelectorAll('#benefici .grid > div')].slice(0, 3);
    if (cards.length < 3) return false;
    cards.forEach((card, index) => {
      const label = `0${index + 1}`;
      const number = [...card.querySelectorAll('span')].find(
        (span) => span.textContent.trim() === label,
      );
      if (number) {
        number.classList.add('mh-benefit-number');
        number.style.setProperty('color', '#EDF7F9', 'important');
      }
    });
    return cards.every((card, index) =>
      [...card.querySelectorAll('span')].some(
        (span) =>
          span.textContent.trim() === `0${index + 1}` &&
          span.classList.contains('mh-benefit-number'),
      ),
    );
  };

  const applyMorningRoutineBox = () => {
    const title = [...document.querySelectorAll('h3')].find((heading) =>
      heading.textContent.includes('Morning Routine'),
    );
    const box = title?.parentElement;
    if (!box || !box.classList.contains('overflow-hidden')) return false;
    if (box.dataset.mhMorningRoutineBuilt === 'true') return true;

    const oldAudioBadge = [...(box.parentElement?.children ?? [])].find(
      (sibling) =>
        sibling !== box &&
        sibling.textContent.includes('Mixato a 432Hz + 40Hz gamma'),
    );
    oldAudioBadge?.remove();

    box.classList.add('mh-morning-premium-box');
    box.dataset.mhMorningRoutineBuilt = 'true';
    box.innerHTML = `
      <div class="mh-morning-specular" aria-hidden="true"></div>
      <div class="mh-morning-box-header">
        <div class="mh-morning-brand">
          <img class="mh-morning-logo" src="images/mind-haven-uploaded-logo.png" alt="">
          <span>MIND HAVEN</span>
        </div>
        <div class="mh-morning-launch-pill">Lancio • 7 Tracce</div>
      </div>

      <div class="mh-morning-copy">
        <h3 class="mh-morning-title">Morning <span class="mh-morning-title-accent">Routine</span></h3>
        <p class="mh-morning-subtitle">7 mattine. 10 minuti. La calma che resta con te per tutto il giorno.</p>
      </div>

      <div class="mh-morning-days" aria-label="Programma di 7 giorni">
        <div class="mh-morning-day-row">
          <span class="mh-morning-day-number">01</span>
          <span class="mh-morning-day-copy"><strong>Risveglio calmo</strong> — <span class="mh-morning-day-description">spegni il loop dei pensieri</span></span>
        </div>
        <div class="mh-morning-day-row">
          <span class="mh-morning-day-number">02</span>
          <span class="mh-morning-day-copy"><strong>Ritorno al corpo</strong> — <span class="mh-morning-day-description">dal mentale al parasimpatico</span></span>
        </div>
        <div class="mh-morning-day-row">
          <span class="mh-morning-day-number">03</span>
          <span class="mh-morning-day-copy"><strong>Focus pulito</strong> — <span class="mh-morning-day-description">entri in flow senza forzatura</span></span>
        </div>
      </div>

      <div class="mh-morning-days-extra" data-mh-routine-extra hidden>
        <div class="mh-morning-days">
          <div class="mh-morning-day-row">
            <span class="mh-morning-day-number">04</span>
            <span class="mh-morning-day-copy"><strong>Stabilità emotiva</strong> — <span class="mh-morning-day-description">resti centrato sotto pressione</span></span>
          </div>
          <div class="mh-morning-day-row">
            <span class="mh-morning-day-number">05</span>
            <span class="mh-morning-day-copy"><strong>Respiro profondo</strong> — <span class="mh-morning-day-description">abbassi il rumore di fondo</span></span>
          </div>
          <div class="mh-morning-day-row">
            <span class="mh-morning-day-number">06</span>
            <span class="mh-morning-day-copy"><strong>Chiarezza mentale</strong> — <span class="mh-morning-day-description">scegli cosa conta oggi</span></span>
          </div>
          <div class="mh-morning-day-row">
            <span class="mh-morning-day-number">07</span>
            <span class="mh-morning-day-copy"><strong>Integrazione</strong> — <span class="mh-morning-day-description">la calma che porti con te</span></span>
          </div>
        </div>
      </div>
      <button type="button" class="mh-morning-drawer-toggle" data-mh-routine-toggle aria-expanded="false" aria-controls="mhMorningRoutineExtra">
        <span data-mh-routine-toggle-label>+ altri 4 giorni</span>
        <svg class="mh-morning-drawer-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="m3 6 5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <div class="mh-morning-specs">
        <span>File tuoi per sempre</span>
        <span>Offline</span>
        <span>Guida PDF 2 pag.</span>
      </div>

      <div class="mh-morning-price-row">
        <span class="mh-morning-price">€4,99</span>
        <span class="mh-morning-original-price"><s>€19,99</s></span>
        <span class="mh-morning-discount">—75% LANCIO</span>
      </div>

      <button type="button" class="mh-morning-primary" data-mh-routine-buy>
        <span data-mh-routine-buy-label>Scarica il protocollo M.R. — €4,99</span>
        <span data-mh-routine-buy-arrow aria-hidden="true">→</span>
      </button>
      <p class="mh-morning-payment-note">
        <span class="mh-morning-guarantee-icon" aria-hidden="true">🛡️</span>
        <span>Tieni i file anche se chiedi rimborso. Zero abbonamenti.</span>
      </p>
    `;

    const extraDays = box.querySelector('[data-mh-routine-extra]');
    if (extraDays) extraDays.id = 'mhMorningRoutineExtra';
    box.querySelector('[data-mh-routine-toggle]')?.addEventListener('click', (event) => {
      const toggle = event.currentTarget;
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      if (extraDays) extraDays.hidden = expanded;
      toggle.setAttribute('aria-expanded', String(!expanded));
      const label = toggle.querySelector('[data-mh-routine-toggle-label]');
      if (label) label.textContent = expanded ? '+ altri 4 giorni' : '— mostra meno';
    });

    const buyButton = box.querySelector('[data-mh-routine-buy]');
    buyButton?.addEventListener('click', () => {
      buyButton.disabled = true;
      const label = buyButton.querySelector('[data-mh-routine-buy-label]');
      const arrow = buyButton.querySelector('[data-mh-routine-buy-arrow]');
      if (label) label.textContent = 'Protocollo M.R. scaricato ✓';
      if (arrow) arrow.hidden = true;
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
    const existingSection = footerBottom.querySelector('[data-mh-footer-channels]');

    const channels = [
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/mindhavenitalia?cplk=NXRhcTJ2MnIxbHpn',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.1" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.1" stroke="currentColor" stroke-width="1.8"/><circle cx="17.75" cy="6.45" r="1.15" fill="currentColor"/></svg>',
      },
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/share/1BSjJrEtpx/',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M13.55 21v-8h2.7l.41-3.12h-3.11V7.89c0-.9.25-1.52 1.56-1.52h1.67V3.58c-.29-.04-1.28-.12-2.44-.12-2.42 0-4.08 1.48-4.08 4.2v2.22H7.52V13h2.74v8h3.29z"/></svg>',
      },
      {
        label: 'TikTok',
        href: 'https://www.tiktok.com/@mind.haven.italia',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M14.25 3h3.08c.2 2.02 1.4 3.43 3.67 3.7v3.16a8.95 8.95 0 0 1-3.65-.94v5.15a5.42 5.42 0 1 1-5.42-5.42c.42 0 .82.04 1.21.13v3.3a2.14 2.14 0 1 0 1.11 1.87V3Z"/></svg>',
      },
    ];
    const existingLinks = [...(existingSection?.querySelectorAll('nav a') ?? [])];
    const alreadyCurrent =
      existingLinks.length === channels.length &&
      channels.every((channel, index) => {
        const link = existingLinks[index];
        return (
          link.getAttribute('href') === channel.href &&
          link.getAttribute('aria-label') ===
            `Apri il profilo ufficiale Mind Haven su ${channel.label}` &&
          link.querySelector('svg')
        );
      });
    if (alreadyCurrent) return true;
    existingSection?.remove();

    const section = document.createElement('div');
    section.className = 'mh-footer-socials';
    section.dataset.mhFooterChannels = '';

    const heading = document.createElement('p');
    heading.textContent = 'Canali Mind Haven';
    const nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Profili social ufficiali Mind Haven');

    channels.forEach(({ label, href, icon }) => {
      const link = document.createElement('a');
      link.href = href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.title = label;
      link.setAttribute('aria-label', `Apri il profilo ufficiale Mind Haven su ${label}`);
      link.innerHTML = icon;
      nav.append(link);
    });

    section.append(heading, nav);
    footerBottom.append(section);
    return true;
  };

  const applyFounderPresentation = () => {
    const section = document.querySelector('#chi-siamo');
    if (!section) return false;

    [...section.querySelectorAll('div')]
      .filter(
        (element) =>
          element.textContent.trim() === 'Senza cognomi • Persone, non personaggi',
      )
      .forEach((element) => element.remove());

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
