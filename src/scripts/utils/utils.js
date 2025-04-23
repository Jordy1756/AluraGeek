const handleWidth = () => (window.innerWidth >= 1250 ? 6 : window.innerWidth >= 1010 ? 5 : 4);

const renderArticleSectionHeader = (name, category, url) => `
    <header>
        <h2>${name}</h2>
        <a href="../views/showAllArticles.html?category=${category}">
            Ver todo <img src="./src/assets/icons/arrow-right.svg" alt="Flecha" />
        </a>
    </header>
`;

const renderArticle = ({ id, image, name, price }, category) => {
    return `
        <article>
            <figure>
                <img
                    src="${image}"
                    alt="Producto ${name}"
                    loading="lazy"
                    decoding="async"
                />
                <figcaption class="visually-hidden">${name}</figcaption>
            </figure>
            <div>
                <h3>${name}</h3>
                <p>${price}</p>
                <a href="./html/showArticle.html?category=${category}&id=${id}">Ver producto</a>
            </div>
        </article>
    `;
};

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
                    <img class="button-image" src="../assets/images/Edit.svg" alt="Editar" />
                </a>
                <button type="button" class="article-button" onclick="showModal('${id}')">
                    <img class="button-image" src="../assets/images/Delete.svg" alt="eliminar"/>
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
    showHeaders: renderArticleSectionHeader,
    showArticles,
    showAllArticles,
};
