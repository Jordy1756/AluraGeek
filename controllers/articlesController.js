import { services as consoleServices } from "../model/consoleModel.js";
import { services as starWarsServices } from "../model/starWarsModel.js";
import { services as variousServices } from "../model/variousModel.js";

const service = {
    consoles: consoleServices,
    starWars: starWarsServices,
    various: variousServices,
};

const names = {
    consoles: "Consolas",
    starWars: "Star Wars",
    various: "Diversos",
};

const url = new URL(window.location);
const category = url.searchParams.get("category");
const products = await service[category].getAll();

const getAll = products => {
    document.querySelector(".article-section-title").textContent = names[category];
    const container = document.querySelector(".articles-container");
    products.forEach(({ id, image, name, price }) => {
        const article =
            "<article class='article'>" +
            "<picture class='article-container-image'>" +
            `<img class='article-image' src='.${image}' alt='Imagen del producto' loading='lazy'/>` +
            "</picture>" +
            `<span class='article-name'>${name}</span>` +
            `<span class='article-price'>${price}</span>` +
            `<a class='article-link' href='../html/showArticle.html?category=${category}&id=${id}'>Ver producto</a>` +
            "</article>";
        container.insertAdjacentHTML("afterbegin", article);
    });
};

getAll(products);
