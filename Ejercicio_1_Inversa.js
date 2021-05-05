/*Ejercicio 1: Elabora un programa que lea un número y lo imprima de forma inversa*/
const readline = require('readline');

let interfazCaptura = readline.createInterface
(
    {
       input: process.stdin,
       output: process.stdout
    }
);

interfazCaptura.question('Digite un número: ', function(respuesta)
{
   let numero = Number(respuesta.toString().split('').reverse().join(''))
   console.log(`El número invertido es: ${numero}`);
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