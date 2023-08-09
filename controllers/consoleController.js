import { services } from "../model/consoleModel.js";

const width = window.innerWidth;
const limit = width >= 1250 ? 6 : width >= 1010 ? 5 : 4;

const showToast = message => {
    const toast = document.querySelector(".toast");
    toast.classList.add("toast-active");
    toast.querySelector(".toast-message").textContent = message;
    setTimeout(() => {
        toast.classList.remove("toast-active");
    }, 3000);
};

const getAll = async () => {
    try {
        const consoles = await services.getSome(limit);
        const container = document.getElementById("console-articles");
        if (consoles.length === 0) throw new Error("Ocurrió un error al cargar los artículos, por favor intentalo de nuevo más tarde");

        consoles.forEach(({ id, image, name, price }) => {
            const article = `
                <article class="article">
                    <picture class="article-container-image">
                        <img class="article-image" src="${image}" alt="Imagen del producto" loading="lazy"/>
                    </picture>
                    <span class="article-name">${name}</span>
                    <span class="article-price">${price}</span>
                    <a class="article-link" href="./html/showArticle.html?category=consoles&id=${id}">Ver producto</a>
                </article>`;
            container.insertAdjacentHTML("beforeend", article);
        });
    } catch (error) {
        showToast(error.message);
    }
};

getAll();
