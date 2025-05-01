import { initHeader } from "../components/header.js";
import { loginUserService } from "../services/userService.js";
import { LOGIN_ERROR_MESSAGES } from "../utils/errorTypes.js";
import { initValidations } from "../utils/handleValidations.js";

const initApp = async () => {
    const { isAuthenticated } = await initHeader();
    isAuthenticated && (window.location.href = "/index.html");

    const loginForm = document.getElementById("login-form");

    const loginUser = async (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.target).entries());

        try {
            await loginUserService({ email, password });
            window.location.href = "/index.html";
        } catch (error) {
            console.error(error);
        }
    };

    loginForm.addEventListener("submit", loginUser);
    initValidations(loginForm, LOGIN_ERROR_MESSAGES);
};

initApp();
