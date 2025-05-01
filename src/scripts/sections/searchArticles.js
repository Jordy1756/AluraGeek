import { initArticlesGallery } from "../components/articlesGallery.js";
import { initHeader } from "../components/header.js";
import { searchArticlesService } from "../services/articleService.js";
import { trackPreviousUrl } from "../utils/handlePreviousUrl.js";

const initApp = async () => {
    const url = new URL(window.location);
    const { query } = Object.fromEntries(url.searchParams.entries());

    const { isAuthenticated } = await initHeader();
    const { renderArticles } = initArticlesGallery();

    const sectionHeader = document.querySelector(".articles__section > div > header");

    const setSectionHeader = () => {
        sectionHeader.querySelector("button").style.display = isAuthenticated ? "flex" : "none";
    };

    const searchArticles = async () => {
        const articlesSection = document.querySelector("#articles-container");
        const notFoundSection = document.querySelector("#not-found-section");

        const articles = await searchArticlesService(query);

        if (articles.length <= 0) return;

        sectionHeader.style.display = "flex";
        notFoundSection.style.display = "none";
        articlesSection.insertAdjacentHTML("beforeend", renderArticles(articles));
    };

    setSectionHeader();
    searchArticles();
    trackPreviousUrl();
};

initApp();
