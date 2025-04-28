const renderArticleSectionHeader = ({ id: categoryId, name: categoryName }) => `
    <header>
        <h2>${categoryName}</h2>
        <a href="/src/views/show-all-articles.html?categoryId=${categoryId}&categoryName=${categoryName}">
            Ver todo
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="var(--primary-500)" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z" />
            </svg>
        </a>
    </header>
`;

const renderArticle = ({ _id: articleId, image, name: articleName, price, description }) => {
    return `
        <article>
            <figure>
                <img
                    src="${image}"
                    alt="Producto ${articleName}"
                    loading="lazy"
                    decoding="async"
                />
                <figcaption>${articleName}</figcaption>
            </figure>
            <div>
                <h3>${articleName}</h3>
                <p>${price}</p>
                <a href="/src/views/show-article.html?articleId=${articleId}&image=${image}&articleName=${articleName}&price=${price}&description=${description}">Ver producto</a>
            </div>
        </article>
    `;
};

export const renderArticles = (articles) => articles.map((article) => renderArticle(article)).join("");

export const renderArticleSection = (section, category, articles) => {
    const articlesGalleryContainer = document.createElement("div");
    const articlesSection = document.createElement("section");

    articlesGalleryContainer.insertAdjacentHTML("beforeend", renderArticleSectionHeader(category));
    articlesSection.insertAdjacentHTML("beforeend", renderArticles(articles));

    articlesGalleryContainer.appendChild(articlesSection);
    section.appendChild(articlesGalleryContainer);
};
