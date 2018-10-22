const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log(`Mostrando la tabla del ${base}`.green);
    for (let i = 1; i <= limite; i++) console.log(`${base} * ${i} = ${base * i}`)
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {
            reject(`El valor: ${base} ó ${limite} no es un número :(`)
            return;
        }
        
        let data = '';

        for (let i = 1; i <= limite; i++) data += `${base} * ${i} = ${base * i}\n`;

        fs.writeFile(`tablas/tabla-multiplicar-${base}-con-limite-${limite}.txt`, data, (error) => {
            if (error) {
                reject(error)
            } else {
                resolve(`tabla-multiplicar-${base}-con-limite-${limite}.txt`)
            }
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
};