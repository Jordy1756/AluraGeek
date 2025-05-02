import { initFooter } from "../components/footer.js";
import { initHeader } from "../components/header.js";
import { initToast } from "../components/toast.js";
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
            setToastToShowOnReload("success", "¡Bienvenido!", "Has iniciado sesión correctamente");
            window.location.href = "/index.html";
        } catch (error) {
            console.error(error);
            showToast("error", error.name, error.message);
        }
    };

    loginForm.addEventListener("submit", loginUser);
    initValidations(loginForm, LOGIN_ERROR_MESSAGES);

    initFooter();
    const { showToast, setToastToShowOnReload } = initToast();
};

initApp();
