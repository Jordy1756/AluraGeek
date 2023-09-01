import { services } from "../model/concatModel.js";

const showToast = (message, type) => {
    const toast = document.querySelector(".toast");
    toast.classList.add("toast-active", `toast-${type}`);
    toast.querySelector(".toast-message").textContent = message;
    setTimeout(() => {
        toast.classList.remove("toast-active");
    }, 2000);
};

const buttonConcat = document.getElementById("concat-button");

buttonConcat.addEventListener("click", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    name !== "" && message !== "" ? add(name, message) : showToast("Debes llenar todos los campos", "error");
});

const add = async (name, message) => {
    try {
        // TODO: FALTA HACER QUE NO RECARGUE LA PÁGINA
        console.log(await services.add(name, message));
        showToast("Mensaje enviado", "success");
    } catch (error) {
        console.log(error);
        showToast("Ocurrió un error, intentalo más tarde", "error");
    }
};
