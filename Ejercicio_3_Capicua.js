/*Ejercicio 3: Elaborar un programa que lea un número y determine si es capicúa*/
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
    var num_inver = numero.split("").reverse().join("");
    
    if (numero == num_inver) //Si el número es igual a su inverso.
    { 
       console.log("El número '"+numero+"' SI es capicua");
    }
    else //Si el número es diferente a su inverso.
    {
        console.log("El número '"+ numero +"' NO es capicua: '"+ num_inver +"'");
    }
    
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
