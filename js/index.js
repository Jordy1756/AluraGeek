function showModal(id) {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("modal-active");
    modal.querySelector("#article-id").value = id;
}

function hideModal() {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("modal-active");
}

