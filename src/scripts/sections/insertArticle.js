import { initModal } from "../components/modal.js";
import { initDropdown } from "../components/dropdown.js";
import { getAllCategoriesService } from "../services/categoryService.js";
import { insertArticleService } from "../services/articleService.js";
import { initValidations } from "../utils/handleValidations.js";
import { CustomError } from "../utils/errorTypes.js";
import { ARTICLE_ERROR_MESSAGES } from "../constants/errorConstants.js";

export const initInsertArticle = async (categoryId, showToast, setToastToShowOnReload) => {
    const insertArticleForm = document.getElementById("insert-article-form");

    const getAllCategories = async () => {
        try {
            const categories = await getAllCategoriesService();

            if (categories.length === 0)
                throw new CustomError("Error de categorías", "No hay categorías disponibles en este momento");

            return categories;
        } catch (error) {
            console.error(error);
            showToast("error", error.name, error.message);
        }
    };

    const insertArticle = async (e) => {
        e.preventDefault();
        const { name, image, price, description } = Object.fromEntries(new FormData(e.target).entries());
        const selectedOptions = getSelectedOptionIds();

        if (selectedOptions.length === 0) return handleDropdownError("Debes seleccionar una categoría");

        try {
            await insertArticleService({
                name,
                price,
                description,
                image,
                categories: selectedOptions,
            });
            
            setToastToShowOnReload(
                "success",
                "Producto agregado",
                `El producto ${name} se ha agregado correctamente al catálogo`
            );
            location.reload();
        } catch (error) {
            console.error(error);
            showToast("error", error.name, error.message);
        }
    };

    const categories = await getAllCategories();

    const getMappedCategories = () =>
        categories.map(({ _id: id, name }) => ({
            id,
            name,
            selected: id === categoryId,
        }));

    const { handleDropdownError, getSelectedOptionIds } = initDropdown(
        "categories-dropdown",
        "Seleccionar categorías",
        getMappedCategories()
    );

    initModal("insert-article-modal", ".open__insert-article-modal-btn");
    initValidations(insertArticleForm, ARTICLE_ERROR_MESSAGES);
    insertArticleForm.addEventListener("submit", insertArticle);
    insertArticleForm
        .querySelector(".primary")
        .addEventListener("click", () => handleDropdownError("Debes seleccionar una categoría"));
};
