import { services } from "../model/concatModel.js";
import { utils } from "../js/utils.js";

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
        await services.add(name, message);
        utils.showToast("Mensaje enviado", "success");
    } catch (error) {
        utils.showToast("Ocurrió un error, intentalo más tarde", "error");
    }
};
