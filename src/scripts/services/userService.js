import { USER_URL } from "../../constants/apiConstants.js";

export const loginUserService = async (user) => {
    const response = await fetch(`${USER_URL}/login-user`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    if (!data) throw new Error();

    return data;
};

export const logoutUserService = async () => {
    const response = await fetch(`${USER_URL}/logout-user`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    if (!data) throw new Error();

    return data;
};

export const getAuthStatusService = async () => {
    const response = await fetch(`${USER_URL}/get-auth-status`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    if (!data) throw new Error();

    return data;
};
