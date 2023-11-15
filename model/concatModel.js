const add = (name, message) =>
    fetch("https://alura-flix-fake-api.onrender.com/concats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: uuid.v4(), name, message }),
    });

export const services = {
    add,
};
