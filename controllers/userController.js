import { services } from "../model/userModel.js";

const showToast = () => {
    const toast = document.querySelector(".toast");
    toast.classList.add("toast-active");
    setTimeout(() => {
        toast.classList.remove("toast-active");
    }, 3000);
};

const button = document.getElementById("btn-login");

button.addEventListener("click", event => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    email !== "" && password !== "" ? verify(email, password) : showToast();
});

const verify = async (email, password) => {
    try {
        const user = await services.verify(email, password);
        if (user.length === 0) throw new Error();
        localStorage.setItem("email", user[0].email);
        window.location.href = "../index.html";
    } catch (error) {
        showToast();
    }
};
