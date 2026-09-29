import { useState, useEffect, useCallback } from "react";

/* The site-wide light/dark choice. The camera's MODE button on the home page
   and the LIGHT/DARK toggles on the CV and Projects pages all read and write the
   same `camera-theme` key, so whichever page the choice is made on, every
   other page opens in that mode. Dark is the default.

   It also stamps `data-theme` on <html>, so the page background behind and
   around each page (overscroll, the gap under short content) matches too. */
const KEY = "camera-theme";

function readDark() {
  try {
    return localStorage.getItem(KEY) !== "light";
  } catch {
    return true; // storage blocked (private mode etc.) — fall back to dark
  }
}

export default function useCameraTheme() {
  const [dark, setDark] = useState(readDark);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, dark ? "dark" : "light");
    } catch {
      /* storage blocked — the choice just won't persist */
    }
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  // Keep other open tabs of the site in step.
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === KEY) setDark(e.newValue !== "light");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggle = useCallback(() => setDark((prev) => !prev), []);
  return [dark, toggle];
}
