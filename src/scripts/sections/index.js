import { initArticlesGallery } from "../components/articlesGallery.js";
import { initFooter } from "../components/footer.js";
import { initHeader } from "../components/header.js";
import { initToast } from "../components/toast.js";
import { getSomeArticlesService } from "../services/articleService.js";
import { trackPreviousUrl } from "../utils/handleUrl.js";

const initApp = async () => {
    const { showToast, setToastToShowOnReload } = initToast();

    await initHeader(showToast, setToastToShowOnReload);
    const { renderArticleSection } = initArticlesGallery();

    const getSomeArticles = async () => {
        try {
            const { data } = await getSomeArticlesService();
            const section = document.querySelector("#articles-section");

            data.forEach(({ category, articles }) => renderArticleSection(section, category, articles));
        } catch (error) {
            console.error(error);
            showToast("error", error.name, error.message);
        }
    };

    trackPreviousUrl();
    initFooter(showToast);
    await getSomeArticles();
};

initApp();
