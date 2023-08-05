const get = id => fetch(`http://localhost:3000/various/${id}`).then(response => response.json());
const getAll = () => fetch("http://localhost:3000/various").then(response => response.json());

export const services = {
    get,
    getAll,
};
