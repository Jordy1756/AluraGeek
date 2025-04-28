const deleteArticleButton = document.getElementById("delete-article-btn");
const deleteArticleModal = document.getElementById("delete-article-modal");

deleteArticleButton.addEventListener("click", () => deleteArticleModal.showModal());
deleteArticleModal.querySelector("header > button").addEventListener("click", () => deleteArticleModal.close());
