import { ARTICLE_URL, ARTICLES_LIMIT, CATEGORY_LIMIT } from "../../constants/apiConstants.js";
import { CustomError } from "../utils/errorTypes.js";

export const insertArticleService = async (article) => {
    const response = await fetch(`${ARTICLE_URL}/insert-article`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(article),
    });

    const data = await response.json();

    if (!response.ok) throw new CustomError(data.name, data.message);

    return data;
};

export const updateArticleService = async (article) => {
    const response = await fetch(`${ARTICLE_URL}/update-article/${article.id}`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(article),
    });

    const data = await response.json();

    if (!response.ok) throw new CustomError(data.name, data.message);

    return data;
};

export const deleteArticleService = async (articleId) => {
    const response = await fetch(`${ARTICLE_URL}/delete-article/${articleId}`, {
        method: "DELETE",
        credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) throw new CustomError(data.name, data.message);

    return data;
};

export const getSomeArticlesService = async () => {
    const response = await fetch(
        `${ARTICLE_URL}/get-some-articles?categoryLimit=${CATEGORY_LIMIT}&articlesLimit=${ARTICLES_LIMIT}`,
        {
            credentials: "include",
        }
    );

    const data = await response.json();

    if (!response.ok) throw new CustomError(data.name, data.message);

    return data;
};

export const getRecommendedArticlesService = async (articleId) => {
    const response = await fetch(
        `${ARTICLE_URL}/get-recommended-articles/${articleId}?categoryLimit=${CATEGORY_LIMIT}&articlesLimit=${ARTICLES_LIMIT}`,
        {
            credentials: "include",
        }
    );

    const data = await response.json();

    if (!response.ok) throw new CustomError(data.name, data.message);

    return data;
};

export const getAllArticlesService = async (categoryId) => {
    const response = await fetch(`${ARTICLE_URL}/get-all-articles/${categoryId}?articlesLimit=${20}`, {
        credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) throw new CustomError(data.name, data.message);

    return data;
};

export const searchArticlesService = async (query) => {
    const response = await fetch(`${ARTICLE_URL}/search-articles?query=${query}&articlesLimit=${20}`, {
        credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) throw new CustomError(data.name, data.message);

    return data;
};
