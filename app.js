var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.addEventListener("click", () =>{
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
})