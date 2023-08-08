import { services } from "../model/concatModel.js";

const showToast = message => {
    const toast = document.querySelector(".toast");
    toast.classList.add("toast-active");
    toast.querySelector(".toast-message").textContent = message;
    setTimeout(() => {
        toast.classList.remove("toast-active");
    }, 3000);
};

const buttonConcat = document.getElementById("concat-button");

buttonConcat.addEventListener("click", event => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    name !== "" && message !== "" ? add(name, message) : showToast("Debes llenar todos los campos");
});

const add = async (name, message) => {
    try {
        // TODO: FALTA HACER QUE NO RECARGUE LA PÁGINA
        const concat = await services.add(name, message);
        console.log(concat);
    } catch (error) {
        showToast("Ocurrió un error, intentalo más tarde");
    }
};
