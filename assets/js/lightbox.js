/* Minimal click-to-zoom lightbox. No dependencies.
   Any <img> inside a .zoomable container (or with class .zoomable) opens full size.
   Close with a click anywhere, Esc, or the X. */
(function () {
  "use strict";

  var overlay, imgEl, capEl;

  function build() {
    overlay = document.createElement("div");
    overlay.className = "lb-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.innerHTML =
      '<button class="lb-close" aria-label="Close">&times;</button>' +
      '<figure class="lb-figure"><img class="lb-img" alt=""><figcaption class="lb-cap"></figcaption></figure>';
    document.body.appendChild(overlay);
    imgEl = overlay.querySelector(".lb-img");
    capEl = overlay.querySelector(".lb-cap");

    overlay.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  function open(src, alt) {
    if (!overlay) build();
    imgEl.src = src;
    imgEl.alt = alt || "";
    capEl.textContent = alt || "";
    capEl.style.display = alt ? "" : "none";
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    setTimeout(function () { imgEl.src = ""; }, 200);
  }

  function fullSrc(img) {
    // jquery.lazy keeps the real source in data-src until it swaps it in
    return img.getAttribute("data-src") || img.currentSrc || img.src;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var imgs = document.querySelectorAll(".zoomable img, img.zoomable");
    Array.prototype.forEach.call(imgs, function (img) {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        open(fullSrc(img), img.getAttribute("alt"));
      });
    });
  });
})();
