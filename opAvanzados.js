let alumnos = [{
    nombre: 'Rodrigo',
    apellido: 'Fernández Moreno',
    presente: 'si'
},
{
    nombre: 'Julian',
    apellido: 'Fernández',
    presente: 'si'
},
{
    nombre: 'Delfina',
    apellido: 'Moreno',
    presente: 'no'
},
{
    nombre: 'Gabriela',
    apellido: 'Moreno',
    presente: 'no',
},
{
    nombre: 'Facundo',
    apellido: 'Lerena',
    presente: 'si'
},
{
    nombre: 'Martin',
    apellido: 'Bruno',
    presente: 'si'
}];

/* ---------------------- IF TERNARIO EN COMBINACION DEL FOREACH PARA TOMAR LISTA DE ALUMNOS --------------------- */

/* alumnos.forEach((alumno => {
    (alumno.presente === 'si') ? alert(`El alumno/a ${alumno.nombre} ${alumno.apellido} está presente en el día de hoy.`) : alert(`El alumno/a ${alumno.nombre} ${alumno.apellido} se encuentra ausente el día de la fecha.`)
})) */

/* ---------------------- DESTRUCTURING --------------------- */

/* const numeros = [7,11,20,17,22,10];

const [pos1, ,pos3] = numeros;

alert(`Los numeros elegidos para realizar un destructuring son el ${pos1} y el ${pos3}`) */

/* ---------------------- SPREAD --------------------- */

/* const alumno = {
    nombre: 'Rodrigo',
    apellido: 'Fernandez Moreno',
}

const cursosAlumno = {
    ...alumno,
    curso: 'Javascript',
    turno: 'mañana',
    horario: '10 a 12'
}

console.log(cursosAlumno); */