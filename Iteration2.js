'use strict'

/*Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade 
la propiedad ***isApproved*** a true o false en consecuencia. 
Una vez lo tengas compruébalo con un ***console.log***.

Puedes usar este array para probar tu función:*/

const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Juan Miranda', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
]


alumns.forEach((alumno) => {
    if(alumno.T1 === true && (alumno.T2 === true || alumno.T3 === true)){
        alumno.isApproved = true;
    }else if ((alumno.T1 === true || alumno.T2 === true) && alumno.T3 === true){
        alumno.isApproved = true;
    }else{
        alumno.isApproved = false;
    }

})

console.log(alumns);

/************************/
alumns.forEach((alumno) => {
    if(alumno.T1 === true && (alumno.T2 === true || alumno.T3 === true)){
        console.log(`${alumno.name} is approved`);
    }else if ((alumno.T1 === true || alumno.T2 === true) && alumno.T3 === true){
        console.log(`${alumno.name} is approved`);
    }

})