import { getAuthStatusService, logoutUserService } from "../services/userService.js";
import { BASE_PATH } from "../utils/handleUrl.js";

export const initHeader = async (showToast, setToastToShowOnReload) => {
    const header = document.querySelector(".header");
    const searchForm = header.querySelector("nav > form");
    const loginButton = header.querySelector("#login-button");
    const logoutButton = header.querySelector("#logout-button");

    let isAuthenticated = false;

    try {
        isAuthenticated = (await getAuthStatusService()).isAuthenticated;
    } catch (error) {
        console.error(error);
    }

    const getIsAuthenticated = () => isAuthenticated;

    const logoutUser = async () => {
        try {
            await logoutUserService();
            isAuthenticated = false;
            setToastToShowOnReload("success", "Sesión cerrada", "Has cerrado sesión correctamente");
            window.location.href = `${BASE_PATH}/index.html`;
        } catch (error) {
            console.error(error);
            showToast("error", error.name, error.message);
        }
    };

    const toggleOpenHeader = () => header.classList.toggle("open");

    const handleSearch = (e) => {
        e.preventDefault();
        const { search } = Object.fromEntries(new FormData(e.target).entries());
        window.location.href = `${BASE_PATH}/src/views/search-articles.html?query=${search}`;
    };

    loginButton.style.display = isAuthenticated ? "none" : "flex";
    logoutButton.style.display = isAuthenticated ? "flex" : "none";

    logoutButton.addEventListener("click", logoutUser);
    searchForm.addEventListener("submit", handleSearch);
    header.querySelector("#open-search-btn").addEventListener("click", toggleOpenHeader);
    header.querySelector("#exit-search-btn").addEventListener("click", toggleOpenHeader);

    return { isAuthenticated, getIsAuthenticated };
};
