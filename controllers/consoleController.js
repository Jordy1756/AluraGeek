import { services } from "../model/consoleModel.js";

const getAll = async () => {
    try {
        const consoles = await services.getAll();
        const container = document.getElementById("console-articles");
        if (consoles.length === 0) throw new Error();

        for (let i = consoles.length - 1; i > consoles.length - 7; i--) {
            // TODO: PENSAR EN UNA CONDICIÓN
            const article =
                "<article class='article'>" +
                "<picture class='article-container-image'>" +
                `<img class='article-image' src='${consoles[i].image}' alt='Imagen del producto' loading='lazy'/>` +
                "</picture>" +
                `<span class='article-name'>${consoles[i].name}</span>` +
                `<span class='article-price'>${consoles[i].price}</span>` +
                `<a class='article-link' href='./html/showArticle.html?category=consoles&id=${consoles[i].id}'>Ver producto</a>` +
                "</article>";
            container.insertAdjacentHTML("beforeend", article);
        }
    } catch (error) {
        console.log(error);
    }
};

getAll();
