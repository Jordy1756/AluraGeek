import { services } from "../model/variousModel.js";
import { utils } from "../js/utils.js";

const { handleWidth, showHeaders, showArticles, showToast } = utils;

const getSome = async () => {
    try {
        const various = await services.getSome(handleWidth());
        if (various.length === 0) throw new Error("Ocurrió un error al cargar los artículos variados, por favor intentalo de nuevo más tarde");
        const articlesSection = document.querySelector(".articles-section");
        articlesSection.insertAdjacentHTML("beforeend", showHeaders("Diversos", "various", ""));
        articlesSection.appendChild(showArticles(various, "various", ""));
    } catch (error) {
        showToast(error.message, "error");
    }
};

getSome();
