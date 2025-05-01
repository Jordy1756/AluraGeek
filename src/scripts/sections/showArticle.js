import { initArticlesGallery } from "../components/articlesGallery.js";
import { initHeader } from "../components/header.js";
import { getRecommendedArticlesService } from "../services/articleService.js";

const initApp = async () => {
    const { articleId, image, name, price, description } = Object.fromEntries(
        new URL(window.location).searchParams.entries()
    );

    const { isAuthenticated } = await initHeader();
    const { renderArticleSection } = initArticlesGallery();

    const articlesDetailsContainer = document.querySelector("#article-details");
    const articleImage = articlesDetailsContainer.querySelector("figure > img");
    const articleInfoSection = articlesDetailsContainer.querySelector("div > section");

    const setArticleDetails = () => {
        articleImage.src = image;
        articleImage.alt = `Producto ${name}`;
        articlesDetailsContainer.querySelector("figure > figcaption").textContent = name;
        articleInfoSection.querySelector("h1").textContent = name;
        articleInfoSection.querySelector("span").textContent = price;
        articleInfoSection.querySelector("p").textContent = description;
        document.querySelector("#article-actions").style.display = isAuthenticated ? "flex" : "none";
    };

    const getRecommendedArticles = async () => {
        try {
            const { data } = await getRecommendedArticlesService(articleId);
            const artcilesSection = document.querySelector("#articles-section");
            data.forEach(({ category, articles }) => renderArticleSection(artcilesSection, category, articles));
        } catch (error) {
            console.error(error);
        }
    };

    setArticleDetails();
    await getRecommendedArticles();
};

initApp();
