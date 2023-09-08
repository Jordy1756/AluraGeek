import { services } from "../../model/articleModel.js";
import { utils } from "../../js/utils.js";

const { showToast } = utils;

const url = new URL(window.location);

const deletebutton = document.getElementById("button-delete-article");
deletebutton.addEventListener("click", async () => {
    try {
        await services.remove(document.getElementById("article-id").value);
        localStorage.setItem("success-remove", true);
        window.location.href = `./showAllArticles.html?category=${url.searchParams.get("category")}`;
    } catch (error) {
        showToast("Ocurrió un error al eliminar el producto, intentalo de nuevo más tarde", "error");
    }
});

if (localStorage.getItem("success-remove")) {
    showToast("Artículo eliminado", "success");
    localStorage.removeItem("success-remove");
}

