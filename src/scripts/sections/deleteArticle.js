import { initModal } from "../components/modal.js";
import { deleteArticleService } from "../services/articleService.js";

export const initDeleteArticle = (articleId, showToast, setToastToShowOnReload) => {
    const { modal } = initModal("delete-article-modal", "#open-delete-article-modal-btn");

    const deleteArticle = async () => {
        try {
            const articleDeleted = await deleteArticleService(articleId);
            setToastToShowOnReload(
                "success",
                "Producto eliminado",
                `El producto ${articleDeleted.name} se ha eliminado correctamente del catálogo`
            );
            window.location.href = localStorage.getItem("previousUrl");
        } catch (error) {
            console.error(error);
            showToast("error", error.name, error.message);
        }
    };

    modal.querySelector("section > div > button.primary").addEventListener("click", async () => deleteArticle());
};
