import { USER_URL } from "../../constants/apiConstants.js";
import { CustomError } from "../utils/errorTypes.js";

export const loginUserService = async (user) => {
    const response = await fetch(`${USER_URL}/login-user`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });

    const data = await response.json();

    if (!response.ok) throw new CustomError(data.name, data.message);

    return data;
};

export const logoutUserService = async () => {
    const response = await fetch(`${USER_URL}/logout-user`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
    });

    const data = await response.json();

    if (!response.ok) throw new CustomError(data.name, data.message);

    return data;
};

export const getAuthStatusService = async () => {
    const response = await fetch(`${USER_URL}/get-auth-status`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
    });

    const data = await response.json();

    if (!response.ok) throw new CustomError(data.name, data.message);

    return data;
};
