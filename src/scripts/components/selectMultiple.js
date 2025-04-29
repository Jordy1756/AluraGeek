export const initializeMultipleSelect = (fieldsetId) => {
    const selectedOptions = [];
    const select = document.getElementById(fieldsetId);
    const toggleSelectButton = select.querySelector("button");

    toggleSelectButton.addEventListener("click", () => select.classList.toggle("open"));

    return { selectedOptions };
};
