document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#header-menu a");
  const pages = document.querySelectorAll(".page");

  const images = document.querySelectorAll(".gallery-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("close-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentIndex = 0;

  function showPage(pageId) {
    pages.forEach((page) => page.classList.remove("active"));
    const target = document.getElementById(pageId);
    if (target) target.classList.add("active");
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showPage(link.dataset.page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  function showImage() {
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.getAttribute("data-title") || "";
  }

  function openLightbox(index) {
    currentIndex = index;
    showImage();
    lightbox.style.display = "flex";
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    lightbox.style.display = "none";
  });

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    prevImage();
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nextImage();
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") lightbox.style.display = "none";
    }
  });

  showPage("macro");
});
