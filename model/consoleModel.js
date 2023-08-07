let limit;
const width = window.innerWidth;
if (width >= 1250) limit = 6;
else if (width >= 1010 && width < 1250) limit = 5;
else limit = 4;

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

const remove = id => fetch(`http://localhost:3000/consoles/${id}`, { method: "DELETE" });

const get = id => fetch(`http://localhost:3000/consoles/${id}`).then(response => response.json());

const getAll = () => fetch(`http://localhost:3000/consoles?_limit=${limit}`).then(response => response.json());

export const services = {
    add,
    update,
    remove,
    get,
    getAll,
};
