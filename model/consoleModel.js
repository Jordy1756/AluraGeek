const add = (image, name, price, description) =>
    fetch("http://localhost:3000/consoles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: uuid.v4(), name, price, description, image }),
    });
const update = (id, image, name, price, description) =>
    fetch(`http://localhost:3000/consoles/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, description, image }),
    });

const search = search => fetch(`http://localhost:3000/consoles?name_like=${search}`).then(response => response.json());

const remove = id => fetch(`http://localhost:3000/consoles/${id}`, { method: "DELETE" });

const get = id => fetch(`http://localhost:3000/consoles/${id}`).then(response => response.json());

const getSome = limit => fetch(`http://localhost:3000/consoles?_limit=${limit}`).then(response => response.json());

const getAll = () => fetch("http://localhost:3000/consoles").then(response => response.json());

export const services = {
    add,
    update,
    search,
    remove,
    get,
    getSome,
    getAll,
};
