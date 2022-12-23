
//ASINCRONIA BASICA
// function soyAsincrona(miCallback){
// 	setTimeout(function() {
// 		console.log('Estoy siendo asincrona');
// 		miCallback();
// 	}, 1000);
// }

// console.log('iniciando proceso');
// soyAsincrona(function() {
// 	console.log('terminando proceso');
// });

// CALLBACK SIMPLE
// function hola(nombre, miCallback){
// 	setTimeout(function() {
// 		console.log('Hola ' + nombre);
// 		miCallback();
// 	}, 1000);
// }

// console.log('iniciando proceso');
// hola('Carlos', function() {
// 	console.log('terminando proceso');
// });


// CALLBACK DOBLE
// function hola(nombre, miCallback){
// 	setTimeout(function() {
// 		console.log('Hola ' + nombre);
// 		miCallback();
// 	}, 1000);
// }

// function adios(nombre, otroCallback){
// 	setTimeout(function() {
// 		console.log('adios' + nombre);
// 		otroCallback();
// 	}, 1000);
// }

// console.log('iniciando proceso');
// hola('Carlos', function() {
// 	adios('Carlos', function() {
// 			console.log('terminando proceso');
// 	});
// });


// DESORDEN EN LAS EJECUCIONES
// function hola(nombre, miCallback){
// 	setTimeout(function() {
// 		console.log('Hola ' + nombre);
// 		miCallback();
// 	}, 2000);
// }

// function adios(nombre, otroCallback){
// 	setTimeout(function() {
// 		console.log('adios' + nombre);
// 		otroCallback();
// 	}, 1000);
// }

// console.log('iniciando proceso');
// hola('carlos', function(){});
// adios('carlos', function(){});


// UN PROCESO DESPUES DEL OTRO EN EL ORDEN QUE QUEREMOS
// PASANDO UNA VARIABLE ATRAVES DE CALLBACKS
function hola(nombre, miCallback){
	setTimeout(function() {
		console.log('Hola ' + nombre);
		miCallback(nombre);
	}, 2000);
}

function adios(nombre, otroCallback){
	setTimeout(function() {
		console.log('adios ' + nombre);
		otroCallback();
	}, 1000);
}

console.log('iniciando proceso');
hola('Carlos', function(nombre) {
	adios(nombre, function() {
		console.log('terminando proceso');
	});
});