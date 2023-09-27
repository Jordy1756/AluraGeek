import { services } from "../../model/articleModel.js";
import { utils } from "../../js/utils.js";

const { showToast } = utils;

const url = new URL(window.location);

const backButton = document.getElementById("back-button");
backButton.href = `./showAllArticles.html?category=${url.searchParams.get("category")}`;

const clean = (image, category, name, price, description) => {
    image.value = "";
    category.selectedIndex = 0;
    name.value = "";
    price.value = "";
    description.value = "";
};

const addButton = document.getElementById("button-add-new-article");
addButton.addEventListener("click", async e => {
    e.preventDefault();
    try {
        const image = document.getElementById("image");
        const category = document.getElementById("category");
        const name = document.getElementById("product-name");
        const price = document.getElementById("price");
        const description = document.getElementById("description");
        if (image.value === "" || category.value === "" || name.value === "" || price.value === "" || description.value === "")
            throw new Error("Debes llenar todos los campos");
        await services.add(image, category, name, price, description);
        clean(image, category, name, price, description);
        showToast("El producto se agregó correctamente", "success");
    } catch (error) {
        showToast(error.message, "error");
    }
});
