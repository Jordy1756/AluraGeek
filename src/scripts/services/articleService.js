import { ARTICLE_URL, ARTICLES_LIMIT, CATEGORY_LIMIT } from "../../constants/apiConstants.js";

export const getSomeArticlesService = async () => {
    const response = await fetch(`${ARTICLE_URL}/get-some-articles/${CATEGORY_LIMIT}/${ARTICLES_LIMIT}`);

    if (!response.ok) return Error();

    const data = await response.json();

    if (!data) return Error();

    return data;
};

export const getRecommendedArticlesService = async (articleId) => {
    const response = await fetch(
        `${ARTICLE_URL}/get-recommended-articles/${articleId}/${CATEGORY_LIMIT}/${ARTICLES_LIMIT}`
    );

    if (!response.ok) return Error();

    const data = await response.json();

    if (!data) return Error();

    return data;
};

export const getAllArticlesService = async (categoryId) => {
    const response = await fetch(`${ARTICLE_URL}/get-all-articles/${categoryId}/${20}`);

    if (!response.ok) return Error();

    const data = await response.json();

    if (!data) return Error();

    return data;
};

export const searchArticlesService = async (query) => {
    const response = await fetch(`${ARTICLE_URL}/search-articles/${query}/${20}`);

    if (!response.ok) return Error();

    const data = await response.json();

    if (!data) return Error();

    return data;
};
