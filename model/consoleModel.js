const get = id => fetch(`http://localhost:3000/consoles/${id}`).then(response => response.json());

const getAll = () => fetch("http://localhost:3000/consoles").then(response => response.json());

export const services = {
    get,
    getAll,
};
