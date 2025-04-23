const typeErrors = ["valueMissing", "typeMismatch"];
const valueMissingMessage = "Debe llenar este campo";

const errorMessages = {
    name: {
        valueMissing: valueMissingMessage,
    },
    message: { valueMissing: valueMissingMessage },
    email: {
        valueMissing: valueMissingMessage,
        typeMismatch: "Formato de correo no válido",
    },
    password: { valueMissing: valueMissingMessage },
    image: { valueMissing: "Debe seleccionar una imagen" },
    "product-name": { valueMissing: valueMissingMessage },
    price: { valueMissing: valueMissingMessage },
    description: { valueMissing: valueMissingMessage },
};

const inputs = document.querySelectorAll(".input, .textarea");
inputs.forEach(input => input.addEventListener("input", input => validate(input.target)));

const validate = input => {
    const span = input.parentElement.querySelector(".input-error");
    input.validity.valid ? (span.textContent = "") : (span.textContent = showMessage(input));
};

const showMessage = input => {
    let message = "";
    typeErrors.forEach(error => input.validity[error] && (message = errorMessages[input.id][error]));
    return message;
};
