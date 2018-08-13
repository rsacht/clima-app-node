const axios = require('axios');

const getLugarLatLng = async(direcao) => {


let encodeUrl = encodeURI(direcao);
     
let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

if(resp.data.status === 'ZERO_RESULTS'){
    throw new Error(`Não há resultados para a localidade ${direcao}`);
}

// .then(resp =>{

        let location = resp.data.results[0];
        let coors = location.geometry.location;

    //     console.log('Direcao: ', location.formatted_address);
    //     console.log('lat', coors.lat);
    //     console.log('lng', coors.lng);
    //     // console.log(JSON.stringify(resp.data, undefined, 2));
    //     // console.log(resp.status);
    // })
    // .catch(e => console.log('ERRO!!!', e));

    return {
        direcao:location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}