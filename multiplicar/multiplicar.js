//Requires
const fs = require('fs');
var colors = require('colors');
// const fs = require('express');
// const fs = require('./fs');

let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('=================='.green);


    for (let i = 1; i <= limite; i++) {
        mult = base * i;
        console.log(`${base} * ${i} = ${mult}`);
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un número.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            mult = base * i;
            data += (`${base} * ${i} = ${mult}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(colors.green(`tabla-${base}-al-${limite}.txt`));
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}