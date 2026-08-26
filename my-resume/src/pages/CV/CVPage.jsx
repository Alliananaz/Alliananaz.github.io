import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

/* ----------------------------------------------------------------------------
   CV content. Every count on the page (EXP badges, the footer total) is
   derived from this array — nothing about the numbers is hardcoded, so adding
   or removing an entry keeps the whole strip honest.

   Shape: { title, span, entries: [{ title, sub, when, tag, bullets: [] }] }
---------------------------------------------------------------------------- */
const SECTIONS = [
  {
    title: "Ferdigheter",
    span: "",
    entries: [
      {
        sub: "Python · Java · JavaScript/TypeScript · Kotlin",
        when: "",
        tag: "KODE",
        bullets: [],
      },
      {
        sub: "HTML · CSS · Tailwind CSS · React · Next.js",
        when: "",
        tag: "WEB",
        bullets: [],
      },
      {
        sub: "VS Code · Android Studio · Thonny · Figma · Canva",
        when: "",
        tag: "VERKTØY",
        bullets: [],
      },
      {
        sub: "Norsk · Engelsk · Filippinsk (Tagalog)",
        when: "",
        tag: "SPRÅK",
        bullets: [],
      },
    ],
  },
  {
    title: "Prosjekter",
    span: "2021 — 2025",
    entries: [
      {
        title: "SolMate",
        sub: "Kotlin · Jetpack Compose · Android Studio · Figma",
        when: "2025",
        tag: "IN2000",
        bullets: [
          "Utviklet Android-app i gruppeprosjekt (IN2000) som estimerer strømproduksjon fra solcellepaneler. Gjennomførte brukerintervjuer og -tester, og jobbet smidig med Kanban/Scrum.",
        ],
      },
      {
        title: "Alliananaz Website",
        sub: "React · JavaScript · HTML · Tailwind CSS · Claude Design · Claude Code",
        when: "2025",
        tag: "EGET",
        bullets: [
          "Designet og utviklet portefølje- og CV-nettside som egenprosjekt med gjennomgående kamera-/fototema. Publisert på GitHub.",
        ],
      },
      {
        title: "Milk Carton",
        sub: "Arduino Uno · C++ · Tinkercad · Figma",
        when: "2024",
        tag: "IN1060",
        bullets: [
          "Designet og utviklet tangible prototype i team for IN1060 (tema «Av/På»). Artefaktet varsler brukere om lavt/tomt nivå på ulike melketyper via belyste ikoner, med sensorbasert vektmåling og nullstillingsfunksjoner.",
        ],
      },
      {
        title: "Dino Game",
        sub: "Python · Pygame",
        when: "2022",
        tag: "IT2",
        bullets: [
          "Spill inspirert av Googles dinosaurspill, laget som oppgave i IT2 og programmert i Thonny.",
        ],
      },
      {
        title: "X-Hotel Website",
        sub: "HTML · CSS",
        when: "2021",
        tag: "IT1",
        bullets: [
          "Nettside utviklet som oppgave i IT1, kodet i Visual Studio Code med HTML og CSS.",
        ],
      },
    ],
  },
  {
    title: "Arbeidserfaring",
    span: "2023 — NÅ",
    entries: [
      {
        title: "Gruppelærer / Retter",
        sub: "Universitetet i Oslo",
        when: "Aug. 2026 – Nå",
        tag: "OSLO",
        bullets: [
          "Holder gruppetimer i IN1020 – Introduksjon til datateknologi.",
          "Forklarer pensum fra forelesningene og hjelper med obligatoriske oppgaver.",
          "Retter studentinnleveringer og gir konstruktiv tilbakemelding.",
        ],
      },
      {
        title: "Gruppelærer / Retter",
        sub: "Universitetet i Oslo",
        when: "Jan. 2026 – Mai 2026",
        tag: "OSLO",
        bullets: [
          "Holdt gruppetimer i IN2000 – Software Engineering.",
          "Veiledet 8–10 prosjektteam gjennom semesteret.",
          "Rettet studentinnleveringer og ga konstruktiv tilbakemelding.",
        ],
      },
      {
        title: "Servitør (ekstrahjelp)",
        sub: "Sabi Sushi — Fornebu og Storo",
        when: "Aug. 2023 – Nå",
        tag: "FORNEBU · STORO",
        bullets: [
          "Tar imot bestillinger, servering, betaling og kasseoppgjør med fokus på god kundeservice.",
        ],
      },
    ],
  },
  {
    title: "Utdanning",
    span: "2023 — 2028",
    entries: [
      {
        title: "Master i Digitalisering i helsesektoren: Informatikk",
        sub: "Universitetet i Oslo",
        when: "Aug. 2026 – Jun. 2028",
        tag: "MASTER",
        bullets: [],
      },
      {
        title: "Bachelor i Informatikk: design, bruk og interaksjon",
        sub: "Universitetet i Oslo",
        when: "Aug. 2023 – Jun. 2026",
        tag: "BACHELOR",
        bullets: [
          "Tverrfaglig studium i skjæringspunktet mellom design, programmering og brukerorientert utvikling.",
        ],
      },
    ],
  },
  {
    title: "Verv og frivillighet",
    span: "2025 — 2026",
    entries: [
      {
        title: "Styremedlem",
        sub: "VIFI – Volleyballforening ved Institutt for Informatikk",
        when: "Feb. – Jun. 2026",
        tag: "OSLO",
        bullets: [],
      },
      {
        title: "Frivillig",
        sub: "JavaZone 2025 – logistikk og deltakerservice (Overflow)",
        when: "Sep. 2025",
        tag: "LILLESTRØM",
        bullets: [],
      },
      {
        title: "Frivillig",
        sub: "Jentedagen 2025 – omvisning og informasjon til deltakere",
        when: "Aug. 2025",
        tag: "OSLO",
        bullets: [],
      },
    ],
  },
];

/* Contact line — each item stays together as one non-breaking chip. */
const CONTACT = [
  { label: "14. mai 2004" },
  { label: "+47 46537422", href: "tel:+4746537422" },
  { label: "alliana.nazareno@gmail.com", href: "mailto:alliana.nazareno@gmail.com" },
  { label: "GitHub", href: "https://github.com/alliananaz", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alliana-shari-nazareno-765276329",
    external: true,
  },
];

/* A run of film sprocket holes. */
function Sprockets({ className = "" }) {
  return (
    <div className={`flex justify-between ${className}`} aria-hidden="true">
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i} className="h-[7px] w-2.5 rounded-[1.5px] bg-sprocket" />
      ))}
    </div>
  );
}

export default function CVPage() {
  // Track which sections are collapsed. Empty set = the whole roll is open.
  const [collapsed, setCollapsed] = useState(() => new Set());

  // Mirror the home page's light/dark choice (persisted under `camera-theme`),
  // so the roll matches whichever mode the camera panel was left in — and write
  // the choice back so toggling here also carries over to the home page.
  const [dark, setDark] = useState(
    () => localStorage.getItem("camera-theme") !== "light"
  );

  useEffect(() => {
    localStorage.setItem("camera-theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleTheme = useCallback(() => setDark((prev) => !prev), []);

  const sectionCount = SECTIONS.length;
  const total = SECTIONS.reduce((n, s) => n + s.entries.length, 0);
  const allOpen = collapsed.size === 0;
  const openCount = sectionCount - collapsed.size;

  const toggle = useCallback((title) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      next.has(title) ? next.delete(title) : next.add(title);
      return next;
    });
  }, []);

  const reopenAll = useCallback(() => setCollapsed(new Set()), []);

  // Escape reopens the whole roll.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") reopenAll();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [reopenAll]);

  const edgeCode = allOpen
    ? `FULL ROLL · ${total} EXP`
    : `${openCount}/${sectionCount} FRAMES ÅPNE`;

  return (
    <div
      className={
        (dark ? "cv-dark " : "") +
        "flex min-h-screen justify-center bg-light-table px-6 pt-28 pb-18 font-mono text-ink"
      }
    >
      <div className="flex w-[940px] max-w-full flex-col gap-[18px]">
        {/* ---------------- Header ---------------- */}
        <header className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] tracking-[.22em] text-chrome">
            CV 2026
            </span>
            <h1 className="text-3xl leading-none tracking-[.05em] uppercase">
              Alliana Shari Nazareno
            </h1>
            {/* Each contact item is a self-contained, non-breaking chip that
                carries its own trailing separator, so the row reflows cleanly
                at any width and no `·` ever dangles at a line edge. */}
            <div className="flex flex-wrap items-center text-[13px] tracking-[.1em] text-chrome-dark">
              {CONTACT.map((item, i) => {
                const last = i === CONTACT.length - 1;
                const inner = item.href ? (
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="text-amber-text hover:text-amber"
                  >
                    {item.label}
                  </a>
                ) : (
                  item.label
                );
                return (
                  <span key={i} className="whitespace-nowrap">
                    {inner}
                    {!last && <Dot />}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="border border-ink/25 bg-paper/60 px-2.5 py-[5px] text-[11px] tracking-[.18em] text-chrome-dark hover:border-amber/70 hover:text-amber-deep"
            >
              ◀ HOME
            </Link>
            <button
              type="button"
              onClick={reopenAll}
              className={
                "border px-2.5 py-[5px] text-[11px] tracking-[.18em] transition-colors " +
                (allOpen
                  ? "border-amber/70 bg-amber/15 text-amber-deep"
                  : "border-ink/25 bg-paper/60 text-chrome-dark")
              }
            >
              HELE RULLEN
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={dark}
              aria-label={`Bytt til ${dark ? "lyst" : "mørkt"} modus`}
              className="border border-ink/25 bg-paper/60 px-2.5 py-[5px] text-[11px] tracking-[.18em] text-chrome-dark transition-colors hover:border-amber/70 hover:text-amber-deep"
            >
              {dark ? "☀ LYS" : "☾ MØRK"}
            </button>
          </div>
        </header>

        {/* ---------------- Sections ---------------- */}
        <div className="mt-8 flex flex-col gap-[22px]">
          {SECTIONS.map((section, sIndex) => {
            const isOpen = !collapsed.has(section.title);
            const frame = String(sIndex + 1).padStart(2, "0");
            const panelId = `frame-${frame}`;

            return (
              <section
                key={section.title}
                className={`flex flex-col ${isOpen ? "gap-3.5" : "gap-0"}`}
              >
                {/* --- Filmstrip divider --- */}
                <button
                  type="button"
                  onClick={() => toggle(section.title)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="block w-full bg-film py-[7px] text-left shadow-strip focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                >
                  <Sprockets className="px-[9px] pb-1" />

                  <div className="flex items-stretch gap-[3px] px-1.5">
                    {/* Lit frame */}
                    <div
                      className={
                        "flex shrink-0 items-baseline gap-3 bg-sprocket px-3.5 py-[9px] -outline-offset-1 " +
                        (isOpen
                          ? "outline outline-2 outline-amber"
                          : "outline outline-1 outline-sprocket/20")
                      }
                    >
                      {/* On-sprocket text keeps fixed dark tones — the lit frame
                          stays light in both modes, so these must not follow the
                          ink tokens that invert for dark mode. */}
                      <span
                        className={
                          "text-[10px] tracking-[.14em] " +
                          (isOpen ? "text-[#8a6a1f]" : "text-[#8a8a7c]")
                        }
                      >
                        {frame}
                      </span>
                      <span className="text-[16px] tracking-[.08em] text-[#2e2f27] uppercase">
                        {section.title}
                      </span>
                    </div>

                    {/* Filler strip */}
                    <div className="flex flex-1 items-center justify-end bg-sprocket/5 px-3.5 text-[10px] tracking-[.16em] text-edge">
                      <span className="flex items-center gap-2.5">
                        <span>{section.entries.length} EXP</span>
                        <span
                          className={
                            "inline-block text-amber transition-transform duration-300 " +
                            (isOpen ? "" : "-rotate-90")
                          }
                          aria-hidden="true"
                        >
                          ▾
                        </span>
                      </span>
                    </div>
                  </div>

                  <Sprockets className="px-[9px] pt-1" />
                </button>

                {/* --- Reveal wrapper (animates height + opacity) --- */}
                <div
                  id={panelId}
                  className={
                    "grid transition-[grid-template-rows,opacity] duration-[380ms] ease-reveal " +
                    (isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="flex flex-col gap-[18px] border border-ink/15 bg-paper p-[18px_20px] shadow-card">
                      {section.entries.map((entry, eIndex) => (
                        <article
                          key={eIndex}
                          className="grid grid-cols-[152px_1fr] items-start gap-4 max-sm:grid-cols-1"
                        >
                          {/* Left rail */}
                          <div className="flex flex-col gap-[3px] pt-0.5">
                            {entry.when && (
                              <span className="text-[11px] tracking-[.1em] text-amber-text">
                                {entry.when}
                              </span>
                            )}
                            {entry.tag && (
                              <span className="text-[10px] tracking-[.08em] text-ink-dim">
                                {entry.tag}
                              </span>
                            )}
                          </div>

                          {/* Body */}
                          <div className="flex flex-col gap-1.5 border-l border-ink/15 pl-4 max-sm:border-l-0 max-sm:pl-0">
                            {entry.title && (
                              <h3 className="text-[15px] leading-snug tracking-[.03em]">
                                {entry.title}
                              </h3>
                            )}
                            {entry.sub && (
                              <p
                                className={
                                  "text-[12px] tracking-[.04em] " +
                                  // Title-less entries (e.g. Ferdigheter) lead with
                                  // the sub, so give it the title's ink color.
                                  (entry.title ? "text-ink-mute" : "text-ink")
                                }
                              >
                                {entry.sub}
                              </p>
                            )}
                            {entry.bullets.map((bullet, bIndex) => (
                              <p
                                key={bIndex}
                                className="flex gap-2 text-[13px] leading-relaxed text-ink-body"
                              >
                                <span className="text-amber-dot">·</span>
                                <span className="text-pretty">{bullet}</span>
                              </p>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* ---------------- Footer ---------------- */}
        <footer className="flex justify-between gap-4 text-[12px] tracking-[.22em] text-chrome-light">
          <span>DSC-AN14 · {edgeCode}</span>
          <span>Referanser oppgis ved forespørsel</span>
        </footer>
      </div>
    </div>
  );
}

/* Center dot used to join the contact line. */
function Dot() {
  return (
    <span aria-hidden="true" className="mx-1.5 text-edge">
      ·
    </span>
  );
}
