import { services as consoleServices } from "../../model/consoleModel.js";
import { services as starWarsServices } from "../../model/starWarsModel.js";
import { services as variousServices } from "../../model/variousModel.js";
import { utils } from "../../js/utils.js";

const service = {
    consoles: consoleServices,
    starWars: starWarsServices,
    various: variousServices,
};

const names = {
    consoles: "Consolas",
    starWars: "Star Wars",
    various: "Diversos",
};

const { showAllArticles, showToast } = utils;

const url = new URL(window.location);
const category = url.searchParams.get("category");

const deletebutton = document.getElementById("button-delete-article");
deletebutton.addEventListener("click", () => {
    service[category].remove(document.getElementById("article-id").value);
});

const getAll = async () => {
    try {
        const articles = await service[category].getAll();
        if (articles.length === 0) throw new Error("Ocurrió un error al cargar los artículos, por favor intentalo de nuevo más tarde");
        document.querySelector(".article-section-title").textContent = names[category];
        const articlesSection = document.querySelector(".articles-container");
        showAllArticles(articles, articlesSection, category);
    } catch (error) {
        showToast(error.message, "error");
    }
};

getAll();
