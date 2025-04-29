import { CATEGORY_URL } from "../../constants/apiConstants.js";

export const getAllCategoriesService = async () => {
    const response = await fetch(`${CATEGORY_URL}/get-all-categories`, {
        credentials: "include",
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    if (!data) throw new Error();

    return data;
};
