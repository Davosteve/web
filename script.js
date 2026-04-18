document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     SPA
  ========================= */
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll("#header-menu a");

  function showSection(id) {
    sections.forEach(sec => sec.classList.remove("active"));
    const target = document.getElementById(id);
    if (target) target.classList.add("active");
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(link.dataset.section);
    });
  });

  /* =========================
     LIGHTBOX
  ========================= */
  const images = document.querySelectorAll(".gallery-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("close-btn");

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    caption.textContent = img.dataset.title || "";
    lightbox.classList.add("active");
  }

  function updateLightbox() {
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    caption.textContent = img.dataset.title || "";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
    caption.textContent = "";
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeLightbox();
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      updateLightbox();
    }

    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateLightbox();
    }

    if (e.key === "Escape") {
      closeLightbox();
    }
  });

  showSection("macro");
});
