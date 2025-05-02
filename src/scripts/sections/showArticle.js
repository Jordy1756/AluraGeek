import { initArticlesGallery } from "../components/articlesGallery.js";
import { initFooter } from "../components/footer.js";
import { initHeader } from "../components/header.js";
import { initToast } from "../components/toast.js";
import { getRecommendedArticlesService } from "../services/articleService.js";
import { initDeleteArticle } from "./deleteArticle.js";
import { initUpdateArticle } from "./updateArticle.js";

const initShowArticle = async () => {
    const { articleId, image, name, price, description, articleCategories } = Object.fromEntries(
        new URL(window.location).searchParams.entries()
    );

    const { showToast, setToastToShowOnReload } = initToast();
    const { isAuthenticated } = await initHeader(showToast, setToastToShowOnReload);
    const { renderArticleSection } = initArticlesGallery();

    const setArticleDetails = () => {
        const articlesDetailsContainer = document.querySelector("#article-details");
        const articleImage = articlesDetailsContainer.querySelector("figure > img");
        const articleInfoSection = articlesDetailsContainer.querySelector("div > section");

        articleImage.src = image;
        articleImage.alt = `Producto ${name}`;
        articlesDetailsContainer.querySelector("figure > figcaption").textContent = name;
        articleInfoSection.querySelector("h1").textContent = name;
        articleInfoSection.querySelector("span").textContent = price;
        articleInfoSection.querySelector("p").textContent = description;
        articlesDetailsContainer.querySelector("#article-actions").style.display = isAuthenticated ? "flex" : "none";
    };

    const getRecommendedArticles = async () => {
        try {
            const { data } = await getRecommendedArticlesService(articleId);
            const artcilesSection = document.querySelector("#articles-section");
            data.forEach(({ category, articles }) => renderArticleSection(artcilesSection, category, articles));
        } catch (error) {
            console.error(error);
            showToast("error", error.name, error.message);
        }
    };

    setArticleDetails();
    initFooter(showToast);
    await getRecommendedArticles();

    if (isAuthenticated) {
        initUpdateArticle(
            { articleId, image, name, price, description, articleCategories },
            showToast,
            setToastToShowOnReload
        );
        initDeleteArticle(articleId, showToast, setToastToShowOnReload);
    }
};

initShowArticle();
