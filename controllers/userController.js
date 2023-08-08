import { services } from "../model/userModel.js";

const button = document.getElementById("btn-login");

button.addEventListener("click", event => {
    event.preventDefault();
    verify(document.getElementById("email").value, document.getElementById("password").value);
});

const verify = async (email, password) => {
    try {
        const user = await services.verify(email, password);
        if (user.length === 0) throw new Error();
        window.location.href = "../index.html";
    } catch (error) {
        const toast = document.querySelector(".toast");
        toast.classList.add("toast-active");
        setTimeout(() => {
            toast.classList.remove("toast-active");
        }, 3000);
    }
};
