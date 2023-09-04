const verify = (email, password) => fetch(`http://localhost:3000/users?email=${email}&password=${password}`).then(response => response.json());

export const services = {
    verify,
};
