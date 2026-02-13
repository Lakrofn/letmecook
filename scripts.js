/* inicio de sesión */
let registerBtn = document.getElementById("register");
let contenedor = document.getElementById("contenedor");
let loginBtn = document.getElementById("login");
let botonBtn = document.getElementById("botones");

botonBtn.addEventListener("click", function() {
    window.location.href = "index.html";
});

registerBtn.addEventListener("click", () => {
    contenedor.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    contenedor.classList.remove("active");
});

/* Hamburguesa */
function toggleMenu() {
    const menu = document.querySelector('#menu');
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
