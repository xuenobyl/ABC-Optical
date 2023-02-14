let menu = document.getElementById("menu");
let burger = document.getElementById("burger");
burger.addEventListener("click", () => {
    if (menu.className === "hidden"){
        menu.className = "visible";
        burger.className = "fa-solid fa-x"
    } else {
        menu.className = "hidden";
        burger.className = "fa-solid fa-bars";
    }
});

let menuItem = document.querySelectorAll("#menu a");
menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        menu.className = "hidden"
        burger.className = "fa-solid fa-bars";
    })
});