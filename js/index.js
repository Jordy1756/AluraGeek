function showModal(id) {
    const modal = document.querySelector(".modal");
    modal.classList.add("modal-active");
    modal.querySelector("#article-id").value = id;
}

function hideModal() {
    const modal = document.querySelector(".modal");
    modal.classList.remove("modal-active");
}
