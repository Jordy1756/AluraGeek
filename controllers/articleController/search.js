import { services } from "../../model/articleModel.js";
import { utils } from "../../js/utils.js";

const { showToast } = utils;

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", async e => {
    e.preventDefault();
    const inputSearch = document.querySelector("#search").value;
    try {
        if (inputSearch === "") throw new Error("El campo no debe estas vacío");
        const articles = await services.search(inputSearch);

        if (articles.length === 0) throw new Error("No se encontraron artículos");
        localStorage.setItem("articles", JSON.stringify(articles));
        window.location.href = "../../html/searchArticle.html";
    } catch (error) {
        showToast(error.message, "error");
    }
});
