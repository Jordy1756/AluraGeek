import { COMMENT_URL } from "../constants/apiConstants.js";
import { CustomError } from "../utils/errorTypes.js";

export const insertCommentService = async (comment) => {
    const response = await fetch(`${COMMENT_URL}/insert-comment`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
    });

    const data = await response.json();

    if (!response.ok) throw new CustomError(data.name, data.message);

    return data;
};
