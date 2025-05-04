import { LOGIN_ERROR_MESSAGES } from "../../constants/errorConstants.js";
import { initFooter } from "../components/footer.js";
import { initHeader } from "../components/header.js";
import { initToast } from "../components/toast.js";
import { loginUserService } from "../services/userService.js";
import { BASE_PATH } from "../utils/handleUrl.js";
import { initValidations } from "../utils/handleValidations.js";

const initLogin = async () => {
    const { showToast, setToastToShowOnReload } = initToast();
    const { isAuthenticated } = await initHeader(showToast, setToastToShowOnReload);
    isAuthenticated && (window.location.href = "./index.html");

    const loginForm = document.getElementById("login-form");

    const loginUser = async (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.target).entries());

        try {
            await loginUserService({ email, password });
            setToastToShowOnReload("success", "¡Bienvenido!", "Has iniciado sesión correctamente");
            window.location.href = `${BASE_PATH}/index.html`;
        } catch (error) {
            console.error(error);
            showToast("error", error.name, error.message);
        }
    };

    loginForm.addEventListener("submit", loginUser);
    initValidations(loginForm, LOGIN_ERROR_MESSAGES);
    initFooter(showToast);
};

initLogin();
