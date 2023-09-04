import { services } from "../../model/articleModel.js";
import { utils } from "../../js/utils.js";

const { showToast } = utils;

const url = new URL(window.location);

const backButton = document.getElementById("back-button");
backButton.href = `./showAllArticles.html?category=${url.searchParams.get("category")}`;

if (localStorage.getItem("success-add")) {
    showToast("El producto se agregó correctamente", "success");
    localStorage.removeItem("success-add");
}

const addButton = document.getElementById("button-add-new-article");
addButton.addEventListener("click", async e => {
    e.preventDefault();
    try {
        const image = document.getElementById("image").value;
        const category = document.getElementById("category").value;
        const name = document.getElementById("product-name").value;
        const price = document.getElementById("price").value;
        const description = document.getElementById("description").value;
        if (image === "" || name === "" || price === "" || description === "") throw new Error("Debes llenar todos los campos");
        await services.add(image, category, name, price, description);
        localStorage.setItem("success-add", true);
    } catch (error) {
        showToast(error.message, "error");
    }
});
