const header = document.querySelector(".header");
const searchForm = header.querySelector("nav > form");

const toggleOpenHeader = () => header.classList.toggle("open");

const handleSearch = async (e) => {
    e.preventDefault();
    const { search } = Object.fromEntries(new FormData(e.target).entries());
    try {
        window.location.href = `/src/views/search-articles.html?query=${search}`;
    } catch (error) {
        // showToast(error.message, "error");
    }
};

header.querySelector("#open-search-btn").addEventListener("click", toggleOpenHeader);
header.querySelector("#exit-search-btn").addEventListener("click", toggleOpenHeader);
searchForm.addEventListener("submit", handleSearch);
