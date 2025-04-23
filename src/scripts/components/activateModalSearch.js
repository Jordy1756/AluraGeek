const buttonActiveSearch = document.querySelector(".button-active-search");
const buttonExitSearch = document.querySelector(".button-exit-search");

buttonActiveSearch.addEventListener("click", () => {
    const container = document.getElementById("container-search");
    container.classList.add("container-search");
    setTimeout(() => {
        buttonExitSearch.classList.add("button-exit-search-active");
        container.classList.add("container-search-active");
        buttonActiveSearch.style.display = "none";
    }, 300);
});

buttonExitSearch.addEventListener("click", () => {
    const container = document.getElementById("container-search");
    container.classList.remove("container-search-active");
    setTimeout(() => {
        container.classList.remove("container-search");
        buttonActiveSearch.style.display = "grid";
    }, 300);
});
