const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=01d4d26e8d69d38d21d887aafe8bb743`)
    return resp.data.main.temp;
}

module.exports ={
    getClima
}