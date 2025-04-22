import { services } from "../../model/articleModel.js";
import { utils } from "../../js/utils.js";

const { handleWidth, showHeaders, showArticles, showToast } = utils;

const categoryNames = {
    0: "Star Wars",
    1: "Consolas",
    2: "Diversos",
};

const categories = {
    0: "starWars",
    1: "consoles",
    2: "various",
};

const getSome = async () => {
    try {
        const articles = await Promise.all([
            await services.getSome("starWars", handleWidth()),
            await services.getSome("consoles", handleWidth()),
            await services.getSome("various", handleWidth()),
        ]);

        if (articles.length === 0) throw new Error("Ocurrió un error al cargar los articulos, por favor intentalo de nuevo más tarde");

        articles.forEach((articles, index) => {
            if (articles.length !== 0) {
                const articlesSection = document.querySelector(".articles-section");
                articlesSection.insertAdjacentHTML("beforeend", showHeaders(categoryNames[index], categories[index], ""));
                articlesSection.appendChild(showArticles(articles, categories[index], ""));
            }
        });
    } catch (error) {
        showToast(error.message, "error");
    }
};

getSome();
