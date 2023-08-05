import { services as consoleServices } from "../model/consoleModel.js";
import { services as starWarsServices } from "../model/starWarsModel.js";
import { services as variousServices } from "../model/variousModel.js";

const service = {
    consoles: consoleServices,
    starWars: starWarsServices,
    various: variousServices,
};

const url = new URL(window.location);
const id = url.searchParams.get("id");
const category = url.searchParams.get("category");

function setProduct(name, price, description, image) {
    document.querySelector(".product-image").src = `.${image}`;
    document.querySelector(".product-name").textContent = name;
    document.querySelector(".product-price").textContent = price;
    document.querySelector(".product-description").textContent = description;
}

const getProduct = async (category, id) => {
    return await service[category].get(id);
};

const showSimilarProducts = products => {
    const container = document.querySelector(".articles-container");
    for (let i = products.length - 1; i > products.length - 7; i--) {
        const article =
            "<article class='article'>" +
            "<picture class='article-container-image'>" +
            `<img class='article-image' src='.${products[i].image}' alt='Imagen del producto' loading='lazy'/>` +
            "</picture>" +
            `<span class='article-name'>${products[i].name}</span>` +
            `<span class='article-price'>${products[i].price}</span>` +
            `<a class='article-link' href='../html/showArticle.html?category=${category}&id=${products[i].id}'>Ver producto</a>` +
            "</article>";
        container.insertAdjacentHTML("afterbegin", article);
    }
};

const main = async () => {
    const { name, price, description, image } = await getProduct(category, id);
    const products = await service[category].getAll();
    setProduct(name, price, description, image);
    showSimilarProducts(products);
};

main();
