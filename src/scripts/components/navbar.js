import { getAuthStatusService, logoutUserService } from "../services/userService.js";

const logoutUser = async () => {
    await logoutUserService();
    localStorage.setItem("isAuthenticated", false);
    window.location.href = "/index.html";
};

const initializeAuthUI = async () => {
    const loginButton = document.querySelector("#login-button");
    const logoutButton = document.querySelector("#logout-button");

    try {
        const { isAuthenticated } = await getAuthStatusService();
        console.log(isAuthenticated)
        localStorage.setItem("isAuthenticated", isAuthenticated);

        loginButton.style.display = isAuthenticated ? "none" : "flex";
        logoutButton.style.display = isAuthenticated ? "flex" : "none";

        logoutButton.addEventListener("click", logoutUser);
    } catch (error) {
        console.error(error);
    }
};

const setupHeaderControls = () => {
    const header = document.querySelector(".header");
    const searchForm = header.querySelector("nav > form");

    const toggleOpenHeader = () => header.classList.toggle("open");

    const handleSearch = (e) => {
        e.preventDefault();
        const { search } = Object.fromEntries(new FormData(e.target).entries());
        window.location.href = `/src/views/search-articles.html?query=${search}`;
    };

    const setupButton = (id, action) => header.querySelector(id).addEventListener("click", action);

    setupButton("#open-search-btn", toggleOpenHeader);
    setupButton("#exit-search-btn", toggleOpenHeader);
    searchForm.addEventListener("submit", handleSearch);
};

const initializeApp = async () => {
    await initializeAuthUI();
    setupHeaderControls();
};

initializeApp();
