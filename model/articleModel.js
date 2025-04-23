const BASE_URL = "http://localhost:8080";
const ARTICLE_URL = `${BASE_URL}/articles`;

const add = (image, category, name, price, description) =>
    fetch(`${ARTICLE_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: uuid.v4(), name, price, description, image, category }),
    });

const update = (id, image, category, name, price, description) =>
    fetch(`${ARTICLE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, description, image, category }),
    });

const search = (search) => fetch(`${ARTICLE_URL}?name_like=${search}`).then((response) => response.json());

const remove = (id) => fetch(`${ARTICLE_URL}/${id}`, { method: "DELETE" });

const get = (id) => fetch(`${ARTICLE_URL}/${id}`).then((response) => response.json());

const getSome = async (category, limit) => {
    const response = await fetch(`${ARTICLE_URL}?category_like=${category}&_limit=${limit}`);

    if (!response.ok) throw new Error();

    const data = await response.json();

    if (!data) throw new Error();

    return data;
};

const getAll = (category) => fetch(`${ARTICLE_URL}?category=${category}`).then((response) => response.json());

export const services = {
    add,
    update,
    search,
    remove,
    get,
    getSome,
    getAll,
};
