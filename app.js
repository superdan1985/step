const nav = document.getElementById("nav")
const burger = document.getElementById("burger")

burger.addEventListener("click", () => {
    if (nav.classList.contains("show-nav")) {
        nav.classList.remove("show-nav")
        burger.classList.remove("open")
    } else {
        nav.classList.add("show-nav")
        burger.classList.add("open")
    }
})