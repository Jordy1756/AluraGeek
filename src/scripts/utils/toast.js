export const showToast = (message, type) => {
    const toast = document.querySelector(".toast");
    toast.classList.add("toast-active", `toast-${type}`);
    toast.querySelector(".toast-message").textContent = message;
    setTimeout(() => {
        toast.classList.remove("toast-active");
    }, 3000);
};
