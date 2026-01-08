const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-mobile");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// 👉 cerrar menú al tocar un enlace
document.querySelectorAll("#menu-mobile a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});
