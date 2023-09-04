import { services } from "../model/concatModel.js";
import { utils } from "../js/utils.js";

const { showToast } = utils;

const buttonConcat = document.getElementById("concat-button");
buttonConcat.addEventListener("click", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    name !== "" && message !== "" ? add(name, message) : showToast("Debes llenar todos los campos", "error");
});

const add = async (name, message) => {
    try {
        await services.add(name, message);
        localStorage.setItem("concat-success", true);
    } catch (error) {
        showToast("Ocurrió un error, intentalo más tarde", "error");
    }
};

if (localStorage.getItem("concat-success")) {
    showToast("Mensaje enviado", "success");
    localStorage.removeItem("concat-success");
}
