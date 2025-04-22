import { services } from "../../model/articleModel.js";
import { utils } from "../../js/utils.js";

const categoryNames = {
    consoles: "Consolas",
    starWars: "Star Wars",
    various: "Diversos",
};

const { showAllArticles, showToast } = utils;

const url = new URL(window.location);
const category = url.searchParams.get("category");

const deletebutton = document.getElementById("button-delete-article");
deletebutton.addEventListener("click", () => {
    services.remove(document.getElementById("article-id").value);
});

const goToAddButton = document.getElementById("add-new-article-button");
goToAddButton.href = `../html/addNewArticle.html?category=${category}`;

if (localStorage.getItem("success-update")) {
    showToast("El artículo se actualizó correctamente", "success");
    localStorage.removeItem("success-update");
}

const getAll = async () => {
    try {
        const articles = await services.getAll(category);
        if (articles.length === 0) throw new Error("Ocurrió un error al cargar los artículos, por favor intentalo de nuevo más tarde");
        document.querySelector(".article-section-title").textContent = categoryNames[category];
        const articlesSection = document.querySelector(".articles-container");
        showAllArticles(articles, articlesSection, category);
    } catch (error) {
        showToast(error.message, "error");
    }
};

getAll();
