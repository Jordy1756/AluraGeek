export const ARTICLE_ERROR_MESSAGES = {
    name: {
        valueMissing: "El nombre no debe estar vacío",
        patternMismatch: "El nombre solo puede contener letras, espacios y tildes",
        tooLong: "El nombre es demasiado largo",
        tooShort: "El nombre es demasiado corto",
    },
    image: {
        valueMissing: "La URL de la imagen no debe estar vacía",
        typeMismatch: "Debe introducir una URL válida",
        patternMismatch: "El formato de URL no es válido",
    },
    price: {
        valueMissing: "El precio no debe estar vacío",
        typeMismatch: "Debe introducir un número válido",
        rangeUnderflow: "El precio debe ser mayor que cero",
        rangeOverflow: "El precio es demasiado alto",
        stepMismatch: "El precio debe tener máximo 2 decimales",
        badInput: "Por favor ingrese solo números",
    },
    description: {
        valueMissing: "La descripción no debe estar vacía",
        tooShort: "La descripción debe tener al menos 20 caracteres",
        tooLong: "La descripción no puede superar los 150 caracteres",
    },
};

export const LOGIN_ERROR_MESSAGES = {
    email: {
        valueMissing: "El correo electrónico no debe estar vacío",
        typeMismatch: "Por favor, introduce un correo electrónico válido",
        patternMismatch: "El formato del correo electrónico no es válido. Debe ser ejemplo@dominio.com",
    },
    password: {
        valueMissing: "La contraseña no debe estar vacía",
        tooShort: "La contraseña debe tener al menos 8 caracteres",
        tooLong: "La contraseña no puede superar los 12 caracteres",
        patternMismatch:
            "La contraseña debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial",
    },
};

export const CONTACT_ERROR_MESSAGES = {
    name: {
        valueMissing: "El nombre no debe estar vacío",
        tooShort: "El nombre debe tener al menos 5 caracteres",
        tooLong: "El nombre no puede superar los 50 caracteres",
        patternMismatch:
            "El nombre debe contener nombre y apellido, ambos iniciando con mayúscula y solo puede contener letras, tildes y espacios",
    },
    message: {
        valueMissing: "El mensaje no debe estar vacío",
        tooShort: "El mensaje debe tener al menos 20 caracteres"
    },
};
