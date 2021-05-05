/*Ejercicio 6: Elaborar un programa que lea un número y determine si este es primo.*/
const readline = require('readline');

let interfazCaptura = readline.createInterface
(
	{
      input: process.stdin,
      output: process.stdout
    }
);
 const esPrimo = numero => 
 {
	// Usando la fórmula para casos particulares
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) 
	{
		if (numero % x == 0) return false;
	}

	return true;
}

interfazCaptura.question('Digite un número: ', function(respuesta)
{
   let number= [respuesta];

   number.forEach(numero => 
   {
      console.log("¿%d es un número primo? %s", numero, esPrimo(numero));
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
