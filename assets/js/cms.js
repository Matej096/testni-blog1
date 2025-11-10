fetch("/data/home.json")
  .then((r) => r.json())
  .then((d) => {
    const titleEl = document.querySelector("[data-hero-title]");
    const textEl = document.querySelector("[data-hero-text]");

    if (titleEl) titleEl.textContent = d.heroTitle ?? "";
    if (textEl) textEl.textContent = d.heroText ?? "";
  })
  .catch(console.error);
