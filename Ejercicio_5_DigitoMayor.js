/*Ejercicio 5: Elaborar un programa que lea un número y determine el mayor de los dígitos de este.*/
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
    let numero =  Number(respuesta.toString())
    function extraerDigitoMayor(numero) 
    {
        if(typeof numero === 'number' && Number.isInteger(numero)) 
        {
            let digitos = String(numero).split('').map(c => parseInt(c));
            let digitoMayor = digitos[0];
            digitos.forEach(d => digitoMayor = Math.max(digitoMayor, d));
    
            return digitoMayor;

        } 
        
        else 
        {
            throw TypeError('Debe ser un número entero.');
        }
    }
    
    try 
    {
        console.log(extraerDigitoMayor(numero)+" es el digito mayor");    
    } catch (e) 
    {
        console.log(`Error: ${e.message}`);
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

