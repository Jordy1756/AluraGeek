import { services } from "../model/userModel.js";

const showToast = message => {
    const toast = document.querySelector(".toast");
    toast.classList.add("toast-active");
    toast.parentElement.querySelector("toast-message").textContent = message;
    setTimeout(() => {
        toast.classList.remove("toast-active");
    }, 3000);
};

const button = document.getElementById("btn-login");

button.addEventListener("click", event => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    email !== "" && password !== "" ? verify(email, password) : showToast("Debes llenar todos los campos");
});

const verify = async (email, password) => {
    try {
        const user = await services.verify(email, password);
        if (user.length === 0) throw new Error("Correo y contraseña incorrectos");
        localStorage.setItem("email", user[0].email);
        window.location.href = "../index.html";
    } catch (error) {
        showToast(error.message);
    }
};
