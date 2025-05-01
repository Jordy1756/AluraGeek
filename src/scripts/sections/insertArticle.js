import { initModal } from "../components/modal.js";
import { initDropdown } from "../components/dropdown.js";
import { getAllCategoriesService } from "../services/categoryService.js";
import { insertArticleService } from "../services/articleService.js";
import { initValidations } from "../utils/handleValidations.js";
import { ARTICLE_ERROR_MESSAGES } from "../utils/errorTypes.js";

const initApp = async () => {
    const insertArticleForm = document.getElementById("insert-article-form");

    const getAllCategories = async () => {
        try {
            const categories = await getAllCategoriesService();

            if (categories.length === 0) throw new Error();

            return categories;
        } catch (error) {
            console.error(error);
        }
    };

    const insertArticle = async (e) => {
        e.preventDefault();
        const { name, image, price, description } = Object.fromEntries(new FormData(e.target).entries());
        const selectedOptions = getSelectedOptionIds();

        if (selectedOptions.length === 0) return;

        try {
            const data = await insertArticleService({
                name,
                price,
                description,
                image,
                categories: selectedOptions,
            });

            location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    const categories = await getAllCategories();

    const getMappedCategories = () =>
        categories.map(({ _id: id, name }) => ({
            id,
            name,
            selected: false,
        }));

    const { handleDropdownError, getSelectedOptionIds } = initDropdown(
        "categories-dropdown",
        "Seleccionar categorías",
        getMappedCategories()
    );

    initModal("insert-article-modal", "open-insert-article-modal-btn");
    initValidations(insertArticleForm, ARTICLE_ERROR_MESSAGES);
    insertArticleForm.addEventListener("submit", insertArticle);
    insertArticleForm
        .querySelector(".primary")
        .addEventListener("click", () => handleDropdownError("Debes seleccionar una categoría"));
};

initApp();
