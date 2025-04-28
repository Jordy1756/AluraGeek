import { getSomeArticlesService } from "../services/articleService.js";
import { renderArticleSection } from "../components/articlesGallery.js";
// import { getAuthStatus } from "../utils/getAuthStatus.js";

const getSomeArticles = async () => {
    const { data } = await getSomeArticlesService();

    const section = document.querySelector("#articles-section");

    data.forEach(({ category, articles }) => renderArticleSection(section, category, articles));
};

console.log("a")
// getAuthStatus();
console.log("b")
getSomeArticles();
console.log("c");
