const add = (name, message) =>
    fetch("http://localhost:3000/concats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: uuid.v4(), name, message }),
    }).then(response => response.json());

export const services = {
    add,
};
