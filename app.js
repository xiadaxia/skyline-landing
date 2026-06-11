/* Theme management lives in docs.html (inline) — see [data-theme-toggle]. */
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const sideLinks = Array.from(document.querySelectorAll(".side-nav a"));
const sections = Array.from(document.querySelectorAll(".doc-section"));
const emptySearch = document.querySelector(".empty-search");
const searchInput = document.querySelector("#docs-search");

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.tab;
    const container = button.closest(".code-tabs");
    container.querySelectorAll(".tab-button").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    container.querySelectorAll(".code-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === tab);
    });
  });
});

document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;
    await navigator.clipboard.writeText(target.innerText);
    const previous = button.textContent;
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = previous;
    }, 1200);
  });
});

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  const id = visible.target.id;
  sideLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
  });
}, { rootMargin: "-20% 0px -70% 0px", threshold: [0.1, 0.4, 0.7] });

sections.forEach((section) => {
  if (section.id) observer.observe(section);
});

searchInput?.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  sections.forEach((section) => {
    const haystack = `${section.dataset.searchable || ""} ${section.innerText}`.toLowerCase();
    const visible = !query || haystack.includes(query);
    section.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  if (emptySearch) {
    emptySearch.hidden = visibleCount > 0;
  }
});
