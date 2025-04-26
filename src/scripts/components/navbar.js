import { searchArticlesService } from "../services/articleService.js";

const header = document.querySelector(".header");
const searchForm = header.querySelector("nav > form");

const toggleOpenHeader = () => header.classList.toggle("open");

header.querySelector("#open-search-btn").addEventListener("click", () => toggleOpenHeader());
header.querySelector("#exit-search-btn").addEventListener("click", () => toggleOpenHeader());

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { search } = Object.fromEntries(new FormData(e.target).entries());
    try {
        if (search === "") throw new Error("El campo no debe estas vacío");
        const articles = await searchArticlesService(search);

        if (articles.length === 0) throw new Error("No se encontraron artículos");
        // localStorage.setItem("articles", JSON.stringify(articles));
        window.location.href = "/src/views/search-articles.html";
    } catch (error) {
        // showToast(error.message, "error");
    }
});
