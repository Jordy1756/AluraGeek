const verifyUser = id => fetch(`http://localhost:3000/users/${id}`).then(response => response.json());
