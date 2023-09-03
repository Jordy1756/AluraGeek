import { services } from "../model/starWarsModel.js";
import { utils } from "../js/utils.js";

const { handleWidth, showHeaders, showArticles, showToast } = utils;

const getSome = async () => {
    try {
        const starWars = await services.getSome(handleWidth());
        if (starWars.length === 0) throw new Error("Ocurrió un error al cargar los articulos de Star Wars, por favor intentalo de nuevo más tarde");
        const articlesSection = document.querySelector(".articles-section");
        articlesSection.insertAdjacentHTML("beforeend", showHeaders("Star Wars", "starWars", ""));
        articlesSection.appendChild(showArticles(starWars, "starWars", ""));
    } catch (error) {
        showToast(error.message, "error");
    }
};

getSome();
