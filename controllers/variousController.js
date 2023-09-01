import { services } from "../model/variousModel.js";
import { utils } from "../js/utils.js";

const getSome = async () => {
    try {
        const various = await services.getSome(utils.handleWidth(window.innerWidth));
        if (various.length === 0) throw new Error("Ocurrió un error al cargar los artículos variados, por favor intentalo de nuevo más tarde");
        const articlesSection = document.querySelector(".articles-section");
        articlesSection.insertAdjacentHTML("beforeend", utils.showHeaders("Diversos", "various"));
        articlesSection.appendChild(utils.showArticles(various, "various"));
    } catch (error) {
        utils.showToast(error.message, "error");
    }
};

getSome();
