const verify = (email, password) =>
    fetch(`https://alurageekfakeapi-production.up.railway.app/users?email=${email}&password=${password}`).then(response => response.json());

export const services = {
    verify,
};
