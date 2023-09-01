import { services as consoleServices } from "../../model/consoleModel.js";
import { services as starWarsServices } from "../../model/starWarsModel.js";
import { services as variousServices } from "../../model/variousModel.js";

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

const showToast = message => {
    const toast = document.querySelector(".toast");
    toast.classList.add("toast-active");
    toast.querySelector(".toast-message").textContent = message;
    setTimeout(() => {
        toast.classList.remove("toast-active");
    }, 3000);
};

const url = new URL(window.location);
const category = url.searchParams.get("category");

const button = document.getElementById("button-delete-article");
button.addEventListener("click", () => {
    service[category].remove(document.getElementById("article-id").value);
});

const getAll = async () => {
    try {
        const products = await service[category].getAll();
        if (products.length === 0) throw new Error("Ocurrió un error al cargar los artículos, por favor intentalo de nuevo más tarde");
        document.querySelector(".article-section-title").textContent = names[category];
        const container = document.querySelector(".articles-container");

        products.forEach(({ id, image, name, price, description }) => {
            const article = document.createElement("article");
            article.className = "article";
            showArticle(id, image, name, price, description, article);
            container.appendChild(article);
        });

        if (!localStorage.getItem("email")) document.querySelectorAll(".actions").forEach(div => (div.style.display = "none"));
    } catch (error) {
        showToast(error.message);
    }
};

const showArticle = (id, image, name, price, description, article) => {
    article.innerHTML = `
        <div class="actions">
            <a class="article-button" href="../html/updateArticle.html?id=${id}&image=${image}&name=${name}&price=${price}&description=${description}&category=${category}">
                <img src="../assets/images/Edit.svg"/>
            </a>
            <button type="button" class="article-button" onclick="showModal(${id})">
                <img src="../assets/images/Delete.svg"/>
            </button>
        </div>
        <picture class="article-container-image">
            <img class="article-image" src="${image}" alt="Imagen del producto" loading="lazy"/>
        </picture>
        <span class="article-name">${name}</span>
        <span class="article-price">${price}</span>
        <a class="article-link" href="../html/showArticle.html?category=${category}&id=${id}">Ver producto</a>`;
};

getAll();
