import { services as consoleServices } from "../../model/consoleModel.js";
import { services as starWarsServices } from "../../model/starWarsModel.js";
import { services as variousServices } from "../../model/variousModel.js";
import { utils } from "../../js/utils.js";

const service = {
    consoles: consoleServices,
    starWars: starWarsServices,
    various: variousServices,
};

const url = new URL(window.location);
const id = url.searchParams.get("id");
const category = url.searchParams.get("category");

function setArticle(name, price, description, image) {
    document.querySelector(".article-image-selected").src = image;
    document.querySelector(".article-name-selected").textContent = name;
    document.querySelector(".article-price-selected").textContent = price;
    document.querySelector(".article-description-selected").textContent = description;
}

const getArticle = async (category, id) => await service[category].get(id);

const showSimilarArticles = articles => {
    const articlesSection = document.querySelector(".articles-section");
    articlesSection.insertAdjacentHTML("beforeend", utils.showHeaders("Artículos similares", category));
    articlesSection.appendChild(utils.showArticles(articles, category));
};

const main = async () => {
    try {
        const { name, price, description, image } = await getArticle(category, id);
        if (name === "") throw new Error("Debes llenar todos los campos");
        const articles = await service[category].getSome(utils.handleWidth());
        if (articles.length === 0) throw new Error("Ocurrió un error al cargar los artículos, por favor intentalo de nuevo más tarde");
        setArticle(name, price, description, image);
        showSimilarArticles(articles);
    } catch (error) {
        utils.showToast(error.message, "error");
    }
};

main();
