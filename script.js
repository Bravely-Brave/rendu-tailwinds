// pour le menu déroulant



const navv = document.querySelector("#nav");
const menuu = document.querySelector("#menu");
const deroulant = document.querySelector("#menu-deroulant");

menuu.addEventListener("click", () => {
    navv.classList.toggle("appears");
    deroulant.classList.toggle("appears");
});
