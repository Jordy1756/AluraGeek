import { initializeModal } from "../components/modal.js";
import { deleteArticleService } from "../services/articleService.js";

const { articleId } = Object.fromEntries(new URL(window.location).searchParams.entries());

const { modal } = initializeModal("delete-article-modal", "open-delete-article-modal-btn");

const deleteArticle = async () => {
    try {
        await deleteArticleService(articleId);
        window.location.href = localStorage.getItem("previousUrl");
    } catch (error) {
        console.error(error);
    }
};

modal.querySelector("section > div > button.primary").addEventListener("click", async () => deleteArticle());
