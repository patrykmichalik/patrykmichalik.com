document.querySelector(".header__menu-toggle").onclick = function() {
    if(document.querySelector(".header__drawer").classList.contains("header__drawer_open")) {
        document.querySelector(".header__drawer").classList.remove("header__drawer_open");
        document.querySelector(".header__sandwich").classList.remove("header__sandwich_appearance_x");
    } else {
        document.querySelector(".header__drawer").classList.add("header__drawer_open");
        document.querySelector(".header__sandwich").classList.add("header__sandwich_appearance_x");
    }
};