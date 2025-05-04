export const BASE_PATH = window.location.hostname.includes("github.io") ? "/alura-geek" : "";

export const trackPreviousUrl = () =>
    window.addEventListener("beforeunload", () => localStorage.setItem("previousUrl", window.location.href));
