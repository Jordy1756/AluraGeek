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

const button = document.getElementById("button-delete-article");
button.addEventListener("click", () => {
    service[category].remove(document.getElementById("article-id").value);
});

const getAll = products => {
    document.querySelector(".article-section-title").textContent = names[category];
    const container = document.querySelector(".articles-container");
    products.forEach(({ id, image, name, price }) => {
        const article = `
        <article class="article">
            <div class="actions">
                <a class="article-button" href="#">
                    <svg width="24" height="24" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m18.598 2.874.178-.178a1.45 1.45 0 0 1 2.049 2.05l-.179.177a1.8 1.8 0 0 1-.07 2.47L8.224 19.746a.6.6 0 0 1-.28.157l-4.8 1.2a.599.599 0 0 1-.727-.727l1.2-4.8a.6.6 0 0 1 .157-.278l11.57-11.57a.6.6 0 0 0-.77.067l-3.95 3.951a.6.6 0 0 1-.85-.85l3.953-3.95a1.8 1.8 0 0 1 2.472-.07 1.8 1.8 0 0 1 2.398 0Z"></path>
                    </svg>
                </a>
                <button type="button" class="article-button" onclick="showModal(${id})">
                    <svg width="24" height="24" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.36 4.2v1.2h4.2a.6.6 0 0 1 0 1.2h-.645L17.89 19.392a2.4 2.4 0 0 1-2.393 2.208H8.022a2.4 2.4 0 0 1-2.392-2.208L4.606 6.6H3.96a.6.6 0 0 1 0-1.2h4.2V4.2a1.8 1.8 0 0 1 1.8-1.8h3.6a1.8 1.8 0 0 1 1.8 1.8Zm-6 0v1.2h4.8V4.2a.6.6 0 0 0-.6-.6h-3.6a.6.6 0 0 0-.6.6Zm-1.8 4.235.6 10.2a.6.6 0 1 0 1.198-.072l-.6-10.2a.6.6 0 1 0-1.198.072Zm7.836-.633a.6.6 0 0 0-.633.564l-.6 10.2a.6.6 0 0 0 1.197.07l.6-10.2a.6.6 0 0 0-.564-.634ZM11.76 7.8a.6.6 0 0 0-.6.6v10.2a.6.6 0 1 0 1.2 0V8.4a.6.6 0 0 0-.6-.6Z"></path>
                    </svg>
                </button>
            </div>
            <picture class="article-container-image">
                <img class="article-image" src=".${image}" alt="Imagen del producto" loading="lazy"/>
            </picture>
            <span class="article-name">${name}</span>
            <span class="article-price">${price}</span>
            <a class="article-link" href="../html/showArticle.html?category=${category}&id=${id}">Ver producto</a>
        </article>`;

        container.insertAdjacentHTML("beforeend", article);
    });
};

getAll(products);
