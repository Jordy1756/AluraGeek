const add = (image, category, name, price, description) =>
    fetch("http://localhost:3000/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: uuid.v4(), name, price, description, image, category }),
    });

const update = (id, image, name, price, description) =>
    fetch(`http://localhost:3000/articles/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, description, image }),
    });

const search = search => fetch(`http://localhost:3000/articles?name_like=${search}`).then(response => response.json());

const remove = id => fetch(`http://localhost:3000/articles/${id}`, { method: "DELETE" });

const get = id => fetch(`http://localhost:3000/articles/${id}`).then(response => response.json());

const getSome = (category, limit) =>
    fetch(`http://localhost:3000/articles?category_like=${category}&_limit=${limit}`).then(response => response.json());

const getAll = category => fetch(`http://localhost:3000/articles?category=${category}`).then(response => response.json());

export const services = {
    add,
    update,
    search,
    remove,
    get,
    getSome,
    getAll,
};
