export const initModal = (modalId, buttonId) => {
    const openModalButton = document.getElementById(buttonId);
    const modal = document.getElementById(modalId);

    const openModal = () => modal.showModal();
    const closeModal = () => modal.close();

    openModalButton.addEventListener("click", openModal);
    modal.querySelector("header > button").addEventListener("click", closeModal);
    modal.querySelector(".cancel__button").addEventListener("click", closeModal);

    return { modal, openModal, closeModal };
};
