import { services as consoleServices, services } from "../../model/consoleModel.js";
import { services as starWarsServices } from "../../model/starWarsModel.js";
import { services as variousServices } from "../../model/variousModel.js";

const service = {
    consoles: consoleServices,
    starWars: starWarsServices,
    various: variousServices,
};

const url = new URL(window.location);
const id = url.searchParams.get("id");
const categoryUrl = url.searchParams.get("category");

const showToast = (message, type) => {
    const toast = document.querySelector(".toast");
    toast.classList.add("toast-active", `toast-${type}`);
    toast.querySelector(".toast-message").textContent = message;
    setTimeout(() => {
        toast.classList.remove("toast-active");
    }, 3000);
};

const setData = () => {
    document.getElementById("image").value = url.searchParams.get("image");
    document.getElementById("category").value = categoryUrl;
    document.getElementById("product-name").value = url.searchParams.get("name");
    document.getElementById("price").value = url.searchParams.get("price");
    document.getElementById("description").value = url.searchParams.get("description");
};

const button = document.getElementById("button-update-article");
button.addEventListener("click", async e => {
    e.preventDefault();
    try {
        const image = document.getElementById("image").value;
        const category = document.getElementById("category").value;
        const name = document.getElementById("product-name").value;
        const price = document.getElementById("price").value;
        const description = document.getElementById("description").value;
        if (image === "" || name === "" || price === "" || description === "") throw new Error("Debes llenar todos los campos");
        if (categoryUrl !== category) {
            await service[categoryUrl].remove(id);
            await service[category].add(image, name, price, description);
        } else await service[category].update(id, image, name, price, description);
        showToast("El producto se actualizó correctamente", "success");
    } catch (error) {
        showToast(error.message, "error");
    }
});

setData();
