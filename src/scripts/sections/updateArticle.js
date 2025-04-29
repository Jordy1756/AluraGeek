import { getAllCategoriesService } from "../services/categoryService.js";
import { initializeModal } from "../utils/handleModal.js";

const { modal } = initializeModal("update-article-modal", "open-update-article-modal-btn");

const getAllCategories = async () => {
    const categories = await getAllCategoriesService();
};

const initializeApp = async () => {
    await getAllCategories();
};

initializeApp();
