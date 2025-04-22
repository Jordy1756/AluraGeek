import { services } from "../../model/articleModel.js";
import { utils } from "../../js/utils.js";

const { handleWidth, showHeaders, showArticles, showToast } = utils;

const url = new URL(window.location);
const id = url.searchParams.get("id");
const category = url.searchParams.get("category");

function setArticle(name, price, description, image) {
    document.querySelector(".article-image-selected").src = image;
    document.querySelector(".article-name-selected").textContent = name;
    document.querySelector(".article-price-selected").textContent = price;
    document.querySelector(".article-description-selected").textContent = description;
}

const showSimilarArticles = articles => {
    const articlesSection = document.querySelector(".articles-section");
    articlesSection.insertAdjacentHTML("beforeend", showHeaders("Artículos similares", category, "."));
    articlesSection.appendChild(showArticles(articles, category, "."));
};

const main = async () => {
    try {
        const { name, price, description, image } = await services.get(id);
        if (name === "") throw new Error("Debes llenar todos los campos");
        setArticle(name, price, description, image);
        const articles = await services.getSome(category, handleWidth());
        if (articles.length === 0) throw new Error("Ocurrió un error al cargar los artículos, por favor intentalo de nuevo más tarde");
        showSimilarArticles(articles);
    } catch (error) {
        showToast(error.message, "error");
    }
};

main();
