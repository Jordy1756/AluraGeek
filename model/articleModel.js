const add = (image, category, name, price, description) =>
    fetch("https://alurageekfakeapi-production.up.railway.app/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: uuid.v4(), name, price, description, image, category }),
    });

const update = (id, image, category, name, price, description) =>
    fetch(`https://alurageekfakeapi-production.up.railway.app/articles/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, description, image, category }),
    });

const search = search => fetch(`https://alurageekfakeapi-production.up.railway.app/articles?name_like=${search}`).then(response => response.json());

const remove = id => fetch(`https://alurageekfakeapi-production.up.railway.app/articles/${id}`, { method: "DELETE" });

const get = id => fetch(`https://alurageekfakeapi-production.up.railway.app/articles/${id}`).then(response => response.json());

const getSome = (category, limit) =>
    fetch(`https://alurageekfakeapi-production.up.railway.app/articles?category_like=${category}&_limit=${limit}`).then(response => response.json());

const getAll = category => fetch(`https://alurageekfakeapi-production.up.railway.app/articles?category=${category}`).then(response => response.json());

export const services = {
    add,
    update,
    search,
    remove,
    get,
    getSome,
    getAll,
};
