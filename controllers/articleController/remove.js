import { services } from "../../model/articleModel.js";

const deletebutton = document.getElementById("button-delete-article");
deletebutton.addEventListener("click", async () => {
    console.log("Hola");
    await services.remove(document.getElementById("article-id").value);
});
