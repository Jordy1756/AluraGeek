import { services } from "../../model/articleModel.js";
import { utils } from "../../js/utils.js";

const { showToast } = utils;

const url = new URL(window.location);

const backButton = document.getElementById("back-button");
backButton.href = `./showAllArticles.html?category=${url.searchParams.get("category")}`;

const clean = (image, category, name, price, description) => {
    image = "";
    category = "";
    name = "";
    price = "";
    description = "";
};

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
        showToast("El producto se agregó correctamente", "success");
        clean(image, category, name, price, description);
    } catch (error) {
        showToast(error.message, "error");
    }
});
