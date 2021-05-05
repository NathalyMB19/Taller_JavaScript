/*Ejercicio 2: Elaborar un programa que lea un número y determine la suma de sus dígitos*/
const { type } = require('os');
const readline = require('readline');
var y = 0;
let interfazCaptura = readline.createInterface
(
    {
       input: process.stdin,
       output: process.stdout
    }
);

interfazCaptura.question('Digite un número: ', function(respuesta)
{
   respuesta.split('').forEach(respuesta => y += parseInt(respuesta));
   console.log(`Su número digitado es: ${respuesta}`);
   console.log(`La suma de sus digitos es: ${y}`);
    interfazCaptura.close();
}
);
/*
    ALLUSERSPROFILE=C:\ProgramData
    USERDOMAIN=DESKTOP-GR2VUCI
    USERDOMAIN_ROAMINGPROFILE=DESKTOP-GR2VUCI
    USERNAME=NathalyMartínez
    USERPROFILE=C:\Users\Nathaly Martínez
*/