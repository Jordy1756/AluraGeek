const email = localStorage.getItem("email");
const logoutButton = document.getElementById("logout-button");

const hideElementIfExist = selector => {
    const element = document.querySelector(selector);
    element && (element.style.display = "none");
};

if (email) {
    hideElementIfExist("#login-button");
    logoutButton.style.display = "block";
} else hideElementIfExist("#add-new-article-button");

logoutButton.addEventListener("click", () => {
    localStorage.removeItem("email");
    logoutButton.style.display = "none";
    document.getElementById("login-button").style.display = "block";
    !window.location.href.includes("index.html") && (window.location.href = "../index.html");
});

function showModal(id) {
    const modal = document.querySelector(".modal");
    modal.classList.add("modal-active");
    modal.querySelector("#article-id").value = id;
}

function hideModal() {
    const modal = document.querySelector(".modal");
    modal.classList.remove("modal-active");
}
