import { initModal } from "../components/modal.js";
import { initDropdown } from "../components/dropdown.js";
import { getAllCategoriesService } from "../services/categoryService.js";
import { updateArticleService } from "../services/articleService.js";

const initApp = async () => {
    const {} = Object.fromEntries(new URL(window.location).searchParams.entries());

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

        try {
            if (selectedOptions.length === 0) throw new Error("ERROR: CATEGORIA");

            const data = await updateArticleService({
                name,
                price,
                description,
                image,
                categories: selectedOptions,
            });

            window.location.href = `/src/views/show-article.html?articleId=${articleId}&image=${image}&name=${name}&price=${price}&description=${description}&articleCategories=${selectedOptions}`;
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

    const { getSelectedOptionIds } = initDropdown(
        "categories-dropdown",
        "Seleccionar categorías",
        getMappedCategories()
    );

    initModal("insert-article-modal", "open-insert-article-modal-btn");
    insertArticleForm.addEventListener("submit", insertArticle);
};

initApp();
