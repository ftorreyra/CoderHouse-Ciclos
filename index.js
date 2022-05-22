let cantidadSaludos = parseInt(prompt("Ingrese cuantos saludos quiere realizar:"));

for (let i = 0; i < cantidadSaludos; i++) {
    let persona = prompt("Ingrese a quien quiere saludar:");
    switch (persona) {
        case "Marta":
            console.log("Te tiene bloqueado, no podes saludarla.");
            break;
        case "Fernando":
            console.log("Le debes dinero, mejor que no te recuerde.");
            break;
        default:
            console.log(`Hola ${persona} espero que la estes pasando bien.`);
            break;
    }

    //Para no preguntar luego de la ultima carga si quiere seguir saludando.
    if (i !== cantidadSaludos - 1) {
        let continuar = confirm("¿Queres seguir saludando?");
        if (continuar === false) {
            i = cantidadSaludos + 1;
            console.log("Te cansaste de saludar.");
        }
    }
}

