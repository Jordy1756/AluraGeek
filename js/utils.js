const handleWidth = () => (window.innerWidth >= 1250 ? 6 : window.innerWidth >= 1010 ? 5 : 4);

const showToast = (message, type) => {
    const toast = document.querySelector(".toast");
    toast.classList.add("toast-active", `toast-${type}`);
    toast.querySelector(".toast-message").textContent = message;
    setTimeout(() => {
        toast.classList.remove("toast-active");
    }, 3000);
};

const showHeaders = (name, category, url) => `
    <div class="articles-container-title-and-link">
        <h2 class="article-section-title">${name}</h2>
        <a class="article-link" href="${url}./html/showAllArticles.html?category=${category}">
            Ver todo <img src="${url}./assets/images/arrow-right.svg" alt="Flecha" />
        </a>
    </div>`;

const showArticles = (articles, category, url) => {
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
                <a class="article-link" href="${url}./html/showArticle.html?category=${category}&id=${id}">Ver producto</a>
            </article>`;
        container.insertAdjacentHTML("beforeend", article);
    });
    return container;
};

const showAllArticles = (articles, articlesSection) => {
    articles.forEach(({ id, image, name, price, description, category }) => {
        const article = document.createElement("article");
        article.className = "article";
        article.innerHTML = `
            <div class="actions">
                <a class="article-button" href="../html/updateArticle.html?id=${id}&image=${image}&name=${name}&price=${price}&description=${description}&category=${category}">
                    <img class="button-image" src="../assets/images/edit.svg"/>
                </a>
                <button type="button" class="article-button" onclick="showModal('${id}')">
                    <img class="button-image" src="../assets/images/delete.svg"/>
                </button>
            </div>
            <picture class="article-container-image">
                <img class="article-image" src="${image}" alt="Imagen del producto" loading="lazy"/>
            </picture>
            <span class="article-name">${name}</span>
            <span class="article-price">${price}</span>
            <a class="article-link" href="../html/showArticle.html?category=${category}&id=${id}">Ver producto</a>`;
        if (!localStorage.getItem("email")) {
            article.querySelector(".article-image").style.zIndex = 5;
            article.querySelector(".actions").style.display = "none";
        }
        articlesSection.appendChild(article);
    });
};

export const utils = {
    handleWidth,
    showToast,
    showHeaders,
    showArticles,
    showAllArticles,
};
