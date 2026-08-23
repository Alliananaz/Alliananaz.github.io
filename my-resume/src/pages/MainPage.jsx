import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const MENU = [
  { label: "HOME", path: "/" },
  { label: "PROJECTS", path: "/projects" },
  { label: "RESUME", path: "/resume" },
];

/* The camera is drawn against a fixed 980 x 630 design grid. `--u` is the
   size of one design pixel: it shrinks to fit whichever viewport axis is
   tightest and never grows past 1px, so the chassis keeps its exact
   proportions on a phone instead of reflowing. Every dimension below is
   calc(N * var(--u)); the few max(...) floors keep the smallest decorative
   type from disappearing entirely at the smallest scales. */
const UNIT = "[--u:min(1px,(100vw_-_24px)/980,(100dvh_-_24px)/630)]";

/* Cancels the global <button> styling from index.css and gives every
   control the same focus ring. */
const BTN =
  "m-0 p-0 border-0 bg-transparent font-[inherit] text-inherit cursor-pointer " +
  "focus-visible:outline-2 focus-visible:outline-[#f0b429] focus-visible:outline-offset-2";

/* Shared by the four HUD corners. */
const HUD =
  "absolute flex items-center gap-[calc(8*var(--u))] " +
  "text-[max(6px,calc(11*var(--u)))] tracking-[.16em]";

/* Shared by MODE and MOVIE. */
const ROUND_BTN =
  " flex size-[calc(58*var(--u))] items-center justify-center rounded-full " +
  "bg-[radial-gradient(120%_120%_at_30%_20%,#4a4c51_0%,#22242a_60%,#14161a_100%)] " +
  "shadow-[0_4px_8px_rgba(0,0,0,.4),inset_0_1px_0_rgba(255,255,255,.22)] active:translate-y-px";

const DPAD_BTN =
  " flex items-center justify-center text-[max(8px,calc(17*var(--u)))] text-[#dcdde0]";

const CAPTION = "text-[max(6px,calc(10*var(--u)))] tracking-[.12em] text-[#74777d]";

function Home() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  // Persist the light/dark choice so it survives navigating to other pages and back.
  const [light, setLight] = useState(() => localStorage.getItem("camera-theme") === "light");
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    localStorage.setItem("camera-theme", light ? "light" : "dark");
  }, [light]);

  // Keep the latest selection available inside the keydown listener.
  const selectedRef = useRef(selected);
  useEffect(() => {
    selectedRef.current = selected;
  }, [selected]);

  const moveBack = () => setSelected((prev) => (prev - 1 + MENU.length) % MENU.length);
  const moveForward = () => setSelected((prev) => (prev + 1) % MENU.length);
  const selectItem = (index = selectedRef.current) => navigate(MENU[index].path);

  const toggleTheme = () => setLight((prev) => !prev);
  const toggleRecording = () => setRecording((prev) => !prev);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
        case "ArrowLeft":
          event.preventDefault();
          moveBack();
          break;
        case "ArrowDown":
        case "ArrowRight":
          event.preventDefault();
          moveForward();
          break;
        case "Enter":
          event.preventDefault();
          selectItem(selectedRef.current);
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Colours that depend on theme / recording state. Resolved in JS rather
     than with variant classes so the winning value is never left to
     Tailwind's utility sort order. */
  const hudText = light ? "text-black/55" : "text-white/55";
  const glyphBg = light ? "bg-black/50" : "bg-white/55";
  const glyphBorder = light ? "border-black/50" : "border-white/55";

  return (
    <div
      className={
        UNIT +
        " fixed inset-0 box-border flex overflow-auto p-3 font-dm transition-colors duration-200 " +
        (light
          ? "bg-[radial-gradient(120%_100%_at_50%_0%,#f4f5f7_0%,#d7d9de_70%)]"
          : "bg-[radial-gradient(120%_100%_at_50%_0%,#21232a_0%,#0e0f11_70%)]")
      }
    >
      {/* Camera body — m-auto centers it on both axes */}
      <div
        className="m-auto grid w-[calc(980*var(--u))] box-border shrink-0
                   grid-cols-[1fr_calc(268*var(--u))] gap-[calc(28*var(--u))]
                   rounded-[calc(22*var(--u))] p-[calc(26*var(--u))]
                   bg-[linear-gradient(155deg,#d9dade_0%,#c3c5ca_46%,#adb0b6_100%)]
                   shadow-[0_calc(40*var(--u))_calc(90*var(--u))_rgba(0,0,0,.55),inset_0_1px_0_rgba(255,255,255,.7),inset_0_-2px_calc(6*var(--u))_rgba(0,0,0,.18)]"
      >
        {/* ---------------- LEFT COLUMN — LCD ---------------- */}
        <section className="flex min-w-0 flex-col">
          <div className="mb-[calc(10*var(--u))] flex items-center justify-between text-[max(6px,calc(11*var(--u)))] tracking-[.22em] text-[#6c6f75]">
            <span>DSC-AN14</span>
            <span className="inline-flex items-center gap-[calc(7*var(--u))]">
              <span
                className="size-[calc(7*var(--u))] rounded-full bg-[#63b56a] shadow-[0_0_6px_1px_rgba(99,181,106,.85)]"
                aria-hidden="true"
              />
              PWR
            </span>
          </div>

          {/* Bezel */}
          <div className="rounded-[calc(6*var(--u))] bg-[#2a2b2e] p-[calc(12*var(--u))] shadow-[inset_0_3px_10px_rgba(0,0,0,.6),0_1px_0_rgba(255,255,255,.5)]">
            {/* Screen — 4:3 off the LCD column, so it scales with the chassis */}
            <div
              className={
                "relative aspect-[4/3] overflow-hidden rounded-[calc(3*var(--u))] transition-colors duration-200 " +
                (light
                  ? "bg-[linear-gradient(180deg,#e8eade,#d7d9cb)]"
                  : "bg-[linear-gradient(180deg,#12130f,#1a1c17)]")
              }
            >
              {/* HUD — top-left */}
              <div
                className={`${HUD} top-[calc(12*var(--u))] left-[calc(12*var(--u))] ${hudText}`}
              >
                <span className="rounded-[2px] border border-[rgba(240,180,41,.6)] px-[calc(6*var(--u))] py-px text-[rgba(240,180,41,.9)]">
                  {light ? "LIGHT" : "DARK"}
                </span>
                <span>F2.8 · 1/60 · ISO 400</span>
              </div>

              {/* HUD — top-right */}
              <div
                className={`${HUD} top-[calc(12*var(--u))] right-[calc(12*var(--u))] ${
                  recording ? "text-[#e0483d]" : hudText
                }`}
              >
                <span
                  className={
                    "size-[calc(7*var(--u))] rounded-full " +
                    (recording
                      ? "bg-[#e0483d] shadow-[0_0_6px_1px_rgba(224,72,61,.9)]"
                      : glyphBg)
                  }
                  aria-hidden="true"
                />
                <span>{recording ? "REC" : "STBY"}</span>
              </div>

              {/* HUD — bottom-left */}
              <div
                className={`${HUD} bottom-[calc(12*var(--u))] left-[calc(12*var(--u))] ${hudText}`}
              >
                <span>▲▼ SELECT · OK ENTER</span>
              </div>

              {/* HUD — bottom-right */}
              <div
                className={`${HUD} right-[calc(12*var(--u))] bottom-[calc(12*var(--u))] ${hudText}`}
              >
                {/* 3-bar signal glyph */}
                <span
                  className="inline-flex h-[calc(11*var(--u))] items-end gap-[calc(2*var(--u))]"
                  aria-hidden="true"
                >
                  <i className={`h-[calc(4*var(--u))] w-[calc(3*var(--u))] rounded-[1px] ${glyphBg}`} />
                  <i className={`h-[calc(7*var(--u))] w-[calc(3*var(--u))] rounded-[1px] ${glyphBg}`} />
                  <i className={`h-[calc(10*var(--u))] w-[calc(3*var(--u))] rounded-[1px] ${glyphBg}`} />
                </span>
                {/* Battery pill — the ::after is the positive terminal nub */}
                <span
                  className={`relative box-border h-[calc(11*var(--u))] w-[calc(22*var(--u))] rounded-[2px] border p-[calc(1.5*var(--u))] ${glyphBorder}
                    after:absolute after:top-[calc(3*var(--u))] after:-right-[calc(3*var(--u))]
                    after:h-[calc(4*var(--u))] after:w-[calc(2*var(--u))]
                    after:rounded-r-[1px] after:content-[''] ${
                      light ? "after:bg-black/50" : "after:bg-white/55"
                    }`}
                >
                  <span className={`block h-full w-[70%] rounded-[1px] ${glyphBg}`} />
                </span>
              </div>

              {/* Menu */}
              <nav
                className="absolute inset-0 flex flex-col justify-center gap-[calc(2*var(--u))] pr-[calc(12*var(--u))] pl-[12%]"
                aria-label="Main navigation"
              >
                {MENU.map((item, index) => {
                  const isSelected = selected === index;
                  return (
                    <button
                      key={item.path}
                      type="button"
                      className={
                        BTN +
                        " grid grid-cols-[calc(10*var(--u))_auto] items-center gap-x-[calc(8*var(--u))] " +
                        "rounded-[calc(3*var(--u))] px-[calc(12*var(--u))] py-[calc(3*var(--u))] text-left " +
                        "font-cond text-[calc(42*var(--u))] leading-[1.05] font-semibold tracking-[.06em] uppercase " +
                        (isSelected
                          ? light
                            ? "bg-[rgba(240,180,41,.22)]"
                            : "bg-[rgba(240,180,41,.12)]"
                          : "")
                      }
                      // Inline color beats the shared `text-inherit` in BTN, which
                      // otherwise leaves the text near-white and unreadable in light mode.
                      style={{
                        color: isSelected
                          ? light
                            ? "#b5790a"
                            : "#f0b429"
                          : light
                            ? "#1a1c1f"
                            : "#e8e9ec",
                      }}
                      aria-current={isSelected ? "true" : undefined}
                      onMouseEnter={() => setSelected(index)}
                      onClick={() => selectItem(index)}
                    >
                      <span
                        className={`w-[calc(10*var(--u))] text-[calc(22*var(--u))] leading-none ${
                          isSelected ? "visible" : "invisible"
                        }`}
                        aria-hidden="true"
                      >
                        ▸
                      </span>
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Scanlines */}
              <div
                className={
                  "pointer-events-none absolute inset-0 " +
                  (light
                    ? "bg-[repeating-linear-gradient(0deg,rgba(0,0,0,.05)_0_1px,transparent_1px_3px)]"
                    : "bg-[repeating-linear-gradient(0deg,rgba(255,255,255,.035)_0_1px,transparent_1px_3px)]")
                }
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="mt-[calc(10*var(--u))] flex items-center gap-[calc(10*var(--u))] text-[max(6px,calc(10*var(--u)))] text-[#7c7f85]">
            <span
              className="inline-flex items-center gap-[calc(5*var(--u))]"
              aria-hidden="true"
            >
              <i className="h-[calc(12*var(--u))] w-[calc(3*var(--u))] rounded-[2px] bg-black/[.18]" />
              <i className="h-[calc(12*var(--u))] w-[calc(3*var(--u))] rounded-[2px] bg-black/[.18]" />
              <i className="h-[calc(12*var(--u))] w-[calc(3*var(--u))] rounded-[2px] bg-black/[.18]" />
              <i className="h-[calc(12*var(--u))] w-[calc(3*var(--u))] rounded-[2px] bg-black/[.18]" />
            </span>
            <span>4:3 · FINE</span>
          </div>
        </section>

        {/* ---------------- RIGHT COLUMN — controls ---------------- */}
        <section className="flex flex-col items-center gap-[calc(26*var(--u))]">
          {/* Spacer keeps the controls in place now that the MENU/DISP row is gone */}
          <div className="h-[calc(15*var(--u))]" aria-hidden="true" />

          {/* MODE / MOVIE */}
          <div className="grid translate-y-[calc(28*var(--u))] grid-cols-2 justify-items-center gap-[calc(32*var(--u))]">
            <div className="flex flex-col items-center gap-[calc(8*var(--u))]">
              <button
                type="button"
                className={
                  BTN +
                  ROUND_BTN +
                  " text-[max(6px,calc(10*var(--u)))] tracking-[.1em] text-[#1a1c1f]"
                }
                onClick={toggleTheme}
                aria-pressed={light}
                aria-label={`Switch to ${light ? "dark" : "light"} mode`}
              >
                MODE
              </button>
              <span className={CAPTION}>{light ? "LIGHT" : "DARK"}</span>
            </div>

            <div className="flex flex-col items-center gap-[calc(8*var(--u))]">
              <button
                type="button"
                className={BTN + ROUND_BTN}
                onClick={toggleRecording}
                aria-pressed={recording}
                aria-label={recording ? "Stop recording" : "Start recording"}
              >
                <span
                  className={
                    "size-[calc(20*var(--u))] rounded-full transition-all duration-[180ms] " +
                    (recording
                      ? "bg-[#ff4d40] shadow-[0_0_12px_3px_rgba(255,77,64,.85)]"
                      : "bg-[#c8322a]")
                  }
                  aria-hidden="true"
                />
              </button>
              <span className={CAPTION}>MOVIE</span>
            </div>
          </div>

          {/* D-pad */}
          <div
            className="relative size-[calc(196*var(--u))] translate-y-[calc(28*var(--u))] rounded-full
                       bg-[radial-gradient(120%_120%_at_30%_15%,#43454a_0%,#24262b_55%,#16181c_100%)]
                       shadow-[0_8px_18px_rgba(0,0,0,.45),inset_0_2px_0_rgba(255,255,255,.16),inset_0_-3px_8px_rgba(0,0,0,.5)]"
          >
            <div className="absolute inset-[calc(8*var(--u))] grid grid-cols-3 grid-rows-3">
              <button
                type="button"
                className={BTN + DPAD_BTN + " col-start-2 row-start-1"}
                onClick={moveBack}
                aria-label="Previous menu item"
              >
                ▲
              </button>
              <button
                type="button"
                className={BTN + DPAD_BTN + " col-start-1 row-start-2"}
                onClick={moveBack}
                aria-label="Previous menu item"
              >
                ◀
              </button>
              <button
                type="button"
                className={BTN + DPAD_BTN + " col-start-3 row-start-2"}
                onClick={moveForward}
                aria-label="Next menu item"
              >
                ▶
              </button>
              <button
                type="button"
                className={BTN + DPAD_BTN + " col-start-2 row-start-3"}
                onClick={moveForward}
                aria-label="Next menu item"
              >
                ▼
              </button>
            </div>

            <button
              type="button"
              className={
                BTN +
                " absolute top-1/2 left-1/2 flex size-[calc(78*var(--u))] -translate-x-1/2 -translate-y-1/2 " +
                "items-center justify-center rounded-full text-[max(7px,calc(15*var(--u)))] tracking-[.12em] text-[#e8e9ec] " +
                "bg-[radial-gradient(120%_120%_at_30%_20%,#34363b_0%,#191b1f_60%,#0d0e11_100%)] " +
                "shadow-[inset_0_1px_0_rgba(255,255,255,.14),0_3px_7px_rgba(0,0,0,.55)] active:scale-[.98]"
              }
              onClick={() => selectItem()}
              aria-label={`Open ${MENU[selected].label}`}
            >
              OK
            </button>
          </div>

          {/* Bottom */}
          <div className="flex translate-y-[calc(28*var(--u))] flex-col items-center gap-[calc(6*var(--u))] text-[max(6px,calc(9*var(--u)))] tracking-[.12em] text-[#7c7f85]">
            <span
              className="h-[calc(6*var(--u))] w-[calc(44*var(--u))] rounded-[3px] bg-black/25"
              aria-hidden="true"
            />
            <span>DELETE / PLAY</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
