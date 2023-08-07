import { services } from "../model/starWarsModel.js";

const getAll = async () => {
    const starWars = await services.getAll();
    const container = document.getElementById("star-wars-articles");

    starWars.forEach(({ id, name, price, image }) => {
        const article = `
            <article class="article">
                <picture class="article-container-image">
                    <img class="article-image" src="${image}" alt="Imagen del producto" loading="lazy"/>
                </picture>
                <span class="article-name">${name}</span>
                <span class="article-price">${price}</span>
                <a class="article-link" href="./html/showArticle.html?category=starWars&id=${id}">Ver producto</a>
            </article>`;
        container.insertAdjacentHTML("beforeend", article);
    });
};

getAll();
