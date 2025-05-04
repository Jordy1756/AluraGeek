import { CONTACT_ERROR_MESSAGES } from "../constants/errorConstants.js";
import { insertCommentService } from "../services/commentService.js";
import { initValidations } from "../utils/handleValidations.js";

export const initFooter = (showToast) => {
    const footer = document.querySelector(".footer");
    const contactForm = footer.querySelector("form");

    const sendEmail = async (e) => {
        e.preventDefault();
        const { name, message } = Object.fromEntries(new FormData(e.target).entries());
        try {
            await insertCommentService({ name, message });
            showToast("success", "Mensaje enviado", "El mensaje fue enviado correctamente");
            contactForm.reset();
        } catch (error) {
            console.error(error);
            showToast("error", error.name, error.message);
        }
    };

    contactForm.addEventListener("submit", sendEmail);
    initValidations(contactForm, CONTACT_ERROR_MESSAGES);
};
