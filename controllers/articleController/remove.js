import { services } from "../../model/articleModel.js";

const deletebutton = document.getElementById("button-delete-article");
deletebutton.addEventListener("click", async () => {
    const response = await services.remove(document.getElementById("article-id").value);
    console.log(response)
});
