import { utils } from "../../js/utils.js";

const showAllSearchedArticles = articles => {
    const articlesSection = document.querySelector(".articles-container");
    utils.showAllArticles(articles, articlesSection);
};

showAllSearchedArticles(JSON.parse(localStorage.getItem("articles")));
