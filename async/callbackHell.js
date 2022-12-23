// function hola(nombre, miCallback){
// 	setTimeout(function() {
// 		console.log('Hola ' + nombre);
// 		miCallback(nombre);
// 	}, 2000);
// }

// function hablar(callbackHablar){
// 	setTimeout(function(){
// 		console.log('bla bla bla');
// 		callbackHablar();
// 	}, 1000);
// }

// function adios(nombre, otroCallback){
// 	setTimeout(function() {
// 		console.log('adios ' + nombre);
// 		otroCallback();
// 	}, 1000);
// }

// //--THIS IS THE CALLBACK HELL
// console.log('iniciando proceso');
// hola('Carlos', function(nombre) {
// 	hablar(function() {
// 		hablar(function() {
// 			hablar(function() {
// 				adios(nombre, function() {
// 					console.log('terminando proceso');
// 				});
// 			});
// 		});
// 	});
// });


//SOLUCIONANDO EL CALLBACK HELL
function hola(nombre, miCallback){
	setTimeout(function() {
		console.log('Hola ' + nombre);
		miCallback(nombre);
	}, 2000);
}

function hablar(callbackHablar){
	setTimeout(function(){
		console.log('bla bla bla');
		callbackHablar();
	}, 1000);
}

function adios(nombre, otroCallback){
	setTimeout(function() {
		console.log('adios ' + nombre);
		otroCallback();
	}, 1000);
}

//Se soluciona utilizando la recursividad para repetir N
//veces una funcion
function conversacion(nombre, veces, callback){
	if (veces > 0)	{
		hablar(function(){
				conversacion(nombre, --veces, callback);
			});
	} else {
			adios(nombre, callback);
	}
}

//--
console.log('iniciando proceso');
hola('Carlos', function(nombre) {
	conversacion(nombre, 3, function(){
		console.log('proceso terminado')
	});
});