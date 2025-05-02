import { initArticlesGallery } from "../components/articlesGallery.js";
import { initFooter } from "../components/footer.js";
import { initHeader } from "../components/header.js";
import { initToast } from "../components/toast.js";
import { getAllArticlesService } from "../services/articleService.js";
import { trackPreviousUrl } from "../utils/handlePreviousUrl.js";

const initApp = async () => {
    const url = new URL(window.location);
    const { categoryId, categoryName } = Object.fromEntries(url.searchParams.entries());

    const { isAuthenticated } = await initHeader();
    const { renderArticles } = initArticlesGallery();

    const setSectionHeader = () => {
        const sectionHeader = document.querySelector(".articles__section > div > header");

        sectionHeader.querySelector("h2").textContent = categoryName;
        sectionHeader.querySelector(".primary").style.display = isAuthenticated ? "flex" : "none";
    };

    const getAllArticles = async () => {
        try {
            const articles = await getAllArticlesService(categoryId);

            const section = document.querySelector("#articles-container");

            section.insertAdjacentHTML("beforeend", renderArticles(articles));
        } catch (error) {
            console.log(error);
        }
    };

    setSectionHeader();
    await getAllArticles();
    trackPreviousUrl();
    initFooter();
    initToast();
};

initApp();
