import { services as consoleServices } from "../../model/consoleModel.js";
import { services as starWarsServices } from "../../model/starWarsModel.js";
import { services as variousServices } from "../../model/variousModel.js";
import { utils } from "../../js/utils.js";

const categories = ["consoles", "starWars", "various"];

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", async e => {
    e.preventDefault();
    const inputSearch = document.querySelector("#search").value;
    try {
        if (inputSearch === "") throw new Error("El campo no debe estas vacío");
        const articles = await Promise.all([
            consoleServices.search(inputSearch),
            starWarsServices.search(inputSearch),
            variousServices.search(inputSearch),
        ]).then(data => data.map((element, index) => element.map(item => ({ ...item, category: categories[index] }))).flat());

        if (articles.length === 0) throw new Error("No se encontraron artículos");
        localStorage.setItem("articles", JSON.stringify(articles));
        window.location.href = "../../html/searchArticle.html";
    } catch (error) {
        utils.showToast(error.message, "error");
    }
});