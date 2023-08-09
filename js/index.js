const email = localStorage.getItem("email");

const hideElementIfExist = selector => {
    const element = document.querySelector(selector);
    element && (element.style.display = "none");
};

email ? hideElementIfExist(".login-button") : hideElementIfExist("#add-new-article-button");

function showModal(id) {
    const modal = document.querySelector(".modal");
    modal.classList.add("modal-active");
    modal.querySelector("#article-id").value = id;
}

function hideModal() {
    const modal = document.querySelector(".modal");
    modal.classList.remove("modal-active");
}
