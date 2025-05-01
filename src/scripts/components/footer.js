import { CONTACT_ERROR_MESSAGES } from "../utils/errorTypes.js";
import { initValidations } from "../utils/handleValidations.js";

export const initFooter = () => {
    const footer = document.querySelector(".footer");
    const contactForm = footer.querySelector("form");

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("LOGICA PARA ENVIAR EL CORREO");
    };

    contactForm.addEventListener("submit", sendEmail);
    initValidations(contactForm, CONTACT_ERROR_MESSAGES);
};
