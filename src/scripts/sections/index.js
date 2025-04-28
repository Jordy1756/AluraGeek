import { getSomeArticlesService } from "../services/articleService.js";
import { renderArticleSection } from "../components/articlesGallery.js";

const getSomeArticles = async () => {
    const { data } = await getSomeArticlesService();

    const section = document.querySelector("#articles-section");

    data.forEach(({ category, articles }) => renderArticleSection(section, category, articles));
};

getSomeArticles();
