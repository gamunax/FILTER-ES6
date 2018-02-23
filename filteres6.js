
//array de estudiantes
//se aprueba a partir de 11 de nota
let estudiantes = [
	{ nombre: 'Maria', nota: 18 }, 
	{ nombre: 'Juan', nota: 10 }, 
	{ nombre: 'Diana', nota: 14 }, 
	{ nombre: 'Mariluz', nota: 05},
	{ nombre: 'Marcos', nota: 20 }
]

let aprobados = estudiantes.filter( estudiante => estudiante.nota > 10 );
console.log('Estudiantes aprobados', aprobados);