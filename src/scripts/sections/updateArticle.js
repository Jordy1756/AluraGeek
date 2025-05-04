import { initModal } from "../components/modal.js";
import { initDropdown } from "../components/dropdown.js";
import { getAllCategoriesService } from "../services/categoryService.js";
import { updateArticleService } from "../services/articleService.js";
import { CustomError } from "../utils/errorTypes.js";
import { initValidations } from "../utils/handleValidations.js";
import { ARTICLE_ERROR_MESSAGES } from "../../constants/errorConstants.js";
import { BASE_PATH } from "../utils/handleUrl.js";

export const initUpdateArticle = async (
    { articleId, image, name, price, description, articleCategories },
    showToast,
    setToastToShowOnReload
) => {
    const updateArticleForm = document.getElementById("update-article-form");

    const setUpdateFormInputs = () => {
        updateArticleForm.querySelector('[name="name"]').value = name;
        updateArticleForm.querySelector('[name="image"]').value = image;
        updateArticleForm.querySelector('[name="price"]').value = price;
        updateArticleForm.querySelector('[name="description"]').value = description;
    };

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

    const updateArticle = async (e) => {
        e.preventDefault();
        const { name, image, price, description } = Object.fromEntries(new FormData(e.target).entries());
        const selectedOptions = getSelectedOptionIds();

        if (selectedOptions.length === 0) return handleDropdownError("Debes seleccionar una categoría");

        try {
            await updateArticleService({
                id: articleId,
                name,
                price,
                description,
                image,
                categories: selectedOptions,
            });

            setToastToShowOnReload(
                "success",
                "Producto actualizado",
                `El producto ${name} se ha actualizado correctamente`
            );
            window.location.href = `${BASE_PATH}/src/views/show-article.html?articleId=${articleId}&image=${image}&name=${name}&price=${price}&description=${description}&articleCategories=${selectedOptions}`;
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
            selected: articleCategories.includes(id),
        }));

    const { getSelectedOptionIds, handleDropdownError } = initDropdown(
        "categories-dropdown",
        "Seleccionar categorías",
        getMappedCategories()
    );

    setUpdateFormInputs();
    initModal("update-article-modal", "#open-update-article-modal-btn");
    initValidations(updateArticleForm, ARTICLE_ERROR_MESSAGES);
    updateArticleForm.addEventListener("submit", updateArticle);
    updateArticleForm
        .querySelector(".primary")
        .addEventListener("click", () => handleDropdownError("Debes seleccionar una categoría"));
};
