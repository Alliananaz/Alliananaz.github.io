import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";

const MENU = [
  { label: "HOME", path: "/" },
  { label: "PROJECTS", path: "/projects" },
  { label: "RESUME", path: "/resume" },
];

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

  return (
    <div className={`cam-stage${light ? " light" : ""}`}>
      <div className={`cam-body${recording ? " recording" : ""}`}>
        {/* ---------------- LEFT COLUMN — LCD ---------------- */}
        <section className="cam-lcd">
          <div className="lcd-labelrow">
            <span>DSC-AN14</span>
            <span className="lcd-pwr">
              <span className="pwr-dot" aria-hidden="true" />
              PWR
            </span>
          </div>

          <div className="lcd-bezel">
            <div className="lcd-screen">
              {/* HUD — top-left */}
              <div className="hud hud-tl">
                <span className="hud-badge">{light ? "LIGHT" : "DARK"}</span>
                <span>F2.8 · 1/60 · ISO 400</span>
              </div>

              {/* HUD — top-right */}
              <div className="hud hud-tr">
                <span className="rec-dot" aria-hidden="true" />
                <span className="rec-label">{recording ? "REC" : "STBY"}</span>
              </div>

              {/* HUD — bottom-left */}
              <div className="hud hud-bl">
                <span>▲▼ SELECT · OK ENTER</span>
              </div>

              {/* HUD — bottom-right */}
              <div className="hud hud-br">
                <span className="signal" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="battery" aria-hidden="true">
                  <span className="battery-fill" />
                </span>
              </div>

              {/* Menu */}
              <nav className="lcd-menu" aria-label="Main navigation">
                {MENU.map((item, index) => (
                  <button
                    key={item.path}
                    type="button"
                    className={`menu-item${selected === index ? " selected" : ""}`}
                    aria-current={selected === index ? "true" : undefined}
                    onMouseEnter={() => setSelected(index)}
                    onClick={() => selectItem(index)}
                  >
                    <span className="caret" aria-hidden="true">
                      ▸
                    </span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>

              <div className="scanlines" aria-hidden="true" />
            </div>
          </div>

          <div className="lcd-footer">
            <span className="ticks" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span>4:3 · FINE</span>
          </div>
        </section>

        {/* ---------------- RIGHT COLUMN — controls ---------------- */}
        <section className="cam-controls">
          <div className="ctrl-toprow">
            <span>MENU</span>
            <span>DISP</span>
          </div>

          {/* MODE / MOVIE */}
          <div className="ctrl-buttons">
            <div className="btn-col">
              <button
                type="button"
                className="round-btn mode-btn"
                onClick={toggleTheme}
                aria-pressed={light}
                aria-label={`Switch to ${light ? "dark" : "light"} mode`}
              >
                MODE
              </button>
              <span className="caption">{light ? "LIGHT" : "DARK"}</span>
            </div>

            <div className="btn-col">
              <button
                type="button"
                className="round-btn movie-btn"
                onClick={toggleRecording}
                aria-pressed={recording}
                aria-label={recording ? "Stop recording" : "Start recording"}
              >
                <span className="movie-dot" aria-hidden="true" />
              </button>
              <span className="caption">MOVIE</span>
            </div>
          </div>

          {/* D-pad */}
          <div className="dpad">
            <div className="dpad-grid">
              <button
                type="button"
                className="dpad-btn dpad-up"
                onClick={moveBack}
                aria-label="Previous menu item"
              >
                ▲
              </button>
              <button
                type="button"
                className="dpad-btn dpad-left"
                onClick={moveBack}
                aria-label="Previous menu item"
              >
                ◀
              </button>
              <button
                type="button"
                className="dpad-btn dpad-right"
                onClick={moveForward}
                aria-label="Next menu item"
              >
                ▶
              </button>
              <button
                type="button"
                className="dpad-btn dpad-down"
                onClick={moveForward}
                aria-label="Next menu item"
              >
                ▼
              </button>
            </div>
            <button
              type="button"
              className="ok-btn"
              onClick={() => selectItem()}
              aria-label={`Open ${MENU[selected].label}`}
            >
              OK
            </button>
          </div>

          {/* Bottom */}
          <div className="ctrl-bottom">
            <span className="ctrl-bar" aria-hidden="true" />
            <span>DELETE / PLAY</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
