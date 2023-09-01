import { services } from "../model/consoleModel.js";
import { utils } from "../js/utils.js";

const getSome = async () => {
    try {
        const consoles = await services.getSome(utils.handleWidth(window.innerWidth));
        if (consoles.length === 0) throw new Error("Ocurrió un error al cargar las consolas, por favor intentalo de nuevo más tarde");
        const articlesSection = document.querySelector(".articles-section");
        articlesSection.insertAdjacentHTML("beforeend", utils.showHeaders("Consolas", "consoles"));
        articlesSection.appendChild(utils.showArticles(consoles, "consoles"));
    } catch (error) {
        utils.showToast(error.message, "error");
    }
};

getSome();
