import { services } from "../model/consoleModel.js";
import { utils } from "../js/utils.js";

const { handleWidth, showHeaders, showArticles, showToast } = utils;

const getSome = async () => {
    try {
        const consoles = await services.getSome(handleWidth());
        if (consoles.length === 0) throw new Error("Ocurrió un error al cargar las consolas, por favor intentalo de nuevo más tarde");
        const articlesSection = document.querySelector(".articles-section");
        articlesSection.insertAdjacentHTML("beforeend", showHeaders("Consolas", "consoles", ""));
        articlesSection.appendChild(showArticles(consoles, "consoles", ""));
    } catch (error) {
        showToast(error.message, "error");
    }
};

getSome();
