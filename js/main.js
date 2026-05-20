(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open");
    });
  }

  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener(
      "scroll",
      function () {
        header.classList.toggle("is-scrolled", window.scrollY > 20);
      },
      { passive: true }
    );
  }

  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function () {
      if (form.dataset.netlify !== "true" && !form.action.includes("formspree")) {
        return;
      }
    });
  }

  initLightbox();
})();

function initLightbox() {
  const grids = document.querySelectorAll("[data-lightbox]");
  if (!grids.length) return;

  const items = [];

  grids.forEach(function (grid) {
    grid.querySelectorAll(".project-grid__item").forEach(function (figure) {
      const img = figure.querySelector("img");
      if (!img) return;

      const index = items.length;
      items.push({
        src: img.dataset.fullsize || getFullSizeSrc(img.currentSrc || img.src),
        alt: img.alt || "",
      });

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "project-grid__trigger";
      trigger.setAttribute(
        "aria-label",
        "View larger: " + (img.alt || "project photo")
      );

      figure.replaceChildren(trigger);
      trigger.appendChild(img);

      trigger.addEventListener("click", function () {
        openLightbox(index);
      });
    });
  });

  if (!items.length) return;

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.id = "gallery-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.setAttribute("aria-label", "Expanded gallery image");
  lightbox.innerHTML =
    '<button type="button" class="lightbox__close" aria-label="Close">&times;</button>' +
    '<button type="button" class="lightbox__prev" aria-label="Previous image">&#8249;</button>' +
    '<button type="button" class="lightbox__next" aria-label="Next image">&#8250;</button>' +
    '<span class="lightbox__counter" aria-live="polite"></span>' +
    '<div class="lightbox__dialog">' +
    '<img class="lightbox__image" src="" alt="">' +
    '<p class="lightbox__caption"></p>' +
    "</div>";

  document.body.appendChild(lightbox);

  const closeBtn = lightbox.querySelector(".lightbox__close");
  const prevBtn = lightbox.querySelector(".lightbox__prev");
  const nextBtn = lightbox.querySelector(".lightbox__next");
  const imageEl = lightbox.querySelector(".lightbox__image");
  const captionEl = lightbox.querySelector(".lightbox__caption");
  const counterEl = lightbox.querySelector(".lightbox__counter");

  let currentIndex = 0;
  let lastFocus = null;

  function show(index) {
    currentIndex = (index + items.length) % items.length;
    const item = items[currentIndex];
    imageEl.src = item.src;
    imageEl.alt = item.alt;
    captionEl.textContent = item.alt;
    captionEl.hidden = !item.alt;
    counterEl.textContent = currentIndex + 1 + " / " + items.length;
    prevBtn.hidden = items.length <= 1;
    nextBtn.hidden = items.length <= 1;
  }

  function openLightbox(index) {
    lastFocus = document.activeElement;
    show(index);
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-lightbox-open");
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-lightbox-open");
    imageEl.removeAttribute("src");
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", function () {
    show(currentIndex - 1);
  });
  nextBtn.addEventListener("click", function () {
    show(currentIndex + 1);
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") show(currentIndex - 1);
    if (e.key === "ArrowRight") show(currentIndex + 1);
  });
}

function getFullSizeSrc(src) {
  try {
    const url = new URL(src, window.location.href);
    if (url.hostname.includes("unsplash.com")) {
      url.searchParams.set("w", "1600");
      url.searchParams.set("q", "85");
      return url.toString();
    }
  } catch (_) {
    /* use original src */
  }
  return src;
}
