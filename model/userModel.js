const verify = (email, password) =>
    fetch(`https://alura-flix-fake-api.onrender.com/users?email=${email}&password=${password}`).then(response => response.json());

export const services = {
    verify,
};
