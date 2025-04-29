import { renderArticleSection } from "../components/articlesGallery.js";
import { getRecommendedArticlesService } from "../services/articleService.js";
import { isAuthenticated } from "../utils/handleAuth.js";

const { articleId, image, articleName, price, description } = Object.fromEntries(
    new URL(window.location).searchParams.entries()
);

const setArticleDetails = () => {
    const container = document.querySelector("#article-details");
    const img = container.querySelector("figure > img");
    const infoSection = container.querySelector("div > section");

    img.src = image;
    img.alt = `Producto ${articleName}`;
    container.querySelector("figure > figcaption").textContent = articleName;
    infoSection.querySelector("h1").textContent = articleName;
    infoSection.querySelector("span").textContent = price;
    infoSection.querySelector("p").textContent = description;
    document.querySelector("#article-actions").style.display = isAuthenticated ? "flex" : "none";
};

const getRecommendedArticles = async () => {
    try {
        const { data } = await getRecommendedArticlesService(articleId);
        const section = document.querySelector("#articles-section");
        data.forEach(({ category, articles }) => renderArticleSection(section, category, articles));
    } catch (error) {
        console.log(error);
    }
};

const initializeApp = async () => {
    setArticleDetails();
    await getRecommendedArticles();
};

initializeApp();
