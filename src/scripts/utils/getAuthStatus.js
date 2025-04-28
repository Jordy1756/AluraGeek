import { getAuthStatusService } from "../services/userService.js";

export const getAuthStatus = async () => {
    const isAuthenticated = await getAuthStatusService();
    console.log(isAuthenticated);
};

