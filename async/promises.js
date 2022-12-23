function hola(nombre){
	return new Promise(function (resolve, reject){
			setTimeout(function() {
				console.log('Hola ' + nombre);
				resolve(nombre);
			}, 2000);
	});
}

function hablar(nombre){
	return new Promise((resolve, reject) => {
		setTimeout(function(){
			console.log('bla bla bla');
            resolve(nombre);
            //reject("el error es: 404");
		}, 1000);
	});
}

function adios(nombre){
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log('adios ' + nombre);
			resolve();
		}, 1000);
	});
}


console.log('iniciando el proceso...');
hola('Carlos')
	//Then va a pasar automaticamente el valor que se pase en resolve
    //como argumento a la funcion que se esta llamando dentro de then()
	.then(hablar)
	.then(hablar)
	.then(hablar)
    // otra manera de manejar el valor retornado por resolve, en una
    // funcion anonima o arrow function
	.then((nombre) => {
		return adios(nombre);
	})
	.then((nombre) => {
		console.log('terminando el proceso.');
	})
	.catch(error => {
		console.error('hubo un error');
		console.error(error);
	});