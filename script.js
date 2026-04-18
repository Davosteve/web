document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SPA NAVIGATION
  ========================= */

  const sections = document.querySelectorAll('.section');
  const links = document.querySelectorAll('#header-menu a');

  function showSection(id){
    sections.forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
  }

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // 🔥 evita scroll
      const section = link.dataset.section;
      showSection(section);
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

  function showImage() {
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    caption.textContent = img.getAttribute("data-title") || "";
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      showImage();
      lightbox.classList.add("active");
    });
  });

  function closeLightbox(){
    lightbox.classList.remove("active");
  }

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
      showImage();
    }

    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    }

    if (e.key === "Escape") {
      closeLightbox();
    }
  });

});
