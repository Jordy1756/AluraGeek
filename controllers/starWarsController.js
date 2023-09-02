import { services } from "../model/starWarsModel.js";
import { utils } from "../js/utils.js";

const getSome = async () => {
    try {
        const starWars = await services.getSome(utils.handleWidth());
        if (starWars.length === 0) throw new Error("Ocurrió un error al cargar los articulos de Star Wars, por favor intentalo de nuevo más tarde");
        const articlesSection = document.querySelector(".articles-section");
        articlesSection.insertAdjacentHTML("beforeend", utils.showHeaders("Star Wars", "starWars"));
        articlesSection.appendChild(utils.showArticles(starWars, "starWars"));
    } catch (error) {
        utils.showToast(error.message, "error");
    }
};

getSome();
