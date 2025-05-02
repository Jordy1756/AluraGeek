import { CATEGORY_URL } from "../../constants/apiConstants.js";
import { CustomError } from "../utils/errorTypes.js";

export const getAllCategoriesService = async () => {
    const response = await fetch(`${CATEGORY_URL}/get-all-categories`, {
        credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) throw new CustomError(data.name, data.message);

    return data;
};
