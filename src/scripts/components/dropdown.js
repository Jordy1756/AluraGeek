export const initDropdown = (dropdownId, defaultButtonText, dropdownOptions) => {
    const dropdownElement = document.getElementById(dropdownId);
    const dropdownButton = dropdownElement.querySelector("button");
    const buttonLabel = dropdownButton.querySelector("span");
    const optionsList = dropdownElement.querySelector("ul");
    const dropdownErrorParagraph = dropdownElement.parentElement.querySelector("p");

    const createOptionElement = ({ id, name, selected }) => {
        const optionItem = document.createElement("li");
        optionItem.setAttribute("aria-selected", selected);
        optionItem.setAttribute("data-value", id);
        optionItem.textContent = name;

        optionItem.addEventListener("click", () => {
            optionItem.setAttribute("aria-selected", !(optionItem.getAttribute("aria-selected") === "true"));
            updateButtonLabel();
        });

        optionsList.appendChild(optionItem);
    };

    const updateButtonLabel = () => {
        const selectedOptions = optionsList.querySelectorAll("li[aria-selected='true']");
        const selectedCount = selectedOptions.length;

        buttonLabel.textContent = selectedCount === 0 ? defaultButtonText : `Seleccionados (${selectedCount})`;
    };

    const getSelectedOptionIds = () => {
        const selectedOptions = optionsList.querySelectorAll("li[aria-selected='true']");

        return selectedOptions.length === 0
            ? []
            : [...selectedOptions].map((option) => option.getAttribute("data-value"));
    };

    const handleDropdownError = (message) => {
        const selectedOptions = getSelectedOptionIds();
        dropdownErrorParagraph.style.display = selectedOptions.length === 0 ? "block" : "none";
        dropdownErrorParagraph.textContent = selectedOptions.length === 0 ? message : "";
    };

    buttonLabel.textContent = defaultButtonText;

    dropdownButton.addEventListener("click", () => dropdownElement.classList.toggle("open"));

    document.addEventListener("click", (event) => {
        !dropdownElement.contains(event.target) && dropdownElement.classList.remove("open");
    });

    dropdownOptions.forEach((option) => createOptionElement(option));
    updateButtonLabel();

    return { getSelectedOptionIds, handleDropdownError };
};
