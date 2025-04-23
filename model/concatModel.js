const BASE_URL = "http://localhost:8080";
const CONTACT_URL = `${BASE_URL}/contacts`;

const add = (name, message) =>
    fetch(`${CONTACT_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: uuid.v4(), name, message }),
    });

export const services = {
    add,
};
