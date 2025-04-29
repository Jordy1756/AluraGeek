import { initializeModal } from "../components/modal.js";
import { getAllCategoriesService } from "../services/categoryService.js";

const { modal } = initializeModal("update-article-modal", "open-update-article-modal-btn");

const getAllCategories = async () => {
    const categories = await getAllCategoriesService();
};

const initializeApp = async () => {
    await getAllCategories();
};

initializeApp();
