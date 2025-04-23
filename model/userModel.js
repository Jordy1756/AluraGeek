const BASE_URL = "http://localhost:8080";
const USER_URL = `${BASE_URL}/users`;

const verify = (email, password) =>
    fetch(`${USER_URL}?email=${email}&password=${password}`).then((response) => response.json());

export const services = {
    verify,
};
