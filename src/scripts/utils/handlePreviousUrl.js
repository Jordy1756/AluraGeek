export const trackPreviousUrl = () =>
    window.addEventListener("beforeunload", () => localStorage.setItem("previousUrl", window.location.href));
