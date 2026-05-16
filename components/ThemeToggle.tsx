"use client";

import { useEffect } from "react";

const storageKey = "portfolio-theme";

export function ThemeToggle() {
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    const nextTheme = stored === "light" || stored === "dark" ? stored : "dark";

    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    localStorage.setItem(storageKey, nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
    >
      <span aria-hidden="true">◐</span>
    </button>
  );
}
