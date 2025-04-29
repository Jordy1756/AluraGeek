import { renderArticles } from "../components/articlesGallery.js";
import { getAllArticlesService } from "../services/articleService.js";
import { trackPreviousUrl } from "../utils/handlePreviousUrl.js";

const url = new URL(window.location);
const { categoryId, categoryName } = Object.fromEntries(url.searchParams.entries());

const isLoggedIn = localStorage.getItem("isLoggedIn");

const setSectionHeader = () => {
    const sectionHeader = document.querySelector(".articles__section > div > header");

    sectionHeader.querySelector("h2").textContent = categoryName;
    sectionHeader.querySelector("a").style.display = isLoggedIn ? "flex" : "none";
};

const getAllArticles = async () => {
    const articles = await getAllArticlesService(categoryId);

    const section = document.querySelector("#articles-container");

    section.insertAdjacentHTML("beforeend", renderArticles(articles));
};

setSectionHeader();
getAllArticles();
trackPreviousUrl();
