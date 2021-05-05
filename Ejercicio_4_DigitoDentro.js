/*Ejercicio 4: Elaborar un programa que lea un número y un dígito y que determine si el dígito está dentro del número.*/
const { type } = require('os');
const readline = require('readline');
var y = 0;
let interfazCaptura = readline.createInterface
(
    {
       input: process.stdin,
       output: process.stdout,
    }
);

interfazCaptura.question('Digite un número: ', function(respuesta)
{
    let numero = respuesta;
    interfazCaptura.question('Escriba un dígito: ', function(digito)
    {
        let numero = digito;  
        console.log(`El dígito "${digito}" ${respuesta.includes(digito)? 'SI está' : 'NO está'} contenido en el número digitado.`);
        interfazCaptura.close();
    }
    );
}
);
/*
    ALLUSERSPROFILE=C:\ProgramData
    USERDOMAIN=DESKTOP-GR2VUCI
    USERDOMAIN_ROAMINGPROFILE=DESKTOP-GR2VUCI
    USERNAME=NathalyMartínez
    USERPROFILE=C:\Users\Nathaly Martínez
*/


