import { renderArticleSection } from "../components/articlesGallery.js";
import { getRecommendedArticlesService } from "../services/articleService.js";

const url = new URL(window.location);
const { articleId, articleName, image, price, description } = Object.fromEntries(url.searchParams.entries());

const setArticle = () => {
    const articleDetails = document.querySelector("#article-details");
    const articleImage = articleDetails.querySelector("figure > img");

    articleImage.src = image;
    articleImage.alt = `Producto ${articleName}`;
    articleDetails.querySelector("div > h1").textContent = articleName;
    articleDetails.querySelector("figure > figcaption").textContent = articleName;
    articleDetails.querySelector("div > span").textContent = price;
    articleDetails.querySelector("div > p").textContent = description;
};

const getRecommendedArticles = async () => {
    const { data } = await getRecommendedArticlesService(articleId);

    const section = document.querySelector("#articles-section");

    data.forEach(({ category, articles }) => renderArticleSection(section, category, articles));
};

setArticle();
getRecommendedArticles();
