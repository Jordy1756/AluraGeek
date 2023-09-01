import { services as consoleServices } from "../../model/consoleModel.js";
import { services as starWarsServices } from "../../model/starWarsModel.js";
import { services as variousServices } from "../../model/variousModel.js";

const service = {
    consoles: consoleServices,
    starWars: starWarsServices,
    various: variousServices,
};

const showToast = (message, type) => {
    const toast = document.querySelector(".toast");
    toast.classList.add("toast-active", `toast-${type}`);
    toast.querySelector(".toast-message").textContent = message;
    setTimeout(() => {
        toast.classList.remove("toast-active");
    }, 3000);
};

const button = document.getElementById("button-add-new-article");
button.addEventListener("click", async e => {
    e.preventDefault();
    try {
        const image = document.getElementById("image").value;
        const category = document.getElementById("category").value;
        const name = document.getElementById("product-name").value;
        const price = document.getElementById("price").value;
        const description = document.getElementById("description").value;
        if (image === "" || name === "" || price === "" || description === "") throw new Error("Debes llenar todos los campos");
        await service[category].add(image, name, price, description);
        showToast("El producto se agregó correctamente", "success");
    } catch (error) {
        showToast(error.message, "error");
    }
});
