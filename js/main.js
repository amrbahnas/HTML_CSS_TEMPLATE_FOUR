let navMenu = document.querySelector(".landing .menu");

document.documentElement.addEventListener("click", function (e) {
    navMenu.style.right = "-1000px";
    if (e.target.className === "fa-solid fa-bars") {
        navMenu.style.right = "0";
    }
})
