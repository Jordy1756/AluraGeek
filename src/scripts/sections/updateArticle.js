const updateArticleButton = document.getElementById("update-article-btn");
const updateArticleModal = document.getElementById("update-article-modal");

updateArticleButton.addEventListener("click", () => updateArticleModal.showModal());
updateArticleModal.querySelector("header > button").addEventListener("click", () => updateArticleModal.close());
