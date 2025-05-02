export const initModal = (modalId, buttonSelector) => {
    const openModalButton = document.querySelectorAll(buttonSelector);
    const modal = document.getElementById(modalId);

    const openModal = () => modal.showModal();
    const closeModal = () => modal.close();

    openModalButton.forEach((button) => button.addEventListener("click", openModal));
    modal.querySelector("header > button").addEventListener("click", closeModal);
    modal.querySelector(".cancel__button").addEventListener("click", closeModal);

    return { modal, openModal, closeModal };
};
