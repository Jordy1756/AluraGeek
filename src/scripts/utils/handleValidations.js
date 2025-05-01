export const initValidations = (form, errorMessages) => {
    const getMessage = (name, validity) => {
        for (const key in validity) {
            if (!validity[key] || key === "valid") continue;

            const errorMessagesForName = errorMessages[name];
            if (!errorMessagesForName) continue;

            if (errorMessagesForName[key]) return errorMessagesForName[key];
        }

        return "";
    };

    const validateInput = (input) => {
        const paragraph = input.parentElement.parentElement.querySelector("p");
        const message = getMessage(input.name, input.validity);

        paragraph.style.display = message !== "" ? "block" : "none";
        paragraph.textContent = message;
    };

    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
        input.setCustomValidity(" ");
        input.addEventListener("input", () => validateInput(input));
        input.addEventListener("invalid", () => validateInput(input));
    });
};
