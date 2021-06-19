const axios = require('axios').default;

axios.get('http://localhost:3000/users')
    .then(function(response) {
        return response.data
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(error) {
        console.log(error);
    })

const getUserDetails = async() => {
    return axios.get('http://localhost:3000/users')
}

const userDetails = await getUserDetails();

async function getUser() {
    try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}