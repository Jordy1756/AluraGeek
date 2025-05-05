import { initArticlesGallery } from "../components/articlesGallery.js";
import { initFooter } from "../components/footer.js";
import { initHeader } from "../components/header.js";
import { initToast } from "../components/toast.js";
import { searchArticlesService } from "../services/articleService.js";
import { trackPreviousUrl } from "../utils/handleUrl.js";
import { initInsertArticle } from "./insertArticle.js";

const initSearchArticles = async () => {
    const url = new URL(window.location);
    const { query } = Object.fromEntries(url.searchParams.entries());

    const { showToast, setToastToShowOnReload } = initToast();
    const { isAuthenticated } = await initHeader(showToast, setToastToShowOnReload);
    const { renderArticles } = initArticlesGallery();

    const articlesSection = document.querySelector("#articles-section");
    const notFoundSection = document.querySelector("#not-found-section");

    if (isAuthenticated) {
        articlesSection.querySelector(".open__insert-article-modal-btn").style.display = "flex";
        notFoundSection.querySelector(".open__insert-article-modal-btn").style.display = "flex";
        initInsertArticle("", showToast, setToastToShowOnReload);
    }

    const searchArticles = async () => {
        const articles = await searchArticlesService(query);

        if (articles.length <= 0) return (notFoundSection.style.display = "flex");

        articlesSection.style.display = "flex";
        articlesSection.querySelector("#articles-container").insertAdjacentHTML("beforeend", renderArticles(articles));
    };

    initFooter(showToast);
    trackPreviousUrl();
    await searchArticles();
};

initSearchArticles();
