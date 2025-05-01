import { ARTICLE_URL, ARTICLES_LIMIT, CATEGORY_LIMIT } from "../../constants/apiConstants.js";

export const updateArticleService = async (article) => {
    const response = await fetch(`${ARTICLE_URL}/update-article/${article.id}`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(article),
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    if (!data) throw new Error();

    return data;
};

export const deleteArticleService = async (articleId) => {
    const response = await fetch(`${ARTICLE_URL}/delete-article/${articleId}`, {
        method: "DELETE",
        credentials: "include",
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    if (!data) throw new Error();

    return data;
};

export const getSomeArticlesService = async () => {
    const response = await fetch(`${ARTICLE_URL}/get-some-articles/${CATEGORY_LIMIT}/${ARTICLES_LIMIT}`, {
        credentials: "include",
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    if (!data) throw new Error();

    return data;
};

export const getRecommendedArticlesService = async (articleId) => {
    const response = await fetch(
        `${ARTICLE_URL}/get-recommended-articles/${articleId}/${CATEGORY_LIMIT}/${ARTICLES_LIMIT}`,
        {
            credentials: "include",
        }
    );

    if (!response.ok) throw new Error();

    const data = await response.json();

    if (!data) throw new Error();

    return data;
};

export const getAllArticlesService = async (categoryId) => {
    const response = await fetch(`${ARTICLE_URL}/get-all-articles/${categoryId}/${20}`, {
        credentials: "include",
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    if (!data) throw new Error();

    return data;
};

export const searchArticlesService = async (query) => {
    const response = await fetch(`${ARTICLE_URL}/search-articles/${query}/${20}`, {
        credentials: "include",
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    if (!data) throw new Error();

    return data;
};
