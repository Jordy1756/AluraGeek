const typeErrors = ["valueMissing", "typeMismatch"];

const errorMessages = {
    name: {
        valueMissing: "Debe llenar este campo",
    },
    message: {
        valueMissing: "Debe llenar este campo",
    },
    email: {
        valueMissing: "Debe llenar este campo",
        typeMismatch: "Formato de correo no válido",
    },
    password: {
        valueMissing: "Debe llenar este campo",
    },
};

const inputs = document.querySelectorAll(".input, .textarea");

inputs.forEach(input => {
    input.addEventListener("blur", input => validate(input.target));
});

const validate = input => {
    const span = input.parentElement.querySelector(".input-error");
    input.validity.valid ? (span.textContent = "") : (span.textContent = showMessage(input));
};

const showMessage = input => {
    let message = "";
    typeErrors.forEach(error => {
        if (input.validity[error]) message = errorMessages[input.id][error];
    });
    return message;
};
