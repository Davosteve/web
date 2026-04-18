document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     LIGHTBOX (TU LÓGICA ORIGINAL)
  ========================= */

  const images = document.querySelectorAll(".gallery-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("close-btn");

  let currentIndex = 0;

  function showImage() {
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    caption.textContent = img.dataset.title || "";
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      showImage();
      lightbox.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display !== "flex") return;

    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    }

    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    }

    if (e.key === "Escape") {
      lightbox.style.display = "none";
    }
  });

  /* =========================
     SPA (MÍNIMO Y SIN ROMPER NADA)
  ========================= */

  window.showSection = function(id) {
    document.querySelectorAll(".section").forEach(sec => {
      sec.classList.remove("active");
    });

    const target = document.getElementById(id);
    if (target) target.classList.add("active");
  };

});
