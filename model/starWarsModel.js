const get = id => fetch(`http://localhost:3000/starWars/${id}`).then(response => response.json());

const getAll = () => fetch("http://localhost:3000/starWars").then(response => response.json());

export const services = {
    get,
    getAll,
};
