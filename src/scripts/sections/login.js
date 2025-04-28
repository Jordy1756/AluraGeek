import { loginUserService } from "../services/userService.js";

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(e.target).entries());

    try {
        await loginUserService({ email, password });
        // window.location.href = "/index.html";
    } catch (error) {
        console.error(error);
    }
});
