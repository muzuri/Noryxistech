# Noryxis Tech — website

A multi-page marketing site (Home, Services, Why Us, Team, About, Contact, Legal
Notice) built as a component-based React + Tailwind app, with a light/dark theme
toggle and an English / French / German language switcher (English is the default).

Content is written in business-outcome language rather than technical/engineering
language, per the latest Noryxis Tech brief: what each service *does for the
client*, not how it's built. No invented stats, client logos, team bios, or
industry lists are included, since those weren't part of the source material.

## Run it

```
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```
npm run build
npm run preview
```

## Project structure

```
src/
├── App.jsx                     # Wires up providers, header/footer, and page routing
├── main.jsx                    # Vite/React entry point
├── index.css                   # Tailwind directives
│
├── context/
│   ├── ThemeContext.jsx        # Light/dark theme state + toggle()
│   └── LanguageContext.jsx     # Current language (en/fr/de) + setLang()
│
├── data/
│   ├── theme.js                # Color/style tokens for light and dark themes
│   └── translations.js         # All site copy in English, French, German
│
├── components/
│   ├── Header.jsx               # Nav bar, mobile menu, theme + language switchers
│   ├── Footer.jsx
│   ├── Logo.jsx
│   ├── ThemeToggle.jsx
│   ├── LanguageSwitcher.jsx
│   ├── TerminalDemo.jsx         # Animated hero status card (always dark, by design)
│   └── ui/
│       ├── Card.jsx
│       ├── Eyebrow.jsx          # "// section-label" style tag
│       ├── PrimaryButton.jsx
│       ├── GhostButton.jsx
│       ├── Section.jsx
│       ├── Reveal.jsx           # Scroll/mount fade-in wrapper
│       └── CtaBand.jsx
│
└── pages/
    ├── HomePage.jsx        # Hero, mission strip, who we serve, what we do, values, CTA
    ├── ServicesPage.jsx    # Full service list + Startups/Businesses/Government detail
    ├── WhyUsPage.jsx       # 5 reasons to choose Noryxis Tech + Our Commitment
    ├── TeamPage.jsx        # Founders/board — placeholder cards, no invented names
    ├── AboutPage.jsx       # Mission, Vision, Core Values, closing CTA
    ├── ContactPage.jsx
    └── ImpressumPage.jsx   # German legal notice template (§5 TMG)
```

## Notes

- **No router** — page switching is done with local `useState` in `App.jsx` for
  simplicity. Drop in `react-router-dom` if you want real URLs per page.
- **Adding a language**: add a new key to `TRANSLATIONS` in `src/data/translations.js`
  (mirror the `en` shape exactly) and add its code to `LANGS` in
  `src/context/LanguageContext.jsx`.
- **Editing copy**: all site text lives in `src/data/translations.js` — no copy is
  hardcoded inside components. Tone is deliberately business-first (what a
  service *does for you*), not technical.
- **Editing colors**: all theme tokens live in `src/data/theme.js`.
- **Service icons**: `SERVICE_ICONS` is defined in `HomePage.jsx` and imported by
  `ServicesPage.jsx` so both pages render the same icon per service without
  duplicating the array.
- **Contact details**: only the HQ location (Emden, Germany) and a domain-based
  email were available from the source brief — no phone number or street address
  was invented. Update `contactPage.info` in `translations.js` once real contact
  details are available.
- **⚠️ Team page (`teamPage`)**: shows clearly-marked placeholder cards for
  founders and board members ("Add name" / "Add role" / "Add a short bio") since
  no real names were provided. Replace `TeamPage.jsx`'s placeholder rendering
  with real team data before publishing — do not leave the placeholders live.
- **⚠️ Impressum page (`IMPRESSUM_DE` in `translations.js`)**: this is a legal
  filing required under German law (§5 TMG), not marketing copy. It's always
  shown in German regardless of site language, per standard practice. Every
  `[bracketed field]` (legal form, street address, managing director name,
  commercial register number/court, VAT ID, phone) is a placeholder that
  **must** be replaced with your company's real, verified details, and the page
  should be reviewed by a lawyer before the site goes live. The surrounding
  boilerplate (EU dispute resolution, liability disclaimer, copyright notice)
  is standard template language, but should also be reviewed for your specific
  situation.
