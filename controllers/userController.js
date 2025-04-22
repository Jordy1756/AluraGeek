import { services } from "../model/userModel.js";
import { utils } from "../js/utils.js";

const { showToast } = utils;

const button = document.getElementById("btn-login");
button.addEventListener("click", e => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    email !== "" && password !== "" ? verify(email, password) : showToast("Debes llenar todos los campos", "error");
});

const verify = async (email, password) => {
    try {
        const user = await services.verify(email, password);
        if (user.length === 0) throw new Error("Correo y contraseña incorrectos");
        localStorage.setItem("email", user[0].email);
        window.location.href = "../index.html";
    } catch (error) {
        showToast(error.message, "error");
    }
};
