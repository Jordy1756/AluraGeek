const handleWidth = width => (width >= 1250 ? 6 : width >= 1010 ? 5 : 4);

const showToast = (message, type) => {
    const toast = document.querySelector(".toast");
    toast.classList.add("toast-active", `toast-${type}`);
    toast.querySelector(".toast-message").textContent = message;
    setTimeout(() => {
        toast.classList.remove("toast-active");
    }, 3000);
};

const showHeaders = (name, category) => `
    <div class="articles-container-title-and-link">
        <h2 class="article-section-title">${name}</h2>
        <a class="article-link" href="./html/showAllArticles.html?category=${category}">
            Ver todo <img src="./assets/images/arrow-right.svg" alt="Flecha" />
        </a>
    </div>`;

const showArticles = (articles, category) => {
    const container = document.createElement("section");
    container.classList.add("articles-container");
    articles.forEach(({ id, image, name, price }) => {
        const article = `
            <article class="article">
                <picture class="article-container-image">
                    <img class="article-image" src="${image}" alt="Imagen del producto" loading="lazy"/>
                </picture>
                <span class="article-name">${name}</span>
                <span class="article-price">${price}</span>
                <a class="article-link" href="./html/showArticle.html?category=${category}&id=${id}">Ver producto</a>
            </article>`;
        container.insertAdjacentHTML("beforeend", article);
    });
    return container;
};

export const utils = {
    handleWidth,
    showToast,
    showHeaders,
    showArticles,
};
