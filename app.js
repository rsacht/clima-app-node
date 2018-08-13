//const axios = require('axios');
const lugar =  require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direcao:{
        alias:'d',
        desc: 'Direção da Cidade para obter o clima',
        demand: true
    }
}).argv;

let getInfo = async (direcao) => {
    try {
            let coors = await lugar.getLugarLatLng(direcao);
            let temp = await clima.getClima(coors.lat, coors.lng);
            return `O clima em ${coors.direcao} é de ${temp} graus`;
    } catch (error) {
        return `Não foi possível determinar o clima em ${direcao}`;
    }


    
}

getInfo(argv.direcao)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));
// lugar.getLugarLatLng(argv.direcao)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// clima.getClima(9.9280694, -84.0907246)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));
//console.log(argv.direcao);
//Execute o comando: node app -d "Madri Espanha"

