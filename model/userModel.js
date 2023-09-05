const verify = (email, password) =>
    fetch(`https://alura-geek-fake-api.vercel.app/users?email=${email}&password=${password}`).then(response => response.json());

export const services = {
    verify,
};
