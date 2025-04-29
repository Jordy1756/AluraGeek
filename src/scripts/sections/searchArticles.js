import { renderArticles } from "../components/articlesGallery.js";
import { searchArticlesService } from "../services/articleService.js";
import { trackPreviousUrl } from "../utils/handlePreviousUrl.js";

const url = new URL(window.location);
const { query } = Object.fromEntries(url.searchParams.entries());

const sectionHeader = document.querySelector(".articles__section > div > header");
const isLoggedIn = localStorage.getItem("isLoggedIn");

const setSectionHeader = () => {
    sectionHeader.querySelector("a").style.display = isLoggedIn ? "flex" : "none";
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
