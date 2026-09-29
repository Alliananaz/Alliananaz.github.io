import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useCameraTheme from "../../hooks/useCameraTheme";
import milkcarton_tn from "../../assets/images/milkcarton_tn.png";
import dino_tn from "../../assets/images/dino_tn.png";
import xhotel_tn from "../../assets/images/xhotel_tn.png";
import solmate_tn from "../../assets/images/solmate2_tn.png";
import solmate_logo from "../../assets/images/solmate_tn.png";
import milkcarton_crop from "../../assets/images/milkcarton_crop_tn.png";
import dino_gif from "../../assets/images/dinocropGIF.gif";

/* ----------------------------------------------------------------------------
   Project content. The strip, the counter and the print panel are all derived
   from this array, so it works with any number of projects.

   Shape: { title, year, file?, exposure?, thumb?, images?: [],
            body: [{ h, p: string | string[] }], tags?: [], specs?: [[key, value]],
            repo?, live?, info? }   (info: a page with more about the project)
   Missing `file` falls back to IMG_0NN.JPG; empty exposure / tags / specs /
   links are left out of the panel.
   With several `images`, the print cycles through them on hover.
---------------------------------------------------------------------------- */
const PROJECTS = [
  {
    title: "SolMate",
    year: "2025",
    exposure: "f/2.8 · 1/60 · ISO 400",
    thumb: solmate_tn,
    images: [solmate_tn, solmate_logo],
    body: [
      {
        h: "ABOUT THE PROJECT",
        p: "SolMate was developed as a group project in IN2000 – Software Engineering with Project Work, where the goal was to build a complete application from idea to finished product over a full semester. The project grew out of a real need: interest in solar panels is rising, but it can be hard for homeowners to judge whether such an investment actually pays off for their particular property. We wanted to build a tool that made this assessment more accessible, both for people who already know about solar panels and for those considering them for the first time with no prior knowledge.",
      },
      {
        h: "MY ROLE",
        p: [
          "As the team's designer, I had a broad area of responsibility that spanned the entire process. In the research phase, I helped conduct interviews, surveys and user tests with participants who had varying levels of experience with solar panels, to make sure the solution worked for both beginners and more experienced users.",
          "Based on these insights, I was responsible for UI design, wireframing and prototyping in Figma, as well as developing the app's user flow and design system, giving the whole product a cohesive and consistent visual identity. I was also involved in the front-end implementation itself, which gave me a good understanding of how design decisions worked in practice once they had to be turned into code, and made it easier to design solutions that were realistic to build within the project's timeframe.",
        ],
      },
      {
        h: "WORKING METHOD",
        p: "Throughout the project we worked with agile methods, using Kanban for an ongoing overview of tasks and progress, and Scrum for sprint planning, meetings and evaluation along the way. This gave us a clear structure while still letting us adapt to changes in requirements and priorities. I found that the combination of Kanban and Scrum struck a good balance between flexibility in day-to-day work and predictability across sprints.",
      },
      {
        h: "DATA SOURCES",
        p: "Frost (MET) – weather data (average temperature, cloud cover and snow cover) used to calculate power production and savings. PVGIS – solar irradiance data. HvaKosterStrømmen – real-time electricity prices for Norway's different price areas. Mapbox – maps and address search; addresses are linked to coordinates that are passed on to the other APIs.",
      },
      {
        h: "RESULT",
        p: "The result was SolMate: an app that estimates the potential power production of solar panels based on the user's property, giving them a concrete basis for deciding whether a solar investment is worthwhile. By combining user-centred research with agile project management, we ended up with a solution suited to a wide range of users, not just those with prior knowledge of solar energy. The project gave me valuable experience working in a cross-disciplinary team through an entire product development cycle, from user research and requirements specification to implementation and evaluation.",
      },
    ],
    tags: ["Android Studio", "Kotlin", "Jetpack Compose", "Figma"],
    specs: [
      ["ROLE", "Designer"],
      ["CONTEXT", "IN2000 – Software Engineering with Project Work"],
      ["PERIOD", "2025"],
      ["TEAM", "Group"],
      ["STATUS", "Completed"],
    ],
  },
  {
    title: "My Website",
    year: "2025/2026",
    exposure: "f/4 · 1/125 · ISO 200",
    thumb: "/ANlogo.png",
    images: ["/ANlogo.png"],
    body: [
      {
        h: "ABOUT THE PROJECT",
        p: "In summer 2025 I wanted to build my own portfolio website as a personal summer project – my very first on that scale. The goal was twofold: to create a portfolio that reflected who I am, with photography as a running theme, and at the same time to learn React and Tailwind CSS from scratch, tools I had never worked with before. The challenge was both technical (picking up new frameworks with no prior knowledge) and design-related (translating the photography concept into a navigation solution that was more than just decoration).",
      },
      {
        h: "PROCESS",
        p: [
          "I started completely from scratch without using AI, relying on YouTube tutorials and other resources to learn the basics of React and Tailwind CSS as the project went along. In parallel, I worked on turning the photography metaphor into concrete interaction design, and landed on a digital camera as the home page's central navigation element, where the buttons act as “filters” the user picks to explore projects and the CV – just like choosing settings on a real camera.",
          "Once I had a working foundation, I started using AI as a tool to review my code: checking that the solutions were sound and optimal, and improving efficiency further. This also gave me a better understanding of React best practices, since I was learning during development rather than beforehand.",
        ],
      },
      {
        h: "RESULT",
        p: "The result is a personal, cohesive portfolio where the photography theme runs through both the visual style and the interaction design, with the interactive camera as a recognisable and memorable navigation element. The website isn't quite finished yet, and there are still things I want to improve, but I'm proud of it as my first independent summer project.",
      },
    ],
    tags: ["React", "JavaScript", "HTML", "Tailwind CSS", "Claude Design", "Claude Code"],
    specs: [
      ["ROLE", "Design + development"],
      ["CONTEXT", "Personal project"],
      ["PERIOD", "2025/2026"],
      ["TEAM", "Solo"],
      ["STATUS", "Live · in progress"],
    ],
    repo: "https://github.com/Alliananaz/Alliananaz.github.io",
    live: "https://alliananaz.github.io/",
  },
  {
    title: "Milk Carton",
    year: "2024",
    exposure: "f/5.6 · 1/250 · ISO 100",
    thumb: milkcarton_tn,
    images: [milkcarton_tn, milkcarton_crop],
    body: [
      {
        h: "ABOUT THE PROJECT",
        p: "The “Smart Milk Carton” project was developed by my group, Innotink, in the course IN1060 – Use-oriented Design. The course requires students to design a solution with Arduino as a central component, tied to the overarching theme of “interaction without a screen”. Our target group was baristas volunteering at Escape, and we were to work closely with this user group throughout the project for collaboration and mutual learning. The project grew out of an everyday problem at a busy café: only discovering that the milk is empty when you need it, and having to check several cartons by hand to keep track – especially critical when milk is such a central ingredient in coffee and tea.",
      },
      {
        h: "PROCESS",
        p: [
          "We worked in a user-centred, iterative way throughout the project. In the ideation phase we used “stamp sketching” to produce many small sketches in a short time and open up the range of possible interaction mechanisms related to On/Off. Our first concepts were based on simple buttons, but we realised we had to think further, and in the end came back to an idea we had considered earlier.",
          "The solution was to connect LEDs to weight sensors, one sensor per type of milk, so the system could automatically register changes in stock without the user having to do anything. For the form, we chose a milk carton as the design concept – a deliberate choice to get a decorative and unique design that also clearly communicated what the artefact was about. We designed it so the carton had one icon per type of milk, with its name underneath for clarity.",
        ],
      },
      {
        h: "RESULT",
        p: "The result was a working tangible prototype built around Arduino that lets the café's baristas keep track of milk levels for several types of milk at once, through a system of lit icons and a red warning light. By connecting weight sensors to LEDs, we made the “On/Off” concept concrete and intuitive: the icons stay lit as long as there is enough milk left and switch off when it runs out, while the warning light gives a clear secondary signal that a refill is needed. The decorative milk-carton form also meant the artefact fitted naturally into the café setting it was designed for. The project gave me hands-on experience with tangible interaction design through a genuinely user-centred process – from close collaboration with a real user group, through ideation with stamp sketching, to a technical solution grounded in concrete user needs.",
      },
    ],
    tags: ["Arduino Uno", "C++", "Tinkercad", "Figma"],
    specs: [
      ["CONTEXT", "IN1060 – Use-oriented Design"],
      ["PERIOD", "2024"],
      ["TEAM", "Innotink"],
      ["STATUS", "Completed"],
    ],
    info: "https://www.uio.no/studier/emner/matnat/ifi/IN1060/v24/prosjektgrupper/innotink/",
  },
  {
    title: "Dino Game",
    year: "2022",
    exposure: "f/2 · 1/80 · ISO 800",
    thumb: dino_tn,
    images: [dino_tn, dino_gif],
    body: [
      {
        h: "ABOUT THE PROJECT",
        p: "Dino Game is a game I developed as part of an assignment in IT2 at upper secondary school, inspired by Google's iconic dinosaur game.",
      },
      {
        h: "MY ROLE",
        p: "Made solo – coded in Python with Pygame, and programmed in Thonny.",
      },
    ],
    tags: ["Python", "Pygame"],
    specs: [
      ["ROLE", "Development"],
      ["PERIOD", "2022"],
      ["TEAM", "Solo"],
      ["STATUS", "Completed"],
    ],
  },
  {
    title: "X-Hotel Website",
    year: "2021",
    exposure: "f/3.5 · 1/100 · ISO 320",
    thumb: xhotel_tn,
    images: [xhotel_tn],
    body: [
      {
        h: "ABOUT THE PROJECT",
        p: "X Hotel is a website I developed as an assignment in IT1 at upper secondary school. It is coded in Visual Studio Code with HTML and CSS.",
      },
    ],
    tags: ["HTML", "CSS"],
    specs: [
      ["ROLE", "Design + development"],
      ["PERIOD", "2021"],
      ["TEAM", "Solo"],
      ["STATUS", "Completed"],
    ],
  },
];

const COLS = 6;
const pad = (n) => String(n).padStart(2, "0");

/* Header controls — the same chrome as the CV page. Roomier padding on
   touch-sized screens so each clears the ~44px tap target, tightening from sm
   up where there is a pointer. */
const CTRL =
  "border px-3 py-2 text-[11px] tracking-[.18em] transition-colors " +
  "hover:border-amber/70 hover:text-amber-deep sm:px-2.5 sm:py-[5px]";

/* A run of film sprocket holes, spread across the strip's full length. */
function Sprockets({ count = 26, className = "" }) {
  return (
    <div className={`flex justify-between px-[9px] ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="h-[7px] w-2.5 rounded-[1.5px] bg-sprocket" />
      ))}
    </div>
  );
}

/* Image, or the project title on the empty fill when there is none. */
function Picture({ src, title, fill, alt = "" }) {
  if (src) {
    return <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />;
  }
  return (
    <span
      className={`absolute inset-0 flex items-center justify-center p-2 text-center text-[10px] tracking-capn text-ink-dim ${fill}`}
    >
      {title}
    </span>
  );
}

/* The print's image. With more than one shot it steps through them while the
   pointer rests on it, crossfading between stacked images, and returns to the
   first shot when the pointer leaves. Keyed by project, so switching frames
   always starts on shot 1. */
function Gallery({ project, file }) {
  const images = project.images || [];
  const [shot, setShot] = useState(0);
  const [hovering, setHovering] = useState(false);
  const many = images.length > 1;

  useEffect(() => {
    if (!hovering || !many) return;
    const id = setInterval(() => setShot((i) => (i + 1) % images.length), 1400);
    return () => clearInterval(id);
  }, [hovering, many, images.length]);

  return (
    <>
      <div
        className="relative aspect-video overflow-hidden border border-ink/20 bg-slot"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setHovering(false);
          setShot(0);
        }}
      >
        {images.length === 0 && <Picture title={project.title} fill="bg-slot" />}
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={i === shot ? project.title : ""}
            aria-hidden={i !== shot}
            className={
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-300 motion-reduce:transition-none " +
              (i === shot ? "opacity-100" : "opacity-0")
            }
          />
        ))}
      </div>
      <div className="flex items-center justify-between gap-4 text-[9px] tracking-[.14em] text-ink-dim">
        <span>
          {file}
          {many && ` · ${shot + 1}/${images.length}`}
        </span>
        {project.exposure && <span>{project.exposure}</span>}
      </div>
    </>
  );
}

export default function Portfolio() {
  const [selected, setSelected] = useState(0);
  // Site-wide light/dark choice, shared with the home and CV pages.
  const [dark, toggleTheme] = useCameraTheme();
  const count = PROJECTS.length;
  const project = PROJECTS[selected];

  // ← / → step through the roll and wrap at both ends.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSelected((i) => (i - 1 + count) % count);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setSelected((i) => (i + 1) % count);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  // Fill the last row with empty frames so the strip reads as a full roll.
  const blanks = (COLS - (count % COLS)) % COLS;
  // 26 holes per 6 frames, so a longer roll gets proportionally more.
  const holes = Math.round(((count + blanks) * 26) / COLS);

  // On small screens the strip is one sideways-scrolling roll. When the
  // selection moves off-screen (←/→), slide the roll — never the page — so
  // the active frame stays in view. On desktop nothing overflows, so no-op.
  const rollRef = useRef(null);
  const frameRefs = useRef([]);
  useEffect(() => {
    const roll = rollRef.current;
    const frame = frameRefs.current[selected];
    if (!roll || !frame || roll.scrollWidth <= roll.clientWidth) return;
    const left = frame.offsetLeft;
    const right = left + frame.offsetWidth;
    if (left < roll.scrollLeft || right > roll.scrollLeft + roll.clientWidth) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      roll.scrollTo({ left: left - 6, behavior: reduce ? "auto" : "smooth" });
    }
  }, [selected]);
  const file = project.file || `IMG_0${pad(selected + 1)}.JPG`;
  const specs = (project.specs || []).filter(([, v]) => v);

  return (
    <div
      className={
        (dark ? "theme-dark " : "") +
        "flex min-h-dvh justify-center bg-light-table px-4 pt-10 pb-12 font-mono text-ink " +
        "sm:px-6 sm:pt-20 sm:pb-18 lg:pt-28"
      }
    >
      <div className="flex w-[940px] max-w-full flex-col gap-[18px]">
        {/* ---------------- Header ---------------- */}
        <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="flex min-w-0 flex-col gap-1.5">
            <span className="text-[10px] tracking-[.22em] text-chrome">
              2026
            </span>
            <h1 className="text-2xl leading-tight tracking-[.05em] uppercase sm:text-3xl sm:leading-none">
              projects
            </h1>
            <p className="text-[12px] tracking-[.06em] text-chrome-dark sm:text-[13px] sm:tracking-[.1em]">
              {count} frames
            </p>
          </div>

          <nav className="flex shrink-0 flex-wrap items-center gap-2">
            <Link to="/" className={`${CTRL} border-ink/25 bg-paper/60 text-chrome-dark`}>
              ◀ HOME
            </Link>
            <Link to="/resume" className={`${CTRL} border-ink/25 bg-paper/60 text-chrome-dark`}>
              CV
            </Link>
            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={dark}
              aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
              className={`${CTRL} border-ink/25 bg-paper/60 text-chrome-dark`}
            >
              {dark ? "☀ LIGHT" : "☾ DARK"}
            </button>
          </nav>
        </header>

        <div className="mt-8 flex flex-col gap-[18px]">

          {/* ---------------- Filmstrip ---------------- */}
          {/* Below sm the roll becomes a single row that scrolls sideways
              (frames at a fixed width, snapping into place); the sprocket rows
              sit inside the scroller so they travel with the frames. */}
          <div className="bg-film shadow-strip-lg">
            <div
              ref={rollRef}
              className="relative max-sm:snap-x max-sm:snap-mandatory max-sm:scroll-px-1.5 max-sm:overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="pt-[9px] pb-2 max-sm:w-max">
                <Sprockets count={holes} className="pb-1.5" />

                <div className="grid grid-cols-6 gap-1 px-1.5 max-sm:flex">
                  {PROJECTS.map((p, i) => {
                    const active = i === selected;
                    return (
                      <button
                        key={p.title}
                        ref={(el) => (frameRefs.current[i] = el)}
                        type="button"
                        onClick={() => setSelected(i)}
                        aria-label={`Project ${pad(i + 1)}: ${p.title}`}
                        aria-pressed={active}
                        className={
                          "relative m-0 block aspect-[3/2] cursor-pointer overflow-hidden border-0 bg-frame p-0 " +
                          "max-sm:w-32 max-sm:shrink-0 max-sm:snap-start " +
                          "transition-opacity duration-[250ms] -outline-offset-2 " +
                          "focus-visible:ring-2 focus-visible:ring-sprocket focus-visible:ring-inset " +
                          (active
                            ? "opacity-100 outline-2 outline-amber"
                            : "opacity-[.62] outline-1 outline-[rgba(241,242,234,.18)]")
                        }
                      >
                        <Picture src={p.thumb} title={p.title} fill="bg-frame" />
                        <span className="absolute top-1 left-[5px] text-[9px] tracking-capn text-[#f2f0e2] [text-shadow:0_1px_2px_rgba(0,0,0,.75)]">
                          {pad(i + 1)}
                        </span>
                        <span className="absolute inset-x-0 bottom-0 bg-[rgba(31,32,26,.74)] px-[5px] py-[3px] text-left text-[8px] tracking-[.1em] text-amber">
                          {p.year}
                        </span>
                      </button>
                    );
                  })}
                  {Array.from({ length: blanks }).map((_, i) => (
                    <div
                      key={`blank-${i}`}
                      aria-hidden="true"
                      className="aspect-[3/2] bg-frame opacity-[.62] outline-1 -outline-offset-2 outline-[rgba(241,242,234,.18)] max-sm:w-32 max-sm:shrink-0 max-sm:snap-start"
                    />
                  ))}
                </div>

                <Sprockets count={holes} className="pt-1.5" />
              </div>
            </div>
          </div>

          {/* ---------------- Strip caption ---------------- */}
          <div className="flex items-center justify-between px-1 text-[9px] tracking-cap text-chrome">
            <span>◀ ▶ BROWSE THE ROLL</span>
            <span aria-live="polite">
              FRAME {pad(selected + 1)} / {pad(count)}
            </span>
          </div>

          {/* ---------------- Print panel ---------------- */}
          {/* A light paper print on the light table; in dark mode it takes the
              film base colour, so it reads as part of the roll. */}
          <article
            className={
              "flex flex-col gap-[22px] border px-5 pt-5 pb-7 " +
              (dark
                ? "border-ink/10 bg-film shadow-strip-lg"
                : "border-ink/15 bg-paper shadow-print")
            }
          >
            <div className="flex flex-col gap-2">
              <Gallery key={selected} project={project} file={file} />
            </div>

            <div className="flex flex-wrap items-start gap-x-9 gap-y-7">
              {/* Description */}
              <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
                <h2 className="text-[20px] leading-[1.15] sm:text-2xl tracking-[.04em] uppercase">
                  {project.title}
                </h2>
                <div className="h-px bg-ink/20" />
                {project.body.map((section) => (
                  <section key={section.h} className="flex flex-col gap-2.5">
                    <h3 className="text-[11px] font-normal tracking-cap text-amber-text">
                      {section.h}
                    </h3>
                    {[].concat(section.p).map((para, i) => (
                      <p key={i} className="m-0 text-sm leading-[1.7] text-ink-body [text-wrap:pretty]">
                        {para}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              {/* EXIF. Beside the text while both columns fit; once they
                  don't, it moves above the text at full width so tools, role
                  and context come first. 826px is where the row stops fitting:
                  420 + 36 gap + 280 = 736px of panel, plus the panel's 42px
                  and the page's 48px of side padding. */}
              <aside
                className={
                  "sticky top-6 flex flex-[0_1_280px] flex-col gap-3.5 border border-ink/15 p-3.5 " +
                  "max-[826px]:static max-[826px]:order-first max-[826px]:basis-full " +
                  (dark ? "bg-sprocket/5" : "bg-paper2")
                }
              >
                <span className="text-[10px] tracking-cap text-ink-dim">TOOLS</span>

                {project.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-amber-text/40 bg-amber/10 px-2 py-1 text-[10px] tracking-capn text-amber-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {specs.length > 0 && (
                  <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-xs leading-snug tracking-[.08em]">
                    {specs.map(([k, v]) => (
                      <div key={k} className="contents">
                        <dt className="text-ink-dim">{k}</dt>
                        <dd className="m-0 text-ink2">{v}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {(project.repo || project.live || project.info) && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener"
                        className="border border-ink/25 bg-paper/60 px-3 py-1.5 text-[10px] tracking-[.16em] text-chrome-dark transition-colors hover:text-amber"
                      >
                        CODE ↗
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener"
                        className="border border-amber bg-amber/15 px-3 py-1.5 text-[10px] tracking-[.16em] text-amber-tx transition-colors hover:text-amber"
                      >
                        VIEW LIVE ↗
                      </a>
                    )}
                    {project.info && (
                      <a
                        href={project.info}
                        target="_blank"
                        rel="noopener"
                        className="border border-ink/25 bg-paper/60 px-3 py-1.5 text-[10px] tracking-[.16em] text-chrome-dark transition-colors hover:text-amber"
                      >
                        MORE INFO ↗
                      </a>
                    )}
                  </div>
                )}
              </aside>
            </div>
          </article>
        </div>

        {/* ---------------- Footer ---------------- */}
        <footer className="flex flex-col gap-1 text-[11px] tracking-[.16em] text-chrome-light sm:flex-row sm:justify-between sm:gap-4 sm:text-[12px] sm:tracking-[.22em]">
          <span>DSC-AN14 · ROLL 02 · {count} EXP</span>
          <span>© {new Date().getFullYear()} Alliana Nazareno</span>
        </footer>
      </div>
    </div>
  );
}
