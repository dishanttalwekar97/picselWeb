const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".hero .slide-track");
  if (track) {
    track.innerHTML += track.innerHTML; // duplicate boxes for infinite scroll
  }
});

