import { services } from "../model/variousModel.js";

const getAll = async () => {
    try {
        const various = await services.getAll();
        const container = document.getElementById("various-articles");
        if (various.length === 0) throw new Error();

        for (let i = various.length - 1; i > various.length - 7; i--) {
            // TODO: PENSAR EN UNA CONDICIÓN
            const article =
                "<article class='article'>" +
                "<picture class='article-container-image'>" +
                `<img class='article-image' src='${various[i].image}' alt='Imagen del producto' loading='lazy'/>` +
                "</picture>" +
                `<span class='article-name'>${various[i].name}</span>` +
                `<span class='article-price'>${various[i].price}</span>` +
                `<a class='article-link' href='./html/showArticle.html?category=various&id=${various[i].id}'>Ver producto</a>` +
                "</article>";
            container.insertAdjacentHTML("beforeend", article);
        }
    } catch (error) {
        console.log(error);
    }
};

getAll();
