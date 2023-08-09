import { services } from "../model/variousModel.js";

const width = window.innerWidth;
const limit = width >= 1250 ? 6 : width >= 1010 ? 5 : 4;

const getAll = async () => {
    try {
        const various = await services.getSome(limit);
        const container = document.getElementById("various-articles");
        if (various.length === 0) throw new Error();
        various.forEach(({ id, image, name, price }) => {
            const article = `
                <article class="article">
                    <picture class="article-container-image">
                        <img class="article-image" src="${image}" alt="Imagen del producto" loading="lazy"/>
                    </picture>
                    <span class="article-name">${name}</span>
                    <span class="article-price">${price}</span>
                    <a class="article-link" href="./html/showArticle.html?category=various&id=${id}">Ver producto</a>
                </article>`;
            container.insertAdjacentHTML("beforeend", article);
        });
    } catch (error) {
        console.log(error);
    }
};

getAll();
